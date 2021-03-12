import styled from 'styled-components';

export default styled.form`
    margin: 1rem auto;
    display: inline-flex;
    border-radius: 4px;

    input {
        font: inherit;
        font-size: 1.8rem;
        width: 30rem;
        padding: 1.2rem 2rem;

        border-radius: 4px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;

        border: 2px solid #000;
        border-right: none;

        &:focus {
            outline: none;
        }
    }

    button.get-started {
        font: inherit;
        font-size: 1.8rem;
        font-weight: 700;
        cursor: pointer;
        width: 20rem;

        border: none;
        border-radius: 4px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        color: #fff;

        background-color: #000;
        outline: 0;

        &:hover {
            background-color: rgba(0, 0, 0, 0.9);
        }
    }
`;
