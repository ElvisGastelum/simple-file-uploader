import React from 'react';
import CodeSnipet from 'components/CodeSnipet';

import commandLineCode from './commandLineCode';

const HomeSnipet = () => {
  return (
    <figure>
      <figcaption>Command Line</figcaption>
      <CodeSnipet
        data-user="elvis"
        data-host="unix"
        data-output="2,4-100"
        language={'shell'}
        className="command-line"
      >
        {commandLineCode}
      </CodeSnipet>
    </figure>
  );
};

export default HomeSnipet;
