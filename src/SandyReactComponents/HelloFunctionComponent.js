import React from 'react';
//create component using  function or class..
//Here , we are using functions
function Hello() {
    return (
        <div>Hello Functional Component</div>
    );
}

export default Hello;


/*
index.js, uses render method to use Hello component as funtional way...

ReactDOM.render(
  <React.StrictMode><Hello/></React.StrictMode>,
  document.getElementById('root')
);
 */
