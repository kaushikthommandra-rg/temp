document.body.style.backgroundColor = "grey";
function tableCreate(rows , col) {
  console.log("2q3w45")
    var body = document.getElementsByTagName('body')[0];
    var tbl = document.createElement('table');
    tbl.setAttribute('border', '1');
    var tbdy = document.createElement('tbody');
    for (var i = 0; i < rows; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < col; j++) {
                var td = document.createElement('td');
                td.appendChild(document.createElement('input'))
                td.setAttribute('id' , 'cell'+i+j)
                tr.appendChild(td)
        }
        tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl)
}
document.getElementById('submit').addEventListener('click', getValues);
function remove(id) {
  console.log('abc')
    var elem = document.getElementsByTagName(id);
      for (var i = 0 ; i< elem.length ; i++)  {
        document.body.removeChild(elem[i]) ;
      }
}
function getValues(event) {
  event.preventDefault();
  var a = document.getElementById('inp1').value.split(",")
  if(document.getElementsByTagName('table').length) {
  remove('table')
  }
  tableCreate(a[0] , a[1]);
}
