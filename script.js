
  const toggle = document.querySelector('.bubble-toggle');
  const menu = document.getElementById('bubbleMenu');
  const overlay = document.getElementById('overlay');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
  });

  overlay.addEventListener('click', () => {
    menu.classList.remove('active');
    overlay.classList.remove('active');
  });

