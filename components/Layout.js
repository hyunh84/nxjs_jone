import Header from "./Header";

export default function Layout({ children }) {
	return (
		<div id={'wrap'}>
			<Header />
			
			<div id={'container'}>
				{children}
			</div>
		</div>
	);
}