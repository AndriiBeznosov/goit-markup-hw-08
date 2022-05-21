(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
    
    menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');

    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
  });
})();
(() => {
  const menuBtnRef = document.querySelector('[data-menu-hidden]');
  const mobilMenuRef = document.querySelector('[menu-hidden]');

  menuBtnRef.addEventListener('click', () => {
    const expanded = mobilMenuRef.classList.toggle('menu-open');
  });
})();

// (() => {
//   const menuBtnRef = document.querySelector('[data-menu-mobile]');
//   // const mobilMenuRef = document.querySelector('[data-menu]');

//   menuBtnRef.addEventListener('click', () => {
//     // const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
//     menuBtnRef.classList.toggle('is-open');
//     // menuBtnRef.setAttribute('aria-expanded', !expanded);

//     // mobilMenuRef.classList.toggle('is-open');
//   });
// })();

// (() => {
//   const refs = {
//     openMenuBtn: document.querySelector('.menu-open-btn'),
//     closeMenuBtn: document.querySelector('.menu-close-btn'),
//     menu: document.querySelector('.mob-menu'),
//     body: document.querySelector('body'),
//   };

//   refs.openMenuBtn.addEventListener('click', toggleMenu);
//   refs.closeMenuBtn.addEventListener('click', toggleMenu);

//   function toggleMenu() {
//     refs.menu.classList.toggle('is-hidden');
//     refs.body.classList.toggle('no-scroll');
//   }
// })();
