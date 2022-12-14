import styled from 'styled-components';
import { intlFormatDistance } from 'date-fns';
import { useSongsContext } from '../../hooks/useSongContext';
import { GoAlert } from 'react-icons/go';
import { useViewport } from '../../hooks/useViewport';
import { log } from '../../utils/helper';
import { useStateContext } from '../../lib/context';
import { useNavigate } from 'react-router-dom';

const AlertDeadlineSong = ({ theme }) => {
	const { nextDeadlineSong } = useSongsContext();
	const { setSongToView } = useStateContext();
	const { width } = useViewport();
	const breakpoint = 620;
	let navigate = useNavigate();

	return (
		<StyledAlertDeadlineSong
			className={`${width < breakpoint ? 'mobile' : ''}`}
			id={`${theme === 'dark' ? 'dark' : 'light'}`}
		>
			{nextDeadlineSong && nextDeadlineSong.title && (
				<div
					className='deadline-song-header-container'
					onClick={(e) => {
						e.preventDefault();
						log(nextDeadlineSong._id, 'song id on click');
						setSongToView(nextDeadlineSong._id);
						navigate('/song');
					}}
				>
					<GoAlert className='alert-icon' />
					<p className='header-date'>
						{new Date(nextDeadlineSong.deadlineDate).toLocaleDateString(
							'en-us',
							{
								weekday: 'long',
								year: 'numeric',
								month: 'short',
								day: 'numeric',
							}
						)}
					</p>
					<p className={`header-time ${width < breakpoint ? 'mobile' : ''}`}>
						{intlFormatDistance(
							new Date(new Date(nextDeadlineSong.deadlineDate).toDateString()),
							new Date(new Date(new Date().toDateString())),
							{
								numeric: 'auto',
							}
						)}
					</p>
					<p className={`song-title ${width < breakpoint ? 'mobile' : ''}`}>
						<strong>{nextDeadlineSong.title}</strong>
					</p>
				</div>
			)}
		</StyledAlertDeadlineSong>
	);
};

const StyledAlertDeadlineSong = styled.div`
	padding: 0 3rem;
	width: fit-content;
	&.mobile {
		border-radius: 0.4rem;
		padding: 0 1rem;
		align-self: center;
	}
	.deadline-song-header-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		column-gap: 1rem;
		cursor: pointer;
		.alert-icon {
			font-size: 2.4rem;
			color: ${({ theme }) => theme.alert};
			animation: 2s linear infinite condemned_blink_effect;
		}
		.song-title {
			flex: 1;
			text-align: left;
			cursor: pointer;
		}
		.toggle-view-icon {
			font-size: 3rem;
			cursor: pointer;
			color: ${({ theme }) => theme.primaryColor};
		}
		.header-date {
			font-size: 1.8rem;
			text-transform: uppercase;
			font-weight: bolder;
			text-shadow: 0px 1px 0px rgb(255 255 255 / 30%),
				0px -1px 0px rgb(0 0 0 / 70%);
			color: ${({ theme }) => theme.primaryColor};
			text-align: left;
		}
		.header-time {
			font-size: 1.8rem;
			text-transform: capitalize;
			font-weight: bolder;
			text-shadow: 0px 1px 0px rgb(255 255 255 / 30%),
				0px -1px 0px rgb(0 0 0 / 70%);
			color: ${({ theme }) => theme.secondaryColor};
			text-align: left;
			&.mobile {
				font-size: 1.6rem;
				display: none;
			}
		}
		.song-title {
			text-transform: capitalize;
			font-size: 1.8rem;
			color: ${({ theme }) => theme.primaryColor};
			font-weight: bolder;
			text-shadow: 0px 1px 0px rgb(255 255 255 / 30%),
				0px -1px 0px rgb(0 0 0 / 70%);
			&.mobile {
				padding-left: 0.5rem;
				font-size: 1.6rem;
				display: none;
			}
		}
	}

	@keyframes condemned_blink_effect {
		0% {
			visibility: hidden;
		}
		50% {
			visibility: hidden;
		}
		100% {
			visibility: visible;
		}
	}
`;

export default AlertDeadlineSong;
