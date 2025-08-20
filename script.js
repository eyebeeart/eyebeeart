// Fade-in animation on scroll
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Navbar active link highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  // if the page hasn't been scrolled, keep Home active only
  if (window.scrollY === 0) {
    navLinks.forEach(link => link.classList.remove("active"));
    document.querySelector('.nav-links a[href="#home"]').classList.add("active");
    return; // stop here
  }

  // normal scroll detection
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 200;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});





 

const menuIcon = document.getElementById('menu-icon');
  const navLinks1 = document.getElementById('nav-links');
  const menuOpen = document.getElementById('menu-open');
  const menuClose = document.getElementById('menu-close');

  // Toggle nav visibility
  menuIcon.addEventListener('click', () => {
    navLinks1.classList.toggle('open');
    toggleIcon();
  });

  // Close nav when clicking any link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks1.classList.remove('open');
      toggleIcon();
    });
  });

  // Close nav if clicking outside menu
  document.addEventListener('click', (e) => {
    const clickedInsideMenu = navLinks1.contains(e.target) || menuIcon.contains(e.target);
    if (!clickedInsideMenu && navLinks1.classList.contains('open')) {
      navLinks1.classList.remove('open');
      toggleIcon();
    }
  });

  // Toggle icon function
  function toggleIcon() {
    const isOpen = navLinks1.classList.contains('open');
    menuOpen.style.display = isOpen ? 'none' : 'inline';
    menuClose.style.display = isOpen ? 'inline' : 'none';
  }


  // Highlight active link on scroll
  const sections1 = document.querySelectorAll("section, footer");
  const navItems = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections1.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });
    navItems.forEach(a => {
      a.classList.remove("active");
      if (a.getAttribute("href") === `#${current}`) {
        a.classList.add("active");
      }
    });
  });





const contactSection = document.querySelector('.contact');

window.addEventListener('scroll', () => {
  const sectionTop = contactSection.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight - 100;

  if (sectionTop < triggerPoint) {
    contactSection.classList.add('show');
  }
});



const homeLink = document.querySelector('.nav-links a[href="#home"]');

homeLink.addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
