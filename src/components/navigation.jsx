import { css } from '@emotion/react';
import Link from 'next/link';
import { useState } from 'react';

const buttonStyle = css`
  height: 30px;
  width: 100px;
  margin-top: calc((5rem - 30px) / 2);
  line-height: 30px;
  background-color: #000000;
  font-size: 0.8rem;
  color: #ffffff;
  text-align: center;
  border-radius: 5px;
  transition: background-color 200ms ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #1a8fe3;
  }
`;

const formPickerStyle = css`
  height: 3rem;
  line-height: 3rem;
  padding-left: 1rem;
  background-color: #fefefe;
  transition: font-weight 200ms ease-in-out, background-color 200ms ease-in-out;

  &:hover {
    font-weight: 700;
    cursor: pointer;
    filter: brightness(95%);
  }
`;

const Navigation = props => {
  let [activeTab, setActiveTab] = useState('home');
  let [showAccount, setShowAccount] = useState(false);
  let [formType, setFormType] = useState('login');

  return (
    <nav>
      <section
        css={css`
          min-width: fit-content;
          white-space: nowrap;
          font-weight: 700;
          user-select: none;
          transition: color 200ms ease-in-out;

          &:hover {
            cursor: pointer;
            color: #1a8fe3;
          }
        `}
        onClick={() => setShowAccount(!showAccount)}>
        Account
      </section>
      <section
        css={css`
          display: grid;
          grid-template-columns: auto auto;
          gap: 1rem;
        `}>
        <div css={buttonStyle}>New Party</div>
        <div css={buttonStyle}>New Canvas</div>
      </section>
      <section />
      <section
        css={css`
          display: grid;
          grid-template-columns: auto auto auto auto auto;
          gap: 1.6rem;
        `}>
        <Link href='/'>
          <a
            css={css`
              color: ${activeTab === 'home' ? '#1a8fe3' : '#666666'};
            `}
            onClick={() => setActiveTab('home')}>
            Home
          </a>
        </Link>
        <Link href='/discover'>
          <a
            css={css`
              color: ${activeTab === 'discover' ? '#1a8fe3' : '#666666'};
            `}
            onClick={() => setActiveTab('discover')}>
            Discover
          </a>
        </Link>
        <Link href='/dashboard'>
          <a
            css={css`
              color: ${activeTab === 'dashboard' ? '#1a8fe3' : '#666666'};
            `}
            onClick={() => setActiveTab('dashboard')}>
            Dashboard
          </a>
        </Link>
        <Link href='/party'>
          <a
            css={css`
              color: ${activeTab === 'party' ? '#1a8fe3' : '#666666'};
            `}
            onClick={() => setActiveTab('party')}>
            Party
          </a>
        </Link>
        <Link href='/drawing'>
          <a
            css={css`
              color: ${activeTab === 'drawing' ? '#1a8fe3' : '#666666'};
            `}
            onClick={() => setActiveTab('drawing')}>
            Drawing
          </a>
        </Link>
      </section>
      <div
        css={css`
          position: absolute;
          top: 5.5rem;
          left: ${showAccount ? '0.5rem' : '-20.5rem'};
          background-color: #fefefe;
          color: #666666;
          border-radius: 5px;
          overflow: hidden;
          height: fit-content;
          width: 20rem;
          transition: left 0.2s ease-in-out, height 0.2s ease-in-out;
          z-index: 10;
          border: 1px solid #dedede;
        `}
        id='account_settings'>
        <section
          css={css`
            height: 3rem;
            display: grid;
            grid-template-columns: 1fr 1fr;
          `}>
          <div
            css={formPickerStyle}
            style={{
              backgroundColor: formType === 'login' ? '#fefefe' : '#dedede',
              fontWeight: formType === 'login' ? '700' : '400',
            }}
            onClick={() => setFormType('login')}>
            Sign In
          </div>
          <div
            css={formPickerStyle}
            style={{
              backgroundColor: formType === 'register' ? '#fefefe' : '#dedede',
              fontWeight: formType === 'register' ? '700' : '400',
            }}
            onClick={() => setFormType('register')}>
            Sign Up
          </div>
        </section>
        <section
          css={css`
            padding: 0 1rem 0 1rem;
            display: ${formType === 'login' ? 'block' : 'none'};
          `}>
          <div
            css={css`
              display: grid;
            `}>
            <div
              css={css`
                font-size: 0.8rem;
                height: 2rem;
                line-height: 2rem;
              `}>
              username
            </div>
            <input
              css={css`
                padding: 0.5rem;
                border-radius: 5px;
                border: none;
                background-color: #ededed;
                color: #333333;
              `}
              type='text'></input>
          </div>
          <div
            css={css`
              display: grid;
            `}>
            <div
              css={css`
                font-size: 0.8rem;
                height: 2rem;
                line-height: 2rem;
              `}>
              password
            </div>
            <input
              css={css`
                padding: 0.5rem;
                border-radius: 5px;
                border: none;
                background-color: #ededed;
                color: #333333;
              `}
              type='password'></input>
          </div>
          <div>
            <button
              css={css`
                height: 30px;
                width: 100px;
                border: none;
                background-color: #4a8f62;
                color: #ffffff;
                font-size: 0.8rem;
                border-radius: 5px;
                transition: filter 200ms ease-in-out;

                &:hover {
                  filter: brightness(90%);
                  cursor: pointer;
                }
              `}>
              Sign In
            </button>
          </div>
        </section>
        <section
          css={css`
            padding: 0 1rem 0 1rem;
            display: ${formType === 'register' ? 'block' : 'none'};
          `}>
          <div
            css={css`
              display: grid;
            `}>
            <div
              css={css`
                font-size: 0.8rem;
                height: 2rem;
                line-height: 2rem;
              `}>
              email
            </div>
            <input
              css={css`
                padding: 0.5rem;
                border-radius: 5px;
                border: none;
                background-color: #ededed;
                color: #333333;
              `}
              type='text'></input>
          </div>
          <div
            css={css`
              display: grid;
            `}>
            <div
              css={css`
                font-size: 0.8rem;
                height: 2rem;
                line-height: 2rem;
              `}>
              username
            </div>
            <input
              css={css`
                padding: 0.5rem;
                border-radius: 5px;
                border: none;
                background-color: #ededed;
                color: #333333;
              `}
              type='text'></input>
          </div>
          <div
            css={css`
              display: grid;
            `}>
            <div
              css={css`
                font-size: 0.8rem;
                height: 2rem;
                line-height: 2rem;
              `}>
              password
            </div>
            <input
              css={css`
                padding: 0.5rem;
                border-radius: 5px;
                border: none;
                background-color: #ededed;
                color: #333333;
              `}
              type='password'></input>
          </div>
          <div>
            <button
              css={css`
                height: 30px;
                width: 100px;
                border: none;
                background-color: #4a8f62;
                color: #ffffff;
                font-size: 0.8rem;
                border-radius: 5px;
                transition: filter 200ms ease-in-out;

                &:hover {
                  filter: brightness(90%);
                  cursor: pointer;
                }
              `}>
              Sign Up
            </button>
          </div>
        </section>
      </div>
    </nav>
  );
};

export default Navigation;
