import React from 'react';

export interface Props {}

export const Infos: React.FunctionComponent<Props> = () => {
  return (
    <div className="infos">
      <div>INFOS</div>

      <div style={{ margin: 10, marginTop: 30 }}>
        <div style={{ display: 'flex' }}>
          <div className="info-item" style={{ background: 'red' }}></div>
          <div>Exit</div>
        </div>
        <div style={{ display: 'flex' }}>
          <div className="info-item" style={{ background: 'black' }}></div>
          <div>Innacessible</div>
        </div>
        <div style={{ display: 'flex' }}>
          <div className="info-item" style={{ background: 'gray' }}>
            ?
          </div>
          <div>Not discovered</div>
        </div>
        <div style={{ display: 'flex' }}>
          <div className="info-item" style={{ background: 'white', borderStyle: 'solid' }}></div>
          <div>Player</div>
        </div>
      </div>
    </div>
  );
};
