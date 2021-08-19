/*
Define Global Variables
*/
const platformNavigationMenu = document.querySelector('#platform-navbar-list');
const platformSections = document.querySelectorAll('section');
const platformToolSelection = document.querySelectorAll('.tool-selection');
const platformToolDescription = document.querySelectorAll('.tool-description');


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

		// scroll to anchor ID using scroll to event
		a_platformNavigationMenu.addEventListener("click", () => {
			platformSection.scrollIntoView({behavior: "smooth"});
		});

		// add anchor to the list element then to the navigation bar
		li_platformNavigationMenu.appendChild(a_platformNavigationMenu);
		platformNavigationBar.appendChild(li_platformNavigationMenu);
	});

	// add navigation bar to navigation menu
	platformNavigationMenu.appendChild(platformNavigationBar);
}


// identify section in viewport
function getVisibleSectionIndex() {
    let minor = window.innerHeight;
    let visibleSectionIndex = -1;

    platformSections.forEach((platformSection, index) => {
		let offset = platformSection.getBoundingClientRect(); // top border of the section
		if(Math.abs(offset.top) < minor) {    // if top of section is below the benchmark, we are in the section
			minor = Math.abs(offset.top);   // update with the current section top to compare with the next section which one is the most visible
			visibleSectionIndex = index;
		}
    });
    return visibleSectionIndex;
}


// Add class 'active' to section when near top of viewport
function setActiveSection () {
	let visibleSectionIndex = getVisibleSectionIndex();
	const platformNavigationLinks = document.querySelectorAll('.platform-navbar-link');

	// visible section exists
	if (visibleSectionIndex != -1) {
		// loop on each section to show which one we are looking at
		for (let i = 0; i < platformSections.length; i++){
			if (i == visibleSectionIndex) {
				// section visible: add display in nav bar
				platformSections[i].classList.add('platform-navbar-active-section');
				platformNavigationLinks[i].classList.add('platform-navbar-active-section');
			} else {
				// section invisible: remove display in nav bar
				platformSections[i].classList.remove('platform-navbar-active-section');
				platformNavigationLinks[i].classList.remove('platform-navbar-active-section');
			}
		}
	}
}


/*
Tool description display
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

// Set sections as active
document.addEventListener('scroll', setActiveSection);

// display tool description
document.addEventListener('mouseover', displayToolDescription);
