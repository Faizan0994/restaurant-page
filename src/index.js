import './style.css';
import buildHomeTab from './home';
import buildMenuTab from './menu';
buildHomeTab();

const homeButton = document.getElementById('home');
const menuButton = document.getElementById('menu');

homeButton.onclick = function(){
    //remove current tab's content
    const myNode = document.getElementById('content');
    while (myNode.lastElementChild) {
        myNode.removeChild(myNode.lastElementChild);
    }

    buildHomeTab();//add menu tab's content
}

menuButton.onclick = function(){
    //remove current tab's content
    const myNode = document.getElementById('content');
    while (myNode.lastElementChild) {
        myNode.removeChild(myNode.lastElementChild);
    }

    buildMenuTab();//add menu tab's content
}