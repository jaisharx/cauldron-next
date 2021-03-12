import section from '../base-section';
import styled from 'styled-components';

export default styled(section)`
    color: #fff;
    background-color: #000;

    .container {
        display: flex;
    }

    .left {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        img {
            max-width: 48rem;
        }
    }

    .right {
        .quote {
            margin-top: 1.2rem;
            font-weight: 700;
            font-size: 4.8rem;
            line-height: 5.8rem;
        }

        .name {
            font-size: 2.4rem;
        }

        .role {
            color: #504c69;
            margin-top: 0.6rem;
            font-size: 2rem;
            line-height: 3.6rem;
        }
    }

    .read-more-btn {
        cursor: pointer;
        display: inline-block;
        color: #fff;

        font: inherit;
        font-weight: 500;
        font-family: 'inter';

        text-decoration: none;
        margin-top: 2rem;
        border-radius: 4px;
        border: 1px solid #fff;
        padding: 1rem 2rem;

        &:hover {
            background-color: #111;
        }
    }
`;
