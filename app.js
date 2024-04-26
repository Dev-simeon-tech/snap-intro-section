const primaryHeader = document.querySelector('.primary-header');
const primaryNav = document.querySelector('.primary-navigation');
const closeIcon = document.querySelector('.icon-close');
const menuIcon = document.querySelector('.menu-icon');
const dropdownItems = document.querySelectorAll('.dropdown-item');
const hero = document.querySelector('.hero')

menuIcon.addEventListener('click',()=>{
    primaryNav.toggleAttribute('data-visible')

    menuIcon.setAttribute('aria-expanded',true);
    closeIcon.setAttribute('aria-expanded',false);
    hero.toggleAttribute('data-overlay') 

})
closeIcon.addEventListener('click',()=>{
    closeSideNav();
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

const closeSideNav = ()=>{
    primaryNav.toggleAttribute('data-visible');

    menuIcon.setAttribute('aria-expanded',false);
    closeIcon.setAttribute('aria-expanded',true);
    hero.toggleAttribute('data-overlay');
}

document.addEventListener('click', (e)=>{
    if(!primaryHeader.contains(e.target)){
        closeSideNav();
    }
})