import React from 'react';
import {Component} from 'react';

class SkillSet extends Component {
	render() {
		return (
			<div>
				<h2>Skill sets</h2>
				<p>List of skills:</p>
				<ol>
					<li>Javascript</li>
					<ul> ES6 </ul>
					<ul> React </ul>
					<ul> Angular </ul>
					<br />
					<li>Github</li>
					<li>Ruby on Rails</li>
					<li>Chrome</li>
					<li>SEO</li>
				</ol>
			</div>
		);
	}
}

export default SkillSet;
