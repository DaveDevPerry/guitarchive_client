import React from 'react';
import styled from 'styled-components';
// import {
// 	FaRegStar,
// 	FaStar,
// 	FaRegHeart,
// 	FaHeart,
// 	FaGuitar,
// } from 'react-icons/fa';
// import { SiStylelint } from 'react-icons/si';
// import { IoHandLeftSharp } from 'react-icons/io5';
// import { BsFileEarmarkPdf } from 'react-icons/bs';
// import { ImYoutube2 } from 'react-icons/im';
// import { GiMetronome } from 'react-icons/gi';
// import { CgCamera } from 'react-icons/cg';
// import { BiArchiveOut, BiArchive } from 'react-icons/bi';
// import { GoAlert } from 'react-icons/go';
// import { IoMusicalNotes } from 'react-icons/io5';
// import { TbNumbers } from 'react-icons/tb';
// import { format, parseISO } from 'date-fns';
// import { log } from '../../utils/helper';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../../lib/context';
import { useViewport } from '../../hooks/useViewport';
import { motion } from 'framer-motion';
// import Tooltip from '../../components/Tooltip';

const ArtistCard = ({ artist, item }) => {
	const { setArtistToView } = useStateContext();
	const { width } = useViewport();
	const breakpoint = 620;
	let navigate = useNavigate();
	return (
		<StyledArtistCard
			className='artist-card-wrapper'
			onClick={(e) => {
				e.preventDefault();
				// log(artist._id, 'artist id on click');
				setArtistToView(artist.name);
				navigate('/artist');
			}}
			variants={item}
		>
			<div className={`artist-wrapper ${width < breakpoint ? 'mobile' : ''}`}>
				{/* <h3 className='primary-text'>artist name</h3> */}
				<h3 className='primary-text'>{artist.name}</h3>
			</div>

			<div
				className={`song-count-wrapper ${width < breakpoint ? 'mobile' : ''}`}
			>
				<p className='primary-text'>
					{artist.count} song
					{artist.count > 1 ? (
						<span className='fill'>s</span>
					) : (
						<span className='transparent'>s</span>
					)}
				</p>
			</div>
		</StyledArtistCard>
	);
};
const StyledArtistCard = styled(motion.div)`
	cursor: pointer;
	font-weight: bolder;
	background-color: rgba(0, 0, 0, 0.05);
	&.artist-card-wrapper {
		border-bottom: 1px solid ${({ theme }) => theme.primaryColor};
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		column-gap: 0.5rem;
		padding: 0.5rem;
		/* color: ${({ theme }) => theme.white}; */
		.artist-wrapper {
			flex: 1;
			.primary-text {
				color: ${({ theme }) => theme.primaryColor};
				text-transform: capitalize;
				font-weight: bolder;
				text-shadow: 0px 1px 0px rgb(255 255 255 / 20%),
					0px -1px 0px rgb(0 0 0 / 70%);
			}
		}
		.song-count-wrapper {
			width: 100px;
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
			align-items: center;
			row-gap: 0.5rem;
			.primary-text {
				color: ${({ theme }) => theme.secondaryColor};
				text-transform: uppercase;
				font-weight: bolder;
				/* text-align: right; */
				/* border-radius: 0.6rem; */
				/* line-height: 1.4rem; */
				/* font-size: 1.4rem; */
				text-shadow: 0px 1px 0px rgb(255 255 255 / 20%),
					0px -1px 0px rgb(0 0 0 / 70%);
				padding-right: 0.5rem;
				span {
					&.fill {
						color: ${({ theme }) => theme.secondaryColor};
					}
					&.transparent {
						color: transparent;
						text-shadow: none;
					}
				}
			}
			&.mobile {
				width: auto;
			}
		}
	}
`;

export default ArtistCard;

