import createMainPageSwipers from './createMainPageSwipers.js';
import { createCustomSelects, handleForm } from './form.js';
import createHeader from './header.js';
import { closeModal, openModal } from './modal.js';
import { addSmoothScroll } from './utilities/scroll.js';

createHeader();
createMainPageSwipers();
createCustomSelects();
addSmoothScroll();
handleForm();

const contactButtons = document.querySelectorAll('.modal-button');

contactButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  });
});

const modalCloseButton = document.getElementById('modalCloseButton');
modalCloseButton.addEventListener('click', () => {
  closeModal();
});

const modalOverlay = document.querySelector('.modal__overlay');
modalOverlay.addEventListener('click', () => {
  closeModal();
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});
