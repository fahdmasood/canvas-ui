import { css } from '@emotion/react';
import Head from 'next/head';

import { createPortal } from 'react-dom';

const IFrame = ({ children, ...props }) => {
  const [contentRef, setContentRef] = useState(null);
  const mountNode = contentRef?.contentWindow?.document?.body;

  return (
    <iframe {...props} ref={setContentRef}>
      {mountNode && createPortal(children, mountNode)}
    </iframe>
  );
};

const Drawing = props => {
  return (
    <>
      <Head>
        <title>Canvas.IO - Drawing</title>
      </Head>
      <main id='drawing'>
        <iframe
          css={css`
            width: 50vw;
            height: 80vh;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border: none;
            border-radius: 5px;
          `}
          src='http://24.59.152.39:3000/#/Drawing'
        />
      </main>
    </>
  );
};

export default Drawing;
