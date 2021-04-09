function findSolution(target) {

	function find(current, history) {
		
		if (current == target) {
		return history;

		} else if (current > target) {
		return null;

		} else {
		return find(current * 3, `(${history} * 3)`) || find(current + 5, `(${history} + 5)`);  
		}	
	}

	return find(1, "1");
}

const min = (x,y) => x < y ? x : y

const isEven = (x) => Math.abs(x) <= 1 & 0 ? false : x % 2 == 0 ? true : false

function isEven2(n) {
	if (n == 0) return true;
	else if (n == 1) return false;
	else if (n < 0) return isEven(-n);
	else return isEven(n - 2);
}

const isEven3 = (x) => x == 0 ? true : x == 1 ? false : x < 0 ? isEven3(-x) : isEven3(x-2)

console.log(isEven3(-32))
//0.045


function letterCounter (text, letter) {

	let counter = 0

	for (let i = 0; i < text.length; i++) {
		if (text[i] === letter) {
			counter++
		}  
	}
		
	return counter

}
function countS(text) {
	return letterCounter(text, 's')
}