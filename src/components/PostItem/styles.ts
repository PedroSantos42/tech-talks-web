import styled from 'styled-components';

export const Container = styled.article`
    background: var(--color-box-base);
    border: 1px solid var(--color-line-in-white);
    border-radius: 0.8rem;
    margin: 2.4rem 1.2rem;
    overflow: hidden;

  header {
    padding: 3.2rem 2rem;
    display: flex;
    align-items: center;
  }

  img {
    margin-right: 1.2rem;
  }

  header img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
  }

  header div strong {
    font: 600 2.4rem Roboto Slab;
    display: block;
    color: var(--color-text-title);
  }

  header div span {
    font-size: 1.6rem;
    display: block;
    margin-top: 0.4rem;
    color: var(--color-text-complement)
  }

  @media (min-width: 700px) {
    margin: 2.4rem 0;

    header{
      padding: 3.2rem;
    }

    strong {
      display: initial;
      margin-left: 1.6rem;
    }

    img {
      margin-right: 1.6rem;
    }
  }
`;
