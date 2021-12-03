import React from 'react';

export interface Props {}

export const MapInfos: React.FunctionComponent<Props> = () => {
  return (
    <div className="infos" style={{ position: 'relative' }}>
      <span>INFOS</span>

      <div style={{ margin: 18 }}>
        <div className="border-solid" style={{ padding: 5 }}>
          <div style={{ display: 'flex' }}>
            <div className="info-item" style={{ background: 'white', borderStyle: 'solid' }}></div>
            <span>Player</span>
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
            <div className="info-item" style={{ background: 'red' }}></div>
            <span>Exit</span>
          </div>
        </div>
        
        <div className="border-solid" style={{ marginTop: 30, padding: 5 }}>
          <div style={{ display: 'flex' }}>
            <div className="info-item" style={{ background: 'gray' }}>
              1
            </div>
            <span>1 Event</span>
          </div>
          <div style={{ display: 'flex' }}>
            <div className="info-item" style={{ background: 'gray' }}>
              2
            </div>
            <span>2 Events</span>
          </div>
          <div style={{ display: 'flex' }}>
            <div className="info-item" style={{ background: 'gray' }}>
              3
            </div>
            <span>3 Events</span>
          </div>
          <div style={{ display: 'flex' }}>
            <div className="info-item" style={{ background: 'gray' }}>
              4
            </div>
            <span>4 Events</span>
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 0, marginBottom: 10 }}>
        Hover the square to display events.
       </div>
    </div>
  );
};
