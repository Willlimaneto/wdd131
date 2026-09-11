const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function () {

    if (input.value.trim() !== '') {

        const li = document.createElement('li');
        li.textContent = input.value;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '❌';

        deleteBtn.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        li.appendChild(deleteBtn);
        list.appendChild(li);

        input.value = '';
    }

    input.focus();
});