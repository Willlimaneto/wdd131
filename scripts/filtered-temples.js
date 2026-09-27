const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
  },
  {
    templeName: "Johannesburg South Africa",
    location: "Johannesburg, South Africa",
    dedicated: "1985, August, 24",
    area: 19184,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-22475-main.jpg"
  }
];

const gallery = document.querySelector(".gallery");

function displayTemples(templeList) {
  gallery.innerHTML = "";

  templeList.forEach(temple => {
    const card = document.createElement("figure");

    const image = document.createElement("img");
    image.src = temple.imageUrl;
    image.alt = temple.templeName;
    image.loading = "lazy";
    image.width = 400;
    image.height = 250;

    const caption = document.createElement("figcaption");

    const name = document.createElement("h2");
    name.textContent = temple.templeName;

    const location = document.createElement("p");
    location.textContent = temple.location;

    const dedicated = document.createElement("p");
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;

    const area = document.createElement("p");
    area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

    caption.appendChild(name);
    caption.appendChild(location);
    caption.appendChild(dedicated);
    caption.appendChild(area);

    card.appendChild(image);
    card.appendChild(caption);

    gallery.appendChild(card);
  });
}


// Home
document.getElementById("home").addEventListener("click", event => {
  event.preventDefault();
  displayTemples(temples);
});


// Old - before 1900
document.getElementById("old").addEventListener("click", event => {
  event.preventDefault();

  const oldTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated);
    return year < 1900;
  });

  displayTemples(oldTemples);
});


// New - after 2000
document.getElementById("new").addEventListener("click", event => {
  event.preventDefault();

  const newTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated);
    return year > 2000;
  });

  displayTemples(newTemples);
});


// Large - more than 90,000 square feet
document.getElementById("large").addEventListener("click", event => {
  event.preventDefault();

  const largeTemples = temples.filter(temple => {
    return temple.area > 90000;
  });

  displayTemples(largeTemples);
});


// Small - less than 10,000 square feet
document.getElementById("small").addEventListener("click", event => {
  event.preventDefault();

  const smallTemples = temples.filter(temple => {
    return temple.area < 10000;
  });

  displayTemples(smallTemples);
});


// Footer year
document.getElementById("year").textContent = new Date().getFullYear();


// Last modified
document.getElementById("lastModified").textContent = document.lastModified;


// Mobile menu
const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");

  menuBtn.textContent = navMenu.classList.contains("open")
    ? "✕"
    : "\u2630";
});


// Display all temples when the page loads
displayTemples(temples);