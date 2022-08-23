import styled from "styled-components";

export const BillingInfoStyles = styled.div`
	> * {
		display: block;
		width: 100%;
	}

	.card__details {
		display: flex;
		width: 100%;
		/* border: 2px solid black; */
		justify-content: space-between;
		position: relative;
		gap: 1rem;
		flex-wrap: wrap;
		margin-bottom: 5.25rem;

		> div {
			display: flex;
			/* width: 100%; */
			flex-direction: column;
			/* border: 2px solid black; */
		}

		input {
			position: relative;
			width: 100%;
			margin-bottom: 0;
		}

		label {
			margin-bottom: 0.9375rem;
		}

		.card__number {
			width: 63%;
		}

		.expiry input,
		.cvv input {
			max-width: 6.25rem;
		}
	}

	@media screen and (max-width: 425px) {
		.card__details {
			gap: 2rem;
		}
	}
`;