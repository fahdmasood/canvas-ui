import { css } from '@emotion/react';
import Link from 'next/link';

const Navigation = props => {
  return (
    <nav>
      <section
        css={css`
          min-width: fit-content;
          white-space: nowrap;
          font-weight: 700;
        `}></section>
      <section />
      <section
        css={css`
          display: grid;
          grid-template-columns: auto auto auto;
          gap: 1.6rem;
        `}>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/'>
          <a>Projects</a>
        </Link>
        <Link href='/'>
          <a>About</a>
        </Link>
      </section>
      <section></section>
    </nav>
  );
};

export default Navigation;
