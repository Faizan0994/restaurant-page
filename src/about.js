const buildAboutTab = function (){
    const content = document.querySelector('#content');

    const aboutTab = document.createElement('div');
    aboutTab.classList.add("aboutTab");

    const about = document.createElement('div');
    about.classList.add("about");

    const aboutUsHeading = document.createElement('p');
    aboutUsHeading.classList.add("aboutUsHeading");
    aboutUsHeading.textContent = "About Us";
    about.appendChild(aboutUsHeading);

    const dummyText = document.createElement('p');
    dummyText.classList.add("dummyText");
    dummyText.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed delectus esse repudiandae voluptatum. Veritatis incidunt voluptatum quia recusandae error atque inventore fugiat eos optio, debitis sapiente aut. Libero, deserunt possimus.";
    about.appendChild(dummyText);

    aboutTab.appendChild(about);

    content.appendChild(aboutTab);
}

export default buildAboutTab;