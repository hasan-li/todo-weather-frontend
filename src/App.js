import React, { useEffect, useState } from 'react';

import WeatherSidebar from 'src/components/WeatherSidebar';
import Todos from 'src/components/Todos';

import './App.scss';

const App = () => 
  <div className="App">
    <WeatherSidebar />
    <Todos />
  </div>;

export default App;
