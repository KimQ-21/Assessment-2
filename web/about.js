console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form has been submitted successfully!');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let mouseover = document.getElementById("duck");

mouseover.addEventListener('mouseover', function(event) {
	alert('You are as awesome as this ducky!');
}
)