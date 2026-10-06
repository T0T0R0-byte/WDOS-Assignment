<div align="center">

# YouHeal Hospitals

### A responsive, multi-page hospital website built with HTML, CSS and vanilla JavaScript.

A front-end coursework project exploring how patients discover hospital services, browse doctors, view pharmacy products and access consultation and account interfaces.

[**Open the live site**](https://t0t0r0-byte.github.io/WDOS-Assignment/) · [Source code](https://github.com/T0T0R0-byte/WDOS-Assignment)

![HTML5](https://img.shields.io/badge/HTML5-structure-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-styling-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-vanilla-F7DF1E?logo=javascript&logoColor=black)
![Deployment](https://img.shields.io/badge/deployment-GitHub%20Pages-222222?logo=githubpages&logoColor=white)

</div>

---

## About the project

YouHeal Hospitals is a fictional hospital website designed to bring key patient-facing information into one place. The interface includes hospital information, doctor profiles, service listings, a pharmacy catalogue, consultation reservation UI, and account/payment pages.

The project uses plain HTML, CSS and JavaScript, so it does not require a framework or a build step.

## Explore the site

| Page | What you'll find |
|---|---|
| [Home](https://t0t0r0-byte.github.io/WDOS-Assignment/) | Hospital introduction, featured services and navigation |
| [About us](https://t0t0r0-byte.github.io/WDOS-Assignment/about_us.html) | Hospital information |
| [Doctors](https://t0t0r0-byte.github.io/WDOS-Assignment/doctors_page.html) | Doctor profiles and specialisations |
| [Services](https://t0t0r0-byte.github.io/WDOS-Assignment/services_page.html) | Available service categories |
| [Pharmacy](https://t0t0r0-byte.github.io/WDOS-Assignment/pharmacy_page.html) | Medicine catalogue and product entries |
| [Consultation reservation](https://t0t0r0-byte.github.io/WDOS-Assignment/consulting_reservation_page.html) | Consultation booking interface |
| [Login](https://t0t0r0-byte.github.io/WDOS-Assignment/login_page.html) | Sign-in interface |
| [Payment](https://t0t0r0-byte.github.io/WDOS-Assignment/payment.html) | Payment interface |

> **Note:** GitHub Pages deployment needs to complete before the live links work. The login, reservation and payment pages are front-end interfaces only. This repository does not include a backend for authentication, booking storage or payment processing.

## Built with

- **HTML5** for page structure
- **CSS3** for layouts and page-specific styling
- **Vanilla JavaScript** for client-side interactions
- **GitHub Pages** for static hosting, deployed through GitHub Actions

## Run locally

No package installation is required.

```bash
git clone https://github.com/T0T0R0-byte/WDOS-Assignment.git
cd WDOS-Assignment
python -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) in your browser.

You may also open `index.html` directly, although using a local HTTP server is closer to a normal website environment.

## Project structure

```text
.
├── index.html
├── about_us.html
├── doctors_page.html
├── services_page.html
├── pharmacy_page.html
├── consulting_reservation_page.html
├── login_page.html
├── payment.html
├── css/
├── js/
└── images/
```

## Deployment

The included GitHub Actions workflow publishes the repository to GitHub Pages whenever changes are pushed to `main`.

If Pages has not been enabled for this repository yet, open **Settings → Pages**, set **Build and deployment → Source** to **GitHub Actions**, and save. Then check the **Actions** tab for the deployment status.

---

<div align="center">

Built as part of web development coursework.

</div>
