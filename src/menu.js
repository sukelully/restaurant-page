export function buildMenuPage() {
    document.addEventListener('DOMContentLoaded', () => {
        const content = document.getElementById('content');

        const menuHeading = document.createElement('h1');
        menuHeading.textContent = 'Menu';

        const breakfastHeading = document.createElement('h2');
        breakfastHeading.textContent = 'Big Bear Breakfasts';

        const bearlyAwake = createMenuItem('BEARLY AWAKE', 'Full English with extra everything. Comes with regret and toast.', '£10');
        const theCubClub = createMenuItem('THE CUB CLUB', 'Kid-sized breakfast minus the tantrums (hopefully).', '£6');

        content.appendChild(menuHeading);
        content.appendChild(breakfastHeading);
        content.appendChild(bearlyAwake);
        content.appendChild(theCubClub);
    });
}

function createMenuItem(heading, description, price) {
    const menuItemContainer = document.createElement('div');
    menuItemContainer.classList.add('menu-option');

    const menuItemHeading = document.createElement('h3');
    menuItemHeading.textContent = `${heading}`;

    const menuItemDescription = document.createElement('p');
    menuItemDescription.textContent = `${description}`;

    const menuItemPrice = document.createElement('p');
    menuItemPrice.textContent = `${price}`;

    menuItemContainer.appendChild(menuItemHeading);
    menuItemContainer.appendChild(menuItemDescription);
    menuItemContainer.appendChild(menuItemPrice);

    return menuItemContainer;
}