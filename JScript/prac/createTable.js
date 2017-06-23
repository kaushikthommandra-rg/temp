function tableCreate(rows , col) {
    var body = document.getElementsByTagName('body')[0];
    var tbl = document.createElement('table');
//    tbl.style.width = '20%';
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
tableCreate(4 , 4);
