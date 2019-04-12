alert('Systems:ACTIVE')
var readit = document.createElement('div');
var stopp = document.createElement('div');
var cyka = false;
readit.style = 'background-color:black;color:green;';
stopp.style = 'color:red;background-color:black;border-color:white;';
stopp.onclick = 'cyka = true;';
stopp.innerHTML = 'X';
readit.innerHTML = 'Click on something to begin';
document.addEventListener('click',function(event){
  if (cyka) {
    {}
  } else {
    event.target.innerHTML = prompt('What do you want to replace the text with?');
    var it = event.target;it += "<br>";it += event.target.innerHTML;it += "<br>";it += event.target.style;it += "<br>";it += event.target;
    readit.innerHTML = it;
  }
});
document.body.appendChild(readit);
document.body.readit.appendChild(stopp);
