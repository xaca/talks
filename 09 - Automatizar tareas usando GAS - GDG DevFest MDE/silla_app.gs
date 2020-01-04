var estudiantes = ["Juan","Esteban","Sebastián","Jose","Julian","Cristhian","William","David","Diego","Pedro","Alejandro","Claudia","Jan","Camilo","Cesar","Simon","Mariana","John","Andrés","Victor","Luz","Santiago","Pablo","Emilio"];

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
}

function invertColor(hex, bw) {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    var r = parseInt(hex.slice(0, 2), 16),
        g = parseInt(hex.slice(2, 4), 16),
        b = parseInt(hex.slice(4, 6), 16);
    if (bw) {
        // http://stackoverflow.com/a/3943023/112731
        return (r * 0.299 + g * 0.587 + b * 0.114) > 186
            ? '#000000'
            : '#FFFFFF';
    }
    // invert color components
    r = (255 - r).toString(16);
    g = (255 - g).toString(16);
    b = (255 - b).toString(16);
    // pad each with zeros and return
    return "#" + padZero(r) + padZero(g) + padZero(b);
}

function padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function desordenador() {
  var contador_estudiantes = 0;
  var hoja = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("SillaPark");  
  var filas = 4, columnas = 9;
  var celdas = hoja.getRange(4, 3, filas, columnas);
  var celda,color;
  shuffle(estudiantes);
  
  for(var i= 1; i<=filas; i++)
  {
    for(var j= 1; j<=columnas; j++){
      celda = celdas.getCell(i, j);
      color = getRandomColor();
      celda.setBackground(''+color);
      celda.setWrap(true);
      celda.setFontColor(invertColor(color,true));
      if(contador_estudiantes<estudiantes.length)
      {
        celdas.getCell(i,j).setValue(estudiantes[contador_estudiantes++]);
      }
    }
  }
}