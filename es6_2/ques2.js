const root = document.createElement('div');
let cur_root = root;
root.id = 'root'

function displayList() {
  let list_data = cur_root.childNodes;
  let list = document.createElement('ul')
  for (let i = 0; i < list_data.length; i++) {
    let li = document.createElement('li')
    li.innerHTML = list[i];
    list.appendChild(li);
  }
  document.getElementById('list').appendChild(list);
}
function generatePath() {

  //to be considered later
}
function createForm() {
    let block = document.getElementById('create');
    let f = document.createElement("form");
    f.id = "create_form"
    let input = document.createElement('input');
    input.placeholder = 'Enter filename/foldername';
    input.id = 'create_input'
    f.appendChild(input);

    let submit = document.createElement('input');
    submit.type = 'button';
    submit.value = "Add File/Foler"
    submit.id = 'create_submit'
    submit.addEventListener('click' , getData);
    f.appendChild(submit);
    block.appendChild(f);
};
createForm();
function getData() {
  let input_name = document.getElementById("create_input").value;
  if (input_name !== '') {
    let temp = input_name.split('.');
    let obj = document.createElement('div');
    obj.class = (temp.length-1)? 'file' : 'folder';
    obj.id = input_name;
    if (obj.class === 'file') {
      obj.addEventListener('click' , setRoot);
    }
    cur_root.appendChild(obj)
  }

}
function setRoot() {
  cur_root = this;
  displayList();
}
