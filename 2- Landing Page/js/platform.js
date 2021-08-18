/*
Define Global Variables
*/
const platformNavigationMenu = document.querySelector('#platform-navbar-list');
const platformSections = document.querySelectorAll('.platform-section');


/*
Helper Functions
*/



/*
Main Functions
*/

// build the nav
function platformNavigationBarCreation () {
  const platformNavigationBar = document.createDocumentFragment();

  platformSections.forEach((platformSection, i) => {
    const li_platformNavigationMenu = document.createElement('li');  // list element to display in the menu
    const a_platformNavigationMenu = document.createElement('a');    // anchor to go to the section

    a_platformNavigationMenu.innerText = platformSection.getAttribute('data-nav');  // get section name
    a_platformNavigationMenu.setAttribute('class', 'platform-navbar-link');   // set class attribute

    // add anchor to the list element then to the navigation bar
    li_platformNavigationMenu.appendChild(a_platformNavigationMenu);
    platformNavigationBar.appendChild(li_platformNavigationMenu);
  });

  // add navigation bar to navigation menu
  platformNavigationMenu.appendChild(platformNavigationBar);
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/*
Events
*/

// Build menu
platformNavigationBarCreation();

// Scroll to section on link click

// Set sections as active
