import { createGlobalStyle } from "styled-components";

// Typography
import "@fontsource/poppins";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";

const GlobalStyles = createGlobalStyle`

:root {
    --heroBg: #FBF8F3;
    --black: #111;
    --white: #fff;
    --btnColor: #4D13D1;
    --textColor: #4F4F4F;
    --ratings: #FF962A;
    --footerBg: #0C1524;
    --box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    --font-poppins: 'Poppins', sans-serif;
    --transition: all .3s ease;
}

*,
*::after,
*::before {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	scroll-behavior: smooth;
    /* overflow-x: hidden; */
}

body {
    background: var(--white);
    font-family: var(--font-poppins);
	overflow-x: hidden;
}

a {
    text-decoration: none;
    cursor: pointer;
}

h1, h2, h3, h4, h5{
    color: var(--black);
    font-family: var(--font-poppins);
    font-weight: 600;
}

ul,
ol,
li {
    list-style: none;
}

p {
    color: var(--textColor);
}

img {
    width: 100%;
    height: auto;
}

button.primary {
    position: relative;
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--white);
    border: 2px solid var(--btnColor);
    border-radius: 5px;
    background: var(--btnColor);
    padding: .6rem 1rem;
    transition-property: background color;
    transition: var(--transition);
    cursor: pointer;
    z-index: 1;
}

button.primary:hover {
    background-color: transparent;
    color: var(--btnColor);
}

button.secondary {
    position: relative;
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--btnColor);
    border: 2px solid var(--white);
    border-radius: 5px;
    background: var(--white);
    padding: .6rem 1rem;
    transition-property: background color;
    transition: var(--transition);
    cursor: pointer;
    z-index: 1;
}

button.secondary:hover {
    background-color: transparent;
    color: var(--white);
}

header,
section {
    padding: 6rem 0;
}

.container {
    width: 90%;
    margin: auto;
    flex-wrap: wrap;
}

@media only screen and (max-width:500px) {
header,
section {
    padding: 5rem 0;
}

button {
    font-size: .8rem;
    padding: .6rem 1.8rem;
    width: 100%;
}
}
`
export default GlobalStyles;