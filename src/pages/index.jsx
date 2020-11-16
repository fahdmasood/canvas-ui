import { css } from '@emotion/react';
import Head from 'next/head';

const Index = props => {
  const name = 'Untitled Canvas';
  const users = 1;
  const views = 102;
  const canvases = [
    { name, users, views },
    { name, users, views },
    { name, users, views },
    { name, users, views },
    { name, users, views },
    { name, users, views },
    { name, users, views },
    { name, users, views },
    { name, users, views },
    { name, users, views },
    { name, users, views },
    { name, users, views },
    { name, users, views },
    { name, users, views },
    { name, users, views },
  ];
  return (
    <>
      <Head>
        <title>Canvas.IO - Home</title>
      </Head>
      <main id='index'>
        <section
          css={css`
            position: relative;
            top: 5rem;
            width: 50vw;
            height: 50px;
            margin: auto;
            display: grid;
            grid-template-columns: 1fr auto;
            overflow: hidden;
            border-radius: 5px;
          `}>
          <input
            css={css`
              border: none;
              padding: 0 1rem;
              color: #222222;
              box-shadow: inset 0 1px #dedede, inset 0 -1px #dedede,
                inset 1px 0 #dedede, inset -1px 0 #dedede;
              border-radius: 5px 0 0 5px;
            `}
            type='text'
          />
          <button
            css={css`
              width: 150px;
              display: block;
              border: none;
              background-color: #1a8fe3;
              color: #fefefe;

              &:hover {
                filter: brightness(95%);
                cursor: pointer;
              }
            `}>
            Search
          </button>
        </section>
        <section
          css={css`
            position: relative;
            top: 7.5rem;
            width: 50vw;
            margin: auto;
            max-height: calc(100vh - 5rem - 5rem - 5.7rem);
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 0.5rem;
          `}>
          {canvases.map((canvas, index) => (
            <div
              key={index}
              css={css`
                height: 200px;
                background-color: #fefefe;
                border: 1px solid #dedede;
                border-radius: 5px;
                background: url('https://picsum.photos/900/300?grayscale');
                display: grid;
                grid-template-columns: 1fr 1fr;
                overflow: hidden;

                &:hover {
                  filter: brightness(95%);
                  cursor: pointer;
                }
              `}>
              <section></section>
              <section
                css={css`
                  background-color: #fefefe;
                  border-left: 1px solid #222222;
                  color: #333333;
                  padding: 1rem;
                `}>
                <div
                  css={css`
                    font-size: 1.5rem;
                  `}>
                  {canvas.name}
                </div>
                <div
                  css={css`
                    color: #4a8f62;
                    margin-top: 0.5rem;
                  `}>
                  {canvas.users} {canvas.users === 1 ? 'user' : 'users'}
                </div>
                <div
                  css={css`
                    color: #da304c;
                    margin-top: 0.5rem;
                  `}>
                  {canvas.views} {canvas.views === 1 ? 'view' : 'views'}
                </div>
              </section>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default Index;
