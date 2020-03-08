module.exports = function towelSort(matrix) {
	let array = [];
	if (typeof matrix === 'undefined') {
		return array;
	}
	for (let i = 0; i < matrix.length; i++) {
		let arrayReverse = [];
		for (let j = 0; j < matrix[i].length; j++) {
			arrayReverse.push(matrix[i][j]);
		}
		if (i % 2 !== 0) {
			arrayReverse.reverse();
			for (let k = 0; k < arrayReverse.length; k++) {
				array.push(arrayReverse[k]);
			}
		} else {
			for (let l = 0; l < arrayReverse.length; l++) {
				array.push(arrayReverse[l]);
			}
		}
	}
	return array;
};
