const textField = document.getElementById('input-text');
const submitFavourite = document.getElementById('submit');
const errorMessage = document.getElementById('error_message');
const listItem = document.getElementById('list-item');
const removeMe = document.getElementById('clickRemove')
let h = document.createElement('li');
submitFavourite.addEventListener('click', submitEvent)
removeMe.addEventListener('click', removeLi);


function submitEvent() {
    if (textField.value === '') {
        errorMessage.innerHTML = 'Please enter your favourite food';
        setTimeout(() => {
            errorMessage.remove()
        }, 3000);

    } else {
       
        h.appendChild(document.createTextNode(textField.value));

        listItem.appendChild(h);

        //clear input field 
        textField.value="";

    }
}

function removeLi(){
    if(removeMe.parentNode){
        removeMe.parentNode.removeChild(h)
    }
}
