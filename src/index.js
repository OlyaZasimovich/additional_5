module.exports = function check(str, bracketsConfig) {
	var firstBracket = '';
	var secondBracket = '';
	var twoBracketsArray = [];
	var oldStr = str;

	for (var i=0; i<=bracketsConfig.length-1; i++) {
		firstBracket = bracketsConfig[i][0];
    secondBracket = bracketsConfig[i][1];
    twoBracketsArray.push(firstBracket + secondBracket);
	};

  
  for (var j=0; j<=oldStr.length / 2; j++) {
    for (var k=0; k<twoBracketsArray.length; k++) {
    	var replaceStr = twoBracketsArray[k];
  		str = str.replace(replaceStr, '');
    };
  };

  if (str.length === 0) {
    console.log("true");
  	return true;
  }

  console.log("false");
  return false;
}
