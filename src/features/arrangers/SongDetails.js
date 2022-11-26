// import { useWeightsContext } from '../hooks/useWeightsContext';
// import { useAuthContext } from '../hooks/useAuthContext';

import styled from 'styled-components';

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { format } from 'date-fns';

const SongDetails = ({ song }) => {
	// const { dispatch } = useWeightsContext();
	// const { user } = useAuthContext();

	// const handleClick = async () => {
	// 	if (!user) {
	// 		// setError('You must be logged in');
	// 		return;
	// 	}

	// 	const response = await fetch('/api/songs/' + song._id, {
	// 		method: 'DELETE',
	// 		headers: {
	// 			Authorization: `Bearer ${user.token}`,
	// 		},
	// 	});
	// 	const json = await response.json();

	// 	if (response.ok) {
	// 		dispatch({ type: 'DELETE_WEIGHT', payload: json });
	// 	}
	// };

	return (
		<StyledSongDetails className='song-details'>
			<div className='full'>
				<p>
					<strong className='mono-font'>
						{format(new Date(song.createdAt), 'dd/MM/yyyy')}
					</strong>
				</p>
				<p className='font-italic'>
					{formatDistanceToNow(new Date(song.createdAt), { addSuffix: true })}
				</p>
			</div>

			{/* <div className='song-figures'>
				<p>
					<strong className='mono-font'>{song.load.toFixed(2)}</strong> Kgs
				</p>
				<p>
					<strong className='mono-font'>
						{(song.load * 2.20462).toFixed(2)}
					</strong>{' '}
					Lbs
				</p>
			</div> */}
		</StyledSongDetails>
	);
};
const StyledSongDetails = styled.div`
	background: ${({ theme }) => theme.white};
	border-radius: 4px;
	/* margin: 0.5rem 0; */
	padding: 0.2rem 0.5rem;
	/* padding: 0.5rem 1rem; */
	/* position: relative; */
	box-shadow: 2px 2px 0.5rem rgba(0, 0, 0, 0.05);
	display: flex;
	justify-content: space-between;
	align-items: center;
	column-gap: 1rem;
	.full {
		flex: 1;
		.font-italic {
			font-style: italic;
		}
	}
	p {
		margin: 0;
		font-size: 0.8em;
		color: ${({ theme }) => theme.txtGrey};
	}

	.wrapper-icon {
		background: ${({ theme }) => theme.white};
		border-radius: 4px;
		padding: 0px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		/* width: 100px; */
		column-gap: 0.8rem;
		p {
			text-align: right;
			margin: 0;
		}
		p.figure {
			margin: 0;
			font-size: 1rem;
			color: ${({ theme }) => theme.txtGrey};
		}
		.arrow-icon {
			font-size: 2rem;
		}
		.arrow-icon.green {
			color: ${({ theme }) => theme.primaryColor};
		}
		.arrow-icon.red {
			color: ${({ theme }) => theme.error};
		}
		.arrow-icon.gold {
			color: ${({ theme }) => theme.secondaryColor};
		}
		/* p.stat-name {
				margin: 0;
				font-size: 0.8em;
				color: ${({ theme }) => theme.txtGrey};
				text-transform: uppercase;
			} */
	}
	.song-figures {
		width: 7.5rem;
		text-align: left;
	}
`;

export default SongDetails;
