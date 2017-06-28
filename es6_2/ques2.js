const root = document.createElement('div');
let cur_root = root;
root.id = 'root'
document.body.appendChild(root);
document.getElementById('root_display').innerHTML = `The current root is : ${cur_root.id}`;

function displayList() {
  // document.getElementById('root_display').innerHTML = `The current root is : ${cur_root.id}`;
  let list_data = cur_root.childNodes;
  if (document.getElementById('display_list')) {
    document.getElementById('list_area').removeChild(document.getElementById('display_list'));
  }
  let list = document.createElement('ul')
  list.id = 'display_list'
  for (let i = 0; i < list_data.length; i++) {
    if (list_data[i].id) {
      let li = document.createElement('li')
      li.innerHTML = list_data[i].id;
      if (list_data[i].class === 'folder') {
        li.addEventListener('click' , setRoot);
        li.style.color = 'red';
      }
      list.appendChild(li);
    }
  }
  document.getElementById('list_area').appendChild(list);
}
function generatePath() {

  //to be considered later
}
function createForm() {
    let block = document.getElementById('create');
    let f = document.createElement("form");
    f.id = "create_form"
    f.addEventListener('submit' , getData);
    let input = document.createElement('input');
    input.placeholder = 'Enter filename/foldername';
    input.id = 'create_input'
    f.appendChild(input);

    let submit = document.createElement('input');
    submit.type = 'button';
    submit.value = "Add File/Folder"
    submit.id = 'create_submit'
    submit.addEventListener('click' , getData);
    f.appendChild(submit);
    block.appendChild(f);
};
createForm();
function getData(event) {
  event.preventDefault();
  let input_name = document.getElementById("create_input").value;
  if (input_name !== '') {
    let temp = input_name.split('.');
    let obj = document.createElement('div');
    obj.class = (temp.length-1)? 'file' : 'folder';
    obj.id = input_name;
    cur_root.appendChild(obj)
    displayList();
    document.getElementById("create_input").value = '';
  }
}
function setRoot() {
  cur_root = document.getElementById(this.innerHTML);
  displayList();
  document.getElementById('root_display').innerHTML = `The current root is : ${cur_root.id}`;
}
function moveUp() {
  if (cur_root !== root) {
    cur_root = cur_root.parentNode;
  }
  document.getElementById('root_display').innerHTML = `The current root is : ${cur_root.id}`;
  displayList();
}
