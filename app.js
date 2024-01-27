const primaryHeader = document.querySelector('.primary-header');
const primaryNav = document.querySelector('.primary-navigation');
const closeIcon = document.querySelector('.icon-close');
const menuIcon = document.querySelector('.menu-icon');
const dropdownItems = document.querySelectorAll('.dropdown-item');

menuIcon.addEventListener('click',()=>{
    primaryNav.toggleAttribute('data-visible')

    menuIcon.setAttribute('aria-expanded',true);
    closeIcon.setAttribute('aria-expanded',false);
    primaryHeader.toggleAttribute('data-overlay')

})
closeIcon.addEventListener('click',()=>{
    primaryNav.toggleAttribute('data-visible');

    menuIcon.setAttribute('aria-expanded',false);
    closeIcon.setAttribute('aria-expanded',true);
    primaryHeader.toggleAttribute('data-overlay')

})

dropdownItems.forEach((item)=>{
   
   const itemName = item.querySelector('.dropdown-item__name');
    itemName.addEventListener('click',()=>{
        item.classList.toggle('active');
    })

    closeIcon.addEventListener('click',()=>{
        item.classList.remove('active')
    })
})
