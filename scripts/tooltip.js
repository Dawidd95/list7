/*
let colors = document.querySelectorAll(".icons__colors");
let tooltip = document.querySelectorAll(".tooltip");
let tooltipLegend = document.querySelectorAll(".tooltip__legend");


for(let i = 0; i < colors.length; i++) {
	colors[i].addEventListener("click", function() {
		tooltipLegend[i].style.visibility = "visible";
		tooltip[i].style.visibility = "visible";
	});
	
	window.addEventListener("click", function(event) {
    	if (event.target !== colors[i]) {
        	tooltip[i].style.visibility = "hidden";
        	tooltipLegend[i].style.visibility = "hidden";
    	}
	});
}
*/

let checkbox = document.querySelector(".checkbox");
let tooltip = document.querySelector(".tooltip");
let noteData = document.querySelector(".note__data")
let noteTitle = document.querySelector(".note__title");
let noteText = document.querySelector(".note__text");


/*
checkbox.addEventListener("mouseover", show);

checkbox.addEventListener("mouseout", function() {
	tooltip.style.display = "none";
})
*/
checkbox.addEventListener("change", function() {
	if (this.checked) {
		noteData.style.textDecoration = "line-through";
		noteTitle.style.textDecoration = "line-through";
		noteText.style.textDecoration = "line-through";
	} else {
		noteData.style.textDecoration = "none";
		noteTitle.style.textDecoration = "none";
		noteText.style.textDecoration = "none";
	}	
})


