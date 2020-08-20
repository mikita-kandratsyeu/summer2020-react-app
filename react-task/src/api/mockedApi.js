import { mockedResponse } from './mockedResponse';

export const apiCall = () => new Promise((res, rej) => {
  setTimeout(() => {
    if (mockedResponse.length) {
      res(mockedResponse);
    }
    rej(new Error('We can\'t process your last request'));
  }, 3000);
});
