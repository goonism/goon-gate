import React, {
	Component
} from 'react';

import ImageUploader from 'sections/ImageUploader';
import Footer from 'sections/Footer';


export default class Home extends Component {

	render() {
		return(
			<div className="Home">
				<ImageUploader/>
				<Footer />
			</div>
		);
	}
}
