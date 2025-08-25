// Modern Portfolio JavaScript - Enhanced Interactions

// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true,
  offset: 100,
});

// DOM Elements
const navbar = document.getElementById("navbar");
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const typingText = document.getElementById("typing-text");
const contactForm = document.getElementById("contact-form");

// Particle.js Configuration
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4"],
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#4ECDC4",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

// Navbar Scroll Effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("glass-nav");
  } else {
    navbar.classList.remove("glass-nav");
  }
});

// Mobile Navigation Toggle
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  navToggle.classList.toggle("active");
});

// Close mobile menu when clicking on a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    navToggle.classList.remove("active");
  });
});

// Active Navigation Link
window.addEventListener("scroll", () => {
  let current = "";
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Typing Animation
const texts = [
  "MERN Stack Developer",
  "Full Stack Engineer",
  "React Specialist",
  "Node.js Expert",
  "MongoDB Developer",
  "JavaScript Enthusiast",
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeText() {
  const currentText = texts[textIndex];

  if (isDeleting) {
    typingText.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 50;
  } else {
    typingText.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 100;
  }

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    typingSpeed = 2000; // Pause before deleting
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    typingSpeed = 500; // Pause before typing next text
  }

  setTimeout(typeText, typingSpeed);
}

// Start typing animation
if (typingText) {
  typeText();
}

// Magnetic Button Effect
const magneticButtons = document.querySelectorAll(".magnetic-btn");

magneticButtons.forEach((button) => {
  button.addEventListener("mousemove", (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translate(0px, 0px)";
  });
});

// Ripple Effect for Buttons
const rippleButtons = document.querySelectorAll(
  ".btn, .social-link, .filter-btn"
);

rippleButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const ripple = this.querySelector(".btn-ripple, .social-ripple");
    if (ripple) {
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);

      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = e.clientX - rect.left - size / 2 + "px";
      ripple.style.top = e.clientY - rect.top - size / 2 + "px";

      ripple.style.width = ripple.style.height = size + "px";

      setTimeout(() => {
        ripple.style.width = ripple.style.height = "0px";
      }, 600);
    }
  });
});

// Counter Animation
const counters = document.querySelectorAll(".stat-number");
const observerOptions = {
  threshold: 0.7,
};

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const target = parseInt(counter.getAttribute("data-count"));
      const increment = target / 100;
      let current = 0;

      const updateCounter = () => {
        if (current < target) {
          current += increment;
          counter.textContent = Math.ceil(current);
          setTimeout(updateCounter, 20);
        } else {
          counter.textContent = target;
        }
      };

      updateCounter();
      counterObserver.unobserve(counter);
    }
  });
}, observerOptions);

counters.forEach((counter) => {
  counterObserver.observe(counter);
});

// Progress Bar Animation
const progressBars = document.querySelectorAll(".progress-bar");

const progressObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const progressBar = entry.target;
      const parentCard = progressBar.closest(".stat-card");
      if (parentCard) {
        setTimeout(() => {
          progressBar.style.width = "100%";
        }, 500);
      }
      progressObserver.unobserve(progressBar);
    }
  });
}, observerOptions);

progressBars.forEach((bar) => {
  progressObserver.observe(bar);
});

// Skill Progress Animation
const skillBars = document.querySelectorAll(".skill-progress");

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const skillBar = entry.target;
      const width = skillBar.getAttribute("data-width");
      setTimeout(() => {
        skillBar.style.width = width + "%";
      }, 300);
      skillObserver.unobserve(skillBar);
    }
  });
}, observerOptions);

skillBars.forEach((bar) => {
  skillObserver.observe(bar);
});

// Project Filtering
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to clicked button
    button.classList.add("active");

    const filterValue = button.getAttribute("data-filter");

    projectCards.forEach((card) => {
      const cardCategory = card.getAttribute("data-category");

      if (filterValue === "all" || cardCategory === filterValue) {
        card.style.display = "block";
        card.style.animation = "fadeIn 0.5s ease-in-out";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Form Validation and Submission
if (contactForm) {
  const formInputs = contactForm.querySelectorAll("input, textarea");

  // Real-time validation
  formInputs.forEach((input) => {
    input.addEventListener("blur", validateField);
    input.addEventListener("input", clearError);
  });

  function validateField(e) {
    const field = e.target;
    const fieldName = field.name;
    const fieldValue = field.value.trim();
    const errorElement = document.getElementById(`${fieldName}-error`);

    let isValid = true;
    let errorMessage = "";

    // Validation rules
    switch (fieldName) {
      case "name":
        if (fieldValue.length < 2) {
          isValid = false;
          errorMessage = "Name must be at least 2 characters long";
        }
        break;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(fieldValue)) {
          isValid = false;
          errorMessage = "Please enter a valid email address";
        }
        break;
      case "subject":
        if (fieldValue.length < 5) {
          isValid = false;
          errorMessage = "Subject must be at least 5 characters long";
        }
        break;
      case "message":
        if (fieldValue.length < 10) {
          isValid = false;
          errorMessage = "Message must be at least 10 characters long";
        }
        break;
    }

    // Display error
    if (errorElement) {
      if (!isValid) {
        errorElement.textContent = errorMessage;
        errorElement.classList.add("show");
        field.style.borderBottomColor = "#FF6B6B";
      } else {
        errorElement.classList.remove("show");
        field.style.borderBottomColor = "#4ECDC4";
      }
    }

    return isValid;
  }

  function clearError(e) {
    const field = e.target;
    const fieldName = field.name;
    const errorElement = document.getElementById(`${fieldName}-error`);

    if (errorElement && field.value.trim() !== "") {
      errorElement.classList.remove("show");
      field.style.borderBottomColor = "#4ECDC4";
    }
  }

  // Form submission
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let isFormValid = true;

    // Validate all fields
    formInputs.forEach((input) => {
      const fieldValid = validateField({ target: input });
      if (!fieldValid) {
        isFormValid = false;
      }
    });

    if (isFormValid) {
      // Simulate form submission
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalText = submitButton.querySelector(".btn-text").textContent;

      submitButton.querySelector(".btn-text").textContent = "Sending...";
      submitButton.disabled = true;

      setTimeout(() => {
        submitButton.querySelector(".btn-text").textContent = "Message Sent!";
        setTimeout(() => {
          submitButton.querySelector(".btn-text").textContent = originalText;
          submitButton.disabled = false;
          contactForm.reset();

          // Clear all field styles
          formInputs.forEach((input) => {
            input.style.borderBottomColor = "";
          });
        }, 2000);
      }, 1500);
    }
  });
}

