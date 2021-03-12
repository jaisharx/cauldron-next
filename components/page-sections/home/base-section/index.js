import styled from 'styled-components';

export default styled.section`
    padding: 12rem 0;

    .sub-title {
        color: #7c7c7c;
    }

    .title {
        color: #212121;
        font-size: 4.8rem;
        line-height: 5.8rem;
        font-weight: 700;
        letter-spacing: -0.05em;

        margin: 1.2rem 0 2rem 0;
    }

    .text {
        color: #504c69;
        font-size: 1.8rem;
        line-height: 2.8rem;
        max-width: 40rem;
    }

    .list {
        margin-top: 1.2rem;
        padding-left: 2rem;
        list-style-type: '✓ ';
    }

    .list .list-item {
        color: #504c69;
        font-size: 1.8rem;
        line-height: 2.8rem;
        margin-top: 1.2rem;

        strong {
            color: #000;
        }
    }

    section .cta-btn {
        margin: 3rem 0 0 0;
        padding: 1.4rem 2.2rem;
    }
`;
