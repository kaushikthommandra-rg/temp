/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.getElementById('name_input').value = '';
document.getElementById('create').addEventListener('click', getData);
document.getElementById('move_up').addEventListener('click', moveUp);
document.getElementById('search').addEventListener('click', search);
class Folder {
  constructor(name, parent = null) {
    this.name = name;
    this.parent = parent;
    this.type = 'folder';
    this.children = [];
    if (this.parent) {
      this.path = `${cur_root.path}/${name}`;
    } else {
      this.path = 'root';
    }
    paths[this.path] = this;
  }

  addChild(child) {
    this.children.push(child);
  }

  generateList() {
    document.getElementById('file_error').style.display = 'none';
    document.getElementById('empty_name').style.display = 'none';
    if (document.getElementById('display_list')) {
      document.getElementById('list_area').removeChild(document.getElementById('display_list'));
    }
    const list_data = this.children;
    const list = document.createElement('ul');
    list.id = 'display_list';
    for (let i = 0; i < list_data.length; i++) {
      const li = document.createElement('li');
      if (list_data[i].type === 'folder') {
        li.innerHTML = list_data[i].name;
        li.addEventListener('click', listClick);
        li.style.color = 'red';
      } else {
        li.innerHTML = `${list_data[i].name}.${list_data[i].extension}`;
      }
      list.appendChild(li);
    }
    document.getElementById('list_area').appendChild(list);
  }

  setRoot() {
    cur_root = this;
    cur_root.generateList();
    document.getElementById('path').innerHTML = `The current Directory is: ${cur_root.path}`;
  }
}

class File {
  constructor(name, extension, parent) {
    this.name = name;
    this.extension = extension;
    this.parent = parent;
    this.type = 'file';
    this.path = `${cur_root.path}/${name}.${extension}`;
    paths[this.path] = this;
  }
}

const paths = {};
const root = new Folder('root');
let cur_root = root;
document.getElementById('path').innerHTML = `The current Directory is: ${cur_root.path}`;
function getData() {
  const input_name = document.getElementById('name_input').value;
  if (input_name === '') {
    document.getElementById('empty_name').style.display = 'block';
  } else {
    if (paths[`${cur_root.path}/${input_name}`]) {
      document.getElementById('file_error').style.display = 'block';
    } else {
      const input_data = input_name.split('.');
      if (input_data.length - 1) {
        const obj = new File(input_data[0], input_data[1], cur_root);
        cur_root.addChild(obj);
      } else {
        const obj = new Folder(input_data[0], cur_root);
        cur_root.addChild(obj);
      }
      cur_root.generateList();
    }
  }
  document.getElementById('name_input').value = '';
}

function listClick() {
  document.getElementById('file_error').style.display = 'none';
  document.getElementById('empty_name').style.display = 'none';
  const name = this.innerHTML;
  for (let i = 0; i < cur_root.children.length; i++) {
    if (cur_root.children[i].name === name && cur_root.children[i].type === 'folder') {
      cur_root.children[i].setRoot();
      break;
    }
  }
}

function moveUp() {
  document.getElementById('file_error').style.display = 'none';
  document.getElementById('empty_name').style.display = 'none';
  if (cur_root.parent) {
    cur_root.parent.setRoot();
  }
}

function searchClick() {
  const path = this.innerHTML;
  paths[path].parent.setRoot();
}

function search() {
  if (document.getElementById('search_list')) {
    document.getElementById('search_area').removeChild(document.getElementById('search_list'));
  }
  const search_list = document.createElement('ul');
  search_list.id = 'search_list';
  const name = document.getElementById('search_input').value;
  if (name !== '') {
    const paths_list = Object.keys(paths);
    for (let i = 0; i < paths_list.length; i++) {
      if (paths_list[i].includes(name)) {
        const list_data = document.createElement('li');
        list_data.innerHTML = paths_list[i];
        list_data.addEventListener('click', searchClick);
        list_data.style.color = 'red';
        search_list.appendChild(list_data);
      }
    }
  }
  document.getElementById('search_area').appendChild(search_list);
  document.getElementById('search_input').value = '';
}

/***/ })
/******/ ]);