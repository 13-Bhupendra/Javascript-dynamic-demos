const input = document.getElementById("input");
const add_btn = document.getElementById("add_btn");
const noteContent = document.getElementById("noteContent");

let notes = JSON.parse(localStorage.getItem("notes")) || [];
let editIndex = 0;
let isEdit = false;

function displayNotes() {
    noteContent.innerHTML = "";

    notes.forEach((note, index) => {
        const p = document.createElement("p");
        p.textContent = note;

        const edit_btn = document.createElement("button");
        edit_btn.className = "edit_btn";

        edit_btn.textContent = "Edit";
        edit_btn.addEventListener("click", () => editTask(index));

        const remove_btn = document.createElement("button");
        remove_btn.className = "remove_btn";

        remove_btn.textContent = "Remove";
        remove_btn.addEventListener("click", () => removeNotes(index));

        const div = document.createElement("div");
        div.className = "Div"

        div.appendChild(p);
        div.appendChild(edit_btn);
        div.appendChild(remove_btn);

        noteContent.appendChild(div);
    });
}

function addNotes() {
    const value = input.value.trim();
    if (value) {
        notes.push(value);
        localStorage.setItem("notes", JSON.stringify(notes));
        input.value = "";
        displayNotes();
    }
}

function editTask(index) {
    input.value = notes[index];
    isEdit = true;
    editIndex = index;
}

function removeNotes(index) {
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
}

add_btn.addEventListener("click", function () {
    if (isEdit) {
        notes[editIndex] = input.value.trim();
        isEdit = false;
    } else {
        addNotes();
    }
    localStorage.setItem("notes", JSON.stringify(notes));
    input.value = "";
    displayNotes();
});

 
displayNotes();
