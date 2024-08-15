import React from 'react';
import { useState } from 'react';
import '../App.css'

const Headed = () => {

	const [menuToggle, setToggle] = useState(false)

    return (
			<nav className='Nav'>
					<button type="button" >
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<div className='navigationMenu'>
						<ul>
							<li><a>Home</a></li>
							<li><a>About</a></li>
							<li><a>Services</a></li>
							<li><a>Portfolio</a></li>
							<li><a>Pages</a></li>
							<li><a>Blog</a></li>
							<li><a>Contact</a></li>
						</ul>
				</div>
			</nav>
    );

}

export default Headed;