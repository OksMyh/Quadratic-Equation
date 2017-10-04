

function quadraticEquation() {
    var a = document.getElementById('exitA').value || 1;
    var b = document.getElementById('exitB').value || 0;
    var c = document.getElementById('exitC').value || 0;
    var d;
    d = b * b - 4 * a * c;
    if (d < 0){
      document.getElementById('result').innerHTML = 'Does not exist';
    }else {
      var  x1 = ((- b) + Math.sqrt(d)) / (2 * a);
      var  x2 = ((- b) - Math.sqrt(d)) / (2 * a);
        document.getElementById('result').innerHTML = 'x1 = ' + x1 + ';' + 'x2 = ' + x2;
    }
}
quadraticEquation();