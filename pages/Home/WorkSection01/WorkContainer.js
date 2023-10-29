import React, { useEffect, useState } from 'react'; 
// import Link from "next/link";
import WorkPresenterDefault from './WorkPresenterDefault';
import WorkPresenterSlide from './WorkPresenterSlide';
import PropTypes from 'prop-types';
import Swiper from 'swiper';

const WorkContainer = ()=>{
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 750);
	const winResizeFnc = ()=> {
		setIsMobile(window.innerWidth <= 750);
	}

	useEffect(()=> {
		window.addEventListener('resize', winResizeFnc);
		
		return ()=> {
			window.removeEventListener('resize', winResizeFnc);
		}
	
	}, [isMobile]);

	if(isMobile) {
		return(
			<>
				<WorkPresenterSlide />
			</>
		);
	}
	return (
		<>
			<WorkPresenterDefault />
		</>
	);

}

export default WorkContainer;
