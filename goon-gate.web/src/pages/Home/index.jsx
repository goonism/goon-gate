import React, {
	Component
} from 'react';

import Header from 'sections/Header';
import Footer from 'sections/Footer';

export default class Home extends Component {

	render() {
		return(
			<div className="Home">
				<Header/>

				<Footer />
			</div>
		);
	}
}
