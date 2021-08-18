/*
Define Global Variables
*/
const platformNavigationMenu = document.querySelector('#platform-navbar-list');
const platformSections = document.querySelectorAll('.platform-section');
const platformToolSelection = document.querySelectorAll('.tool-selection');
const platformToolDescription = document.querySelectorAll('.tool-description');


/*
Helper Functions
*/



/*
Navigation bar creation
*/

// build the nav
function platformNavigationBarCreation () {
  const platformNavigationBar = document.createDocumentFragment();

  platformSections.forEach((platformSection, i) => {
    const wrapper_platformNavigationMenu = document.createElement('div');
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
Tool selection animation
*/
function displayToolDescription (evt) {
  // identify which tool is selected
  platformToolSelection.forEach((item, i)=>{
    if (evt.target.id == item.id) {
      platformToolDescription[i].style.display = 'inherit';
    } else {
      platformToolDescription[i].style.display = 'none';
    }
  });
}


/*
Events
*/

// Build menu
platformNavigationBarCreation();

// Scroll to section on link click

// Set sections as active


// display tool description
document.addEventListener('mouseover', displayToolDescription);
