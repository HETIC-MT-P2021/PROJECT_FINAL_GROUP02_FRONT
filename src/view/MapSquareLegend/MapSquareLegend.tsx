import React, { useState } from 'react';

export interface Props {}

export const MapSquareLegend: React.FunctionComponent<Props> = () => {
  const [hover, setHover] = useState({ display: 'none' });

  const onHover = () => {
    setHover({ display: 'block' });
  };
  const onLeave = () => {
    setHover({ display: 'none' });
  };

  return (
    <div className="square-legend" onMouseEnter={onHover} onMouseLeave={onLeave}>
      <div style={hover} className="square-legend-content">
        This is map square legend
      </div>
    </div>
  );
};
