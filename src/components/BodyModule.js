import React, { Component } from 'react';

export default class BodyModule extends Component {
	render() {
		let {config, inputChange, row, index} = this.props;
		return (
			<div className="body_container">
				{
					config.map(block => 
						block.type && block.type === "input" &&
						<div key={block.key} className="input_holder" style={{width: block.width}}>
							{
								block.label &&
								<span className="label">
									{block.label.title}
								</span>
							}
							<input
								value = {row[block.key]}
								onChange = {e => inputChange(e, block.key, index)}
								type = {block.input.type}
								placeholder = {block.placeHolder}
								style = {{textAlign: block.align, right: block.align === "right" && 0}} 
							/>
						</div>
					)
				}
			</div>
		)
	}
}