import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'NewTegomin';
  src: url("/fonts/NewTegomin-Regular.woff2") format("woff2"), url("/fonts/NewTegomin-Regular.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
${
	'' /* @mixin flex($justify, $align, $direction) {
	display: flex;
	justify-content: $justify;
	align-items: $align;
	flex-direction: $direction;
} */
}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    ${'' /* font-family: 'Oswald', serif; */}
    font-family: 'NewTegomin';
    -webkit-text-stroke: inherit;
    -webkit-text-stroke: initial;
    -webkit-text-stroke: unset;
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.black};
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.txtGrey};
    color: ${({ theme }) => theme.darkBrown};
    overflow: hidden;
  }
	.App {
    width: 100vw;
    height: 100vh;
    width: clamp(32rem, 100vw, 100vw);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 1rem;
    background-color: ${({ theme }) => theme.borderGrey};
    background-image: url("/images/light wood texture.webp");
  }
  h3{
    font-size: 1.6rem;

  }
  h4{
    font-size: 1.4rem;
  }
  button {
		background-color: #ffffff;
    font-family: 'Oswald', serif;
		padding: 1rem 3rem;
		text-transform: uppercase;
		border: none;
		outline: none;
		border-radius: 0.4rem;
		align-items: center;
		font-size: 2.5rem;
		cursor: pointer;
    color: ${({ theme }) => theme.txtGrey};
	}
  
  header a {
    color: ${({ theme }) => theme.txtDarkGrey};
    color: ${({ theme }) => theme.darkBrown};
    text-decoration: none;
  }
  label, input {
    display: block;
    ${'' /* color: ${({ theme }) => theme.engravedBrown}; */}
    font-weight: bolder;
   
    ${'' /* color: ${({ theme }) => theme.txtGrey}; */}
  }
  input {
    padding: 10px;
    ${'' /* margin-top: 10px; */}
    ${'' /* margin-bottom: 20px; */}
    ${'' /* width: 100%; */}
    border: none;
    ${'' /* border: 2px solid ${({ theme }) => theme.borderGrey}; */}
    border-radius: 4px;
    box-sizing: border-box;
    background-color: rgba(168, 105, 69, 0.57);
    box-shadow: rgb(0 0 0 / 30%) 2px 2px 2px, rgb(0 0 0 / 10%) -2px -2px 2px;
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  ${'' /* color: red; */}
  color: ${({ theme }) => theme.engravedBrown};
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
color: ${({ theme }) => theme.engravedBrown};
}

::-ms-input-placeholder { /* Microsoft Edge */
color: ${({ theme }) => theme.engravedBrown};
}
  }
  input[type='range'] {
      overflow: hidden;
      ${'' /* width: 80px; */}
      -webkit-appearance: none;
      background-color: ${({ theme }) => theme.lightBrown};
    }
    
    input[type='range']::-webkit-slider-runnable-track {
      height: 10px;
      -webkit-appearance: none;
      color:${({ theme }) => theme.lightBrown};
      margin-top: -1px;
    }
    
    input[type='range']::-webkit-slider-thumb {
      width: 10px;
      -webkit-appearance: none;
      height: 10px;
      cursor: ew-resize;
      ${'' /* background: ${({ theme }) => theme.lightBrown}; */}
      ${'' /* background: ${({ theme }) => theme.lightBrown}; */}
      ${'' /* box-shadow: -80px 0 0 80px #43e5f7; */}
    }
  input:focus {
    outline: none;
    border: none;
    border: 2px solid ${({ theme }) => theme.primaryColor};
    border-radius: 4px;
    box-sizing: border-box;
  }
  ${
		'' /* form button {
    background: ${({ theme }) => theme.primaryColor};
    border: 0;
    color: #fff;
    padding: 1rem;
    border-radius: 4px;
    cursor: pointer;
  } */
	}
  div.error {
    padding: 1rem;
    background: ${({ theme }) => theme.bgError};
    border: 1px solid ${({ theme }) => theme.error};
    color: ${({ theme }) => theme.error};
    border-radius: 4px;
  }
  input.error {
    border: 1px solid ${({ theme }) => theme.error};
  }
  .stroke{
    -webkit-text-stroke: 1px ${({ theme }) => theme.secondaryColor};
  font-family: 'Arial';
  }
  .mono-font{
    font-family: 'Roboto Mono', monospace;
  }
  label .field-required{
    color: ${({ theme }) => theme.error};
    font-size: 1.8rem;
  }
  .br{
    border-radius: 4px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    ${'' /* background-color: ${({ theme }) => theme.bgApp}; */}
  }
  .br-inset{
    background-color: ${({ theme }) => theme.bgLightGrey};
    border-radius: 4px;
    box-shadow: inset 1px 1px 1px rgba(0,0,0,0.3), inset -1px -1px 1px rgba(0,0,0,0.1);
  }
  .br-field{
    border-radius: 5px;
    box-shadow: inset -1px -1px 2px rgba(0,0,0,0.3), inset 1px 1px 1px rgba(0,0,0,0.1);
  }
	
	
`;
