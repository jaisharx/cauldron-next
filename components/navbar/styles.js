import styled from 'styled-components';

export default styled.header`
    height: 8rem;
    display: flex;
    background-color: #fff;

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000; // want navbar to be on top of eveything always

    box-shadow: 0 0 20px rgba(0 0 0 / 0.1);

    .navbar {
        width: 100%;
        display: flex;
        align-items: center;

        .logo {
            font-family: 'inter';
            color: rgba(0 0 0 / 0.9);
            font-size: 2.6rem;
            font-weight: 600;
            margin-right: auto;
        }

        .link {
            cursor: pointer;
            font-weight: 500;
            padding: 0.8rem 1.6rem;
            border-radius: 4px;
            letter-spacing: 0.8px;
            transition: background-color 0.2s ease-in;

            &:hover {
                background-color: #ececed;
            }
        }

        .link i {
            margin-left: 1rem;
        }
    }
`;
