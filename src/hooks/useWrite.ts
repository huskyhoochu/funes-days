import { useState } from 'react';
import Hangul from 'hangul-js';

const useWrite = () => {
  const [textState, setTextState] = useState<string>('');
  const [isWrittenComplete, setIsWrittenComplete] = useState<boolean>(false);

  const writeText = (doc: string, delay: number) => () => {
    const timer = (ms: number) => new Promise(res => setTimeout(res, ms));
    const delayAddText = async () => {
      for (let i = 0; i < doc.length; i++) {
        const dis = Hangul.disassemble(doc[i]);

        for (let j = 0; j < dis.length; j++) {
          const middleChar = Hangul.assemble(dis.slice(0, j + 1));
          setTextState(state => state.slice(0, i) + middleChar);
          await timer(delay);
        }
      }
    };

    delayAddText()
      .then(() => timer(delay))
      .then(() => setIsWrittenComplete(true));
  };

  const reset = () => {
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
