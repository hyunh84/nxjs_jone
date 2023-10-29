import Header from "./Header";

export default function Layout({ children }) {
	return (
		<>
			<Header />
			
			<div id={'container'}>
				{children}
			</div>
		</>
	);
}