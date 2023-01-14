/*!
* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
function saveVolForm()
{
    formElement  = document.querySelector('#vol_form');
    if(!formElement.reportValidity()) // sprawdzenie czy formularz jest poprawnie wypelniony
        return;
    
    key = (localStorage.length+1);
    var form = {
        'name':document.querySelector('#name').value, 
        'surname':document.querySelector('#surname').value,
        'mail':document.querySelector('#mail').value,
        'phone':document.querySelector('#phone').value,
        'about':document.querySelector('#about').value
    };
    
    localStorage.setItem(key, JSON.stringify(form));
    
    document.querySelector('#name').value = ""; //czyszczenie formularza
    document.querySelector('#surname').value = "";
    document.querySelector('#mail').value = "";
    document.querySelector('#phone').value = "";
    document.querySelector('#about').value = "";
    
    buttonRespond('#form_submit', 1000, "Formularz wysłany");
}