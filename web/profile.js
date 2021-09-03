function handleColorSubmit(evt){
    evt.preventDefault();
    alert('Favorite color is black.')
}


const color = document.querySelector('button#color');
color.addEventListener('click', handleColorSubmit);

function handlePlaceSubmit(evt){
    evt.preventDefault();
    alert('Favorite color is Kalispell, Montana')
}

const place = document.querySelector('button#place');
place.addEventListener('click', handlePlaceSubmit);


function handleRitualSubmit(evt){
    evt.preventDefault();
    alert('I have no rituals')
}

const ritual = document.querySelector('button#ritual');
ritual.addEventListener('click', handleRitualSubmit);



