import React, { useEffect } from 'react';
import Prism from 'prismjs';

// import '@/util/prism/prism';
// import '@/util/prism/prism-default.css';

const CodeSnipet = ({ language, className, children, ...props }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  let langClassName = language ? `language-${language}` : '';

  return (
    <pre className={`${className} ${langClassName}`} {...props}>
      <code>{children}</code>
    </pre>
  );
};

export default CodeSnipet;
