let deliLine = [];
function takeANumber(line, name) {
let place = line.length + 1;
let greeting = 'Welcome, ' + name +'. You are number ' + place + ' in line.'
return greeting;
line.push(name);
}


function nowServing(line) {
if(line.length === 0) {return "There is nobody waiting to be served!"}
else { return `Currently serving ${line[0]}.`
line.shift();

}
}


function currentLine() {
if(line.length === 0) {output = "The line is currently empty."}
else {
  for( let i = 0; i<linelength; i++) {
    output = i+1 +'. ' + line[i];
  }
}
return output;
}
