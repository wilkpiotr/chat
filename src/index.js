import  './css/index.css';
import  './css/other.css';
import { chat } from './config';
import { reloadMessages } from './messages'


console.log('JavaScript was attached to the page!');

document.addEventListener('DOMContentLoaded', () => {
    console.log('Dom is ready');
    chat();
    // reloadMessages();
})



