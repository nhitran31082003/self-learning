// filepath: c:\Users\Administrator\Port\index.html
const roles = [
  "Game Developer",
  "Game Designer",
  "Frontend Developer",
  "UI/UX Designer",
  "Software Developer"
];
let roleIndex = 0;
let charIndex = 0;
let typingElement = document.getElementById("typing");
let isDeleting = false;

function type() {
  let currentRole = roles[roleIndex];
  if (isDeleting) {
    typingElement.textContent = currentRole.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, 50);
    }
  } else {
    typingElement.textContent = currentRole.substring(0, charIndex++);
    if (charIndex > currentRole.length) {
      isDeleting = true;
      setTimeout(type, 1200);
    } else {
      setTimeout(type, 100);
    }
  }
}
type();
document.getElementById('year').textContent = new Date().getFullYear();

const menuIcon = document.getElementById('menu-icon');
const nav = document.querySelector('.App-nav');
const navLinks = document.querySelectorAll('.App-nav a');
const sections = document.querySelectorAll('section');

// Toggle menu khi bấm icon
menuIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Đóng menu khi chọn link (trên mobile)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// Đổi màu link khi cuộn đến section
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 130;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', function() {
  const btn = document.getElementById('backToTop');
  if (window.scrollY > 200) {
    btn.style.display = 'flex';
  } else {
    btn.style.display = 'none';
  }
});

document.getElementById('backToTop').onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};


