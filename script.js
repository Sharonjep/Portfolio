/**
 * Sharon Jepngetich — Portfolio Scripts (Pure Vanilla JavaScript)
 * Zero external dependencies. Works on any browser or static host.
 */

// Comprehensive Project Architecture Data
const PROJECT_DATA = {
  clinic: {
    badge: "BACKEND API & DISTRIBUTED SYSTEMS",
    title: "Clinic Management & Real-Time Patient Queue Backend API",
    image: "assets/clinic-backend.jpg",
    stack: [
      "Java 21 LTS",
      "Spring Boot 3.3.5",
      "Spring Security 6 (JWT)",
      "PostgreSQL 16",
      "Docker & Compose",
      "OpenAPI 3.0 / Swagger",
      "JUnit 5 (26 Test Suites)"
    ],
    repoUrl: "https://github.com/Sharonjep/Clinic-Management-Backend",
    problem: `Outpatient practices frequently suffer from chaotic waiting rooms, scheduling friction and accidental double-bookings for physicians and patients across overlapping time intervals.`,
    architecture: `
[ HTTP Request / Waiting Room Screen ]
                  │
                  ▼
   [ Spring Security 6 & JWT Filter ] ──> (Validates Claims & Roles)
                  │
                  ▼
       [ @RestController Layer ]
         ├── /api/v1/auth (Login, User Registration)
         ├── /api/v1/appointments (Conflict-Free Booking)
         ├── /api/v1/queue (Sequential Ticket Operations)
         └── /api/v1/lounge (Public Unauthenticated Display)
                  │ (Jakarta Validation & DTO Pattern)
                  ▼
       [ @Service Business Layer ]
         ├── Interval Overlap Collision Algorithm [start, end)
         ├── FIFO Daily Queue Assignment (Q-001, Q-002)
         └── Doctor Consultation State: WAITING -> IN_PROGRESS -> COMPLETED
                  │
                  ▼
      [ Spring Data JPA Repositories ]
                  │
                  ▼
          [ PostgreSQL 16 DB ]`,
    highlights: [
      "Interval Overlap Collision Engine: SQL interval queries ensure neither patient nor physician has overlapping appointments.",
      "Sequential FIFO Queue Engine: Atomic daily sequence ticket numbering with estimated wait time calculations.",
      "Doctor Consultation Workflow: Enforces state transitions (WAITING → IN_PROGRESS → COMPLETED) with real-time lounge screen updates.",
      "Stateless JWT Authentication: Strict Role-Based Access Control (ROLE_ADMIN, ROLE_RECEPTIONIST, ROLE_DOCTOR).",
      "Automated Testing Suite: 26 unit and integration tests passing with Mockito and SpringBootTest."
    ]
  },

  sergoit: {
    badge: "PHP & WEB PLATFORM",
    title: "Sergoit View Gardens: Web and Guest Platform",
    image: "assets/sergoit-resort-showcase.jpg",
    liveUrl: "https://sergoitviewgardens.com",
    stack: [
      "sergoitviewgardens.com (Live)",
      "PHP Backend",
      "JavaScript (ES6+)",
      "HTML5 & CSS3",
      "Responsive UI",
      "Apache / Nginx"
    ],
    problem: `Sergoit View Gardens, a premier luxury nature retreat in Eldoret, Kenya, required an elegant, mobile-optimized digital platform to showcase luxury chalets, recreational facilities and conference amenities, paired with a reliable server-side inquiry routing system.`,
    architecture: `
[ Guest Mobile Device / Browser ] ──(HTTPS)──> [ sergoitviewgardens.com ]
                                                        │
                                                        ▼
                                           [ Apache / Nginx Web Server ]
                                                        │
                                                        ▼
                                           [ PHP Application Layer ]
                                           ├── Page Routing & Template Engine
                                           ├── Guest Booking & Inquiry Handler
                                           └── Server-Side Input Sanitization
                                                        │
                                                        ▼
                                    [ Semantic HTML5, CSS3 & JavaScript UI ]
                                    ├── Mobile-First Responsive Showcase
                                    ├── Interactive Image Lightbox & Sliders
                                    └── Direct WhatsApp & Inquiry Integration`,
    highlights: [
      "Live Production Platform: Direct web development and ongoing maintenance for the active hospitality retreat at sergoitviewgardens.com.",
      "PHP Application Core: Server-side routing, input validation and guest inquiry processing.",
      "Modern Semantic Frontend: Lightweight HTML5, bespoke CSS3 styling and vanilla JavaScript interactions.",
      "Responsive Mobile-First Architecture: Engineered to ensure fast loading times across smartphones, tablets and desktop devices.",
      "Direct Guest Inquiries: Integrated contact channels and real-time WhatsApp inquiry routing."
    ]
  },

  agrotrack: {
    badge: "IOT TELEMETRY & APPLIED MACHINE LEARNING",
    title: "AgroTrack: Smart Soil & Environmental Telemetry",
    image: "assets/agrotrack-dashboard.jpg",
    stack: [
      "AWS CDK (Python IaC)",
      "AWS Lambda (Python)",
      "Amazon DynamoDB",
      "Isolation Forest (scikit-learn)",
      "Amazon S3",
      "Amazon SNS",
      "React",
      "Recharts"
    ],
    repoUrl: "https://github.com/Sharonjep/Agrotrack",
    problem: `Agricultural producers and greenhouse managers lack low-cost, real-time telemetry to detect microclimate anomalies (rapid moisture loss, heat spikes) before crop yields decline.`,
    architecture: `
[ Soil & Environmental Sensor Nodes ] ──(HTTPS)──> [ Amazon API Gateway ]
                                                           │
                                                           ▼
                                             [ AWS Lambda Sensor Processor ]
                                              ├── joblib / scikit-learn Runtime
                                              ├── Anomaly Detection: Isolation Forest
                                              │
                    ┌──────────────────────────────┴──────────────────────────────┐
                    ▼                                                             ▼
      [ Amazon DynamoDB ]                                           [ Telemetry Spike Evaluator ]
    (Time-Series Sensor Readings)                                                 │
                    │                                                             ▼
                    ▼                                                [ Amazon SNS Notification ]
         [ Amazon S3 Bucket ]                                          (Immediate Alert to Farmer)
    (One-Click CSV Export for Research)`,
    highlights: [
      "Infrastructure as Code: Reproducible AWS CDK Python stack provisioning Cognito, Lambda, DynamoDB and SNS.",
      "Unsupervised Anomaly Detection: Lightweight Isolation Forest model flags abnormal moisture swings and temperature spikes.",
      "Automated Farmer Alerts: Instant Amazon SNS SMS and email notifications when readings exceed safe thresholds.",
      "Agronomic Research Export: One-click export of historical telemetry directly from S3 CSV buckets."
    ]
  },

  rabbitmq: {
    badge: "DISTRIBUTED SYSTEMS & ASYNCHRONOUS MESSAGING",
    title: "FastAPI & RabbitMQ Event-Driven Microservice",
    image: "assets/fastapi-rabbitmq.jpg",
    stack: [
      "FastAPI (Python)",
      "RabbitMQ (AMQP)",
      "Docker & Compose",
      "Kubernetes (K8s)",
      "Jenkinsfile CI/CD",
      "HTML5 / Bootstrap"
    ],
    repoUrl: "https://github.com/Sharonjep/fastapi-rabbitmq-microservice",
    problem: `Monolithic web services face thread pool exhaustion and cascading failures during burst order volume when processing heavy background workflows synchronously.`,
    architecture: `
[ HTTP Client / Web Orders UI ] ──(REST POST)──> [ FastAPI Order Service ]
                                                        │
                                                        ▼ (AMQP Publish)
                                            [ RabbitMQ Message Broker ]
                                            ├── Exchange: direct_orders
                                            └── Queue: orders_queue (Durable)
                                                        │
                                                        ▼ (Worker Consumption)
                                            [ Background Worker Daemon ]
                                            ├── Order Validation & Processing
                                            └── System Health Check Monitor`,
    highlights: [
      "Asynchronous Decoupling: FastAPI processes order ingress in sub-milliseconds by dispatching tasks to RabbitMQ.",
      "Guaranteed Message Delivery: Durable AMQP queues with explicit worker acknowledgments prevent order loss.",
      "Containerized Pipeline: Multi-stage Docker build, Docker Compose local environment, Kubernetes pod manifests and automated Jenkinsfile CI/CD.",
      "Live Health Monitoring: Dedicated health check endpoints monitor broker connectivity and active consumer counts."
    ]
  },

  lunalogic: {
    badge: "LIVE SITE & DIGITAL SYSTEMS CONSULTANCY",
    title: "LunaLogic Tech: Intelligent Software Engineering",
    image: "assets/lunalogic-showcase.jpg",
    liveUrl: "https://lunalogictech.com",
    repoUrl: "https://github.com/Sharonjep",
    stack: [
      "lunalogictech.com (Live)",
      "Modern Responsive Web Architecture",
      "Managed Cloud Hosting & DNS",
      "Conversational AI Assistant Widget",
      "RESTful API Integrations",
      "Global Remote-First Positioning"
    ],
    problem: `Enterprises and growing businesses across East Africa and international markets require robust, fast-loading digital web platforms, custom corporate software and managed cloud infrastructure to maintain global reach.`,
    architecture: `
[ Global Ingress & DNS: lunalogictech.com ]
                     │
                     ▼
[ High-Performance Semantic Frontend ]
├── Mobile-First Responsive Design ("We Build Software That Thinks Ahead")
├── International Client Inquiry Pipelines ("Start a Project", "See Our Work")
└── Conversational AI Assistant & WhatsApp Integration
                     │
                     ▼
[ Backend Integrations & Enterprise Cloud ]
├── Automated Client Ingestion & Inquiry Routing
├── Managed SSL/TLS Certificates & Cloud Delivery Network
└── Scalable Hosting with 99.9% Production Uptime`,
    highlights: [
      "Live Production Platform: Engineering presence deployed live at lunalogictech.com.",
      "Client Systems Delivery: Built by Sharon to engineer modern digital platforms for Kenyan enterprises across hospitality, legal and commercial industries.",
      "Global Reach & Accessibility: Remote-first architecture with lightweight semantic styling ensuring instantaneous load times on mobile connections worldwide.",
      "Omnichannel Inquiries: Integrated interactive contact channels including WhatsApp integration and conversational assistance."
    ]
  },

  medilite: {
    badge: "HEALTHCARE AI & CLOUD NLP",
    title: "MediLite: AI Symptom Checker",
    image: "assets/medilite-ai.jpg",
    stack: [
      "Amazon Comprehend (Medical NLP)",
      "AWS Lambda",
      "Amazon API Gateway",
      "React",
      "Vite",
      "Amazon S3 Static Hosting"
    ],
    repoUrl: "https://github.com/Sharonjep/MediLite-AI-Health-Checker",
    problem: `Underserved and rural communities encounter barriers to immediate primary triage information and medical symptom guidance.`,
    architecture: `
[ Patient Symptom Input ] ──(HTTPS)──> [ Amazon API Gateway ] ──> [ AWS Lambda ]
                                                                        │
                                                                        ▼
                                                       [ Amazon Comprehend NLP ]
                                                       ├── Medical Entity Extraction
                                                       └── Clinical Key Phrase Parsing
                                                                        │
                                                                        ▼
                                                    [ Clinical Guidance Engine ]
                                                    └── Mobile-First UI Display`,
    highlights: [
      "Clinical NLP: Utilizes Amazon Comprehend to accurately parse freeform patient symptoms into categorized clinical entities.",
      "Mobile-First Accessibility: Designed specifically for low-bandwidth mobile environments in underserved regions.",
      "Safety Disclaimers: Integrates clear clinical guidance advising users when emergency consultation is required."
    ]
  }
};

