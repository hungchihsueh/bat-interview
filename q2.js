const lotteryPrizes = new Map([
	["1", { percentage: 3, amount: 1 }],
	["2", { percentage: 7, amount: 1 }],
	["3", { percentage: 30, amount: 2 }],
	["4", { percentage: 20, amount: 3 }],
	["5", { percentage: 40, amount: 7 }],
]);
const resultOrder = []; //結果順序
const doLottery = (prizes) => {
	let result; //回傳的中獎獎項
	let totalUnit = 0;
	let range = [];

	//判斷還有沒有獎項，如果沒有，回傳"no more prizes"
	if (lotteryPrizes.size > 0) {
		lotteryPrizes.forEach(({ percentage, amount }, key) => {
			let unit = percentage * amount; //以1%為單位，分別算出每個獎項佔了多少單位
			totalUnit += unit; // 計算共有多少單位

			// 把key跟累計的unit當作範圍去見儲存
			range.push({ key, max: totalUnit });
		});
		// 取得sum內隨機數
		let random = Math.floor(Math.random() * totalUnit);

		// 用for loop去看random落在什麼區間
		for (let i = 0; i < range.length; i++) {
			const { key, max } = range[i];
			if (random <= max) {
				result = key;
				// 取得中獎獎項數據
				let preValue = lotteryPrizes.get(key);

				/* 
                判斷該獎項是否只剩一個，
                如果是，把獎項從lotteryPrizes刪除 ，
                如果不是，把獎項數量-1
                */
				if (preValue.amount - 1 === 0) {
					lotteryPrizes.delete(key);
				} else {
					lotteryPrizes.set(key, {
						...preValue,
						amount: preValue.amount - 1,
					});
				}
				// 把得獎獎項加到resultOrder
				resultOrder.push(key);
				break;
			}
		}
	} else {
		result = "no more prizes";
	}

	return result;
};


for (let i = 0; i < 15; i++){
    doLottery();
    console.log(resultOrder)
}
console.log(lotteryPrizes);
