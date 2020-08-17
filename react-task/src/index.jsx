import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './containers/App';

import './index.scss';

const store = {
  user: {
    firstName: 'Tony',
    lastName: 'Stark',
  },

  avatar: {
    image: 'https://i.ebayimg.com/images/g/C24AAOSw-xhdPnvQ/s-l1600.jpg',
    alt: 'fallback title',
  },
};

ReactDOM.render(<App userData={store} />, document.querySelector('#root'));
