const buildMenuTab = function(){
    const content = document.querySelector('#content');

    const menuSection = document.createElement('div');
    menuSection.classList.add('menu-section');

    const menu = document.createElement('div');
    menu.classList.add('menu');

    const item1 = document.createElement('div');
    item1.classList.add('food-item');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    p1.textContent = "Zinger Burger";
    p2.textContent = "Rs. 350";
    item1.appendChild(p1);
    item1.appendChild(p2);
    menu.appendChild(item1);

    const item2 = document.createElement('div');
    item2.classList.add('food-item');
    p1 = document.createElement('p');
    p2 = document.createElement('p');
    p1.textContent = "Cheese Patty Burger";
    p2.textContent = "Rs. 350";
    item2.appendChild(p1);
    item2.appendChild(p2);
    menu.appendChild(item2);

    const item3 = document.createElement('div');
    item3.classList.add('food-item');
    p1 = document.createElement('p');
    p2 = document.createElement('p');
    p1.textContent = "Loaded Chicken Cheese Fries";
    p2.textContent = "Rs. 700";
    item3.appendChild(p1);
    item3.appendChild(p2);
    menu.appendChild(item3);

    const item4 = document.createElement('div');
    item4.classList.add('food-item');
    p1 = document.createElement('p');
    p2 = document.createElement('p');
    p1.textContent = "Potato Spirals";
    p2.textContent = "Rs. 200";
    item4.appendChild(p1);
    item4.appendChild(p2);
    menu.appendChild(item4);

    const item5 = document.createElement('div');
    item5.classList.add('food-item');
    p1 = document.createElement('p');
    p2 = document.createElement('p');
    p1.textContent = "Kebab Doners";
    p2.textContent = "Rs. 400";
    item5.appendChild(p1);
    item5.appendChild(p2);
    menu.appendChild(item5);

    const item6 = document.createElement('div');
    item6.classList.add('food-item');
    p1 = document.createElement('p');
    p2 = document.createElement('p');
    p1.textContent = "French Fries";
    p2.textContent = "Rs. 150";
    item6.appendChild(p1);
    item6.appendChild(p2);
    menu.appendChild(item6);

    const item7 = document.createElement('div');
    item7.classList.add('food-item');
    p1 = document.createElement('p');
    p2 = document.createElement('p');
    p1.textContent = "Lasagna";
    p2.textContent = "Rs. 1500";
    item7.appendChild(p1);
    item7.appendChild(p2);
    menu.appendChild(item7);

    const item8 = document.createElement('div');
    item8.classList.add('food-item');
    p1 = document.createElement('p');
    p2 = document.createElement('p');
    p1.textContent = "Alfredo Past";
    p2.textContent = "Rs. 1500";
    item8.appendChild(p1);
    item8.appendChild(p2);
    menu.appendChild(item8);

    const item9 = document.createElement('div');
    item9.classList.add('food-item');
    p1 = document.createElement('p');
    p2 = document.createElement('p');
    p1.textContent = "Mac n Cheese";
    p2.textContent = "Rs. 1300";
    item9.appendChild(p1);
    item9.appendChild(p2);
    menu.appendChild(item9);

    const item10 = document.createElement('div');
    item10.classList.add('food-item');
    p1 = document.createElement('p');
    p2 = document.createElement('p');
    p1.textContent = "Corn Dog";
    p2.textContent = "Rs. 250";
    item10.appendChild(p1);
    item10.appendChild(p2);
    menu.appendChild(item10);

    menuSection.appendChild(menu);

    content.appendChild(menuSection);
}

export default buildMenuTab;