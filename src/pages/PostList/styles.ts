import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 100%;

  .main-cover {
    margin-top: 2.4rem;
    width: 100%;
    border-radius: 1.8rem;
    overflow: hidden;
    padding: 1.2rem;
  }

  main {
    padding-bottom: 2.4rem;
  }


  @media (min-width: 700px) {
    main {
      padding: 4.2rem 0;
      max-width: 740px;
      margin: 16rem auto;
      padding-bottom: 1.2rem;
    }

    .main-cover {
      padding: 0;
      border-radius: 1.2rem;
    }
  }
`;
