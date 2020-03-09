module.exports = function towelSort(matrix) {
	let array = [];
	if (typeof matrix === 'undefined') {
		return array;
	}
	array = matrix.map((array, index) => (index % 2 !== 0 ? array.reverse() : array)).flat();
	return array;
};
