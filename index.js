let inp = document.querySelector('#inp');
let list = document.querySelector('#list');

inp.addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        addItem(this.value);
        this.value = "";
    }
})

let addItem = (inp) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${inp}<i></i>`;
    list.appendChild(listItem);
}
