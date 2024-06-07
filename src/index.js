import './style.css';
import buildHomeTab from './home';
import buildMenuTab from './menu';
buildHomeTab();

const menuButton = document.getElementById('menu');

menuButton.onclick = function(){
    //remove current tab's content
    const myNode = document.getElementById('content');
    while (myNode.lastElementChild) {
        myNode.removeChild(myNode.lastElementChild);
    }

    buildMenuTab();//add menu tab's content
}