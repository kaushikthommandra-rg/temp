






document.getElementById('button1').addEventListener('click', getValues);
function getValues(event) {
  event.preventDefault();
  console.log('name + theme')
  var name = document.getElementById('inp1').value
  var theme = document.getElementById('inp2').value
  console.log(name + theme)
  pushToList (name , theme)
}
function pushToList(name , theme) {
  event.preventDefault();
  var table = document.getElementById("list_table")
  var tr = document.createElement('tr')
  var td = document.createElement('td')
  td.appendChild(document.createTextNode(name))
  tr.appendChild(td)
  var td = document.createElement('td')
  td.appendChild(document.createTextNode(theme))
  tr.appendChild(td)
  var td = document.createElement('td')
  td.createTextNode("play")
  tr.appendChild(td)
  table.appendChild(tr)
}
