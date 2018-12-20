import React, { Component } from 'react';
import HeaderModule from '../components/HeaderModule';
import FooterModule from '../components/FooterModule';
import BodyModule from '../components/BodyModule';
import * as helpers from '../helpers';

class PriceModule extends Component {
	constructor(props){
		super(props);
		this.state = {
			arr: []
		}
	}

	componentDidMount(){
		//setting state with empty row
  	let {config} = this.props;
  	let arr = helpers.constructRowObject(config);
  	this.setState({
  		arr
  	})
	}

	inputChange(e,key,i){
		let {config,storeRecords} = this.props;
		let emptyRow = {...this.state.arr[this.state.arr.length-1]};
		let arr = [...this.state.arr];
		arr[i][key] = e.target.value;
		//check for row isEmpty
		if (!helpers.isEmpty(arr[i]) && !arr[i+1]) {
			arr.push(emptyRow);
		}
		if(helpers.isEmpty(arr[i])){
			arr.splice(i,1);
		}
		this.setState({
			arr
		});
		storeRecords(config.key, arr);
	}

  render() {
  	let {config, totalDomesticPrice, totalInternationalPrice} = this.props;
  	let {arr} = this.state;
    return (
      <div className="price_module_container">
    		{
    			config.title &&
    			<div className="price_module_title">{config.title}</div>
    		}
      	<div className="price_module_inner_container">
      	{
      		config.header &&
	      	<div className="price_module_block price_module_header">
	      		<HeaderModule config={config.header} />
	        </div>
      	}
      	{
      		arr.map((row,i) =>
	  				<div key={i} className="price_module_block price_module_body">
	  					<BodyModule config={config.body} inputChange={this.inputChange.bind(this)} row={row} index={i} />
	  			  </div>
      		)
      	}
      	{
      		config.footer &&
	      	<div className="price_module_block price_module_footer">
	      		<FooterModule config={config.footer} totalDomesticPrice={totalDomesticPrice} totalInternationalPrice={totalInternationalPrice} />
	        </div>
      	}
        </div>
      </div>
    )
  }
}

export default PriceModule;