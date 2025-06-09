// Basic JavaScript for smooth scrolling
const links = document.querySelectorAll('header nav a');

for (const link of links) {
  link.addEventListener('click', evt => {
    evt.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
}
