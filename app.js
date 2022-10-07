const languageInput = document.querySelector('.language');
const delBtn = document.getElementById('delete');
const addBtn = document.getElementById('add');

const languageSection = document.querySelector('#language-section');


const ul = document.createElement('ul');
languageSection.appendChild(ul);

addBtn.onclick = function() {
    if (!languageInput.value){
        alert('Please write a language');
    } else{
        ul.innerHTML=`<li>${languageInput.value}</li>`;
        languageInput.value = '';
    }
   
}