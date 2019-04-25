let deliLine = [];
function takeANumber(line, name) {
let place = line.length + 1;
let greeting = 'Welcome, ' + name +'. You are number ' + place + ' in line.'
line.push(name);
return greeting;
}


function nowServing(line) {
let output;
if(line.length === 0) {output = "There is nobody waiting to be served!"}
else {output = 'Currently serving ' + line[0] + '.'
line.shift();
}
return output;
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