document.addEventListener("DOMContentLoaded", () => {
  setupNavbar();
  setupProjectFilters();
  setupDeepDiveModal();
  setupCopyEmail();
  setupContactForm();
});

/**
 * Mobile Navigation Menu & Scroll Highlighting
 */
function setupNavbar() {
  const toggleBtn = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        toggleBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Active section spy on scroll
  const sections = document.querySelectorAll("section[id]");
  const handleScroll = () => {
    const scrollPos = window.scrollY + 120;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(l => {
          if (l.getAttribute("href") === `#${id}`) {
            l.classList.add("active");
          } else {
            l.classList.remove("active");
          }
        });
      }
    });
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
}

/**
 * Project Category Filter
 */
function setupProjectFilters() {
  const filterBtns = document.querySelectorAll(".tab-btn");
  const cardCols = document.querySelectorAll(".card-col");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");

      filterBtns.forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      cardCols.forEach(col => {
        const cat = col.getAttribute("data-category");
        if (filter === "all" || cat === filter) {
          col.classList.remove("hidden");
        } else {
          col.classList.add("hidden");
        }
      });
    });
  });
}

/**
 * Architecture Deep Dive Modal
 */
function setupDeepDiveModal() {
  const modal = document.getElementById("project-modal");
  const modalContent = document.getElementById("modal-content-area");
  const closeBtn = document.getElementById("modal-close");
  const triggerBtns = document.querySelectorAll(".btn-modal-trigger");

  if (!modal || !modalContent || !closeBtn) return;

  const openProjectModal = (key) => {
    const data = PROJECT_DATA[key];
    if (!data) return;

    modalContent.innerHTML = `
      <div class="modal-sub">${escapeHTML(data.badge)}</div>
      <h3 class="modal-heading" id="modal-title">${escapeHTML(data.title)}</h3>

      ${data.image ? `
      <div class="modal-preview-wrapper" style="margin-bottom: 1.5rem; border-radius: 8px; overflow: hidden; border: 1px solid #303030;">
        <img src="${escapeHTML(data.image)}" alt="${escapeHTML(data.title)}" style="width: 100%; height: auto; max-height: 360px; object-fit: cover; display: block;">
      </div>` : ''}

      <div class="modal-block">
        <h4 class="modal-block-title">The Engineering Challenge</h4>
        <p class="modal-block-text">${escapeHTML(data.problem)}</p>
      </div>

      <div class="modal-block">
        <h4 class="modal-block-title">Architecture &amp; System Flow</h4>
        <pre class="modal-code-box"><code>${escapeHTML(data.architecture.trim())}</code></pre>
      </div>

      <div class="modal-block">
        <h4 class="modal-block-title">Key Engineering Decisions</h4>
        <ul class="resume-item-bullets">
          ${data.highlights.map(h => `<li>${escapeHTML(h)}</li>`).join("")}
        </ul>
      </div>

      <div class="modal-block">
        <h4 class="modal-block-title">Verified Technologies</h4>
        <div class="quick-stack" style="border-top: none; padding-top: 0.25rem;">
          ${data.stack.map(s => `<span class="stack-badge">${escapeHTML(s)}</span>`).join("")}
        </div>
      </div>

      <div class="modal-btn-row">
        ${data.liveUrl ? `
        <a href="${escapeHTML(data.liveUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">Visit Live Website</a>` : ''}
        ${data.repoUrl ? `
        <a href="${escapeHTML(data.repoUrl)}" target="_blank" rel="noopener noreferrer" class="btn ${data.liveUrl ? 'btn-outline' : 'btn-primary'} btn-sm">View Source on GitHub</a>` : ''}
        <button type="button" class="btn btn-outline btn-sm" id="modal-inner-close">Close</button>
      </div>
    `;

    modal.showModal();

    const innerClose = document.getElementById("modal-inner-close");
    if (innerClose) {
      innerClose.addEventListener("click", () => modal.close());
    }
  };

  triggerBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-project");
      openProjectModal(key);
    });
  });

  closeBtn.addEventListener("click", () => modal.close());

  // Close when clicking dialog backdrop
  modal.addEventListener("click", (e) => {
    const rect = modal.getBoundingClientRect();
    const inDialog = (
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width
    );
    if (!inDialog) modal.close();
  });
}

