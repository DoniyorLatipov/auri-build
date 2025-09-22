import { closeModal } from './modal.js';

function createCustomSelects() {
  document.querySelectorAll('select').forEach(function (select) {
    const numberOfOptions = select.options.length;

    select.classList.add('select-hidden');

    const wrapper = document.createElement('div');
    wrapper.className = 'select';
    select.parentNode.insertBefore(wrapper, select);
    wrapper.appendChild(select);

    const styledSelect = document.createElement('div');
    styledSelect.className = 'select-styled';
    styledSelect.textContent = select.options[0].textContent;
    select.insertAdjacentElement('afterend', styledSelect);

    const list = document.createElement('ul');
    list.className = 'select-options';
    styledSelect.insertAdjacentElement('afterend', list);

    for (let i = 0; i < numberOfOptions; i++) {
      const option = select.options[i];
      const li = document.createElement('li');
      li.textContent = option.textContent;
      li.setAttribute('rel', option.value);
      if (option.selected) {
        li.classList.add('is-selected');
        styledSelect.textContent = option.textContent;
      }
      list.appendChild(li);
    }

    const listItems = list.querySelectorAll('li');

    styledSelect.addEventListener('click', function (e) {
      e.stopPropagation();
      document.querySelectorAll('div.select-styled.active').forEach(function (el) {
        if (el !== styledSelect) {
          el.classList.remove('active');
          el.nextElementSibling.style.display = 'none';
        }
      });
      styledSelect.classList.toggle('active');
      list.style.display = list.style.display === 'block' ? 'none' : 'block';
    });

    listItems.forEach(function (item) {
      item.addEventListener('click', function (e) {
        e.stopPropagation();
        styledSelect.textContent = this.textContent;
        styledSelect.classList.remove('active');
        select.value = this.getAttribute('rel');

        list.querySelectorAll('li.is-selected').forEach((li) => li.classList.remove('is-selected'));
        this.classList.add('is-selected');

        list.style.display = 'none';
        // console.log(select.value);
      });
    });

    document.addEventListener('click', function () {
      styledSelect.classList.remove('active');
      list.style.display = 'none';
    });
  });
}

function handleForm() {
  const form = document.getElementById('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const subject = `Новая заявка АУРИ`;

    formData.append('subject', subject);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then(() => {
      closeModal();
    });
  });
}

export { createCustomSelects, handleForm };
