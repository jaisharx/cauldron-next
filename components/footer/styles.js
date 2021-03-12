import styled from 'styled-components';

export default styled.footer`
    color: #fff;
    background-color: #000;

    padding: 3.5rem 0;

    .nav-links {
        padding: 0;
        margin: 0;
        display: flex;
        gap: 8rem;
        list-style: none;

        li {
            font-size: 1.8rem;
            font-weight: 500;
        }

        li a {
            color: #fff;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    .copyright {
        margin: 5rem 0 1rem 0;
        font-weight: 500;
        font-size: 2rem;
    }
`;
