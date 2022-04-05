import { useState } from 'react';
import Hangul from 'hangul-js';
import {
  concatMap,
  map,
  mergeAll,
  from,
  delay as delayFn,
  of,
  Subscription,
} from 'rxjs';

const useWrite = () => {
  const [textState, setTextState] = useState<string>('');
  const [isWrittenComplete, setIsWrittenComplete] = useState<boolean>(false);
  let sub: Subscription;
  const writeText = (doc: string, delay: number) => () => {
    const observable = from(doc);
    sub = observable
      .pipe(
        map((char, i) => {
          const dis = Hangul.disassemble(char);
          return from(dis).pipe(
            map((_, j) => [i, Hangul.assemble(dis.slice(0, j + 1))]),
          );
        }),
        mergeAll(),
        concatMap(x => of(x).pipe(delayFn(delay))),
      )
      .subscribe(middleChar => {
        setTextState(
          state => state.slice(0, middleChar[0] as number) + middleChar[1],
        );
      });
  };

  const reset = () => {
    sub?.unsubscribe();
    setTextState('');
    setIsWrittenComplete(false);
  };

  return {
    textState,
    isWrittenComplete,
    writeText,
    reset,
  };
};

export default useWrite;
