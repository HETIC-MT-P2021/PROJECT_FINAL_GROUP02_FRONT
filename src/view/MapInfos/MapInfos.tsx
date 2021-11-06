import React from 'react';

export interface Props {}

export const MapInfos: React.FunctionComponent<Props> = () => {
  return (
    <div className="infos">
      <span>INFOS</span>

      <div style={{ margin: 20 }}>
        <div style={{ display: 'flex' }}>
          <div className="info-item" style={{ background: 'red' }}></div>
          <span>Exit</span>
        </div>
        <div style={{ display: 'flex' }}>
          <div className="info-item" style={{ background: 'black' }}></div>
          <span>Innacessible</span>
        </div>
        <div style={{ display: 'flex' }}>
          <div className="info-item" style={{ background: 'gray' }}>
            ?
          </div>
          <span>Not discovered</span>
        </div>
        <div style={{ display: 'flex' }}>
          <div className="info-item" style={{ background: 'white', borderStyle: 'solid' }}></div>
          <span>Player</span>
        </div>
      </div>
    </div>
  );
};
