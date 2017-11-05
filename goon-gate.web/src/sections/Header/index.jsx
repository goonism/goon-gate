import React from 'react'

import {Link} from 'react-router-dom';

export default class Header extends React.Component {
	render() {
		return(
			<header className="Header">
				<nav>
					<ul>
						<li><Link to='/'>Home</Link></li>
						<li><Link to='/diffy'>Diffy</Link></li>
					</ul>
				</nav>
			</header>
		)
	}
}
