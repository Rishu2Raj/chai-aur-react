import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Chai from './Chai.jsx';

function MyApp(){
  return (
    <h3>function executed</h3>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://www.google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const reactElement = React.createElement(
  'a',
  {href: 'https://www.google.com', target:'_blank'},
  'click me to visit google'
)

const anotherElement = (
  <a href="https://www.google.com" target = '_blank'>click me to visit google</a>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  {reactElement}
  <App />
  </div>
);
