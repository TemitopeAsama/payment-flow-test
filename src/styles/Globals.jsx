import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
	/* COLORS */
	--black: hsl(0, 0%, 0%);
	--faint-white: hsl(240, 100%, 98%);
	--white: hsl(0, 0%, 100%);
	--grey: hsl(0, 0%, 31%);
    --faint-grey: hsl(0, 0%, 74%);
	--purple: hsl(229, 28%, 43%);
	--yellow: hsl(45, 86%, 62%);
    --orange: hsl(28, 87%, 62%);
    --deep-blue: hsl(214, 84%, 56%);
    --faint-blue: hsl(246, 14%, 56%);

    /* ICONS */
    --filter-arrow: url("/arrow-icon-dark.png");

    /* FONTS */
    --font-primary: "Product Sans", sans-serif;
}

html,
body {
	height: 100%;
}

body {
  min-height: 100vh;
  width: 100%;
  background-image: url("/background.svg");
  background-size: cover;
  background-position-y: -23vh;
  background-repeat: no-repeat;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.max-width-wrapper {
  max-width: 710px;
  margin: 0 auto;
  padding: 11.25rem 0;
}

.App {
    padding: 0 1rem;
}

*,
*::before,
*::after {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
    font-family: var(--font-primary);
}


img,
picture,
video,
canvas,
svg {
	display: block;
	max-width: 100%;
}

input,
button,
textarea,
select {
	font: inherit;
    padding: 1.0625rem;
    border: 1px solid var(--purple);
    border-radius: .625rem;
    margin-bottom: 3.125rem;
}

select {
    -moz-appearance:none; /* Firefox */
    -webkit-appearance:none; /* Safari and Chrome */
    appearance:none;
    background-image: var(--filter-arrow);
	background-repeat: no-repeat;
	background-size: calc(.6rem + 0.25vw);
	background-position: 95% 50%;
}

label {
    font: inherit;
    font-weight: 700;
    margin-bottom: .9375rem;
    font-size: 1rem;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
	overflow-wrap: break-word;
    font-family: inherit;
}

h1 {
    color: var(--purple);
    font-size: 2.25rem;
}

span {color: red;}

ul {
	padding: 0;
}

li {
	text-decoration: none;
	list-style-type: none;
	margin: 0;
}

a, button{
	cursor: pointer;
}

a {
	text-decoration: none;
}

button {
	border: none;
}
`;
