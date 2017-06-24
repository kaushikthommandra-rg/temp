function tableCreate(rows , col) {
    var body = document.getElementsByTagName('body')[0];
    var tbl = document.createElement('table');
    tbl.setAttribute('border', '1');
    var tbdy = document.createElement('tbody');
    for (var i = 0; i < rows; i += 1) {
        var tr = document.createElement('tr');
        for (var j = 0; j < col; j += 1) {
            var td = document.createElement('td');
            var inp =document.createElement('input')
            inp.setAttribute('id','val'+i+j)
            td.appendChild(inp)
            td.setAttribute('id' , 'cell'+i+j)
            tr.appendChild(td)
        }
        tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl);
}

tableCreate(4,4)

function getValue(id) {
  cell = document.getElementById(id)
  return (Number(cell.value))
}

document.getElementById('val11').value = 3;
function solveSudoku() {

}
function checkSolved() {
    
}
