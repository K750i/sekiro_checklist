import React from 'react';
import Jumbo from './Jumbo';

function Main({areaList, areaSection, completionStatus}) {
  return (
    <>
      <Jumbo areaList={areaList} status={completionStatus} />
      <main>{areaSection}</main>
    </>
  );
}

export default Main;
