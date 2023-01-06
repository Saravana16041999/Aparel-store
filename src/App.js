import './App.css';

import JacketStore from './components/JacketStore';

import {product} from './data'

function App() {
  return (
     <main>
      <h1 className='title1'>Aparel Store </h1>
      <JacketStore product = {product}/>
     </main>
  );
}

export default App;
