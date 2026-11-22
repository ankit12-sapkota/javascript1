'use strict';
const names = ['John', 'Paul', 'Jones'];
const html_list = document.querySelector('#target');

for (let i = 0; i < names.length; i++) {
    html_list.innerHTML += `<li>${names[i]}</li>`;
}