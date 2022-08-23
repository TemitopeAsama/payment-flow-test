import styled from "styled-components";

export const PersonalInfoStyles = styled.div`
    > * {
        display: block;
        width: 100%;
    }

    .more__info {
        color: var(--faint-blue);
        font-size: 1rem;
        margin-bottom: 1.5rem;
    }

    .lga__state {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 2.0625rem;

        div {
            display: flex;
            flex-direction: column;
            /* flex-basis: 1 1 200px; */
            /* border: 1px solid black; */
            /* width: 100%; */
        }

        .lga {
            width: 60%;
        }

        .state {
            width: 35%;
        }
    }
`