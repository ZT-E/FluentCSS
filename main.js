function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);
}

function spaceTheme(){
  swapStyleSheet("fluentspace.css");
}
function lightTheme(){
  swapStyleSheet("fluentlight.css");
}
function darkTheme(){
  swapStyleSheet("fluentdark.css");
}
