import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const nickname = 'CitizenDiop';

function formatName(user) {
  return `${user.firstName} ${user.lastName}`;
}

const user = {
  firstName: 'Malick',
  lastName: 'DIOP',
};

//  render a React element into a root DOM node
ReactDOM.render(
  <App name={formatName(user)} nickname={nickname} />,
  document.getElementById('root'),
);
registerServiceWorker();
