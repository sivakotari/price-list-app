export const config = {
	included: {
		key: "include",
		title: "Include",
		header:[
			{
				title: "Name",
				align: "left",
				width: "30%"
			},
			{
				title: "Amount - Domestic",
				subTitle: "Excluding Tax",
				align: "right",
				width: "20%"
			},
			{
				title: "Amount - International",
				subTitle: "Excluding Tax",
				align: "right",
				width: "20%"
			}
		],
		footer:[
			{
				title: "Total",
				align: "left",
				width: "30%"
			},
			{
				title: "Rs. {totalDomesticPrice} (Estimate)",
				align: "right",
				width: "20%"
			},
			{
				title: "$ {totalInternationalPrice} (Estimate)",
				align: "right",
				width: "20%"
			}
		],
		body: [
			{
				key: "name",
				placeHolder: "Name",
				align: "left",
				type: "input",
				width: "30%",
				input: {
					type: "text"
				},
			},
			{
				key: "domesticPrice",
				placeHolder: "Amount",
				align: "right",
				type: "input",
				input: {
					type: "number"
				},
				label: {
					title: "Rs",
					align: "left"
				},
				width: "20%"
			},
			{
				key: "internationalPrice",
				placeHolder: "Amount",
				align: "right",
				type: "input",
				input: {
					type: "number"
				},
				label: {
					title: "$",
					align: "left"
				},
				width: "20%"
			}
		]
	},
	excluded: {
		key: "exclude",
		title: "Exclude",
		header:[
			{
				title: "Name",
				align: "left",
				width: "100%"
			}
		],
		body: [
			{
				key: "name",
				placeHolder: "Name",
				align: "left",
				type: "input",
				width: "100%",
				input: {
					type: "text"
				},
			}
		]
	},
	buttonText: "console.log",
	view_order: {
		included: 1,
		excluded: 2
	}
};

export const constants = {

};