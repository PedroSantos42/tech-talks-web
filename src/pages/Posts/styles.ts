import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--color-text-base);

  .main-cover {
    margin-top: 2.4rem;
    width: 100%;
    padding: 1.2rem 1.2rem 0;
  }

  @media (min-width: 700px) {
    main {
      padding: 4.2rem 0;
      max-width: 740px;
      margin: 16rem auto;
    }

    .main-cover {
      padding: 0;
    }
  }
`;
