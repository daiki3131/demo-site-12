const openBtn = document.getElementById("open-btn");
const spMenu = document.getElementById("sp-menu");

openBtn.addEventListener('click', () => {
  openBtn.classList.toggle('active');
  spMenu.classList.toggle('is-active');
})