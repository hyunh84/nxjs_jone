import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// import CompanySection from "./CompanySection";
// import WorkSection01 from "./WorkSection01";
// import WorkSection02 from "./WorkSection02";
import HomBottom from "./HomBottom";

const IntroSection = dynamic(()=> import('./IntroSection'), {ssr : false});
const CompanySection = dynamic(()=> import('./CompanySection'), {ssr : false});
const WorkSection01 = dynamic(()=> import('./WorkSection01'), {ssr : false});
const WorkSection02 = dynamic(()=> import('./WorkSection02'), {ssr : false});

  

const HomePresenter = ()=>{
	let observer;
	const [observeEl, setObserveEl] = useState([]);
	const options = {
		rootMargin : '10px',
		threshold:0.5
	}
	const callback = function(entries, observer) {
		entries.forEach(function(entry) {
			if (entry.isIntersecting) {
				entry.target.classList.add('active');
				observer.unobserve(entry.target);
			}
		});
	}
	
	useEffect(()=>{
		if(observeEl.length) {
			observer = new IntersectionObserver(callback, options);
			observeEl.forEach(function(box) {
				observer.observe(box);
			});
		}

		return ()=>{
			if(observeEl.length) {
				observeEl.forEach(function(box) {
					observer.observe(box);
				});
			}
		}
	}, [observeEl]);

	return(
		<div className="contents main">
			{/* S : intro */}
			<IntroSection
				setObserveEl = {setObserveEl}
			/>
			{/* E : intro */}
			{/* S : COMPANY */}
			<CompanySection
				setObserveEl = {setObserveEl}
			/>
			{/* E : COMPANY */}

			{/* S : WORK01 */}
			<WorkSection01 />
			{/* E : WORK01 */}

			{/* S : WORK02 */}
			<WorkSection02 />
			{/* E : WORK02 */}

			{/* S : HomBottom */}
			<HomBottom />
			{/* E : HomBottom */}


		</div>
	);
}

export default HomePresenter;