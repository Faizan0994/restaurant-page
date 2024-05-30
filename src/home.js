const buildHomeTab = function (){

    const content = document.querySelector('#content');

    const homeTab = document.createElement('div');
    homeTab.classList.add('home');

    const pic = document.createElement('div');
    pic.classList.add('pic');
    homeTab.appendChild(pic);

    const mainText = document.createElement('div');
    mainText.classList.add('main-text');
    const text = document.createElement('p');
    text.textContent = "FAST FOOD FROM HEAVEN";
    mainText.appendChild(text);

    homeTab.appendChild(mainText);

    content.appendChild(homeTab);
}

export default buildHomeTab;