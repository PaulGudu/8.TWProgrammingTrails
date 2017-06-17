const loadItems = require('./loadItems.js');
items = loadItems();
module.exports = function main(input) {
	numbers = input.split('');
	var string = "";
	for (var i = 0; i < numbers.length; i++) {
		string += items[0][numbers[i]] ; 
	}
	string += "\n";
	for (var i = 0; i < numbers.length; i++) {
		string += items[1][numbers[i]]; 
	}
	string += "\n";
	for (var i = 0; i < numbers.length; i++) {
		string += items[2][numbers[i]]; 
	}
	string += "\n";
    return string;
};