import { disableScroll, enableScroll } from './utilities/scroll.js';

const modal = document.getElementById('modal');

function openModal() {
  modal.style.display = 'flex';
  setTimeout(() => {
    modal.classList.add('active');
  }, 10);
  disableScroll();
}

function closeModal() {
  modal.classList.remove('active');
  setTimeout(() => {
    modal.style.display = 'none';
  }, 300);
  enableScroll();
}

export { openModal, closeModal };
