const menuToggleItem = document.querySelector('.nav__menu-toggle');

menuToggleItem.addEventListener('click',handleMenuToggle);

function handleMenuToggle(){
  const menuContainer = document.querySelector('.navbar');
  const menuIcon = menuToggleItem.firstElementChild;

  menuContainer.classList.toggle('active-menu');

  if(menuContainer.classList.contains('active-menu')) {
    menuIcon.classList.add('fa-times');
  }else{
    menuIcon.classList.remove('fa-times');
  }
}
