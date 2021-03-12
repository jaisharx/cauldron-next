import styled, { keyframes } from 'styled-components';

export default styled.main`
    min-height: calc(100vh - 12rem);
    margin-top: 12rem;
    text-align: center;

    position: relative;

    .logo {
        max-width: 8rem;
    }

    .main-text {
        color: #212121;
        max-width: 80rem;
        margin: 1rem auto;
        font-size: 7.8rem;
        font-weight: 700;
        line-height: 8rem;
        letter-spacing: -0.05em;

        span {
            text-decoration: underline;
        }
    }

    .sub-text {
        max-width: 58rem;
        margin: 2rem auto;
        color: #504c69;
        font-size: 2rem;
        font-weight: 400;
        line-height: 3.2rem;
    }

    .arrow-down {
        margin: 4rem 0;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);

        animation: ${down} 2s infinite;
    }
`;

const down = keyframes`
        0% {
            transform: translateY(0rem);
        }
        50% {
            transform: translateY(1rem);
        }
        100% {
            transform: translateY(0rem);
        }
`;
