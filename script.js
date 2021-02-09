window.onload = () => {
  const navButtons = [
    'introduction',
    'timeline',
    'product',
    'timeline',
    'consult',
    'contact-form',
  ];

  navButtons.forEach(sectionName => {
    const navBtn = document.querySelector(`div.nav-${ sectionName }`);
    if (!navBtn) {
      return;
    }
    navBtn.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(`section#${ sectionName }`).scrollIntoView({
        behavior: 'smooth'
      });

    });
  });
}