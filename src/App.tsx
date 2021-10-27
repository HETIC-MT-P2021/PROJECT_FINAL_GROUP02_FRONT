import React from 'react';
import Map from './view/Map';

export interface Props {}

export const App: React.FunctionComponent<Props> = () => {
  return (
    <div className="App">
      {/* Game Map */}
      <Map></Map>
    </div>
  );
};

export default App;
