import React, { useState } from 'react';
import { ClassComponent } from '../../components';

const ClassComponents = () => {
  const [disable, setDisable] = useState(false);
  return (
    <>
      {disable ? (<ClassComponent value={10} />) : null}
      <h1> Hello World</h1>
      <button type="button" onClick={() => setDisable(!disable)}>
        {disable ? 'Counter Hide' : 'Counter Display'}
      </button>
    </>
  );
};

export default ClassComponents;
