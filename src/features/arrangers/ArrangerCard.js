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

const ArrangerCard = ({ arranger, item }) => {
	const { setArrangerToView } = useStateContext();
	const { width } = useViewport();
	const breakpoint = 620;
	let navigate = useNavigate();
	return (
		<StyledArrangerCard
			className='arranger-card-wrapper'
			onClick={(e) => {
				e.preventDefault();
				// log(arranger._id, 'arranger id on click');
				setArrangerToView(arranger.name);
				navigate('/arranger');
			}}
			variants={item}
		>
			<div className={`arranger-wrapper ${width < breakpoint ? 'mobile' : ''}`}>
				{/* <h3 className='primary-text'>arranger name</h3> */}
				<h3 className='primary-text'>{arranger.name}</h3>
			</div>

			<div
				className={`song-count-wrapper ${width < breakpoint ? 'mobile' : ''}`}
			>
				<p className='primary-text'>
					{arranger.count} song
					{arranger.count > 1 ? (
						<span className='fill'>s</span>
					) : (
						<span className='transparent'>s</span>
					)}
				</p>
			</div>
		</StyledArrangerCard>
	);
};
const StyledArrangerCard = styled(motion.div)`
	cursor: pointer;
	font-weight: bolder;
	background-color: rgba(0, 0, 0, 0.05);
	&.arranger-card-wrapper {
		border-bottom: 1px solid ${({ theme }) => theme.primaryColor};
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		column-gap: 0.5rem;
		padding: 0.5rem;
		/* color: ${({ theme }) => theme.white}; */
		.arranger-wrapper {
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

export default ArrangerCard;

// {/* <StyledArrangerCard className='arranger-card-wrapper'>
// 			<div className={`fav-wrapper ${width < breakpoint ? 'hide' : ''}`}>
// 				{arranger.isFavourite === true ? (
// 					<FaHeart className='card-icon heart-on' />
// 				) : (
// 					<FaRegHeart className='card-icon heart-off' />
// 				)}
// 			</div>
// 			<div
// 				className={`arranger-wrapper ${width < breakpoint ? 'mobile' : ''}`}
// 				onClick={(e) => {
// 					e.preventDefault();
// 					log(arranger._id, 'arranger id on click');
// 					setArrangerToView(arranger._id);
// 					navigate('/arranger');
// 				}}
// 			>
// 				<h3 className='primary-text'>{arranger.title}</h3>
// 				<h4 className='secondary-text'>{arranger.arranger.name}</h4>
// 			</div>
// 			<div className={`arranger-wrapper ${width < breakpoint ? 'hide' : ''}`}>
// 				<h3 className='primary-text'>{arranger.arranger.name}</h3>
// 				<div className='rating-wrapper'>
// 					{[...Array(arranger.difficulty)].map((elementInArray, index) => (
// 						<FaStar key={index} className='star-on' />
// 					))}
// 					{[...Array(5 - arranger.difficulty)].map((elementInArray, index) => (
// 						<FaRegStar key={index} className='star-off' />
// 					))}
// 				</div>
// 			</div>
// 			<div className={`deadline-wrapper ${width < breakpoint ? 'mobile' : ''}`}>
// 				{arranger.deadlineDate && (
// 					<>
// 						<GoAlert className='alert-icon' />
// 						<p className='primary-text'>
// 							{format(parseISO(arranger.deadlineDate), 'dd/MM/yyyy')}
// 						</p>
// 					</>
// 				)}
// 			</div>
// 			<div className={`file-wrapper ${width < breakpoint ? 'hide' : ''}`}>
// 				{arranger.fileType === 'pdf' ? (
// 					<Tooltip content='pdf file' direction='left'>
// 						<BsFileEarmarkPdf className='status-icon pdf-icon' />
// 					</Tooltip>
// 				) : (
// 					<Tooltip content='guitar pro file' direction='left'>
// 						<FaGuitar className='status-icon guitar-icon' />
// 					</Tooltip>
// 				)}
// 				{arranger.style.name === 'fingerstyle' && (
// 					<Tooltip content='fingerstyle' direction='left'>
// 						<IoHandLeftSharp className='status-icon fingerstyle-icon' />
// 					</Tooltip>
// 				)}
// 				{arranger.style.name === 'classical' && (
// 					<Tooltip content='classical' direction='left'>
// 						<SiStylelint className='status-icon classical-icon' />
// 					</Tooltip>
// 				)}
// 				{arranger.isTab ? (
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
// 				{arranger.status.name === 'Recorded' && (
// 					<Tooltip content='Recorded' direction='left'>
// 						<ImYoutube2 className='card-icon arranger-status-icon yt-icon' />
// 					</Tooltip>
// 				)}
// 				{arranger.status.name === 'Practicing' && (
// 					<Tooltip content='Practicing' direction='left'>
// 						<GiMetronome className='card-icon arranger-status-icon' />
// 					</Tooltip>
// 				)}
// 				{arranger.status.name === 'Ready' && (
// 					<Tooltip content='Ready' direction='left'>
// 						<CgCamera className='card-icon arranger-status-icon' />
// 					</Tooltip>
// 				)}
// 				{arranger.status.name === 'Backlog' && (
// 					<Tooltip content='Backlog' direction='left'>
// 						<BiArchiveOut className='card-icon arranger-status-icon' />
// 					</Tooltip>
// 				)}
// 				{arranger.status.name === 'Archived' && (
// 					<Tooltip content='Archived' direction='left'>
// 						<BiArchive className='card-icon arranger-status-icon' />
// 					</Tooltip>
// 				)}
// 			</div>
// 		</StyledArrangerCard> */}
