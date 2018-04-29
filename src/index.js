import  './css/index.css';
import  './css/other.css';
import { chat } from './config';


console.log('JavaScript was attached to the page!');

document.addEventListener('DOMContentLoaded', () => {
    console.log('Dom is ready');
    chat();
})



