import styled from "styled-components";

export const SuccessStyles = styled.div`
	max-width: 50rem;
	margin: 0 auto;
	padding: 4.1875rem 9.375rem;
	background-color: var(--white);
	box-shadow: 0px 6px 10px rgba(33, 30, 67, 0.08);

	.success__icon {
		margin: 0 auto;
		width: fit-content;
		border-radius: 50%;
		box-shadow: 0px 6px 10px rgba(33, 30, 67, 0.08);
		padding: 1.5625rem 1.1531rem;
	}

	h1 {
		margin: 0.3125rem 0 1.875rem;
		letter-spacing: 0.04em;
		/* border: 1px solid black; */
	}

	p {
		margin-bottom: 2.375rem;
	}

	a {
		text-decoration: underline;
        color: var(--orange);
	}
`;