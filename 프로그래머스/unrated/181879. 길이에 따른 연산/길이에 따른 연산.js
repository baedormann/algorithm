const solution = num_list => num_list.reduce((acc, item) => num_list.length >= 11 ? acc += item :  acc *= item)