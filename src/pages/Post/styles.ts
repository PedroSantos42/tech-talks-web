import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 12rem;

  background: var(--color-primary-lighter);

  p {
    font: 400 2.8rem Roboto Slab;
  }

  svg {
    width: 3.6rem;
    height: 3.6rem;
  }

  img {
    width: 5.2rem;
    height: 5.2rem;
  }
`;

export const PostContent = styled.div`
  display: flex;
  align-self: center;

  padding: 0.2rem 2.4rem;
`;