/**
 * One-Click Copy Email to Clipboard
 */
function setupCopyEmail() {
  const copyBtn = document.getElementById("btn-copy-email");
  const email = "jepngetichs65@gmail.com";
  if (!copyBtn) return;

  copyBtn.addEventListener("click", async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const temp = document.createElement("textarea");
        temp.value = email;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand("copy");
        document.body.removeChild(temp);
      }
      showToast("Copied jepngetichs65@gmail.com to clipboard!");
    } catch {
      showToast("Email: jepngetichs65@gmail.com");
    }
  });
}

function showToast(msg) {
  const toast = document.getElementById("toast-msg");
  if (!toast) return;

  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

/**
 * Contact Form Validation & Mailto Action
 */
function setupContactForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  if (!form || !status) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("form-name");
    const email = document.getElementById("form-email");
    const subject = document.getElementById("form-subject");
    const message = document.getElementById("form-message");

    let valid = true;
    form.querySelectorAll(".input-group").forEach(g => g.classList.remove("has-error"));
    status.className = "form-status";

    if (!name.value.trim()) {
      name.closest(".input-group").classList.add("has-error");
      valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      email.closest(".input-group").classList.add("has-error");
      valid = false;
    }

    if (!message.value.trim()) {
      message.closest(".input-group").classList.add("has-error");
      valid = false;
    }

    if (!valid) return;

    const mailSubject = encodeURIComponent(subject.value.trim() || `Portfolio Inquiry from ${name.value.trim()}`);
    const mailBody = encodeURIComponent(
      `Name: ${name.value.trim()}\nEmail: ${email.value.trim()}\n\nMessage:\n${message.value.trim()}`
    );
    const mailtoUrl = `mailto:jepngetichs65@gmail.com?subject=${mailSubject}&body=${mailBody}`;

    status.className = "form-status show success";
    status.innerHTML = `
      <strong>Message ready!</strong> Opening your email client to send to <code>jepngetichs65@gmail.com</code>.<br>
      You can also write directly to <a href="mailto:jepngetichs65@gmail.com" style="text-decoration: underline; color: #10B981;">jepngetichs65@gmail.com</a>.
    `;

    window.location.href = mailtoUrl;
    form.reset();
  });
}

function escapeHTML(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
