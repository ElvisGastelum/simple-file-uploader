import React from 'react';
import CodeSnipet from 'components/CodeSnipet';

import code from './code';

const AboutSnipet = () => {
  return (
    <figure>
      <figcaption>elvis-gastelum.json</figcaption>
      <CodeSnipet language={'json'}>{code}</CodeSnipet>
    </figure>
  );
};

export default AboutSnipet;
