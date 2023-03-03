const N = 314159265358979;
/*
除了1以外，
其餘數列可以看成加偶數減奇數，而相鄰的兩個數絕對值都會差1，
所以當N去掉1長度為偶數（即N為奇數）時，和為1+(-1*(N-1)/2)
當N為偶數時，和為1+N+(-1*(N-2)/2)
*/
const sequenceTotal = (length) =>
	length % 2 === 1
		? 1 + (-1 * (length - 1)) / 2
		: 1 + length + (-1 * (length - 2)) / 2;

    console.log(sequenceTotal(N))