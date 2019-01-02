//Question 2: Write a javascript function that takes an array of numbers and a target number. 
//The function should find two different numbers in the array that, when added together, give the target number. 
//For example: answer([1,2,3], 4)should return [1,3]

const AddFinder = (arr, target) => {
	for (var i = 0; i < arr.length; i++) {
		for (var j = i+1; j < arr.length; j++) {
			if((arr[i] + arr[j]) === target){
				return [arr[i], arr[j]];
			}
		}
	}
	return 'no two values add up to form the target';
}

AddFinder([1,2,3], 4);