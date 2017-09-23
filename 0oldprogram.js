//baby steps




'
example data
apple \n 
bananna bitch \n
ferret bite

becomes: [apple, bananna bitch, ferret bite].length = 3 and there are a total of 2 newlines
'




//program.js // baby steps
'
var summed = 0;
var limit = process.argv.length;
for (var i = 2; i < limit; i ++) {
	summed = summed + +process.argv[i];
}
console.log(summed);
'