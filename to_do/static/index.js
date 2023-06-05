const modal = document.getElementById("modal");
const modalContent = document.querySelector(".modal--content")
// const openModal = document.querySelector(".open-modal");
// const closeModal = document.querySelector(".close-modal");

// openModal.addEventListener('click' , () => {
//     modal.classList.remove('modal--hide')
// })


function openModal(){
    console.log('open')
    modal.classList.remove('modal--hide')
}

function closeModal(){
    modal.classList.add('modal--hide')
}

document.addEventListener('keydown', event => {
    if(event.key === 'Escape'){
        closeModal()
    }
})


// Not working
// modalContent.addEventListener('click', e => {
//     if(modalContent.contains(e.target)){
//         console.log('Contains')
//     }
//     else{
//         console.log("Outside")
//         closeModal()
//     }
// })

// ajax request

$(document).on('submit', '#task--form', function(e){
    console.log("Inside ajax")
    e.preventDefault();
    $.ajax({
        type: 'POST',
        url: '/add_task',
        data:{
            email: $('#user_email').val(),
            task_desc: $('#taskDesc').val(),
            due_on: $('#taskDueOn').val(),
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
        },
        success: function(data){
            alert(data)
        }
    });
    document.getElementById('taskDesc').value = "";
    document.getElementById('taskDueOn').value = "";
    closeModal();
});

