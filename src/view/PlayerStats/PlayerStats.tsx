import React from 'react';
import { Player } from '../MapComponent/interfaceMap';

export interface StatsProps {
  player: Player;
}

export const PlayerStats: React.FunctionComponent<StatsProps> = ({ player }) => {
  // Calculate hitPoints for current player
  function playerHitPoints() {
    const hitPointsPercent = Math.round((player.Hitpoints * 100) / player.HitpointsMax);
    return hitPointsPercent;
  }

  return (
    <div className="stats">
      <span>STATS</span>

      <div className="stats-content" style={{ margin: 20 }}>
        <div className="characters">
          <div className="border-solid" style={{ borderBottomWidth: 0 }}>
            {player.Name}
            <div className="progress-bar-container">
              <div className="progress-bar">
                <div style={{ backgroundColor: playerHitPoints() < 50 ? 'red' : 'green', width: `${playerHitPoints()}%` }}>
                  <span>{playerHitPoints()}%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-solid" style={{ padding: 15, fontSize: 12 }}>
            <div className="display-flex">
              <span>Agility</span>
              <span style={{ paddingLeft: 10 }}>
                {player.Agility} - {player.AgilityMax}
              </span>
            </div>
            <div className="display-flex">
              <span>Endurance</span>
              <span style={{ paddingLeft: 10 }}>
                {player.Endurance} - {player.Endurance}
              </span>
            </div>
            <div className="display-flex">
              <span>Hitpoints</span>
              <span style={{ paddingLeft: 10 }}>
                {player.Hitpoints} - {player.HitpointsMax}
              </span>
            </div>
            <div className="display-flex">
              <span>Precision</span>
              <span style={{ paddingLeft: 10 }}>
                {player.Precision} - {player.PrecisionMax}
              </span>
            </div>
            <div className="display-flex">
              <span>Strength</span>
              <span style={{ paddingLeft: 10 }}>
                {player.Strength} - {player.StrengthMax}
              </span>
            </div>
          </div>
        </div>
        <div className="stats-damages border-solid" style={{ fontSize: 12 }}>
          <div className="display-flex">
            <span>Damage</span>
            <span style={{ paddingLeft: 10 }}>15</span>
          </div>
          <div className="display-flex">
            <span>Dodge chance</span>
            <span style={{ paddingLeft: 10 }}>15</span>
          </div>
          <div className="display-flex">
            <span>Hit chance</span>
            <span style={{ paddingLeft: 10 }}>15</span>
          </div>
        </div>
      </div>
    </div>
  );
};
