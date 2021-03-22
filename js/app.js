/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

let sectionsList = document.getElementsByTagName('section');
const maxSectionsNumber = sectionsList.length;
let navbarMenu = document.querySelector('.navbar__menu');
let newNavList = document.createElement('li')
console.log(sectionsList);

//Building the nav 
let i = 0;
for (i = 0; i < maxSectionsNumber; i++) {
    const newNav = document.createElement('ul');
    const newNavLink = document.createElement('a');
    newNav.setAttribute('class', 'menu__link');

    newNavLink.innerText = `section ${i+1}`;
    newNavLink.setAttribute('href', `#section${i+1}`);
    newNavLink.setAttribute('id', `section${i+1}Link`);

    newNavLink.setAttribute('style', 'color:white');

    newNav.appendChild(newNavLink);
    newNavList.appendChild(newNav);
    console.log(newNav);


}
navbarMenu.appendChild(newNavList)

// Add class 'active' to section when near top of viewport
$(window).scroll(function() {
    let windowScroll = $(window).scrollTop();
    let section1Offset = $('#section1').offset().top;
    if (windowScroll <= section1Offset) {
        $('a.active').removeClass('active');
        $('a:first').addClass('active');



    } else {
        $('section').each(function(i) {
            if (windowScroll + 75 > $(this).position().top) {
                $('a.active').removeClass('active');
                $('a').eq(i).addClass('active');

            }
        })

    }

    let sectionID = $('a.active').attr('href');
    $(`${sectionID}`).addClass('activeSection');
    console.log(sectionID);
    console.log(windowScroll);
})

// Scroll to anchor ID using scrollTO event


// Build menu 

// Scroll to section on link click
$("a[href^='#']").click(function() {
    let aHref = $(this).attr("href");
    let sectionOffset = $(aHref).offset().top;
    $("html,body").animate({ scrollTop: sectionOffset }, 1000);

})

// Set sections as active