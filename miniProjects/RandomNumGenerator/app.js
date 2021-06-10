generateBtn.addEventListener('click', generate);

function generate(event) {
    event.preventDefault()
    list.textContent = '';
    if (count.value !== '' && +min.value < +max.value) {
        for(let i = 0; i < count.value; i++) {
            let newRandomNum = Math.floor(+min.value + Math.random() * (+max.value + 1 - +min.value));
            let newLi = document.createElement('li');
            newLi.textContent = newRandomNum;
            list.prepend(newLi);
        }
        res.innerHTML = 'Results'
        let newDateAndTime = new Date();
        let dateNow = newDateAndTime.toString().slice(0, -41);
        date.innerHTML = dateNow;
    } else {
        res.innerHTML = 'All values must be entered \nor incorrect data';
    }
}