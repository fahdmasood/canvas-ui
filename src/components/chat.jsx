import { css } from '@emotion/react';
import { useState } from 'react';

const Chat = () => {
  let [showChat, setShowChat] = useState(false);
  return (
    <div
      css={css`
        position: absolute;
        bottom: ${showChat ? '0.5rem' : 'calc(-40rem + 49px)'};
        right: 0.5rem;
        height: 40rem;
        width: 25rem;
        background-color: #fefefe;
        border: 1px solid #dedede;
        border-radius: 5px;
        overflow: hidden;
        display: grid;
        grid-template-rows: auto 1fr auto;
        transition: bottom 200ms ease-in-out;
      `}>
      <section
        onClick={() => setShowChat(!showChat)}
        css={css`
          height: 50px;
          line-height: 50px;
          padding: 0 0.5rem;
          background-color: #000000;
          color: #ffffff;
          font-weight: 700;
          transition: background-color 200ms ease-in-out;

          &:hover {
            background-color: #2c7cb0;
            cursor: pointer;
          }
        `}>
        Party Chat
      </section>
      <section></section>
      <section
        css={css`
          display: grid;
          grid-template-columns: 1fr auto;
          height: 50px;
        `}>
        <input
          css={css`
            border: none;
            background-color: #dedede;
            color: #333333;
            padding: 0 0.5rem;
          `}
          placeholder='Type your messages here...'
          type='text'></input>
        <button
          css={css`
            width: 100px;
            height: 50px;
            border: none;
            background-color: #46a46c;
            color: #ffffff;

            &:hover {
              filter: brightness(95%);
              cursor: pointer;
            }
          `}>
          Send
        </button>
      </section>
    </div>
  );
};

export default Chat;
