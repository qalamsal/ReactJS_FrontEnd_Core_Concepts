import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Hello from "./SandyReactComponents/HelloFunctionComponent";
import Hi from "./SandyReactComponents/HiClassComponent";
import State from "./SandyReactComponents/StateComponent";
import Prop from "./SandyReactComponents/PropsComponent";
import ArrayComponent from "./SandyReactComponents/ArrayComponent";

ReactDOM.render(
  <React.StrictMode><Hello/></React.StrictMode>,
  document.getElementById('root')
);


ReactDOM.render(
    <Hi/>, document.getElementById('id1')
);

ReactDOM.render(
    <State/>, document.getElementById('id2')
);

ReactDOM.render(
    <Prop name={"Sandy"}/>, document.getElementById('id3')
);

ReactDOM.render(
    <ArrayComponent/>, document.getElementById('id4')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
