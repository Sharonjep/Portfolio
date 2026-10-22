/**
 * Sharon Jepngetich — Professional Portfolio Scripts
 * Handles project filtering, architecture deep-dive modal, copy email and contact form.
 */

// Project Technical Deep Dive Data (Verified from Sharon's code & architecture)
const PROJECT_DETAILS = {
  clinic: {
    category: "BACKEND API & DISTRIBUTED SYSTEMS",
    title: "Clinic Management & Real-Time Patient Queue Backend API",
    stack: [
      "Java 21 LTS",
      "Spring Boot 3.3.5",
      "Spring Security 6 (JWT)",
      "PostgreSQL 16",
      "Docker & Compose",
      "OpenAPI / Swagger 3.0",
      "JUnit 5 (26 Tests)"
    ],
    repoUrl: "https://github.com/Sharonjep/Clinic-Management-Backend",
    problem: `Small outpatient clinics face daily bottlenecks with chaotic waiting lounges, inadvertent double-bookings across overlapping doctor appointments and zero visibility into consultation throughput.`,
    architecture: `
[ Client / Lounge Signage TV ] ──(HTTP/REST)──> [ Spring Security 6 Filter ]
                                                      │ (JWT Token Validation)
                                                      ▼
                                       [ @RestController Layer ]
                                          ├── AuthController (/api/v1/auth)
                                          ├── AppointmentController (/api/v1/appointments)
                                          ├── QueueController (/api/v1/queue)
                                          └── LoungeController (/api/v1/lounge)
                                                      │ (Jakarta Bean Validation & DTOs)
                                                      ▼
                                          [ @Service Business Layer ]
                                          ├── Interval Overlap Collision Algorithm
                                          ├── Sequential Queue FIFO State Machine
                                          └── Custom Exceptions & Global Exception Handler
                                                      │
                                                      ▼
                                       [ Spring Data JPA Repositories ]
                                                      │
                                                      ▼
                                           [ PostgreSQL 16 Database ]`,
    highlights: [
      "Interval Overlap Collision Engine: Mathematical [start, end) query detecting overlapping doctor or patient commitments at the database layer with indexed temporal ranges.",
      "Sequential FIFO Queue Engine: Auto-generates daily tickets (e.g. Q-001, Q-002) with atomic increments and computes estimated wait times based on historical consultation averages.",
      "Doctor Consultation Flow: Strict state transition workflow: WAITING → IN_PROGRESS → COMPLETED. Doctors trigger next patient calls with real-time lounge updates.",
      "Enterprise Security & RBAC: Stateless JWT authentication enforcing role segregation between ROLE_ADMIN, ROLE_RECEPTIONIST and ROLE_DOCTOR.",
      "Comprehensive Testing: 26 automated unit and integration tests using JUnit 5, Mockito and SpringBootTest with Docker Compose containerization."
    ]
  },

  sergoit: {
    category: "PHP & WEB PLATFORM",
    title: "Sergoit View Gardens: Web and Guest Platform",
    stack: [
      "sergoitviewgardens.com (Live)",
      "PHP Backend",
      "JavaScript (ES6+)",
      "HTML5 & CSS3",
      "Responsive UI",
      "Apache / Nginx"
    ],
    liveUrl: "https://sergoitviewgardens.com",
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
    category: "IOT & APPLIED MACHINE LEARNING",
    title: "AgroTrack: Smart Soil & Environmental Telemetry",
    stack: [
      "AWS CDK (Python IaC)",
      "AWS Lambda (Python)",
      "Amazon DynamoDB",
      "scikit-learn (Isolation Forest)",
      "Amazon S3",
      "Amazon SNS",
      "React + Recharts"
    ],
    repoUrl: "https://github.com/Sharonjep/Agrotrack",
    problem: `Farmers and greenhouse managers lack low-cost, real-time telemetry to detect microclimate anomalies (soil moisture drops, unexpected thermal spikes) before crop stress causes irreversible damage.`,
    architecture: `
[ Soil & Environmental Sensor Nodes ] ──(HTTPS)──> [ Amazon API Gateway ]
                                                           │
                                                           ▼
                                             [ AWS Lambda Ingestion Worker ]
                                              ├── Sensor Calibration & Sanitization
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
      "Infrastructure as Code: Entire cloud backend provisioned reproducibly with AWS CDK in Python.",
      "Unsupervised Anomaly Detection: Scikit-learn Isolation Forest algorithm running inside AWS Lambda to detect multivariate sensor outliers.",
      "Real-Time Alerting: Immediate automated SMS alerts through Amazon SNS when temperature or soil moisture breaches safety limits.",
      "Historical Telemetry Archiving: Long-term raw data persistence in Amazon S3 with one-click CSV export for agronomic research."
    ]
  },

  rabbitmq: {
    category: "DISTRIBUTED SYSTEMS & ASYNCHRONOUS MESSAGING",
    title: "FastAPI & RabbitMQ Event-Driven Microservice",
    stack: [
      "FastAPI (Python 3.11)",
      "RabbitMQ (AMQP 0-9-1)",
      "Docker & Compose",
      "Kubernetes Manifests",
      "Jenkins CI/CD Pipeline",
      "HTML5 / CSS3 Dashboard"
    ],
    repoUrl: "https://github.com/Sharonjep/fastapi-rabbitmq-microservice",
    problem: `Synchronous REST services degrade and drop requests under flash traffic spikes when long-running background tasks block web worker threads.`,
    architecture: `
[ HTTP Client / Web UI ] ──(REST POST /orders)──> [ FastAPI Order Service ]
                                                         │
                                                         ▼ (AMQP Publish)
                                             [ RabbitMQ Message Broker ]
                                             ├── Exchange: direct_orders
                                             └── Queue: orders_queue (Durable)
                                                         │
                                                         ▼ (Worker Consumption)
                                             [ Background Worker Daemon ]
                                             ├── Order Validation & Processing
                                             └── Health Check Monitor Endpoint`,
    highlights: [
      "Asynchronous Decoupling: FastAPI processes order ingress in sub-milliseconds by dispatching tasks to RabbitMQ.",
      "Guaranteed Delivery: Durable exchanges and queues with explicit worker acknowledgments ensure zero lost messages.",
      "Containerized Delivery: Production multi-stage Docker build, Docker Compose orchestration and Kubernetes manifests.",
      "System Health Monitoring: Built-in health check endpoints providing broker connection status and queue depth telemetry."
    ]
  },

  lunalogic: {
    category: "LIVE SITE & DIGITAL SYSTEMS CONSULTANCY",
    title: "LunaLogic Tech: Intelligent Software Engineering",
    stack: [
      "lunalogictech.com (Live)",
      "Modern Semantic Web Architecture",
      "Managed Cloud Hosting & DNS",
      "Conversational AI Assistant Widget",
      "RESTful API Integrations",
      "Global Remote-First Positioning"
    ],
    liveUrl: "https://lunalogictech.com",
    repoUrl: "https://github.com/Sharonjep",
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
    category: "HEALTHCARE AI & CLOUD NLP",
    title: "MediLite: AI Symptom Checker",
    stack: [
      "Amazon Comprehend (Medical NLP)",
      "AWS Lambda",
      "Amazon API Gateway",
      "React + Vite",
      "Amazon S3 Static Hosting"
    ],
    repoUrl: "https://github.com/Sharonjep/MediLite-AI-Health-Checker",
    problem: `Patients in remote or resource-limited clinics often face delays before receiving preliminary triage information, leading to unguided self-treatment.`,
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
      "Clinical NLP Pipeline: Amazon Comprehend extracts anatomy, medical conditions and medications from freeform language.",
      "Serverless Scalability: Serverless architecture scales automatically to zero when idle with zero maintenance overhead.",
      "Accessible Interface: Lightweight mobile-optimized React client for fast loads even on 3G cellular connections."
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

function setupDeepDiveModal() {
  const modal = document.getElementById("project-modal");
  const modalContent = document.getElementById("modal-content-area");
  const closeBtn = document.getElementById("modal-close");
  const triggerBtns = document.querySelectorAll(".btn-modal-trigger");

  if (!modal || !modalContent || !closeBtn) return;

  const openProjectModal = (key) => {
    const data = PROJECT_DETAILS[key];
    if (!data) return;

    modalContent.innerHTML = `
      <div class="modal-sub">${escapeHTML(data.category)}</div>
      <h3 class="modal-heading" id="modal-title">${escapeHTML(data.title)}</h3>

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
