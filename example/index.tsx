import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AbBotao from '../src/components/AbBotao';

const App = () => {
  return (
    <div>
      <AbBotao />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
