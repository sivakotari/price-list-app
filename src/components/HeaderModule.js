import React, { Component } from 'react';

export default class HeaderModule extends Component {
	render() {
		let {config} = this.props;

		return (
			<div className="header_container">
				{
					config.map(block => 
						<div key={block.title} className="header" style={{textAlign: block.align, width: block.width}}>
							<span>{block.title}</span>
							{
								block.subTitle &&
								<div className="subHeader" style={{textAlign: block.align}}>
									{block.subTitle}
								</div>
							}
						</div>
					)
				}
			</div>
		)
	}
}