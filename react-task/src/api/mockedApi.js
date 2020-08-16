import { mockedResponse } from './mockedResponse';

export const apiCall = () => new Promise((res) => {
  setTimeout(() => res(mockedResponse), 3000);
});
