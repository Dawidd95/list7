let addNote = document.querySelector(".content__button");
let title = document.querySelector(".title__input");
let text = document.querySelector(".description__input");



addNote.addEventListener('click', function() {
	let appBody = document.querySelector(".app__body");
    let bodyNote = document.createElement('div');
    let noteData = document.createElement('div');
    let noteTitle = document.createElement('div');
    let noteText = document.createElement('div');
    let noteActions = document.createElement('div'); 
    let done = document.createElement('img');
    let undone = document.createElement('img');
    let del = document.createElement('img');

    bodyNote.setAttribute('class', 'body__note');
    noteData.setAttribute('class', 'note__data');
    noteTitle.setAttribute('class', 'note__title');
    noteText.setAttribute('class', 'note__text');
    noteActions.setAttribute('class', 'note__actions');
    done.setAttribute('src', 'images/done.svg');
    done.setAttribute('alt', 'check as done')
    undone.setAttribute('src', 'images/undone.svg');
    undone.setAttribute('alt', 'check as undone')
    del.setAttribute('src', 'images/delete.svg');
    del.setAttribute('alt', 'delete');

    appBody.appendChild(bodyNote);
    bodyNote.appendChild(noteData);
    bodyNote.appendChild(noteTitle);
    bodyNote.appendChild(noteText);
    bodyNote.appendChild(noteActions);
    noteActions.appendChild(done);
    noteActions.appendChild(undone);
    noteActions.appendChild(del);

    noteData.innerHTML = new Date().toLocaleDateString("en-US"); //ustawia date 
    noteTitle.innerHTML = title.value;
    noteText.innerHTML = text.value;

    done.onclick = checAsDone;
    undone.onclick = checAsUndone;
    del.onclick = deleteNote;

    function checAsDone() {
		noteData.style.textDecoration = "line-through";
        noteTitle.style.textDecoration = "line-through";
        noteText.style.textDecoration = "line-through";
	}

	function checAsUndone() {
        noteData.style.textDecoration = "none";
        noteTitle.style.textDecoration = "none";
        noteText.style.textDecoration = "none";
    }

    function deleteNote() {
       appBody.removeChild(bodyNote);
    }
});

