const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png'
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png'
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io'
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018'
  }
};

//Navigation//

// Example: Update the img src for the logo

let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

const navbar = document.querySelectorAll('nav a');
navbar.forEach(
  (link, index) => (link.innerHTML = siteContent.nav[`nav-item-${index + 1}`])
);

let nav = document.querySelector('nav');

let store = document.createElement('a');
store.textContent = 'Store';
store.setAttribute('href', '#');
store.style.color = 'green';

let media = document.createElement('a');
media.textContent = 'Media';
media.setAttribute('href', '#');
media.style.color = 'green';

nav.append(store);
nav.prepend(media);

navbar.forEach(index => (index.style.color = 'green'));

//Call to Action//
const ctaH1 = document.querySelector('.cta-text h1');
ctaH1.innerHTML = siteContent.cta['h1'];

const ctaBtn = document.querySelector('.cta-text button');
ctaBtn.innerHTML = siteContent.cta['h1'];

const ctaImg = document.querySelector('.cta img');
ctaImg.setAttribute('src', siteContent.cta['img-src']);

//Top Content//

const featuresH4 = document.querySelector('.top-content .text-content h4');
featuresH4.innerHTML = siteContent['main-content']['features-h4'];

const featuresP = document.querySelector('.top-content .text-content p');
featuresP.innerHTML = siteContent['main-content']['features-content'];

const aboutH4 = document.querySelector(
  '.top-content .text-content:nth-child(2) h4'
);
aboutH4.innerHTML = siteContent['main-content']['about-h4'];

const aboutP = document.querySelector(
  '.top-content .text-content:nth-child(2) p'
);
aboutP.innerHTML = siteContent['main-content']['about-content'];

//Middle Image//
const midImg = document.querySelector('.middle-img');
midImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

//Bottom Content//
const servicesH4 = document.querySelector('.bottom-content .text-content h4');
servicesH4.innerHTML = siteContent['main-content']['services-h4'];

const servicesP = document.querySelector('.bottom-content .text-content p');
servicesP.innerHTML = siteContent['main-content']['services-content'];

const productH4 = document.querySelector(
  '.bottom-content .text-content:nth-child(2) h4'
);
productH4.innerHTML = siteContent['main-content']['product-h4'];

const productP = document.querySelector(
  '.bottom-content .text-content:nth-child(2) p'
);
productP.innerHTML = siteContent['main-content']['product-content'];

const visionH4 = document.querySelector(
  '.bottom-content .text-content:last-child h4'
);
visionH4.innerHTML = siteContent['main-content']['vision-h4'];

const visionP = document.querySelector(
  '.bottom-content .text-content:last-child p'
);
visionP.innerHTML = siteContent['main-content']['vision-content'];

//Contact//
const contactH4 = document.querySelector('.contact h4');
contactH4.innerHTML = siteContent.contact['contact-h4'];

const address = document.querySelector('.contact p');
address.innerHTML = siteContent.contact['address'];

const phone = document.querySelector('.contact p:nth-child(3)');
phone.innerHTML = siteContent.contact['phone'];

const email = document.querySelector('.contact p:nth-child(4)');
email.innerHTML = siteContent.contact['email'];

//Footer//
const footer = document.querySelector('footer p');
footer.innerHTML = siteContent.footer['copyright'];
