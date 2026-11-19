import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { HelloWorld } from './HelloWorldApp';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelloWorld 
      user={ {name: 'Luke', lastname: 'Skywalker'  } } 
      id={ 1 }
      title = 'REACT' 
      book = 'Java Deitel & Deitel'
    />
  </React.StrictMode >
);
