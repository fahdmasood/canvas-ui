import { css } from '@emotion/react';
import Head from 'next/head';

const Party = props => {
  const name = 'username';
  const views = 420;
  const canvases = [
    { name, views },
    { name, views },
    { name, views },
    { name, views },
    { name, views },
    { name, views },
    { name, views },
  ];
  return (
    <>
      <Head>
        <title>Canvas.IO - Party</title>
      </Head>
      <main id='party'>
        <section>
          <h2
            css={css`
              width: 50vw;
              margin: auto;
              margin-top: 5rem;
            `}>
            Party Name
          </h2>
        </section>
        <section
          css={css`
            width: 50vw;
            margin: auto;
            margin-top: 1rem;
            display: grid;
            grid-template-columns: auto auto;
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

export default Party;