// {/* <StyledArtistCard className='artist-card-wrapper'>
// 			<div className={`fav-wrapper ${width < breakpoint ? 'hide' : ''}`}>
// 				{artist.isFavourite === true ? (
// 					<FaHeart className='card-icon heart-on' />
// 				) : (
// 					<FaRegHeart className='card-icon heart-off' />
// 				)}
// 			</div>
// 			<div
// 				className={`artist-wrapper ${width < breakpoint ? 'mobile' : ''}`}
// 				onClick={(e) => {
// 					e.preventDefault();
// 					log(artist._id, 'artist id on click');
// 					setArtistToView(artist._id);
// 					navigate('/artist');
// 				}}
// 			>
// 				<h3 className='primary-text'>{artist.title}</h3>
// 				<h4 className='secondary-text'>{artist.artist.name}</h4>
// 			</div>
// 			<div className={`artist-wrapper ${width < breakpoint ? 'hide' : ''}`}>
// 				<h3 className='primary-text'>{artist.arranger.name}</h3>
// 				<div className='rating-wrapper'>
// 					{[...Array(artist.difficulty)].map((elementInArray, index) => (
// 						<FaStar key={index} className='star-on' />
// 					))}
// 					{[...Array(5 - artist.difficulty)].map((elementInArray, index) => (
// 						<FaRegStar key={index} className='star-off' />
// 					))}
// 				</div>
// 			</div>
// 			<div className={`deadline-wrapper ${width < breakpoint ? 'mobile' : ''}`}>
// 				{artist.deadlineDate && (
// 					<>
// 						<GoAlert className='alert-icon' />
// 						<p className='primary-text'>
// 							{format(parseISO(artist.deadlineDate), 'dd/MM/yyyy')}
// 						</p>
// 					</>
// 				)}
// 			</div>
// 			<div className={`file-wrapper ${width < breakpoint ? 'hide' : ''}`}>
// 				{artist.fileType === 'pdf' ? (
// 					<Tooltip content='pdf file' direction='left'>
// 						<BsFileEarmarkPdf className='status-icon pdf-icon' />
// 					</Tooltip>
// 				) : (
// 					<Tooltip content='guitar pro file' direction='left'>
// 						<FaGuitar className='status-icon guitar-icon' />
// 					</Tooltip>
// 				)}
// 				{artist.style.name === 'fingerstyle' && (
// 					<Tooltip content='fingerstyle' direction='left'>
// 						<IoHandLeftSharp className='status-icon fingerstyle-icon' />
// 					</Tooltip>
// 				)}
// 				{artist.style.name === 'classical' && (
// 					<Tooltip content='classical' direction='left'>
// 						<SiStylelint className='status-icon classical-icon' />
// 					</Tooltip>
// 				)}
// 				{artist.isTab ? (
// 					<Tooltip content='tablature' direction='left'>
// 						<TbNumbers className='music-type-icon' />
// 					</Tooltip>
// 				) : (
// 					<Tooltip content='music score' direction='left'>
// 						<IoMusicalNotes className='music-type-icon' />
// 					</Tooltip>
// 				)}
// 			</div>
// 			<div className={`status-wrapper ${width < breakpoint ? 'hide' : ''}`}>
// 				{artist.status.name === 'Recorded' && (
// 					<Tooltip content='Recorded' direction='left'>
// 						<ImYoutube2 className='card-icon artist-status-icon yt-icon' />
// 					</Tooltip>
// 				)}
// 				{artist.status.name === 'Practicing' && (
// 					<Tooltip content='Practicing' direction='left'>
// 						<GiMetronome className='card-icon artist-status-icon' />
// 					</Tooltip>
// 				)}
// 				{artist.status.name === 'Ready' && (
// 					<Tooltip content='Ready' direction='left'>
// 						<CgCamera className='card-icon artist-status-icon' />
// 					</Tooltip>
// 				)}
// 				{artist.status.name === 'Backlog' && (
// 					<Tooltip content='Backlog' direction='left'>
// 						<BiArchiveOut className='card-icon artist-status-icon' />
// 					</Tooltip>
// 				)}
// 				{artist.status.name === 'Archived' && (
// 					<Tooltip content='Archived' direction='left'>
// 						<BiArchive className='card-icon artist-status-icon' />
// 					</Tooltip>
// 				)}
// 			</div>
// 		</StyledArtistCard> */}
