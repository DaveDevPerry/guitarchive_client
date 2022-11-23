import React from 'react';
// import Link from 'next/link';
import styled from 'styled-components';
// import {
// 	FaCloudDownloadAlt,
// 	FaRegStar,
// 	FaStar,
// 	FaRegHeart,
// 	FaHeart,
// } from 'react-icons/fa';
// import { ImYoutube2 } from 'react-icons/im';
// import { GiMetronome } from 'react-icons/gi';
// import { CgCamera } from 'react-icons/cg';
// import { BiArchiveOut, BiArchive } from 'react-icons/bi';
// import { IoMusicalNotes } from 'react-icons/io5';
// import { TbNumbers } from 'react-icons/tb';
// import { format, parseISO } from 'date-fns';
import { log } from '../../utils/helper';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../../lib/context';
import { useViewport } from '../../hooks/useViewport';
// import moment from 'moment';

const ArrangerCard = ({ arranger, slug, url }) => {
	const { setArrangerToView } = useStateContext();
	const { width } = useViewport();
	const breakpoint = 620;
	let navigate = useNavigate();
	return (
		// <Link href={url + slug}>

		<StyledArrangerCard
			className='arranger-card-wrapper'
			onClick={(e) => {
				e.preventDefault();
				log(arranger._id, 'arranger id on click');
				setArrangerToView(arranger._id);
				navigate('/arranger');
			}}
		>
			{width > breakpoint ? (
				<>
					{/* <div className='fav-wrapper'>
						{arranger.isFavourite === true ? (
							<FaHeart className='card-icon heart-on' />
						) : (
							<FaRegHeart className='card-icon heart-off' />
						)}
					</div> */}
					<div className='arranger-wrapper'>
						<h3 className='primary-text'>{arranger.name}</h3>
						{/* <h4 className='secondary-text'>{arranger.arranger.name}</h4> */}
					</div>

					{/* <div className='arranger-wrapper'>
						<h3 className='primary-text'>{arranger.arranger.name}</h3>

						<div className='rating-wrapper'>
							{[...Array(arranger.difficulty)].map((elementInArray, index) => (
								<FaStar key={index} className='star-on' />
							))}
							{[...Array(5 - arranger.difficulty)].map((elementInArray, index) => (
								<FaRegStar key={index} className='star-off' />
							))}
						</div>
					</div>


					<div className='deadline-wrapper'>
						{arranger.deadlineDate && (
							<h3 className='primary-text'>
								{format(parseISO(arranger.deadlineDate), 'dd/MM/yyyy')}
							</h3>
						)}

					</div>
					<div className='file-wrapper'>
						{arranger.selectedFile && (
							<a href={arranger.selectedFile} download>
								<FaCloudDownloadAlt className='file-download-icon card-icon' />
							</a>
						)}
						{arranger.isTab ? (
							<TbNumbers className='music-type-icon' />
						) : (
							<IoMusicalNotes className='music-type-icon' />
						)}

					</div>

					<div className='status-wrapper'>
						{arranger.status.name === 'Recorded' && (
							<ImYoutube2 className='card-icon status-icon yt-icon' />
						)}
						{arranger.status.name === 'Practicing' && (
							<GiMetronome className='card-icon status-icon' />
						)}
						{arranger.status.name === 'Ready' && (
							<CgCamera className='card-icon status-icon' />
						)}
						{arranger.status.name === 'Backlog' && (
							<BiArchiveOut className='card-icon status-icon' />
						)}
						{arranger.status.name === 'Archived' && (
							<BiArchive className='card-icon status-icon' />
						)}
					</div> */}
				</>
			) : (
				<>
					<div className='arranger-wrapper'>
						<h3 className='primary-text'>{arranger.name}</h3>
						{/* <h4 className='secondary-text'>{arranger.arranger.name}</h4> */}
					</div>

					{/* <div className='arranger-wrapper'>
				<h3 className='primary-text'>{arranger.arranger.name}</h3>
				<div className='rating-wrapper'>
					{[...Array(arranger.difficulty)].map((elementInArray, index) => (
						<FaStar key={index} className='star-on' />
					))}
					{[...Array(5 - arranger.difficulty)].map((elementInArray, index) => (
						<FaRegStar key={index} className='star-off' />
					))}
				</div>
			</div> */}
					{/* <div className='genre-wrapper'>
					<h3 className='primary-text'>{arranger.genre[0]}</h3>
					<h4 className='secondary-text'>{arranger.genre[1]}</h4>
				</div> */}

					{/* <div className='deadline-wrapper'>
						{arranger.deadlineDate && (
							<h3 className='primary-text'>
								{format(parseISO(arranger.deadlineDate), 'dd/MM/yyyy')}
							</h3>
						)}
				
					</div> */}
					{/* <div className='file-wrapper'>
				{arranger.selectedFile && (
					<a href={arranger.selectedFile} download>
						<FaCloudDownloadAlt className='file-download-icon card-icon' />
					</a>
				)}
			</div> */}
					{/* <div className='status-wrapper'>
				{arranger.status.name === 'Recorded' && (
					<ImYoutube2 className='card-icon status-icon yt-icon' />
				)}
				{arranger.status.name === 'Practicing' && (
					<GiMetronome className='card-icon status-icon' />
				)}
				{arranger.status.name === 'Ready' && (
					<CgCamera className='card-icon status-icon' />
				)}
				{arranger.status.name === 'Backlog' && (
					<BiArchiveOut className='card-icon status-icon' />
				)}
				{arranger.status.name === 'Archived' && (
					<BiArchive className='card-icon status-icon' />
				)}
			</div> */}
				</>
			)}
		</StyledArrangerCard>
		// </Link>
	);
};
const StyledArrangerCard = styled.div`
	cursor: pointer;
	&.arranger-card-wrapper {
		border-bottom: 1px solid ${({ theme }) => theme.darkBrown};
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		column-gap: 1rem;
		padding: 0.5rem 1rem;
		.primary-text {
			color: ${({ theme }) => theme.darkBrown};
		}
		.secondary-text {
			color: ${({ theme }) => theme.lightBrown};
			text-transform: uppercase;
		}
		.fav-wrapper,
		/* .file-wrapper, */
		/* .deadline-wrapper, */
		.status-wrapper {
			display: grid;
			place-content: center;
			width: 50px;
		}
		.file-wrapper {
			display: flex;
			align-items: center;
			column-gap: 0.5rem;
		}
		.deadline-wrapper {
			width: 100px;
			display: grid;
			place-content: center;
		}
		/* .arranger-wrapper {
			flex: 1 1 40%;
		}
		.arranger-wrapper {
			flex: 1 1 60%;
		} */
		.arranger-wrapper,
		.arranger-wrapper {
			flex: 1;
		}
		.fav-wrapper {
			width: auto;
			padding: 0.5rem;
		}
		/* .file-wrapper,
		.status-wrapper {
			display: grid;
			place-content: center;
			width: 5rem;
		} */
		.card-icon {
			font-size: 2.5rem;
			color: ${({ theme }) => theme.lightBrown};
		}
		.status-icon {
			font-size: 3rem;
			color: ${({ theme }) => theme.darkBrown};
		}
		.yt-icon {
			font-size: 4.5rem;
		}
		.star-on {
			color: ${({ theme }) => theme.lightBrown};
		}
		.star-off {
			color: ${({ theme }) => theme.darkBrown};
		}
		.heart-on {
			color: ${({ theme }) => theme.red};
			font-size: 2rem;
		}
		.heart-off {
			color: ${({ theme }) => theme.darkBrown};
			font-size: 2rem;
		}
		.file-download-icon {
			cursor: pointer;
			font-size: 3rem;
		}
		.music-type-icon {
			/* cursor: pointer; */
			font-size: 3rem;
		}
	}
	/* @media screen and (max-width: 400px) {

		&.arranger-card-wrapper {

			.fav-wrapper,
			.file-wrapper,
			.deadline-wrapper,
			.status-wrapper {
				width: unset;
			}

			.arranger-wrapper {
				display: none;
			}
			.fav-wrapper,
			.file-wrapper {
				display: none;
			}

			.file-download-icon {
				display: none;
			}
		}
	} */
`;

export default ArrangerCard;
