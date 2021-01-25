import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1.2rem;

  background: var(--color-primary-lighter);

  .page-header .top-bar-container {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.6rem 0;
  }

  .page-header .top-bar-container {
    height: 3.2rem;
    transition: opacity 0.2s;
  }

  .page-header .top-bar-container > img {
    height: 4.2rem;
  }

  .page-header .top-bar-container a:hover {
    opacity: 0.6;
  }

  .page-header .header-content {
    width: 100%;
    margin: 0 auto;
    position: relative;
    margin: 3.2rem auto;
  }

  .page-header .header-content strong {
    padding-left: 1.2rem;
    font: 500 3.6rem Roboto Slab;
    line-height: 4.2rem;
    color: var(--color-text-title);
  }

  .main-cover {
    margin-top: 2.4rem;
    width: 100%;
    border-radius: 1.8rem;
    overflow: hidden;
    padding: 1.2rem;
  }

  @media (min-width: 700px) {
    height: 340px;

    .header-content .main-cover {
      padding: 0;
      border-radius: 1.2rem;
    }

    .page-header .top-bar-container {
      max-width: 1100px;
    }

    .page-header .header-content {
      flex: 1;
      max-width: 740px;
      margin: 0 auto;
      padding-bottom: 48px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }

    .page-header .header-content strong {
      font: 700 4.2rem Roboto Slab;
      align-self: center;
      padding-left: 0;
      max-width: 350px;
    }

    .main-cover {
      padding: 0;
      border-radius: 1.2rem;
    }
  }
`;
