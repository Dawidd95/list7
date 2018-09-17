function Application(amountNotes, doneNotes) {   //ilosc notatek, ilosc zrobionych
    this.amountNotes = 0;
    this.doneNotes = 0;
}

Application.prototype.addNote = function() {
  //dodanie notatki    //chwycic add note w modal i wtedy mu dac addNote
    //dac tu wywolania kilku funkxji
    let appBody = document.querySelector(".app__body");
    let bodyNote = document.createElement('div');
    let noteData = document.createElement('div');
    let noteTitle = document.createElement('div');
    let noteText = document.createElement('div');
    let noteIcons = document.createElement('div');
    let doneIcon = document.createElement('img');
    let deleteIcon = document.createElement('img');
    let colorsIcon = document.createElement('img');
    let tooltip = document.createElement('div');
    let tooltipLegend = document.createElement('span');
    let white = document.createElement('span');
    let red = document.createElement('span');
    let blue = document.createElement('span');
    let yellow = document.createElement('span');
    let purple = document.createElement('span');

    bodyNote.setAttribute('class', 'body__note');
    noteData.setAttribute('class', 'note__data');
    noteTitle.setAttribute('class', 'note__title');
    noteText.setAttribute('class', 'note__text');
    noteIcons.setAttribute('class', 'note__icons');
    doneIcon.setAttribute('src', 'images/checked.png');
    doneIcon.setAttribute('alt', 'check as done');
    deleteIcon.setAttribute('src', 'images/delete.svg');
    deleteIcon.setAttribute('alt', 'delete');
    colorsIcon.setAttribute('class', 'icons__colors');
    colorsIcon.setAttribute('src', 'images/color-palette.svg');
    colorsIcon.setAttribute('alt', 'change color');
    tooltip.setAttribute('class', 'tooltip');
    tooltipLegend.setAttribute('class', 'tooltip__legend');
    white.setAttribute('class', 'legend__color white');
    red.setAttribute('class', 'legend__color red');
    blue.setAttribute('class', 'legend__color blue');
    yellow.setAttribute('class', 'legend__color yellow');
    purple.setAttribute('class', 'legend__color purple');

    appBody.appendChild(bodyNote);
    bodyNote.appendChild(noteData);
    bodyNote.appendChild(noteTitle);
    bodyNote.appendChild(noteText);
    bodyNote.appendChild(noteIcons);
    noteIcons.appendChild(doneIcon);
    noteIcons.appendChild(deleteIcon);
    noteIcons.appendChild(colorsIcon);
    noteIcons.appendChild(tooltip);
    tooltip.appendChild(tooltipLegend);
    tooltipLegend.appendChild(white);
    tooltipLegend.appendChild(red);
    tooltipLegend.appendChild(blue);
    tooltipLegend.appendChild(yellow);
    tooltipLegend.appendChild(purple);
}

Application.prototype.deleteNote = function() {  //usuniecie notatki

}

Application.prototype.countNotes = function() { //zliczenie ilosci notatek

}

Application.prototype.countDone = function() { //zliczenie zrobionych notatek

}

Application.prototype.countDonePercentage = function() { //obliczenie procentu zrobionych notatek

}


let app = new Application();



