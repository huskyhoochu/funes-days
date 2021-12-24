const scrollTo = ({
  currentY,
  targetY,
  duration,
}: {
  currentY: number;
  targetY: number;
  duration: number;
}) => {
  let start = 0;
  let req: number;

  return new Promise(resolve => {
    const step: FrameRequestCallback = timestamp => {
      if (start === 0) {
        start = timestamp;
      }

      const elapsed = timestamp - start;
      const progress = 1 - Math.pow(1 - elapsed / duration, 3);
      const growingProgress = Math.floor(
        targetY * progress + currentY * (1 - progress),
      );

      window.scrollTo({
        top: growingProgress,
      });

      if (elapsed < duration) {
        req = window.requestAnimationFrame(step);
      } else {
        window.cancelAnimationFrame(req);
        resolve(true);
      }
    };

    req = window.requestAnimationFrame(step);
  });
};

export default scrollTo;
