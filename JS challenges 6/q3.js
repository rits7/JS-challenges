//Question 3: Write a function that converts HEX to RGB. 
//Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB
// and if you enter RGB color format it returns HEX.

const HexLetterToIntConverter = letter => {
	let int = 0;
	switch (letter) {
		case 'A':
			int = 10;
			break;
		case 'B':
			int = 11;
			break;
		case 'C':
			int = 12;
			break;
		case 'D':
			int = 13;
			break;
		case 'E':
			int = 14;
			break;
		case 'F':
			int = 15;
			break;
		default:
			int = 0;
			break;
	}
	return int;
}

const HexIntToLetterConverter = Int => {
	let letter = '';
	switch (Int) {
		case 10:
			letter = 'A';
			break;
		case 11:
			letter = 'B';
			break;
		case 12:
			letter = 'C';
			break;
		case 13:
			letter = 'D';
			break;
		case 14:
			letter = 'E';
			break;
		case 15:
			letter = 'F';
			break;
		default:
			letter = '';
			break;
	}
	return letter;
}

const HexToDecimalConverter = hex => {
	let hexArr = [];
	let decimal = 0;
	for (var i = 0; i < hex.length; i++) {
		//console.log(hex[i]);
		let num = 0;
		if(isNaN(Number(hex[i]))){
			//console.log('not num');
			num = HexLetterToIntConverter(hex[i]);
		}else{
			num = Number(hex[i]);
		}
		hexArr.unshift(num);
	}
	for(var j = 0; j<hexArr.length; j++){
		decimal = decimal + (hexArr[j] * (16 ** j));
	}
	return decimal;
}

const DecimalToHexConverter = decimal => {
	let hexArr = [];
	let intDiv = Math.floor(decimal / 16);
	let rem = ((decimal / 16) - intDiv) * 16;
	//console.log(intDiv, rem);
	hexArr.unshift(rem);
	while(intDiv != 0){
		let div = intDiv / 16;
		intDiv = Math.floor(div);
		rem = ((div) - intDiv) * 16;
		//console.log(intDiv, rem);
		hexArr.unshift(rem)
	}
	//console.log(hexArr);
	hex = '';
	for(var i = 0; i<hexArr.length; i++){
		if(hexArr[i] < 10){
			hex = hex + hexArr[i];
		}else{
			hex = hex + HexIntToLetterConverter(hexArr[i]);
		}
	}
	return hex;
}

const HexToRgbConverter = hex => {
	const hexArr = [
		hex[1] + hex[2],
		hex[3] + hex[4],
		hex[4] + hex[5]
	];
	let r, g, b = 0;
	r = HexToDecimalConverter(hexArr[0]);
	g = HexToDecimalConverter(hexArr[1]);
	b = HexToDecimalConverter(hexArr[2]);
	return `(${r}, ${g}, ${b})`;
}

const RgbToHexConverter = (r, g, b) => {
	return `#${DecimalToHexConverter(r)}${DecimalToHexConverter(g)}${DecimalToHexConverter(b)}`;
}

const ColorFormatConverter = value => {
	if(value[0] === '#'){
		return HexToRgbConverter(value);
	}else{
		rgbArr = [];
		let i = 0;
		while (i < value.length) {
			num = '';
			while (value[i] != ',' && i < value.length) {
				num = num + value[i];
				i++;
			}
			rgbArr.push(num);
			i = i + 2;
		}
		let r = Number(rgbArr[0]);
		let g = Number(rgbArr[1]);
		let b = Number(rgbArr[2]);
		return RgbToHexConverter(r, g, b);
	}
}

HexToRgbConverter("#64432D");          //"(100, 67, 50)"
RgbToHexConverter(100,67,45);         //"#64432D"
