let list = [];



function displaylist() {
    let todolist = '';

    for (let i = 0; i < list.length; i++) {
        const todoObject = list[i];
        const name = todoObject.name;
        const date = todoObject.date;

        const addedhtml = `
        <div class="output">
            <div class="left">
                <p>

                ${todoObject.name}
                </p>
            </div>

            <div class="middle">
                <p>
                ${todoObject.date}
                </p>
            </div>

                <button class="delete" onclick="
                list.splice(${i}, 1);
                displaylist();
                ">Delete</button>
            
            
        </div>`;
        todolist += addedhtml;
    }

    document.querySelector('.container').innerHTML = todolist;
}





function addlist() {
    const inputelement1 = document.querySelector('.listinput');
    const inputelement2 = document.querySelector('.listinputdate');
    const inputelementtext = inputelement1.value;
    const inputelementdate = inputelement2.value;

    if (inputelementtext && inputelementdate) {
        list.push({
            name: inputelementtext,
            date: inputelementdate
        });
        inputelement1.value = '';
        inputelement2.value = '';
        displaylist();
    }
}














































































































const dateInput = document.getElementById('dateInput');

dateInput.addEventListener('focus', function() {
    this.classList.add('active');
})
dateInput.addEventListener('blur', function() {
    this.classList.remove('active');
})
dateInput.addEventListener('click', function() {
    this.showPicker();
})