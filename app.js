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
        ul.innerHTML +=`<li>${languageInput.value}</li>`;
        languageInput.value = '';
        javascriptControl();
    }
   
};

const javascriptControl = () => {
    document.querySelectorAll('ul li').forEach((language) =>{ const alphabet = language.textContent.toLowerCase();
        if(alphabet === 'javascript') {
            language.className = 'red';
        }

    });
};

delBtn.onclick = function () {
    ul.childElementCount > 0
      ? ul.removeChild(ul.lastElementChild)
      : alert('There are no languages!');
  };

languageInput.addEventListener('keydown', (e)=> {
    console.log(e);
    if(e.code === 'Enter'){
        addBtn.onclick();
    }
    if (e.code === 'Delete') {
        delBtn.onclick();
      }

});

window.onload = () => {
    javascriptControl();
    languageInput.focus();
};