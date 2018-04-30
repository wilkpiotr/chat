import axios from 'axios';
import { initList } from './messages'


export const addMessage = () => {
    const textMassage = document.querySelector('#message');
    const addButton = document.querySelector('.add');
    addButton.addEventListener('click', (e) => {
        if (textMassage.value.trim() !== "") {
            axios
            .post('http://194.182.69.199:3000/chat/',
            {message: textMassage.value}, 
            {
                headers: {
                    Authorization: `Bearer ${sessionStorage.token}`
                }
            }
            )
            .then(clearForm)
            .then(initList)
        } else { console.log('Type your nick')}
    })
}

const clearForm = () => {
    const textMassage = document.querySelector('#message');
    textMassage.value = "";
}


export const deleteMessage = () => {
    const deleteButtons = document.querySelectorAll('.delete-img');
    Array.from(deleteButtons).forEach(button => {
        button.addEventListener('click', (e) => {
            const msgToRemove = e.target.parentElement.id;
            axios
            .delete('http://194.182.69.199:3000/chat/' + msgToRemove, {
                headers: {
                    Authorization: "Bearer " + sessionStorage.token
                }
            })
            .then(initList)
        })
    })
}
