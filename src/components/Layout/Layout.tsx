import SiteHeader from '../SiteHeader';

export function Layout({children}:{[key:string]:any}) {
	return (
		<>
			<SiteHeader/>
			<main>{children}</main>
		</>
	);
}
