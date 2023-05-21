const modal = document.getElementById("modal");
const modalContent = document.querySelector(".modal--content")
const openModal = document.querySelector(".open-modal");
const closeModal = document.querySelector(".close-modal");

openModal.addEventListener('click' , () => {
    modal.classList.remove('modal--hide')
})

closeModal.addEventListener('click', () => {
    modal.classList.add('modal--hide')
})

closeModal.addEventListener('keydown', event => {
    console.log("esc works")
    if(event.key === 'Escape'){
        modal.style.display = "none";
        console.log("close")
    }
})

modalContent.addEventListener('click', e => {
    if(!modalContent.contains(e.target)){
        modal.classList.add('modal--hide')
    }
    else{
        console.log("Contains")
    }
})