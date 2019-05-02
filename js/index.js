const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM <br/> Is <br/> Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  mainContent: {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
//Navigation//
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let navItems = document.querySelectorAll("nav a");
navItems.forEach(
  (link, i) => (link.innerHTML = siteContent.nav[`nav-item-${i + 1}`])
);

let nav = document.querySelector("nav");

let store = document.createElement("a")
store.textContent = "Store"

let media = document.createElement("a")
media.textContent = "Media"

nav.append(store);
nav.prepend(media);

navItems.forEach(i => (i.style.color = "green"));

//Call To Action//
let ctaTxt = document.querySelector(".cta-text h1");
ctaTxt.innerHTML = siteContent.cta["h1"];

let ctaBtn = document.querySelector(".cta-text button");
ctaBtn.innerHTML = siteContent.cta["button"];

let ctaImg = document.querySelector("#cta-img");
ctaImg.setAttribute("src", siteContent.cta["img-src"]);

//Top Content//
let featuresH4 = document.querySelector(".top-content .text-content h4");
featuresH4.innerHTML = siteContent.mainContent["features-h4"];

let featuresP = document.querySelector(".top-content .text-content p");
featuresP.innerHTML = siteContent.mainContent["features-content"];

let aboutH4 = document.querySelector(
  ".top-content .text-content:last-child h4"
);
aboutH4.innerHTML = siteContent.mainContent["about-h4"];

let aboutP = document.querySelector(".top-content .text-content:last-child p");
aboutP.innerHTML = siteContent.mainContent["about-content"];

//Middle Image//
let mdlImg = document.querySelector("#middle-img");
mdlImg.setAttribute("src", siteContent.mainContent["middle-img-src"]);

//Bottom Content//
let servicesH4 = document.querySelector(".bottom-content .text-content h4");
servicesH4.innerHTML = siteContent.mainContent["services-h4"];

let servicesP = document.querySelector(".bottom-content .text-content p");
servicesP.innerHTML = siteContent.mainContent["services-content"];

let productH4 = document.querySelector(
  ".bottom-content .text-content:nth-child(2) h4"
);
productH4.innerHTML = siteContent.mainContent["product-h4"];

let productP = document.querySelector(
  ".bottom-content .text-content:nth-child(2) p"
);
productP.innerHTML = siteContent.mainContent["product-content"];

let visionH4 = document.querySelector(
  ".bottom-content .text-content:nth-child(3) h4"
);
visionH4.innerHTML = siteContent.mainContent["vision-h4"];

let visionP = document.querySelector(
  ".bottom-content .text-content:nth-child(3) p"
);
visionP.innerHTML = siteContent.mainContent["vision-content"];

//Contact//
//Somthing is broken here. Each selctor works individually but once all are uncommented only the last p tag takes effect.

let contactH4 = document.querySelector(".contact h4");
contactH4.innerHTML = siteContent.contact["contact-h4"];

let addressP = document.querySelector(".contact p");
addressP.innerHTML = siteContent.contact["address"];

let phoneP = document.querySelector(".contact p:nth-child(2)");
phoneP.innerHTML = siteContent.contact["phone"];

let emailP = document.querySelector(".contact p:last-child");
phoneP.innerHTML = siteContent.contact["email"];

//Footer//
let footerP = document.querySelector("footer p");
footerP.innerHTML = siteContent.footer["copyright"];
