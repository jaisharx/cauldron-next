import section from '../base-section';
import styled from 'styled-components';

export default styled(section)`
    .container {
        display: flex;
    }

    .left {
        padding-right: 6rem;
    }

    .tab {
        margin-top: 7rem;
        display: flex;
        gap: 1rem;

        & > div {
            width: 6rem;
            height: 4px;
            background-color: #d0d0d0;
        }

        .one {
            background-color: #5c59fe;
        }
    }
`;
