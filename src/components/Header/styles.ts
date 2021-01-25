import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 10rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 3.6rem;

  background: var(--color-primary-lighter);

  > svg {
    width: 4.2rem;
    height: 4.2rem;
  }

  p {
    font: 400 4.6rem Roboto Slab;
  }

  img {
    width: 6.4rem;
    height: 6.4rem;
  }

  @media (max-width: 700px) {
    height: 6rem;

    padding: 0 1.6rem;

    > svg {
      width: 3.4rem;
      height: 3.4rem;
    }

    p {
      font: 400 3.2rem Roboto Slab;
    }

    img {
      width: 4.8rem;
      height: 4.8rem;
    }
  }
`;
