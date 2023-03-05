const candidates = [
	{ name: "A", city: "Taipei", probability: 0.1, population: 3000000 },
	{ name: "B", city: "New Taipei", probability: 0.2, population: 4000000 },
	{ name: "C", city: "Taoyuan", probability: 0.3, population: 2000000 },
	{ name: "D", city: "Hsinchu", probability: 0.15, population: 1000000 },
	{ name: "E", city: "Miaoli", probability: 0.25, population: 500000 },
	{ name: "F", city: "Taipei", probability: 0.05, population: 2000000 },
	{ name: "G", city: "Taoyuan", probability: 0.1, population: 1500000 },
];
let num = 0;
candidates.forEach(({ probability }) => {
	num =(num*100+probability*100)/100
	console.log(num)
});
// console.log(num);
const sortingCandidates = (candidates) => {
	let sorted = candidates.sort((a, b) => {
		return b.city.localeCompare(a.city);
	});
	let groupedarr = [];
	sorted.forEach((candidate, i) => {
		
	})
};
