import React, { Component } from 'react';
import * as helpers from '../helpers';

export default class FooterModule extends Component {
	render() {
		let {config, totalDomesticPrice, totalInternationalPrice} = this.props;
		// let totalDomesticPrice = 10;
		// let totalInternationalPrice = 15;

		return (
			<div className="footer_container">
				{
					config.map(block => 
						<div key={block.title} className="header" style={{textAlign: block.align, width: block.width}}>
							<span>{helpers.injectDataPoints(block.title, {totalInternationalPrice,totalDomesticPrice})}</span>
						</div>
					)
				}
			</div>
		)
	}
}