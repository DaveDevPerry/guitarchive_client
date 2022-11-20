import React from 'react';
// import {
// 	// Card,
// 	// CardActions,
// 	// CardContent,
// 	CardMedia,
// 	// Button,
// 	// Typography,
// } from '@material-ui/core';
// import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
// import DeleteIcon from '@material-ui/icons/Delete';
// import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
// import moment from 'moment';
// import { useDispatch } from 'react-redux';
import { RiDeleteBin6Line } from 'react-icons/ri';
// import { FaThumbsUp } from 'react-icons/fa';
import { FiMoreHorizontal } from 'react-icons/fi';

// import useStyles from './styles';
// import { deleteSong, likeSong } from '../../../actions/songs';
import styled from 'styled-components';
import { formatDistanceToNow } from 'date-fns';

const Song = ({ song, setCurrentId }) => {
	// const classes = useStyles();
	// const dispatch = useDispatch();
	return (
		<StyledSong>
			{/* <img className='media' src={song.selectedFile} alt={song.title} /> */}
			<a href={song.selectedFile} download>
				download
			</a>
			<div className='overlay'>
				{/* <h2 variant='h6'>{song.creator}</h2> */}
				<p variant='body2'>
					{formatDistanceToNow(new Date(song.createdAt), { addSuffix: true })}
				</p>
			</div>
			<div className='overlay2'>
				<button
					style={{ color: 'white' }}
					size='small'
					onClick={() => setCurrentId(song._id)}
				>
					<FiMoreHorizontal className='more-icon' />
				</button>
			</div>
			{/* <div className='details'>
				<p variant='body2' color='textSecondary'>
					{song.tags.map((tag) => `#${tag} `)}
				</p>
			</div> */}
			<h3 className='title' variant='h5'>
				{song.title}
			</h3>
			{/* <div className='message'>
				<p variant='body2' color='textSecondary' component='p'>
					{song.message}
				</p>
			</div> */}
			<div className='card-actions'>
				{/* <button
					className='song-btn'
					size='small'
					color='primary'
					// onClick={() => dispatch(likeSong(song._id))}
				>
					<FaThumbsUp className='thumbs-icon' />
					&nbsp; Like &nbsp;
					{song.likeCount}
				</button> */}
				<button
					className='song-btn'
					size='small'
					color='primary'
					// onClick={() => dispatch(deleteSong(song._id))}
				>
					<RiDeleteBin6Line className='delete-icon' />
					Delete
				</button>
			</div>
		</StyledSong>
	);
};
const StyledSong = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-radius: 1.5rem;
	/* height: 100%; */
	position: relative;
	/* border: 1px solid black; */
	background-color: white;
	.media {
		height: 10;
		/* padding-top: 50%; */
		background-color: rgba(0, 0, 0, 0.8);
		background-blend-mode: darken;
		border-radius: 1.5rem 1.5rem 0 0;
	}
	.overlay {
		position: absolute;
		top: 20px;
		left: 20px;
		color: white;
	}
	.overlay2 {
		position: absolute;
		top: 20px;
		right: 20px;
		color: white;
		button {
			background-color: transparent;
			padding: 0rem;
			.more-icon {
				/* color: yellow; */
			}
		}
	}
	.details {
		display: flex;
		justify-content: space-between;
		margin: 1rem 2rem;
	}
	.message {
		display: flex;
		justify-content: space-between;
		margin: 0 2rem 0 2rem;
	}
	.title {
		/* padding: 0 1.6rem; */
		margin: 0 2rem 0 2rem;
		color: black;
		text-transform: capitalize;
	}
	.card-actions {
		display: flex;
		justify-content: space-between;
		/* padding: 0 1.6rem 0.8rem 1.6rem; */
		button.song-btn {
			background-color: transparent;
			flex: 1;
			color: blue;
			font-size: 1.4rem;
			text-align: right;
			padding: 1rem 2rem;
			.thumbs-icon {
				/* color: blue; */
			}
			.delete-icon {
				/* color: red; */
				margin-right: 0.5rem;
			}
			&:first-child {
				text-align: left;
			}
		}
	}
`;

export default Song;
