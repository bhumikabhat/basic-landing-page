document.addEventListener("DOMContentLoaded", () => {
  // Navigation menu toggle
  const menuToggle = document.querySelector(".menu-toggle")
  const navLinks = document.querySelector(".nav-links")

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active")

    // Animate menu bars
    const bars = document.querySelectorAll(".bar")
    bars.forEach((bar) => bar.classList.toggle("active"))
  })

  // Close menu when clicking on a link
  const navItems = document.querySelectorAll(".nav-links a")
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navLinks.classList.remove("active")
    })
  })

  // Sticky header on scroll
  const header = document.querySelector("header")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }
  })

  // Active link highlighting based on scroll position
  const sections = document.querySelectorAll("section")
  const navLi = document.querySelectorAll(".nav-links li a")

  window.addEventListener("scroll", () => {
    let current = ""

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight

      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id")
      }
    })

    navLi.forEach((li) => {
      li.classList.remove("active")
      if (li.getAttribute("href") === `#${current}`) {
        li.classList.add("active")
      }
    })
  })

  // Form submission handling
  const interestForm = document.getElementById("interest-form")
  const successModal = document.getElementById("success-modal")
  const closeModal = document.querySelector(".close-modal")
  const closeBtn = document.querySelector(".close-btn")

  if (interestForm) {
    interestForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Simulate form submission
      setTimeout(() => {
        successModal.style.display = "flex"
        interestForm.reset()
      }, 1000)
    })
  }

  // Newsletter form submission
  const newsletterForm = document.getElementById("newsletter-form")
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Simulate form submission
      setTimeout(() => {
        successModal.style.display = "flex"
        newsletterForm.reset()
      }, 1000)
    })
  }

  // Close modal
  if (closeModal) {
    closeModal.addEventListener("click", () => {
      successModal.style.display = "none"
    })
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      successModal.style.display = "none"
    })
  }

  // Close modal when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === successModal) {
      successModal.style.display = "none"
    }
  })

  // Animated counter for statistics (if added later)
  function animateCounter(element, target, duration) {
    let start = 0
    const increment = target / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      element.textContent = Math.floor(start)

      if (start >= target) {
        element.textContent = target
        clearInterval(timer)
      }
    }, 16)
  }

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate")
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observe elements with animation classes
  document.querySelectorAll(".card, .team-member, .event-card").forEach((el) => {
    observer.observe(el)
  })
})

