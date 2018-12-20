import React, { Component } from 'react';
import '../styles/App.css';
import {config} from '../constants';
import * as helpers from '../helpers';
import PriceModule from './PriceModule';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
      totalDomesticPrice: 0,
      totalInternationalPrice: 0
    }
	}

  storeRecords(key, array){
    let temp = {...this.state};
    //removing empty rows
    let filteredArr = array.filter((dataObj,i,arr) => 
      !helpers.isEmpty(dataObj) && dataObj
    );
    temp[key] = [...filteredArr];

    let totalDomesticPrice = 0,totalInternationalPrice = 0;
    temp.include && temp.include.map((dataObj,i) => {
      totalDomesticPrice += Number(dataObj.domesticPrice);
      totalInternationalPrice += Number(dataObj.internationalPrice);
    })

    this.setState({
      ...temp,
      totalDomesticPrice,
      totalInternationalPrice
    })
  }

  buttonClick(){
    console.log({...this.state});
  }

  render() {
    let {totalDomesticPrice, totalInternationalPrice} = this.state;
    return (
      <div className="app">
      {
        config.view_order && helpers.viewOrderSort(config.view_order).map(module =>
          <PriceModule key={config[module].id} config={config[module]} storeRecords={this.storeRecords.bind(this)} totalDomesticPrice={totalDomesticPrice} totalInternationalPrice={totalInternationalPrice} />
        )
      }
      <button onClick={this.buttonClick.bind(this)}>{config.buttonText}</button>

      </div>
    );
  }
}

export default App;
