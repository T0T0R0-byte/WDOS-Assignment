# YouHeal Hospitals

A static multi-page website for a fictional hospital. Plain HTML, CSS and JavaScript, no build step, written as WDOS module coursework.

![HTML5](https://img.shields.io/badge/HTML5-no%20build%20step-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-handwritten-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-vanilla-F7DF1E?logo=javascript&logoColor=black)

## Pages

| Page | Purpose |
|---|---|
| `index.html` | Landing page: services, why choose us, getting started |
| `about_us.html` | About the hospital |
| `doctors_page.html` | Doctor profiles and specialisations |
| `services_page.html` | Service listings |
| `pharmacy_page.html` | Pharmacy catalogue with per-drug entries |
| `payment.html` | Payment page |
| `consulting_reservation_page.html` | Consultation booking form |
| `login_page.html` | Sign-in page |
| `error_page.html` | Error page |

## Assets

| Path | Contents |
|---|---|
| `css/styles.css` | Site-wide styles |
| `css/pharmacy.css`, `css/payment.css`, `css/error_page.css` | Page-specific styles |
| `js/pharmacy.js` | Pharmacy catalogue behaviour |
| `js/payment.js` | Payment page behaviour |
| `images/` | 59 images: doctors, branches, service photos, drug product images, favicons |

## Running it

No dependencies and no build step. Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
```

Then open http://localhost:8000

## Scope

Front end only. There is no server, database or API in this repository, so the sign-in page and the payment page are interface only. They do not authenticate anyone or process any payment.

## Related

An earlier and smaller build of the same site sits archived on this account as `WDOS-F`. `payment.html`, the `js/` scripts, the pharmacy and payment stylesheets, and the extra product images were added after that build.
