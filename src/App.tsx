import React from 'react';
import MapComponent from './view/MapComponent';

export interface Props {}

export const App: React.FunctionComponent<Props> = () => {
  return (
    <div className="App">
      {/* Game Map */}
      <MapComponent></MapComponent>
    </div>
  );
};

export default App;
