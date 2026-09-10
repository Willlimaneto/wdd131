const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');
const li = document.createElement('li');
const deletedButton = document.createElement('button');
li.textContent = input.value;
 deletedButton.textContent = '❌';
 li.append('deletedButton');
 list.append('li');