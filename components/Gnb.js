import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from 'prop-types';

const Gnb = ({gnbActive, setGnbActive}) => {
	const router = useRouter();

	const clickDimFnc = (e)=> {

		if(gnbActive) {
			setGnbActive(false);
		}else{
			setGnbActive(true);
		}

	}
	const clickStopFnc = (e)=> {
		e.stopPropagation();
	}

	return (
		<>
			<nav className={gnbActive ? "gnbWrap active" : "gnbWrap"} onClick={clickDimFnc} aria-hidden={gnbActive ? "false" : "true"}>
				<div className="gnbInner" onClick={clickStopFnc}>
					<ul>
						<li><button type="button" className="menuItem" data-name="company" onClick={clickDimFnc}>Company</button></li>
						<li><button type="button" className="menuItem" data-name="work" onClick={clickDimFnc}>Work</button></li>
						<li><Link href="/contect" className="menuItem" onClick={clickDimFnc}>
							Contect
						</Link></li>
					</ul>
					<div className="util">
						<button type="button" className="btnBizDown">회사소개서</button>
					</div>

				</div>
			</nav>
		</>
	);
}

Gnb.propTypes = {
	gnbActive: PropTypes.bool.isRequired,
	setGnbActive: PropTypes.func.isRequired,
};

export default Gnb;