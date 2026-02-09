// Projects Data
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with payment integration",
    tech: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
    icon: "🛒",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates",
    tech: ["React", "Firebase", "TypeScript", "Tailwind CSS"],
    icon: "✓",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "AI Chat Application",
    description: "OpenAI-powered chat application with conversation history",
    tech: ["Next.js", "OpenAI", "TypeScript", "Tailwind CSS"],
    icon: "💬",
    liveUrl: "#",
    githubUrl: "#",
  },
];

// Render Projects
function renderProjects() {
  const projectsGrid = document.getElementById("projectsGrid");

  projects.forEach((project, index) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";
    projectCard.style.animationDelay = `${index * 0.2}s`;

    const techHTML = project.tech
      .map((tech) => `<span class="tech-badge">${tech}</span>`)
      .join("");

    projectCard.innerHTML = `
      <div class="project-image">${project.icon}</div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">${techHTML}</div>
        <div class="project-links">
          <a href="${project.liveUrl}" class="project-link">
            <i class="fas fa-external-link-alt"></i> Live Demo
          </a>
          <a href="${project.githubUrl}" class="project-link">
            <i class="fab fa-github"></i> Code
          </a>
        </div>
      </div>
    `;

    projectsGrid.appendChild(projectCard);
  });
}

// Contact Form Handler
function setupContactForm() {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = {
      name: contactForm.querySelector('input[name="name"]').value,
      email: contactForm.querySelector('input[name="email"]').value,
      message: contactForm.querySelector('textarea[name="message"]').value,
    };

    console.log("Form submitted:", formData);
    alert("Message sent! I'll get back to you soon.");

    // Reset form
    contactForm.reset();
  });
}

// Intersection Observer for scroll animations
function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-scroll");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll(".section").forEach((section) => {
    observer.observe(section);
  });
}

// Smooth scroll for navigation links
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Skip if it's just "#"
      if (href === "#") return;

      e.preventDefault();

      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// Update footer year
function updateFooterYear() {
  const footerYear = document.getElementById("footerYear");
  const currentYear = new Date().getFullYear();
  footerYear.textContent = `© ${currentYear} Your Name. All rights reserved. Built with Vanilla JS.`;
}

// Navbar scroll effect
function setupNavbarScroll() {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      navbar.style.background = "rgba(2, 6, 23, 0.95)";
      navbar.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.3)";
    } else {
      navbar.style.background = "rgba(2, 6, 23, 0.8)";
      navbar.style.boxShadow = "none";
    }
  });
}

// Active nav link
function setupActiveNavLinks() {
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";

    document.querySelectorAll("section").forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").slice(1) === current) {
        link.style.color = "var(--primary-color)";
      } else {
        link.style.color = "var(--text-light)";
      }
    });
  });
}

// Performance: Lazy load images
function setupLazyLoading() {
  const images = document.querySelectorAll("img[data-src]");

  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
          observer.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  }
}

// Mobile menu toggle (ready for future mobile menu implementation)
function setupMobileMenu() {
  // Add mobile menu functionality here if needed
  const navLinks = document.querySelector(".navbar-links");

  // Simple check for screen size
  if (window.innerWidth < 768) {
    // Mobile responsive behavior
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth < 768) {
      // Handle mobile view
    } else {
      // Handle desktop view
    }
  });
}

// Initialize all
function init() {
  renderProjects();
  setupContactForm();
  setupScrollAnimations();
  setupSmoothScroll();
  updateFooterYear();
  setupNavbarScroll();
  setupActiveNavLinks();
  setupLazyLoading();
  setupMobileMenu();

  console.log("✅ Portfolio initialized successfully!");
}

// Run on DOM ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

// Optional: Add some interactivity tricks
document.addEventListener("contextmenu", (e) => {
  // Allow right-click, just avoid console spam
});

// Prevent unauthorized access tricks
(function () {
  function disableDevTools(e) {
    if (e.keyCode === 123) {
      e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) {
      e.preventDefault();
    }
    if (e.ctrlKey && e.keyCode === 67) {
      // Ctrl+C (optional)
    }
  }

  // Uncomment below if you want to disable dev tools (not recommended)
  // document.addEventListener("keydown", disableDevTools);
})();
