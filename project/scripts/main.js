const animeList = [
    {
        title: "Death Note",
        image: "images/anime-death-note.webp",
        genre: "mystery",
        year: 2006,
        seasons: 1,
        description: "A student finds a notebook that can kill anyone whose name is written in it. A tense battle of minds begins between him and a genius detective."
    },
    {
        title: "Fullmetal Alchemist: Brotherhood",
        image: "images/anime-fullmetal-alchemist-brotherhood.webp",
        genre: "fantasy",
        year: 2009,
        seasons: 1,
        description: "Two brothers use alchemy to search for the Philosopher's Stone after a failed attempt to bring their mother back. A complete story of adventure and brotherhood."
    },
    {
        title: "Cells at Work!",
        image: "images/anime-cells-at-work.webp",
        genre: "educational",
        year: 2018,
        seasons: 2,
        description: "The human body becomes a busy city, with red and white blood cells as its workers. A fun way to learn basic biology."
    },
    {
        title: "Dr. Stone",
        image: "images/anime-dr-stone.webp",
        genre: "science",
        year: 2019,
        seasons: 4,
        description: "Humanity is turned to stone for thousands of years, and a young scientist sets out to rebuild civilization using science."
    },
    {
        title: "Demon Slayer",
        image: "images/anime-demon-slayer.webp",
        genre: "action",
        year: 2019,
        seasons: 4,
        description: "After demons attack his family, a kind boy trains to become a demon slayer to save his sister."
    },
    {
        title: "Haikyu!!",
        image: "images/anime-haikyu.webp",
        genre: "sports",
        year: 2014,
        seasons: 4,
        description: "A short but determined boy joins his school's volleyball team and shows that teamwork can beat height."
    },
    {
        title: "Attack on Titan",
        image: "images/anime-attack-on-titan.webp",
        genre: "action",
        year: 2013,
        seasons: 4,
        description: "Humanity lives behind giant walls to survive the Titans. A dark story of war, mystery, and difficult choices."
    }
];

const genreLabels = {
    action: "Action",
    fantasy: "Fantasy",
    mystery: "Mystery",
    science: "Science",
    educational: "Educational",
    sports: "Sports"
};


function showYear() {
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = `${new Date().getFullYear()}`;
    }
}


function toggleMenu() {
    const menuButton = document.getElementById("hamburguer-menu");
    const nav = document.querySelector("nav");
    const isOpen = nav.classList.toggle("open");

    if (isOpen) {
        menuButton.setAttribute("aria-expanded", "true");
        menuButton.textContent = `✕`;
    } else {
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.textContent = `☰`;
    }
}

function setupMenu() {
    const menuButton = document.getElementById("hamburguer-menu");

    if (menuButton) {
        menuButton.addEventListener("click", toggleMenu);
    }
}


function showWelcome() {
    const welcome = document.getElementById("welcome");

    if (!welcome) {
        return;
    }

    const savedName = localStorage.getItem("animefansUserName");

    if (savedName) {
        welcome.textContent = `Welcome back, ${savedName}!`;
    } else {
        welcome.textContent = `Welcome to Animefans`;
    }
}


function renderAnime(list) {
    const grid = document.getElementById("anime-grid");
    const count = document.getElementById("results-count");
    const emptyMessage = document.getElementById("empty-message");

    grid.innerHTML = list.map(anime => `
        <article>
            <img src="${anime.image}" alt="${anime.title} poster" width="190" height="285" loading="lazy">
            <h3>${anime.title}</h3>
            <p class="meta">
                <span class="badge">${genreLabels[anime.genre]}</span>
                ${anime.year} · ${anime.seasons} ${anime.seasons === 1 ? "season" : "seasons"}
            </p>
            <p>${anime.description}</p>
        </article>
    `).join("");

    count.textContent = `Showing ${list.length} anime`;
    emptyMessage.hidden = list.length > 0;
}

function filterAnime(genre) {
    let result;

    if (genre === "all") {
        result = animeList;
    } else {
        result = animeList.filter(anime => anime.genre === genre);
    }

    renderAnime(result);
}

function setupAnimePage() {
    const select = document.getElementById("genre-filter");

    if (!select) {
        return;
    }

    const savedGenre = localStorage.getItem("animefansGenre");
    const isValidGenre = Array.from(select.options).some(option => option.value === savedGenre);

    if (isValidGenre) {
        select.value = savedGenre;
    }

    filterAnime(select.value);

    select.addEventListener("change", () => {
        localStorage.setItem("animefansGenre", select.value);
        filterAnime(select.value);
    });
}


function saveSuggestion(event) {
    event.preventDefault();

    const form = event.target;
    const message = document.getElementById("form-message");
    const name = document.getElementById("user-name").value.trim();
    const email = document.getElementById("user-email").value.trim();
    const title = document.getElementById("anime-title").value.trim();
    const selectedExperience = form.querySelector('input[name="experience"]:checked');

    if (name === "" || title === "") {
        message.textContent = `Please fill in your name and the anime title.`;
        message.className = "message error";
        return;
    }

    const suggestion = {
        name: name,
        email: email,
        title: title,
        genre: document.getElementById("genre").value,
        experience: selectedExperience ? selectedExperience.value : "not specified",
        comment: document.getElementById("user-recommendation").value.trim()
    };

    const savedSuggestions = JSON.parse(localStorage.getItem("animefansSuggestions")) || [];
    savedSuggestions.push(suggestion);
    localStorage.setItem("animefansSuggestions", JSON.stringify(savedSuggestions));
    localStorage.setItem("animefansUserName", name);

    message.textContent = `Thanks, ${name}! We received your suggestion for ${title}.`;
    message.className = "message success";
    form.reset();
}

function setupForm() {
    const form = document.getElementById("suggestion-form");

    if (form) {
        form.addEventListener("submit", saveSuggestion);
    }
}


showYear();
setupMenu();
showWelcome();
setupAnimePage();
setupForm();