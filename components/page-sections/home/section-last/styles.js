import section from '../base-section';
import styled from 'styled-components';

export default styled(section)`
    background-color: #f5f5f5;
    padding: 6rem;

    .container {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
    }

    .get-started {
        font-family: 'inter';
        max-width: 40rem;
        font-size: 4rem;
        line-height: 4.6rem;
        letter-spacing: -0.03em;
        font-weight: 700;
    }

    .cta {
        margin: 0;
    }
`;
