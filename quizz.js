const readline = require('readline');

function displayWord(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question(query, ans => {
        rl.close();
        console.log(' ' + answer);
        next();
    });
}

let answer;
function selectWord() {
	let size = dictionnary.length;
	let word;
	while (!word) {
		let index = Math.floor(Math.random()*size);
		let language = Math.round(Math.random());
		word = dictionnary[index][language];
		answer = dictionnary[index][(language+1)%2];
	}
	while (word.startsWith(' ')) {
		let arr = word.split('');
		arr.shift();
		word = arr.join('');
	}
	return word;
}

function next() {
	displayWord(selectWord());
}

fs = require('fs')
let dictionnary = [];
fs.readFile('lessons.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  let lines = data.split('\n');
  for (line of lines) {
  	if (line === '' || line.startsWith('LESSON')) continue;
  	let vocab = line.split('-');
  	dictionnary.push([vocab[0],vocab[1]]);
  }
  next();
});
