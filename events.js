document.addEventListener("DOMContentLoaded", () => {
  // Sample events data (in a real application, this would come from an API or JSON file)
  const events = [
    {
      id: 1,
      title: "AI Workshop: Introduction to Machine Learning",
      date: "April 10, 2025",
      description:
        "Learn the fundamentals of Machine Learning algorithms and their applications in solving real-world problems.",
      image: "https://source.unsplash.com/random/600x400/?ai,technology",
      link: "#",
    },
    {
      id: 2,
      title: "Hackathon: AI Solutions for Healthcare",
      date: "April 25-26, 2025",
      description: "A 24-hour coding marathon to develop innovative AI solutions addressing challenges in healthcare.",
      image: "https://source.unsplash.com/random/600x400/?coding,healthcare",
      link: "#",
    },
    {
      id: 3,
      title: "Guest Lecture: Ethics in Artificial Intelligence",
      date: "May 5, 2025",
      description: "Join us for an insightful discussion on ethical considerations and responsible AI development.",
      image: "https://source.unsplash.com/random/600x400/?ethics,technology",
      link: "#",
    },
  ]

  // Function to render events
  function renderEvents() {
    const eventsContainer = document.getElementById("events-container")

    if (!eventsContainer) return

    events.forEach((event) => {
      const eventCard = document.createElement("div")
      eventCard.className = "event-card"

      eventCard.innerHTML = `
                <div class="event-image">
                    <img src="${event.image}" alt="${event.title}">
                </div>
                <div class="event-details">
                    <span class="event-date">${event.date}</span>
                    <h3 class="event-title">${event.title}</h3>
                    <p class="event-description">${event.description}</p>
                    <a href="${event.link}" class="event-link">Learn More <i class="fas fa-arrow-right"></i></a>
                </div>
            `

      eventsContainer.appendChild(eventCard)
    })
  }

  // Call the function to render events
  renderEvents()
})

