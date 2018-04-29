import Navigo from 'navigo';
import axios from 'axios';
import { initList } from './messages'

const router = new Navigo();

export const chat = () => {
    router
    .on({
        'chat': (params) => {
            chatScreen();
            initList();
        },
        '*': (params) => {
            loginScreen();
            enterChat();
        }
    })
    .resolve();
}


const loginScreen = () => {
    const body = document.querySelector('body');
    return body.innerHTML = `<p id="start-info">LAIT Chat</p>
    <div class="login">
    <h3>LaIT CHAT</h3>
    <form action="/" method="">
      <label for="login">Username</label>
      <input type="text" id="login" placeholder="Enter your nickname">
      <button class="enter" type="button">Enter Chat</button>
    </form>
  </div>`
}

const chatScreen = () => {
    const body = document.querySelector('body');
    return body.innerHTML = `<p id="start-info">LAIT Chat</p>
    <div class="chat-window">
        <div class="chat-screen">
          <p class="message">user1: example massage</p>
        </div>
        <form action="/" method="">
          <textarea type="text" id="message"  rows="6" cols="50" placeholder="New Massage"></textarea>
          <button class="add" type="button">Add</button>
        </form>
      </div>`;
}

const enterChat = () => {
    const buttonEnter = document.querySelector('.enter');
    const alias = document.querySelector('#login');
    buttonEnter.addEventListener('click', (e) => {
        if (alias.value.trim() !== "") {
        axios
        .post('http://194.182.69.199:3000/chatlogin', {alias: alias.value})
        .then((response) => {
            // return response.data.token
            console.log(response.data.token);
            sessionStorage.token = response.data.token;
            alias.value = "";
            router.navigate('/chat');
        })
        .catch((error) => {
            console.log(error)
        })
        }
        else { console.log('Type your nick')}
    })
    
}

