export const viewOrderSort = data => {
  return Object.keys(data).sort(function(a,b){return data[a] - data[b]})
}

export const injectDataPoints = (sourceString, dataPoints) => {
	return Object.keys(dataPoints).reduce((accu,data,i) => {
  	return accu.replace('{' + data + '}', dataPoints[data]);
	},sourceString);
}

export const isEmpty = obj => {
	return Object.keys(obj).reduce((acc,ele,i) => {
		return !obj[ele] && acc;
	},true)
}

export const constructRowObject = config => {
	let obj = config.body.reduce((temp,ele,i,arr) => {
		temp[ele.key] = "";
		return temp;
	},{});
	let arr = [];
	arr.push(obj);
	return arr;
}