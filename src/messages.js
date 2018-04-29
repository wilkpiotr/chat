import axios from 'axios';


let massageContainer;

const getMessages = () => {
    // const msgContainer = document.querySelector('.chat-screen');
    return axios
    .get('http://194.182.69.199:3000/chat', {
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`
        }
    })
    .then((result) => { 
        console.log(result.data)
        return result.data; })
}

const showMessages = (msgs) => {
    return msgs.reduce((html, msg) => {
        console.log(msg.owner)
        return html + `<div class="message-item" data-owner="${msg.owner}"><div class="message-header"><span class="message-owner">${msg.author}:</span></div><div class="message-content"><span class="message-body">${msg.message}</span></div></div>`;
        console.log(html)
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
}