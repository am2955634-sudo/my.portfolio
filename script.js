// A'laa's Bootstrap Portfolio - custom interactions

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".custom-navbar");
  const backToTop = document.getElementById("backToTop");
  const year = document.getElementById("year");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  // Keep the footer year up to date.
  if (year) year.textContent = new Date().getFullYear();

  // Add a subtle navbar background/shadow after scrolling.
  const updateScrollUI = () => {
    const hasScrolled = window.scrollY > 30;
    if (navbar) navbar.classList.toggle("scrolled", hasScrolled);
    if (backToTop) backToTop.classList.toggle("visible", window.scrollY > 400);
  };
  updateScrollUI();
  window.addEventListener("scroll", updateScrollUI, { passive: true });

  // Close the mobile navigation after choosing a section.
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const navCollapse = document.getElementById("mainNav");
      if (navCollapse && navCollapse.classList.contains("show") && window.bootstrap) {
        window.bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
      }
    });
  });

  // Back-to-top button.
  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Demo contact form: prepare an email in the visitor's default email app.
  // This form does not send or store data on a server.
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !subject || !message) {
        if (formMessage) formMessage.textContent = "Please complete all fields before continuing.";
        return;
      }

      // Replace this address with your real email before publishing.
      const recipient = "alaa@example.com";
      const emailSubject = encodeURIComponent(`[Portfolio Contact] ${subject}`);
      const emailBody = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      );

      if (formMessage) {
        formMessage.textContent = "Opening your email app. If nothing happens, check your browser's email settings.";
      }
      window.location.href = `mailto:${recipient}?subject=${emailSubject}&body=${emailBody}`;
    });
  }
});
