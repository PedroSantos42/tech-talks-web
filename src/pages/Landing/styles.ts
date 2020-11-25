import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    width: 90vw;
    max-width: 700px;

    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const appearFromDownToUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AnimationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    animation: ${appearFromDownToUp} 1.5s;

    .logo-container {
        height: 10rem;
        margin-bottom: 8rem;
    }

    .logo-container strong {
        font-weight: 500;
        font-size: 2.6rem;
        line-height: 4.6rem;
    }

    .headline main h1 {
        font-size: clamp(4rem, 8vw, 8.4rem);
    }

    .enter {
        margin-top: 3rem;
    }

    .enter p {
        animation-delay: 200ms;
    }

    .enter a {
        animation-delay: 250ms;

        width: 8rem;
        height: 8rem;
        background: #aaf87d;

        border: none;
        border-radius: 3rem;

        display: flex;
        align-items: center;
        justify-content: center;

        margin: auto;
        margin-top: 6rem;

        transition: background 300ms;
    }

    .enter a:hover {
        background-color: #F6F6F6;
    }
`;
