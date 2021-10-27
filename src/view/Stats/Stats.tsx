import React from 'react';

export interface Props {}

export const Stats: React.FunctionComponent<Props> = () => {
  return (
    <div className="stats">
      <div>STATS</div>
      <div className="stats-content" style={{ margin: 20, marginTop: 30 }}>
        <div className="characters">
          <div className="border-solid" style={{ borderBottomWidth: 0 }}>
            PSEUDO
            <div style={{ display: 'flex', alignItems: 'center', padding: 5 }}>
              <div className="progress-bar"></div> 100%
            </div>
          </div>
          <div className="border-solid" style={{ padding: 15 }}>
            <div className="display-flex">
              <span>Toughness</span>
              <span>15</span>
            </div>
            <div className="display-flex">
              <span>Toughness</span>
              <span>15</span>
            </div>
            <div className="display-flex">
              <span>Toughness</span>
              <span>15</span>
            </div>
            <div className="display-flex">
              <span>Toughness</span>
              <span>15</span>
            </div>
          </div>
        </div>
        <div className="stats-damages border-solid">
          <div className="display-flex">
            <span>Toughness</span>
            <span>15</span>
          </div>
          <div className="display-flex">
            <span>Toughness</span>
            <span>15</span>
          </div>
          <div className="display-flex">
            <span>Toughness</span>
            <span>15</span>
          </div>
          <div className="display-flex">
            <span>Toughness</span>
            <span>15</span>
          </div>
        </div>
      </div>
    </div>
  );
};
