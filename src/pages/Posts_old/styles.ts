import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;

  background: var(--color-background);
`;

export const Logo = styled.div`
  img {
    position: absolute;
    z-index: 2;
    margin: -2rem;
    margin-top: -4rem;
    padding: 0.2rem;
    display: flex;

    width: 6.0rem;
    height: 6.0rem;
    border-radius: 0 0 4.0rem 4.0rem;
    background-color: var(--color-primary-lighter);
  }
`;

export const Cover = styled.div`
  div {
    width: 100vw;

    margin: -2.2rem;
    margin-top: -4.2rem;

    text-align: center;
    display: inline-block;
    max-width: 100vw;

    img {
      width: 42rem;
      height: 42rem;
      display: block;
      object-fit: cover;

      position: relative;
    }

    h2 {
      position: absolute;
      bottom: 8.6rem;
      top: 34rem;
      margin-left: 3.2rem;
      z-index: 2;

      text-transform: uppercase;
    }

    svg {
      /* width: 6.0rem;
      height: 6.0rem;
      border-radius: 0 0 4.0rem 4.0rem;
      background-color: var(--color-primary-lighter); */
    }
  }
`;

export const Posts = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: var(--color-background);
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: background 0.2s;

    & + a {
      margin-top: 1.6rem;
    }

    &:hover {
      background: var(--color-gray-lighter);
    }

    img {
      width: 6.4rem;
      height: 6.4rem;
      border-radius: 50%;
    }

    div {
      margin: 0 16px 0 16px;
      flex: 1;

      p {
        align-self: top;
        font-size: 1.4rem;
        color: var(--color-font-lighter)
      }

      strong {
        font-size: 2.8rem;
        color: var(--color-font)
      }
    }

    svg {
      margin-left: auto;
      color: var(--color-icon);
    }
  }
`;
