import styled from "styled-components";

export const NavStyles = styled.nav`
	//nav styles
	ul {
		list-style: none;
		display: flex;
		justify-content: space-around;
		align-items: center;

		margin-bottom: 4.75rem;
		margin-top: 1.8125rem;
		border-bottom: 1px solid black;
	}
`;

export const InActiveNavLinkStyles = styled.li`
	color: var(--faint-grey);
	font-weight: 700;
	padding: 1.6875rem 0;
`;

export const ActiveNavLinkStyles = styled.li`
        display: block;
        position: relative;
	color: var(--orange);
	font-weight: 700;
	padding: 1.6875rem 0;
	/* border-bottom: 0.8125rem solid var(--orange); */

	&::after {
		content: "";
		position: absolute;
		display: block;
		margin-top: 1.4rem;
		background-color: var(--orange);
		border-radius: 10px;
		height: 0.8125rem;
		width: 100%;
	}
`;

