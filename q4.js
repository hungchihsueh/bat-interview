const candidates = [
	{ name: "A", city: "Taipei", probability: 0.1, population: 3000000 },
	{ name: "B", city: "New Taipei", probability: 0.2, population: 4000000 },
	{ name: "C", city: "Taoyuan", probability: 0.3, population: 2000000 },
	{ name: "D", city: "Hsinchu", probability: 0.15, population: 1000000 },
	{ name: "E", city: "Miaoli", probability: 0.25, population: 500000 },
	{ name: "F", city: "Taipei", probability: 0.05, population: 2000000 },
	{ name: "G", city: "Taoyuan", probability: 0.1, population: 1500000 },
];

const ansMap = new Map(); //實例一個Map

/* 
Loop candidates 去看ansMap有沒有city這個key值，
沒有我們就set一個，並給他一個[candidates[i]]為value ，
有的話我們把新的candidate物件新增到value的陣列裡面。
最後我們用Array.from()去轉換成陣列
*/
for (let i = 0; i < candidates.length; i++) {
	if (!ansMap.has(candidates[i].city)) {
		ansMap.set(candidates[i].city,[candidates[i]]) ;
	} else {
		ansMap.set(candidates[i].city, [
			...ansMap.get(candidates[i].city),
			candidates[i],
		]);
	}
}
ansMap.forEach(city=>city.sort((a,b)=>b.probability-a.probability))
let ans = Array.from(ansMap);
console.log(ans);
// console.log(sorted)
