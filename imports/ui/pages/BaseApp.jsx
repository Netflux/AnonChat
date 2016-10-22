import React from 'react';
import Helmet from 'react-helmet';

const BaseApp = () => (
	<main>
		<Helmet
			htmlAttributes={{"lang": "en"}}
		/>

		<h1>If you're seeing this, things are working!</h1>
		<p>Ideally, new sections should be rendered within this base component.</p>
		<p>Check out some guides online for further information.</p>
	</main>
);

export default BaseApp;
