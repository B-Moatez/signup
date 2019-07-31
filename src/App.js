import React from 'react';
import Test from './compontent/objects/test';

import './App.css';

// import Simple from './compontent/signup';
// import Signin from './compontent/signin';
import Connection from './compontent/connexion';
import Formation from './compontent/formation';
// import Secteur from './compontent/secteur';
  import Slideshow from './compontent/slider/slider'
//  import Gestion from './compontent/gestion';

function App() {
  return (
    <div className="App">
     {/* <Simple />
     <Signin /> */}
      {/* <Connection /> 
     <Formation />
     <Secteur /> */}
     {/* <Gestion /> */}
      <Test /> 
       <Slideshow />   

     
     
    </div>
  );
}

export default App;
