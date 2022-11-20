import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';
import { CgToggleSquareOff, CgToggleSquare } from 'react-icons/cg';

const Toggle = ({ toggleTheme, theme }) => {
	return (
		<StyledToggle
			id='toggle-switch'
			onClick={toggleTheme}
			className='toggle-icon'
		>
			<p>color theme:</p>
			{theme === 'light' ? (
				<CgToggleSquare className='mode-toggle-icons' />
			) : (
				<CgToggleSquareOff className='mode-toggle-icons active' />
			)}
			<span>{theme && theme}</span>
		</StyledToggle>
	);
};
const StyledToggle = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	column-gap: 1rem;
	color: ${({ theme }) => theme.txtGrey};
	p {
		font-size: 1.6rem;
		font-weight: bold;
		width: 11rem;
		text-align: right;
	}
	span {
		color: ${({ theme }) => theme.secondaryColor};
		font-size: 1.4rem;
		font-weight: lighter;
		font-style: italic;
	}
	.mode-toggle-icons {
		cursor: pointer;
		font-size: 3rem;
		color: ${({ theme }) => theme.modeIcon};
		&.active {
			color: ${({ theme }) => theme.white};
		}
	}
`;
Toggle.propTypes = {
	theme: string.isRequired,
	toggleTheme: func.isRequired,
};
export default Toggle;
