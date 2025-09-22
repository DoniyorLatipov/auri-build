export default function createHeader() {
  const header = document.getElementById('header');
  let lastScroll = window.scrollY;

  if (window.innerWidth > 1250 && window.scrollY > 10) {
    header.classList.add('prepared', 'active');
  }

  window.addEventListener('scroll', () => {
    if (window.innerWidth < 1250) {
      header.classList.remove('active', 'prepared');
      return;
    }

    const currentScroll = window.scrollY;

    if (currentScroll > 10) {
      header.classList.add('prepared');
    } else {
      header.classList.remove('prepared');
    }

    if (currentScroll > lastScroll) {
      header.classList.remove('active');
    } else {
      header.classList.add('active');
    }

    lastScroll = currentScroll;
  });
}
