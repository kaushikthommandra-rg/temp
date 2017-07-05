import { Folder } from './Folder'
import { File } from './File'
const paths = {};

const addToPaths = (object) => {
  paths[object.path] = object;
}

const root_folder = new Folder('root_folder', null)
let cur_root = root_folder;
cur_root.displayList()
document.getElementById('root_display').innerHTML = `The current root is : ${cur_root.path}`;

const getData = (event) => {
  document.getElementById('file_error').style.display = 'none'
  document.getElementById('empty_name').style.display = 'none'
  const input_name = document.getElementById('name_input').value;
  if (input_name === '') {
    document.getElementById('empty_name').style.display = 'block';
  } else {
    if (paths[`${cur_root.path}/${input_name}`]) {
      document.getElementById('file_error').style.display = 'block';
    } else {
      const file_folder = input_name.split('.');
      if (file_folder.length - 1) {
        const object = new File(file_folder[0], file_folder[1], cur_root);
        cur_root.addChild(object);
      } else {
        const object = new Folder(input_name, cur_root);
        cur_root.addChild(object);
      }
      cur_root.displayList()
    }
  }
  event.preventDefault();
  document.getElementById('name_input').value = '';
}
document.getElementById('create').addEventListener('click', getData);

const moveUp = () => {
  document.getElementById('file_error').style.display = 'none'
  document.getElementById('empty_name').style.display = 'none'
  if (cur_root !== root_folder) {
    cur_root = cur_root.parent
    cur_root.displayList();
    document.getElementById('root_display').innerHTML = `The current root is : ${cur_root.path}`;
  }
}
document.getElementById('move_up').addEventListener('click', moveUp);

const listClick = (list_element) => {
  document.getElementById('file_error').style.display = 'none'
  document.getElementById('empty_name').style.display = 'none'
  const name = list_element.innerHTML;
  cur_root = paths[`${cur_root.path}/${name}`];
  cur_root.displayList();
  document.getElementById('root_display').innerHTML = `The current root is : ${cur_root.path}`;
}

export { addToPaths, paths, listClick, cur_root }
