function Footer() {
	return <footer className="page-footer deep-purple accent-1">
		<div className="footer-copyright deep-purple accent-1">
			<div className="container">
				© {new Date().getFullYear()} Copyright Text
				<a className="grey-text text-lighten-4 right" href="https://sava642.github.io/react-shop/" target="_blank" rel="noreferrer">Repo</a>
			</div>
		</div>
	</footer>

}

export { Footer }