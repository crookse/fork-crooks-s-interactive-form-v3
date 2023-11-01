/***
    Instructions 2:
    -Focus on first text input field
***/

const nameInput = document.querySelector('input[type=text]');
nameInput.focus();


/***
    Instructions 3:
    -Initially hide other-job-role text input
    -addEventListener to "Job Role" <select> for 'change', on 'change' display/hide the text input
***/ 
const otherJobInput = document.querySelector('#other-job-role');
otherJobInput.style.display = 'none';

const jobSelect = document.querySelector("#title");
jobSelect.addEventListener('change', (e) => {
    if (e.target.value === 'other'){
        otherJobInput.style.display = 'block';
    } else {
        otherJobInput.style.display = 'none';
    }
})


/***
    Instructions 4:
    -disable color <select>
    -set up design <select> to listen for 'change' --> when change detected --> color <select> enabled --> color <select> displays available color
    -not: color dropdown should display only the color options associated with the selected design
***/
const colorMenu = document.querySelector("#color");
const colorLabel = colorMenu.parentElement;
const designMenu = document.querySelector('#design');
colorMenu.style.display = 'none';
colorLabel.style.display = 'none';

designMenu.addEventListener('change', (e) => {
    colorMenu.style.display = 'block';
    colorLabel.style.display = 'block';
})