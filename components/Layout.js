import Header from "./Header";

export default function Layout({ children }) {
	return (
		<>
			<Header />
			
			<div id={'container'}>
				<div className={'contents'}>
					{children}
				</div>
			</div>
		</>
	);
}