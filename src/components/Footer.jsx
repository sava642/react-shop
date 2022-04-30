function Footer() {
	return <footer className="page-footer deep-purple accent-1">
		<div className="footer-copyright deep-purple accent-1">
			<div className="container">
				© {new Date().getFullYear()} Copyright Text
				<a className="grey-text text-lighten-4 right" href="#!">More Links</a>
			</div>
		</div>
	</footer>

}

export { Footer }