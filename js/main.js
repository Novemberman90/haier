const MENU_BTN = document.querySelector('.menu__btn');
/* .menu__btn--active */

const MENU_LIST = document.querySelector('.menu__list');
/* .menu__list--active */

const POPUP = document.querySelector('.popup');
/* popup--active */ 

/* catalog slider btn */
// .catalog__control-box
// .catalog__control-prev
// .catalog__control-next

MENU_BTN.addEventListener('click', ()=>{
  MENU_BTN.classList.toggle('menu__btn--active');
  openMenu()
});
390
const openMenu = ()=> {
  document.body.classList.toggle('lock');
  MENU_LIST.classList.toggle('menu__list--active');
}




let isScrolled = false;
const headerScroll = () => {

  const headerActive = document.querySelector('.header'),
        headerWrapper = document.querySelector('.header__wrapper'),
        headerInner = document.querySelector('.header__inner'),
        headerLogo = document.querySelector('.header__logo'),
        hero = document.querySelector('.hero');

  const headerHeight = headerWrapper.offsetHeight;
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  if (scrollPosition >= headerHeight + 50  && !isScrolled) {
    isScrolled = true;
    headerLogo.classList.remove('header__logo--top');
    headerLogo.classList.add('header__logo--scrolled');
    hero.classList.add('hero--active');
    headerActive.classList.remove('header--active');
    headerWrapper.classList.remove('header__wrapper--visible');
    headerInner.classList.remove('header__inner--visible');

    setTimeout(() => {
      headerLogo.classList.remove('header__logo--scrolled');
    }, 10);
      
  } else if (scrollPosition <= headerHeight + 50  && isScrolled) {
    isScrolled = false;
    headerActive.classList.add('header--active');
    hero.classList.remove('hero--active');
    headerWrapper.classList.add('header__wrapper--visible');
    headerInner.classList.add('header__inner--visible');
    headerLogo.classList.add('header__logo--scrolled');
    headerLogo.classList.add('header__logo--top');

    setTimeout(() => {
      headerLogo.classList.remove('header__logo--scrolled');
    }, 10);
  }
};

window.addEventListener('scroll', headerScroll);


