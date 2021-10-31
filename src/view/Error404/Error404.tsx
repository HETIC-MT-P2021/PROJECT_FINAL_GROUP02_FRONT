import React from 'react';

export interface Props {}

export const Error404: React.FunctionComponent<Props> = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: 20 }}>
      <div>Oops... this page doesn&apos;t exist!</div>
      <div>Please check your dungeon id!</div>
    </div>
  );
};
