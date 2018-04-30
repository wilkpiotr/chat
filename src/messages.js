import axios from 'axios';
import { deleteMessage } from './add-new-msg'



let massageContainer;

const getMessages = () => {
    return axios
    .get('http://194.182.69.199:3000/chat', {
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`
        }
    })
    .then((result) => { 
        return result.data; })
}

const showMessages = (msgs) => {
    return msgs.reduce((html, msg) => {
        if (msg.owner === true) {
        return html + `<div class="message-item" data-owner="${msg.owner}"><div class="message-header"><p class="message-owner">${msg.author}:</p></div><div class="message-content"><p class="message-body" data-owner="${msg.owner}" id="${msg.id}">${msg.message}<img src="/images/delete.png" alt="delete" class="delete-img" width="30px" height="30px"></p></div></div>`;}
        else return html + `<div class="message-item" data-owner="${msg.owner}"><div class="message-header"><p class="message-owner">${msg.author}:</p></div><div class="message-content"><p class="message-body" data-owner="${msg.owner}" id="${msg.id}">${msg.message}</p></div></div>`
    },'');
    
}

export const initList = () => {
    massageContainer = document.querySelector('.chat-screen');
    renderList();
    
}

const renderList = () => {
    getMessages()
    .then((msgs) => {
        massageContainer.innerHTML = showMessages(msgs);
    })
    .then(deleteMessage)
    .then(scrollToBottom)
}

const scrollToBottom = () => {
    massageContainer = document.querySelector('.chat-screen');
    massageContainer.scrollTop = massageContainer.scrollHeight;
}



export const reloadMessages = () => {
    setInterval(initList, 10000);
}