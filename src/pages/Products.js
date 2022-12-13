// import { motion } from 'framer-motion';
// import React, { useEffect } from 'react';
// import styled from 'styled-components';
// import { useStateContext } from '../lib/context';
// import { useNavigate } from 'react-router-dom';

// import ListProducts from '../components/ListProducts';

// const Products = () => {
// 	const { dataLoaded } = useStateContext();

// 	let navigate = useNavigate();
// 	useEffect(() => {
// 		if (dataLoaded === false) {
// 			navigate('/');
// 		}
// 	}, [navigate, dataLoaded]);

// 	return (
// 		<StyledProducts
// 			initial={{ width: 0 }}
// 			animate={{ width: '100%' }}
// 			exit={{ x: window.innerWidth }}
// 			className='songs-page page'
// 		>
// 			<ListProducts />

// 		</StyledProducts>
// 	);
// };

// const StyledProducts = styled(motion.div)`

// 	padding: 0 0.5rem;
// 	.user-actions-container {
// 		display: flex;
// 		justify-content: space-between;
// 		align-items: center;
// 		padding: 0 0.5rem 1rem 0.5rem;
// 		/* padding: 0 0 1rem 0; */
// 		column-gap: 2rem;
// 	}
// 	.mobile-user-actions-container {
// 		display: flex;
// 		justify-content: space-between;
// 		align-items: center;
// 		padding: 0 1rem 1rem 1rem;
// 		column-gap: 2rem;
// 	}
// `;

// export default Products;
