import styled from "styled-components";

export const ConfirmPaymentStyles = styled.div`
	width: 100%;
	color: var(--purple);
	margin-bottom: 4.3125rem;
	box-shadow: 0px 10px 15px rgba(33, 30, 67, 0.08);
	border-radius: 0 0 0.625rem 0.625rem;

	.header {
		display: flex;
		justify-content: space-between;
		background-color: var(--deep-blue);
		padding: 1.25rem 3.125rem;
		color: var(--white);
		border-radius: 0.625rem 0.625rem 0px 0px;
	}

	.table__body {
		background-color: var(--white);
		padding: 3.875rem;
		border-radius: 0px 0px 0.625rem 0.625rem;

		> * + * {
			margin-top: 2.5rem;
		}

		ul {
			display: flex;
			justify-content: space-between;
		}

        .purchase__two {
            border-bottom: 1px solid var(--faint-blue);
            padding-bottom: 2.3125rem;

			li:nth-child(2) {
				color: var(--black);
			}
        }

		.total {
			border: 1px solid var(--faint-blue);
			border-radius: 0.3125rem;
			padding: 0.875rem 1.1875rem;
		}
	}
`;