// Parallax Effect for Background Shapes
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const shapes = document.querySelectorAll(".shape");

  shapes.forEach((shape, index) => {
    const speed = (index + 1) * 0.5;
    shape.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// Cursor Trail Effect
let mouseX = 0;
let mouseY = 0;
let trailElements = [];

// Create trail elements
for (let i = 0; i < 10; i++) {
  const trail = document.createElement("div");
  trail.className = "cursor-trail";
  trail.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: linear-gradient(135deg, #FF6B6B, #4ECDC4);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        opacity: ${1 - i * 0.1};
        transition: all 0.1s ease;
    `;
  document.body.appendChild(trail);
  trailElements.push(trail);
}

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function updateTrail() {
  trailElements.forEach((trail, index) => {
    setTimeout(() => {
      trail.style.left = mouseX + "px";
      trail.style.top = mouseY + "px";
    }, index * 50);
  });
  requestAnimationFrame(updateTrail);
}

updateTrail();

// Tech Card 3D Effect
const techCards = document.querySelectorAll(".tech-card");

techCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
  });
});

// Service Card Tilt Effect
const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  });
});

// Project Card Hover Effect
const projectCards2 = document.querySelectorAll(".project-card");

projectCards2.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    const glow = card.querySelector(".project-glow");
    if (glow) {
      glow.style.opacity = "0.5";
    }
  });

  card.addEventListener("mouseleave", () => {
    const glow = card.querySelector(".project-glow");
    if (glow) {
      glow.style.opacity = "0";
    }
  });
});

// Scroll Progress Indicator
const scrollProgress = document.createElement("div");
scrollProgress.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(135deg, #FF6B6B, #4ECDC4);
    z-index: 9999;
    transition: width 0.1s ease;
`;
document.body.appendChild(scrollProgress);

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollProgress.style.width = scrollPercent + "%";
});

// Lazy Loading for Images
const images = document.querySelectorAll("img[data-src]");

const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove("lazy");
      imageObserver.unobserve(img);
    }
  });
});

images.forEach((img) => {
  imageObserver.observe(img);
});

// Theme Toggle (Optional)
const themeToggle = document.createElement("button");
themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
themeToggle.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    background: linear-gradient(135deg, #FF6B6B, #4ECDC4);
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    z-index: 1000;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
`;

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  const icon = themeToggle.querySelector("i");
  if (document.body.classList.contains("light-theme")) {
    icon.className = "fas fa-sun";
  } else {
    icon.className = "fas fa-moon";
  }
});

document.body.appendChild(themeToggle);

// Performance Optimization
// Debounce function for scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debounce to scroll events
const debouncedScroll = debounce(() => {
  // Scroll-based animations here
}, 10);

window.addEventListener("scroll", debouncedScroll);

// Preloader
window.addEventListener("load", () => {
  const preloader = document.createElement("div");
  preloader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #0D1117;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        transition: opacity 0.5s ease;
    `;

  const loader = document.createElement("div");
  loader.style.cssText = `
        width: 50px;
        height: 50px;
        border: 3px solid rgba(255, 107, 107, 0.3);
        border-top: 3px solid #FF6B6B;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    `;

  const style = document.createElement("style");
  style.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
  document.head.appendChild(style);

  preloader.appendChild(loader);
  document.body.appendChild(preloader);

  setTimeout(() => {
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.remove();
    }, 500);
  }, 1000);
});

// Console Message
console.log(`
🚀 Portfolio Website Loaded Successfully!
✨ Modern design with advanced animations
🎨 Electric Sunset color scheme
⚡ Enhanced user interactions
🔥 Built with passion by Alex Johnson
`);

// Error Handling
window.addEventListener("error", (e) => {
  console.error("An error occurred:", e.error);
});

// Service Worker Registration (for PWA capabilities)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
