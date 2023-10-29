import { useState } from 'react';
import Link from "next/link";
import Gnb from './Gnb';


const Header = () => {

	const [gnbActive, setGnbActive] = useState(false);

	//GNB OPEN BUTTON FUNCTION
	const gnbOpenFnc = (e)=>{
		if(gnbActive) {
			setGnbActive(false);
		}else{
			setGnbActive(true);
		}
	}

	return (
		<>
			<header id="header">
				<div className="headerInner">
					<Link href="/" className={'logo'}>
						<img src="/resources/images/common/logo.png" alt="j-one LAB" />
					</Link>
					<button type="button" className={gnbActive ? "btnGnbMenu active" : "btnGnbMenu"} onClick={gnbOpenFnc} aria-expanded={gnbActive ? "true" : "false"}></button>
				</div>
				<Gnb
					gnbActive={gnbActive}
					setGnbActive={setGnbActive}
				/>
			</header>
		</>
	);
}

export default Header;