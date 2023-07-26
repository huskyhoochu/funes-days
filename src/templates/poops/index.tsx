import React, { useEffect, useRef } from 'react';
import Matter, {
  World,
  Engine,
  Render,
  Bodies,
  Events,
  Mouse,
  MouseConstraint,
  Runner,
} from 'matter-js';
import { useAtom } from 'jotai';
import { scoreAtom } from './play.atom';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Poop from './poop.webp';

const Playground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const totalScore = useRef<number>(0);
  const bestScore = useRef<number>(0);
  const [score, setScore] = useAtom(scoreAtom);

  useEffect(() => {
    const engine = Engine.create();
    const render = Render.create({
      engine,
      canvas: canvasRef.current!,
      options: {
        width: 300,
        height: 400,
        background: 'indigo',
        wireframes: false,
      },
    });

    const floor = Bodies.rectangle(160, 400, 400, 10, {
      isStatic: true,
      collisionFilter: {
        group: -1,
      },
      render: {
        fillStyle: 'blue',
      },
    });

    const user = Bodies.circle(160, 380, 30, {
      label: 'user',
      render: {
        fillStyle: 'green',
      },
    });

    const infiniteArr = Array.from({ length: 15000 }).map(_ => {
      return Bodies.circle(Math.random() * 300, 0, 10, {
        label: 'ball',
        restitution: 0.9,
        collisionFilter: {
          group: -1,
        },
        render: {
          sprite: {
            texture: Poop,
            xScale: 0.05,
            yScale: 0.05,
          },
          fillStyle: 'yellow',
        },
      });
    });

    Events.on(engine, 'collisionStart', async function (event) {
      const isUserDead = event.pairs.some(
        ev =>
          (ev.bodyA.label === 'user' && ev.bodyB.label === 'ball') ||
          (ev.bodyA.label === 'ball' && ev.bodyB.label === 'user'),
      );

      if (isUserDead) {
        user.render.fillStyle = 'red';
        if (bestScore.current < totalScore.current) {
          bestScore.current = totalScore.current;
        }

        totalScore.current = 0;
        await wait(1_000);
        user.render.fillStyle = 'green';
      }
    });

    World.add(engine.world, [floor, user]);
    const runner = Runner.run(engine);

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
    });

    const wait = (ms: number) =>
      new Promise<void>(resolve => {
        const timeout = setTimeout(() => {
          clearTimeout(timeout);
          resolve();
        }, ms);
      });

    const compositeArr: Matter.Body[] = [];

    const spreadBall = async (ball: Matter.Body) => {
      compositeArr.push(ball);
      World.add(engine.world, compositeArr);
      await wait(200);
      compositeArr.pop();
      World.remove(engine.world, compositeArr);
    };

    const event = async () => {
      World.add(engine.world, mouseConstraint);
      Render.run(render);

      for (const ball of infiniteArr) {
        await spreadBall(ball);
        totalScore.current = totalScore.current + 1;
        setScore(totalScore.current);
      }
    };

    event();

    return () => {
      Runner.stop(runner);
      Render.stop(render);
    };
  }, [setScore]);

  return (
    <div className="space-y-[1rem]">
      <p className="text-xl font-bold text-center">[똥 피하기 게임]</p>
      <p className="text-xl font-bold text-center">
        마우스나 터치로 초록색 공을 움직여주세요!
      </p>
      <button
        className="block rounded-lg bg-white text-indigo-500 font-bold p-[0.5rem] mx-auto"
        onClick={() => window.location.reload()}
      >
        잘 안되면 새로고침
      </button>
      <div
        className="relative"
        style={{
          width: 300,
          height: 400,
          marginInline: 'auto',
        }}
      >
        <div className="absolute top-0 left-0 p-[1rem] m-[1rem] rounded-lg shadow w-[4rem] h-[10rem] bg-white/30 flex flex-col items-center justify-center">
          <p className="text-2xl font-bold">
            <span className="text-xs">Score</span> {score}
          </p>
          <p className="text-2xl font-bold">
            <span className="text-xs">Best</span> {bestScore.current}
          </p>
        </div>
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
};

export default Playground;
