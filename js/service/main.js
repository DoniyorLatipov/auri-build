import { createCustomSelects, handleForm } from '../form.js';
import createHeader from '../header.js';
import { closeModal, openModal } from '../modal.js';
import { addSmoothScroll } from '../utilities/scroll.js';
import createServicePageSwipers from './createServicePageSwipers.js';

createHeader();
createServicePageSwipers();
createCustomSelects();
addSmoothScroll();
handleForm();

const contactButtons = document.querySelectorAll('.modal-button');

contactButtons.forEach((button) => {
  button.addEventListener('click', () => {
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

document.querySelectorAll('.course').forEach((course) => {
  course.addEventListener('click', (e) => {
    if (
      e.target.classList.contains('course__cart-btn') ||
      e.target.classList.contains('course__icon-button')
    ) {
      openModal();
      return;
    }

    window.location.href = 'service.html';
  });
});
