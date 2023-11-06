import { promisify } from 'util';

export const timesTwoCallback = (input: number, cb: (err: any, res: number) => void) => {
  setTimeout(() => {
    cb(null, input * 2);
  }, 500 + Math.random() * 1000);
};

export const timesTwoPromise = promisify(timesTwoCallback);
