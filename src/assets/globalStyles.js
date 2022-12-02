import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
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
    font-family: 'NewTegomin';
    -webkit-text-stroke: inherit;
    -webkit-text-stroke: initial;
    -webkit-text-stroke: unset;
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.bodyBg};
    font-size: 1.6rem;
    font-weight: 400;
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
    margin: auto;
	overflow: hidden;
  padding-bottom: 1rem;
  background-color: ${({ theme }) => theme.bodyBg};
  &.mobile{
    row-gap:0;
    padding-bottom: 1rem;
  }
  }
  .widget-container{
    padding: 1rem 2rem 2rem;
	border-radius: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	background-repeat: no-repeat;
	background-size: cover;
	row-gap: 0.5rem;
	box-shadow: 3px 3px 4px rgb(0 0 0);
	overflow-y: hidden;
	&#dark {
		background-image: url('/images/dark wood texture.webp');
	}
	&#light {
		background-image: url('/images/white wood.jpg');
	}
  &.mobile {
		border-radius: 0.4rem;
		padding: 1rem;
	}
  }
  h3{
    font-size: 1.6rem;

  }
  h4{
    font-size: 1.4rem;
  }
  button {
		background-color: ${({ theme }) => theme.btnBg};
    font-family: 'NewTegomin';
		padding: 1rem 3rem;
		text-transform: uppercase;
		border: none;
		outline: none;
		border-radius: 0.4rem;
		align-items: center;
		font-size: 2.5rem;
		cursor: pointer;
    color: ${({ theme }) => theme.btnColor};
	}
  
 a {
    text-decoration: none;
  }
  label, input {
    font-weight: bolder;
  }
  input, textarea {
    font-weight: bolder;
    box-sizing: border-box;
    padding: 1rem;
    border: 2px solid ${({ theme }) => theme.borderLight};
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
    border-radius: 0.4rem;
    background-color: rgba(168, 105, 69, 0.57);
    box-shadow: rgb(0 0 0 / 30%) 2px 2px 2px, rgb(0 0 0 / 10%) -2px -2px 2px;
    ::placeholder {
  color: ${({ theme }) => theme.primaryColor};
  opacity: 1; 
}

:-ms-input-placeholder { 
color: ${({ theme }) => theme.primaryColor};
}

::-ms-input-placeholder { 
color: ${({ theme }) => theme.primaryColor};
}
  }
  input:focus, textarea:focus {
  border: 2px solid ${({ theme }) => theme.borderDark};
}
.form-input {
				width: 100%;
			}
      .input-grow {
				resize: none;
				width: --webkit-fill-available;
				width: 100%;
				margin-top: 1rem;
        ::placeholder {
					color: ${({ theme }) => theme.primaryColor};
					font-size: 1.4rem;
					opacity: 1;
				}
				:-ms-input-placeholder {
					color: ${({ theme }) => theme.primaryColor};
				}
				::-ms-input-placeholder {
					color: ${({ theme }) => theme.primaryColor};
				}
			}
  input[type='range'] {
      overflow: hidden;
      -webkit-appearance: none;
      background-color: ${({ theme }) => theme.secondaryColor};
    }
    
    input[type='range']::-webkit-slider-runnable-track {
      height: 10px;
      -webkit-appearance: none;
      color:${({ theme }) => theme.secondaryColor};
      margin-top: -1px;
    }
    
    input[type='range']::-webkit-slider-thumb {
      width: 10px;
      -webkit-appearance: none;
      height: 10px;
      cursor: ew-resize;
    }
 
  div.error {
    padding: 1rem;
    background: ${({ theme }) => theme.bgError};
    border: 1px solid ${({ theme }) => theme.error};
    color: ${({ theme }) => theme.error};
    border-radius: 4px;
  }
  input.error {
    border: 2px solid ${({ theme }) => theme.error};
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


  input[type="checkbox"] {
  -webkit-appearance: none;
  appearance: none;
  padding: unset;
  ${'' /* background-color: rgba(168, 105, 69, 0.57); */}
  margin: 0;
  font: inherit;
width: 3.9rem;
  height: 3.9rem;
  border-radius: 0.4rem;
  display: grid;
  place-content: center;
  cursor: pointer;
}
input[type="checkbox"]::before {
  content: "";
  width: 1em;
  height: 1em;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em ${({ theme }) => theme.secondaryColor};
  transform-origin: bottom left;
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
}
input[type="checkbox"]:checked::before {
  transform: scale(1);
}
input[type="checkbox"]:disabled {
  --form-control-color:  ${({ theme }) => theme.error};

  color: ${({ theme }) => theme.error};
  cursor: not-allowed;
}
input[type="date"]{
  font: inherit;
  height: 3.9rem;
    font-size: 1.6rem;
    padding: 0 0 0 1rem;
}
::-webkit-calendar-picker-indicator{
    background-color: ${({ theme }) => theme.btnBg};
   padding: 5px; 
   margin-right: 0.5rem;
    cursor: pointer;
    border-radius: 3px;
}

      select.form-select {
        cursor: inherit;
				line-height: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -moz-border-radius: 0.4rem;
  border-radius: 0.4rem;
  outline: none;
  padding: 10px 20px 10px 5px;
  position: relative;
  width: 100%;
  box-sizing: border-box;
    border: 2px solid ${({ theme }) => theme.borderLight};
  -webkit-transition: 0.5s;
  transition: 0.5s;
    background-color: rgba(168, 105, 69, 0.57);
    box-shadow: rgb(0 0 0 / 30%) 2px 2px 2px, rgb(0 0 0 / 10%) -2px -2px 2px;
}
select.form-select:focus {
  border: 2px solid ${({ theme }) => theme.borderDark};
}
option.form-option {
					font-size: 1.6rem;
					color: ${({ theme }) => theme.primaryColor};
					background-color: rgba(36, 14, 0, 0.08);
					border: 1px solid ${({ theme }) => theme.darkBrown};
					border-radius: 1rem 0 0 1rem;
          text-transform: capitalize;
					&:focus {
						border: 1px solid ${({ theme }) => theme.darkBrown};
						outline: none;
					}
				}
.form-dropdown {
  position: relative;
  flex: 1;
}
.form-dropdown:after {
  background-color: ${({ theme }) => theme.btnBg};
  -moz-border-radius: 0 3px 3px 0;
  border-radius: 0 3px 3px 0;
  color: ${({ theme }) => theme.secondaryColor};
  content: '▼';
  display: block;
  font-size: 1.4rem;
  width: 3.5rem;
  height: 3.5rem;
  padding: 7px 0;
  position: absolute;
  pointer-events: none;
  top: 2px;
  bottom: 0;
  text-align: center;
  right: 2px;
}



        ${
					'' /* input[type="file"] {
        position: absolute;
        z-index: -1;
        left: 0px;
        width: 100%;
        height: 3.9rem;
      }
      .file-input {
				width: 100%;
				position: relative;
				height: 3.9rem;
				font: inherit;
			} */
				}
`;
