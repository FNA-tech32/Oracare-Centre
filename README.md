# OraCare Centre — Dental Practice Support & Revenue Cycle Management

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.2-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-v12.38-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)

> **OraCare Centre** is a specialized full-service dental administrative and revenue cycle management partner. Founded by experienced dental professionals and practice managers, OraCare Centre empowers dental practitioners, DSOs, and clinic teams across the United States to prioritize patient care while we handle insurance billing, provider credentialing, fee negotiations, and audit support.

---

## 📌 Table of Contents

- [Overview & Mission](#-overview--mission)
- [Core Services & Capabilities](#-core-services--capabilities)
- [Official Contact & Location Details](#-official-contact--location-details)
- [Technology Stack](#-technology-stack)
- [Project Architecture & File Tree](#-project-architecture--file-tree)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Available Scripts](#available-scripts)
- [Pages & Routing Breakdown](#-pages--routing-breakdown)
- [Interactive Features & UI Highlights](#-interactive-features--ui-highlights)
- [SEO & Best Practices](#-seo--best-practices)
- [Compliance & Privacy Standards](#-compliance--privacy-standards)
- [License & Acknowledgments](#-license--acknowledgments)

---

## 🌟 Overview & Mission

Dental practices face increasing complexity with insurance reimbursement schedules, payer audits, credentialing backlogs, and patient verification bottlenecks.

**OraCare Centre** bridges this operational gap:
- **Maximized Reimbursements:** Streamlined claim submission with daily EOB posting and aggressive aging follow-ups.
- **Credentialing Accuracy:** Direct handling of initial applications, re-credentialings, and PPO fee negotiations.
- **Front-Desk Relief:** Comprehensive insurance verification forms delivered beforehand, letting clinic teams focus on patients.
- **Compliance & Confidence:** Proactive audit support, chart reviews, and adherence to HIPAA standards.

---

## 💼 Core Services & Capabilities

| Service | Description | Highlights |
| :--- | :--- | :--- |
| **Dental Credentialing** | End-to-end credentialing and re-credentialing with commercial PPOs and state plans. | Faster approvals, tracking, PPO network optimization. |
| **PPO Fee Negotiations** | Strategic fee schedule research, tier optimization, and carrier renegotiations. | Boost practice margins without increasing chair time. |
| **Dental Billing & AR** | Daily claim scrubbing, daily EOB posting, and 30+ day aging accounts management. | Paperless integration with leading dental practice management softwares. |
| **Insurance Verification** | Standardized breakdown forms verifying active coverage, deductibles, frequencies, and maximums. | Reduces claim denials and over-the-counter collection surprises. |
| **Practice Consulting & Audits**| Pre-audit chart analysis, payer dispute management, and compliance reviews. | Protects clinic revenues against retroactive recoupments. |

---

## 📞 Official Contact & Location Details

OraCare Centre provides multiple primary and alternative contact channels to ensure immediate communication for clinics, patients, and billing partners:

### 📱 Telephone Numbers
- **Primary Hotline (Toll-Free):** [`+1 (888) 700-5543`](tel:+18887005543)
- **Alternative / Direct Support Line:** [`+1 (888) 700-5498`](tel:+18887005498)

### ✉️ Email Communication
- **General Inquiries & Intake:** [`info@oracarecentre.com`](mailto:info@oracarecentre.com)
- **Client Support & Audit Assistance:** [`support@oracarecentre.com`](mailto:support@oracarecentre.com)
- **Consultation Scheduling:** [`Consultation@oracarecentre.com`](https://outlook.office.com/owa/calendar/Consultation@oracarecentre.com/bookings/)

### 📍 Physical Locations & Hubs
- **Headquarters / Practice Office:**  
  `1015 Riley St, Suite #297, Folsom, CA 95630, USA`
- **Alternative Hub / Corporate Operations Center:**  
  `850 Iron Point Rd, Suite #120, Folsom, CA 95630, USA`

### ⏰ Business Operating Hours
- **Monday – Friday:** `8:00 AM – 6:00 PM (PST)`
- **Saturday:** `9:00 AM – 2:00 PM (PST)` *(Urgent Case Coordination & Support)*
- **Sunday:** `Closed`

---

## 🛠 Technology Stack

- **Framework:** [React 19](https://react.dev/) + [Vite 7](https://vitejs.dev/) (Lightning fast HMR & ES module bundling)
- **Routing:** [React Router v7](https://reactrouter.com/) (Dynamic client-side navigation)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with PostCSS
- **Animations:** [Framer Motion](https://www.framer.com/motion/) (Scroll triggers, smooth transitions, fade variants)
- **Iconography:** [Lucide React](https://lucide.dev/)
- **Carousel & Sliders:** [Swiper React](https://swiperjs.com/)
- **Typography:** DM Sans (Google Fonts)

---

## 📁 Project Architecture & File Tree

```text
OraCare-Centre/
├── index.html                   # HTML entry point with modern metadata & fonts
├── package.json                 # Project configuration & npm script definitions
├── vite.config.js               # Vite bundler configuration
├── tailwind.config.js           # Tailwind configuration
├── postcss.config.js            # PostCSS plugin definitions
├── public/                      # Static assets, icons, partner logos, and banners
│   ├── favicon.ico
│   ├── homeOne/
│   │   ├── logo-light 1.svg     # OraCare Centre Vector Emblem & Wordmark
│   │   └── partner-logos/       # Dental partner logos
│   └── services/                # Service illustration graphics & banners
└── src/
    ├── main.jsx                 # Application bootstrapping
    ├── App.jsx                  # Main router definitions and layout wrappers
    ├── index.css                # Global styles and Tailwind base imports
    ├── App.css                  # Custom application-wide utility styles
    ├── components/              # Reusable UI modules
    │   ├── Topbar.jsx           # Global sticky top header with dual phone & hours
    │   ├── Navbar.jsx           # Responsive navigation bar with services dropdown
    │   ├── Footer.jsx           # Site footer with brand info, alternative details, quick links
    │   ├── ServiceSection.jsx   # Interactive service cards with hover effects
    │   ├── PartnerSection.jsx   # Partner logos grid and consultation request form
    │   ├── Testimonial.jsx      # Doctor & practice testimonials slider
    │   ├── BillingSlider.jsx    # Step-by-step billing workflow slider
    │   ├── InnerPageHeader.jsx  # Reusable inner page breadcrumb header
    │   ├── ScrollToTop.jsx      # Automatic window scroll reset on route change
    │   └── credentialing/       # Specialized credentialing modules
    │       ├── HeroSection.jsx
    │       ├── FAQSection.jsx
    │       ├── ProcessTimeline.jsx
    │       ├── ServicesGrid.jsx
    │       ├── WhoWeHelp.jsx
    │       ├── WhyChoose.jsx
    │       ├── WhyCredentialing.jsx
    │       └── WhyDifferent.jsx
    ├── pages/                   # Application views
    │   ├── Home.jsx             # Primary landing page
    │   ├── HomeTwo.jsx          # Alternate executive landing page layout
    │   ├── About.jsx            # About OraCare Centre, history & leadership
    │   ├── Services.jsx         # Overview of dental practice solutions
    │   ├── BillingServices.jsx  # Dental billing & aging recovery service page
    │   ├── Credentialing.jsx    # Credentialing & network enrollment page
    │   ├── InsuranceVerification.jsx # Verification forms & daily eligibility checks
    │   ├── ConsultingAndAudit.jsx    # Practice audit & PPO negotiation page
    │   ├── ClientSuccess.jsx    # Case studies, practice metrics & results
    │   ├── Testimonials.jsx     # Extended client reviews & doctor feedback
    │   ├── Blog.jsx             # Dental industry news, billing tips & HIPAA updates
    │   ├── BlogDetails.jsx      # Dynamic article view
    │   ├── Career.jsx           # Career opportunities & recruitment form
    │   ├── Contact.jsx          # Interactive contact page with primary/alt channels & map
    │   ├── PrivacyPolicy.jsx    # Full legal privacy statement
    │   └── TermsConditions.jsx  # Terms of service and SMS disclosure
    └── data/
        └── blogData.js          # Curated blog post repository
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have installed:
- [Node.js](https://nodejs.org/) (Version **18.x** or higher, v24+ recommended)
- `npm` (Version **9.x** or higher)

### Installation

1. Clone or navigate to the repository directory:
   ```bash
   cd OraCare-Centre
   ```

2. Install all dependencies:
   ```bash
   npm install
   ```

### Available Scripts

In the project root, you can run:

| Command | Action |
| :--- | :--- |
| `npm run dev` | Launches the local Vite development server with Hot Module Replacement (HMR). Default: `http://localhost:5173` |
| `npm run build` | Compiles and optimizes assets into the `dist/` directory for production deployment. |
| `npm run preview` | Locally serves the production bundle from `dist/` to verify build output. |
| `npm run lint` | Runs ESLint across all `.js` and `.jsx` files to catch syntax or lint issues. |

---

## 📄 Pages & Routing Breakdown

| Route | Page Component | Description |
| :--- | :--- | :--- |
| `/` | `Home.jsx` | Main homepage showcasing value proposition, quick stats, services, and appointment form. |
| `/home-two` | `HomeTwo.jsx` | Executive alternate layout featuring expanded statistics and direct contact bar. |
| `/about` | `About.jsx` | Company journey, mission statement, dentist leadership, and partner network. |
| `/services` | `Services.jsx` | Comprehensive list of administrative dental support offerings. |
| `/services/credentialing` | `Credentialing.jsx` | Commercial, Medicare, and Medicaid enrollment workflows. |
| `/services/billing` | `BillingServices.jsx` | Daily billing, fee adjustment, and 30+ day aging resolution. |
| `/services/verification` | `InsuranceVerification.jsx` | Comprehensive pre-visit patient insurance breakdowns. |
| `/services/consultingandaudit` | `ConsultingAndAudit.jsx` | PPO negotiations, compliance reviews, and chart audit assistance. |
| `/client-success` | `ClientSuccess.jsx` | Proven dental practice growth statistics and case studies. |
| `/testimonials` | `Testimonials.jsx` | Verified doctor testimonials and feedback. |
| `/blog` | `Blog.jsx` | Industry articles on EOB compliance, retroactive terminations, and billing. |
| `/blog/:id` | `BlogDetails.jsx` | Full article reader with category tags and related articles. |
| `/career` | `Career.jsx` | Job openings with multi-field application submission. |
| `/contact` | `Contact.jsx` | Complete contact hub with dual phone lines, dual emails, dual office locations, interactive form, and Google Maps integration. |
| `/privacy-policy` | `PrivacyPolicy.jsx` | Patient and practice data privacy policies. |
| `/terms-conditions` | `TermsConditions.jsx` | Legal terms of use, electronic communications, and SMS opt-in details. |

---

## 🎨 Interactive Features & UI Highlights

- **Dynamic Navigation:** Sticky navigation bar with smooth hover dropdowns and mobile off-canvas drawer.
- **Dual Contact Integration:** Seamless one-tap calling (`tel:`) and instant emailing (`mailto:`) for primary and alternative hotlines.
- **Embedded Interactive Map:** Full-width Google Maps embed centering on the corporate operations facility at Iron Point Rd, Folsom CA.
- **Rich Motion Effects:** Entrance animations powered by Framer Motion (`fadeInUp`, `fadeInLeft`, `staggerContainer`).
- **Interactive Forms:** Multi-step styled inputs with checkboxes for email and SMS updates compliant with TCPA regulations.

---

## 🛡️ Compliance & Privacy Standards

- **HIPAA Awareness:** Designed with workflows prioritizing electronic Protected Health Information (ePHI) confidentiality.
- **TCPA Compliant Opt-In:** All communication forms clearly outline opt-in terms for SMS and email.
- **Zero Third-Party Marketing Disclosure:** Contact details entered into consultation forms are never shared with third parties for promotional purposes.

---

## 📄 License & Acknowledgments

- **Copyright:** &copy; 2026 **OraCare Centre LLC**. All rights reserved.
- **Designed & Developed:** Tailored for modern dental practitioners seeking seamless practice growth.
