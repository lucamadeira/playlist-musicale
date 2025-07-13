// Dati fittizi delle musiche con più dettagli per i filtri
const musicas =[
    {
        id: 1,
        titulo: `Me Porto Bonito`,
        artista: `Bad Bunny `,
        album: `O Início`,
        genere: ["Pop"],
        momenti: ["Festa"],
        imagem: `audio/imgs-tags/bad-bunny-Porto bonito.png`,
        src: `audio/bad bunny-Porto bonito.mp3`,         
        
    },
    {
        id: 2,
        titulo: `BIRDS OF A FEATHER`,
        artista: `billie eilish`,
        album: `Nocturne`,
        genere: ["Chillout", "pop"],
        momenti: ["Relax", "In Casa"],
        imagem: `audio/imgs-tags/billie-eilish.png`,      
        src: `audio/billie eilish.mp3`,     
        
    },{
        id: 3,
        titulo: `Tití Me Preguntó`,
        artista: `Bad Bunny`,
        album: `Nocturne`,
        genere: ["Chillout", "pop"],
        momenti: ["Relax", "In Casa"],
        imagem: `audio/imgs-tags/bad-bunny-Vip.jpg`,      
        src: `audio/Bad Bunny - Tití Me Preguntó .mp3`,     
        
    },{
        id: 4,
        titulo: `BIRDS OF A FEATHER`,
        artista: `billie eilish`,
        album: `Nocturne`,
        genere: ["Chillout", "pop"],
        momenti: ["Relax", "In Casa"],
        imagem: ``,      
        src: ``,     
        
    },{
        id: 5,
        titulo: `BIRDS OF A FEATHER`,
        artista: `billie eilish`,
        album: `Nocturne`,
        genere: ["Chillout", "pop"],
        momenti: ["Relax", "In Casa"],
        imagem: `audio/imgs-tags/billie-eilish.png`,      
        src: `audio/billie eilish.mp3`,     
        
    },{
        id: 6,
        titulo: `BIRDS OF A FEATHER`,
        artista: `billie eilish`,
        album: `Nocturne`,
        genere: ["Chillout", "pop"],
        momenti: ["Relax", "In Casa"],
        imagem: `audio/imgs-tags/billie-eilish.png`,      
        src: `audio/billie eilish.mp3`,     
        
    },{
        id: 7,
        titulo: `BIRDS OF A FEATHER`,
        artista: `billie eilish`,
        album: `Nocturne`,
        genere: ["Chillout", "pop"],
        momenti: ["Relax", "In Casa"],
        imagem: `audio/imgs-tags/billie-eilish.png`,      
        src: `audio/billie eilish.mp3`,     
        
    },{
        id: 8,
        titulo: `BIRDS OF A FEATHER`,
        artista: `billie eilish`,
        album: `Nocturne`,
        genere: ["Chillout", "pop"],
        momenti: ["Relax", "In Casa"],
        imagem: `audio/imgs-tags/billie-eilish.png`,      
        src: `audio/billie eilish.mp3`,     
        
    },{
        id: 9,
        titulo: `BIRDS OF A FEATHER`,
        artista: `billie eilish`,
        album: `Nocturne`,
        genere: ["Chillout", "pop"],
        momenti: ["Relax", "In Casa"],
        imagem: `audio/imgs-tags/billie-eilish.png`,      
        src: `audio/billie eilish.mp3`,     
        
    },{
        id: 10,
        titulo: `BIRDS OF A FEATHER`,
        artista: `billie eilish`,
        album: `Nocturne`,
        genere: ["Chillout", "pop"],
        momenti: ["Relax", "In Casa"],
        imagem: `audio/imgs-tags/billie-eilish.png`,      
        src: `audio/billie eilish.mp3`,     
        
    },{
        id: 11,
        titulo: `BIRDS OF A FEATHER`,
        artista: `billie eilish`,
        album: `Nocturne`,
        genere: ["Chillout", "pop"],
        momenti: ["Relax", "In Casa"],
        imagem: `audio/imgs-tags/billie-eilish.png`,      
        src: `audio/billie eilish.mp3`,     
        
    },{
        id: 12,
        titulo: `BIRDS OF A FEATHER`,
        artista: `billie eilish`,
        album: `Nocturne`,
        genere: ["Chillout", "pop"],
        momenti: ["Relax", "In Casa"],
        imagem: `audio/imgs-tags/billie-eilish.png`,      
        src: `audio/billie eilish.mp3`,     
        
    },]

// Dati fittizi per playlist e hit più ascoltate
const playlistConsigliate = [
    { id: 1, titolo: "Hits del Momento 2025", immagine: "img/imgs-hits/bad-bunny-new-album.jpg" },
    { id: 2, titolo: "Relax Totale", immagine: "img/imgs-hits/Billie-Eilish.jpg" },
    { id: 3, titolo: "Energia per Allenamento", immagine: "img/imgs-hits/ed-sheeran.jpg" },
    { id: 4, titolo: "Viaggio nella Memoria", immagine: "img/imgs-hits/bts.jpg" },
    { id: 5, titolo: "Pop ", immagine: "img/imgs-hits/taylor-swift.jpg" },
    { id: 6, titolo: "Soundtrack Epiche", immagine: "img/imgs-hits/the-week.jpg" },
];

const topHits = [ // Usiamo le musicas esistenti per le top hit
    musicas[0], musicas[1], musicas[2], musicas[3], musicas[4],
    musicas[5], musicas[6], musicas[7], musicas[8], musicas[9]
];


// Definisci i generi e momenti disponibili per i filtri (per la renderizzazione dei bottoni)
const generiDisponibili = ["Pop", "Rock", "Elettronica", "Hip Hop", "Latino", "Classica", "Blues", "Ambient", "Folk", "Indie", "Alternativo", "Jazz", "Salsa", "R&B"];
const momentiDisponibili = [
    { nome: "Relax", icona: "fas fa-leaf" },
    { nome: "Romance", icona: "fas fa-heart" },
    { nome: "Festa", icona: "fas fa-cocktail" },
    { nome: "Studio", icona: "fas fa-book" },
    { nome: "Viaggio", icona: "fas fa-plane" },
    { nome: "Nostalgia", icona: "fas fa-clock" },
    { nome: "Allenamento", icona: "fas fa-dumbbell" },
    { nome: "Umorismo", icona: "fas fa-laugh-squint" },
    { nome: "In Casa", icona: "fas fa-home" },
    { nome: "Colonna Sonora", icona: "fas fa-film" }
];


// Selettori del DOM
const listaMusicasContainer = document.getElementById("lista-musicas");
const audioPlayer = document.getElementById("audio-player");
const searchInput = document.getElementById("busca");
const playPauseButton = document.getElementById("play-pause-button");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const progressBar = document.getElementById("progress-bar");
const currentTimeDisplay = document.getElementById("current-time");
const totalTimeDisplay = document.getElementById("total-time");
const volumeSlider = document.getElementById("volume-slider");
const currentSongTitle = document.getElementById("current-song-title");
const currentSongArtist = document.getElementById("current-song-artist");
const newsletterForm = document.querySelector(".newsletter-form");
const themeToggleButton = document.getElementById("theme-toggle");
const commentTextarea = document.getElementById("comment-text");
const submitCommentButton = document.getElementById("submit-comment");
const commentsList = document.getElementById("comments-list");
const genreFilterButtons = document.querySelectorAll(".genre-filters .filter-button");
const momentiGrid = document.getElementById("momenti-grid");
const topHitsGrid = document.getElementById("top-hits-grid");
const playlistsGrid = document.getElementById("playlists-grid");
const allGenresGrid = document.getElementById("all-genres-grid");
const loginButton = document.getElementById("login-button");
const bannerPlayButton = document.querySelector(".hero-banner .banner-play-button");


// Variabili di stato
let currentPlayingIndex = -1;
let isPlaying = false;
let isLightMode = false; // Stato iniziale: modalità scura
let filtroAttivoGenere = "Tutti"; // Filtro attivo per i generi
let filtroAttivoMomento = "Nessuno"; // Filtro attivo per i momenti


// --- Funzioni Utilità Generali ---

// Funzione per formattare il tempo (MM:SS)
function formattaTempo(secondi) {
    if (isNaN(secondi) || secondi < 0) return "0:00";
    const minuti = Math.floor(secondi / 60);
    const secondiRimanenti = Math.floor(secondi % 60);
    return `${minuti}:${secondiRimanenti < 10 ? '0' : ''}${secondiRimanenti}`;
}

// --- Funzioni di Renderizzazione ---

// Renderizza le schede musicali nella sezione "Album Raccomandati"
function renderizzaSchedeMusicali(listaMusicheDaRenderizzare) {
    listaMusicasContainer.innerHTML = "";

    if (listaMusicheDaRenderizzare.length === 0) {
        listaMusicasContainer.innerHTML = '<p class="no-results">Nessuna musica trovata con questi criteri. Prova un altro termine o filtro!</p>';
        return;
    }

    listaMusicheDaRenderizzare.forEach((musica, indice) => {
        const schedaMusicale = document.createElement("div");
        schedaMusicale.className = "music-card";
        schedaMusicale.style.animationDelay = `${indice * 0.05}s`;
        schedaMusicale.innerHTML = `
            <img src="${musica.immagine}" alt="Copertina di ${musica.titulo}" />
            <div class="info">
                <h3>${musica.titulo}</h3>
                <p>${musica.artista} - ${musica.album}</p>
                <p class="description">${musica.descrizione}</p>
            </div>
            <button class="card-play-button" data-id="${musica.id}" aria-label="Riproduci ${musica.titulo}"><i class="fas fa-play"></i></button>
        `;

        const bottonePlayScheda = schedaMusicale.querySelector(".card-play-button");
        bottonePlayScheda.addEventListener("click", (evento) => {
            evento.stopPropagation();
            riproduciCanzoneSelezionata(musica, indice);
        });

        schedaMusicale.addEventListener("click", () => {
            riproduciCanzoneSelezionata(musica, indice);
        });

        listaMusicasContainer.appendChild(schedaMusicale);
    });

    aggiornaSchedaAttiva(currentPlayingIndex);
}

// Renderizza le schede dei momenti
function renderizzaMomenti() {
    momentiGrid.innerHTML = '';
    momentiDisponibili.forEach(momento => {
        const momentCard = document.createElement('div');
        momentCard.className = 'moment-card';
        if (filtroAttivoMomento === momento.nome) {
             momentCard.classList.add('active'); // Potenziale classe active per evidenziare
        }
        momentCard.innerHTML = `
            <i class="${momento.icona}"></i>
            <p>${momento.nome}</p>
        `;
        momentCard.addEventListener('click', () => filtraMusichePerMomento(momento.nome));
        momentiGrid.appendChild(momentCard);
    });
}

// Renderizza le canzoni più ascoltate
function renderizzaTopHits() {
    topHitsGrid.innerHTML = '';
    topHits.forEach(hit => {
        const hitItem = document.createElement('div');
        hitItem.className = 'top-hit-item';
        hitItem.innerHTML = `
            <div class="info">
                <h4>${hit.titulo}</h4>
                <p>${hit.artista}</p>
            </div>
        `;
        hitItem.addEventListener('click', () => {
            // Trova l'indice della hit nella lista completa delle musiche per la riproduzione
            const hitIndex = musicas.findIndex(m => m.id === hit.id);
            if (hitIndex !== -1) {
                riproduciCanzoneSelezionata(hit, hitIndex);
            }
        });
        topHitsGrid.appendChild(hitItem);
    });
}

// Renderizza le playlist consigliate
function renderizzaPlaylistConsigliate() {
    playlistsGrid.innerHTML = '';
    playlistConsigliate.forEach(playlist => {
        const playlistCard = document.createElement('div');
        playlistCard.className = 'playlist-card';
        playlistCard.innerHTML = `
            <img src="${playlist.immagine}" alt="Copertina playlist ${playlist.titolo}" />
            <div class="title">${playlist.titolo}</div>
        `;
        // Per ora, un semplice alert al click sulla playlist
        playlistCard.addEventListener('click', () => alert(`Hai selezionato la playlist: ${playlist.titolo}`));
        playlistsGrid.appendChild(playlistCard);
    });
}

// Renderizza tutti i generi nella sezione "Esplora per Genere"
function renderizzaTuttiIGeneri() {
    allGenresGrid.innerHTML = '';
    generiDisponibili.sort().forEach(genere => { // Ordina alfabeticamente
        const genreButton = document.createElement('button');
        genreButton.className = 'genre-button';
        if (filtroAttivoGenere === genere) {
            genreButton.classList.add('active');
        }
        genreButton.textContent = genere;
        genreButton.addEventListener('click', () => filtraMusichePerGenere(genere));
        allGenresGrid.appendChild(genreButton);
    });
}

// --- Funzioni Player ---

function riproduciCanzoneSelezionata(musica, indice) {
    // Se la stessa canzone è già in riproduzione, metti in pausa/riprendi
    if (audioPlayer.src === new URL(musica.src, window.location.href).href && currentPlayingIndex === indice) {
        if (isPlaying) {
            audioPlayer.pause();
            isPlaying = false;
        } else {
            audioPlayer.play();
            isPlaying = true;
        }
    } else {
        // Altrimenti, carica e riproduci la nuova canzone
        audioPlayer.src = musica.src;
        currentPlayingIndex = indice;
        audioPlayer.play();
        isPlaying = true;
        aggiornaInfoCanzone(musica);
    }
    // Aggiorna l'icona del bottone play/pausa del player principale
    playPauseButton.innerHTML = isPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
    aggiornaSchedaAttiva(indice);
}

// Funzione per aggiornare l'evidenziazione della scheda della musica in riproduzione
function aggiornaSchedaAttiva(indiceAttivo) {
    document.querySelectorAll('.music-card').forEach((scheda, idx) => {
        if (idx === indiceAttivo) {
            scheda.classList.add('active-playing');
        } else {
            scheda.classList.remove('active-playing');
        }
    });
}

// Funzione per aggiornare le informazioni della canzone nel player
function aggiornaInfoCanzone(musica) {
    currentSongTitle.textContent = musica.titulo;
    currentSongArtist.textContent = musica.artista;
}

// --- Gestione Modalità Scura/Chiara ---

function toggleTheme() {
    isLightMode = !isLightMode;
    document.body.classList.toggle("light-mode", isLightMode);
    localStorage.setItem("theme", isLightMode ? "light" : "dark");

    const icon = themeToggleButton.querySelector('i');
    if (isLightMode) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Applica il tema salvato o quello di sistema all'avvio
function applySavedTheme() {
    const savedTheme = localStorage.getItem("theme");
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

    if (savedTheme === "light" || (savedTheme === null && prefersLight)) {
        isLightMode = true;
        document.body.classList.add("light-mode");
        themeToggleButton.querySelector('i').classList.remove('fa-moon');
        themeToggleButton.querySelector('i').classList.add('fa-sun');
    } else {
        isLightMode = false;
        document.body.classList.remove("light-mode");
        themeToggleButton.querySelector('i').classList.remove('fa-sun');
        themeToggleButton.querySelector('i').classList.add('fa-moon');
    }
}

// --- Funzioni per i Commenti (simulati) ---

function aggiungiCommento() {
    const commentoTesto = commentTextarea.value.trim();
    if (commentoTesto === "") {
        alert("Per favore, scrivi qualcosa prima di inviare il commento!");
        return;
    }

    const dataOdierna = new Date();
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const dataFormattata = dataOdierna.toLocaleDateString('it-IT', options); // Formato italiano

    const nuovoCommentoHtml = `
        <div class="comment-item">
            <p class="comment-author">Utente MiMusic <span class="comment-date">(${dataFormattata})</span></p>
            <p class="comment-content">${commentoTesto}</p>
        </div>
    `;

    commentsList.insertAdjacentHTML('afterbegin', nuovoCommentoHtml);
    commentTextarea.value = "";
    alert("Commento inviato con successo!");
}

// --- Funzioni di Filtro e Ricerca ---

function filtraMusiche() {
    const termineRicerca = searchInput.value.toLowerCase();
    let musicheFiltrate = musicas.filter(musica =>
        musica.titulo.toLowerCase().includes(termineRicerca) ||
        musica.artista.toLowerCase().includes(termineRicerca) ||
        musica.descrizione.toLowerCase().includes(termineRicerca) ||
        musica.album.toLowerCase().includes(termineRicerca)
    );

    if (filtroAttivoGenere !== "Tutti") {
        musicheFiltrate = musicheFiltrate.filter(musica =>
            musica.genere.some(g => g.toLowerCase() === filtroAttivoGenere.toLowerCase())
        );
    }

    if (filtroAttivoMomento !== "Nessuno") {
        musicheFiltrate = musicheFiltrate.filter(musica =>
            musica.momenti.some(m => m.toLowerCase() === filtroAttivoMomento.toLowerCase())
        );
    }

    renderizzaSchedeMusicali(musicheFiltrate);
}

function filtraMusichePerGenere(genere) {
    filtroAttivoGenere = genere;
    // Rimuovi la classe active da tutti i bottoni e aggiungila a quello cliccato
    genreFilterButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.genre-filters button[data-filter-value="${genere}"]`)?.classList.add('active');

    // Aggiorna anche i bottoni nella sezione "Esplora per Genere"
    document.querySelectorAll('.all-genres-grid .genre-button').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.all-genres-grid .genre-button:contains("${genere}")`)?.classList.add('active'); // Necessita polyfill per :contains o un altro selettore

    filtraMusiche(); // Applica i filtri combinati
}

function filtraMusichePerMomento(momento) {
    filtroAttivoMomento = momento;
    // Puoi aggiungere qui la logica per evidenziare la card del momento attiva se lo desideri
    document.querySelectorAll('.moment-card').forEach(card => card.classList.remove('active'));
    // Trova la card del momento cliccata e aggiungi 'active'
    const momentCardToActivate = Array.from(momentiGrid.children).find(card => card.querySelector('p').textContent === momento);
    if (momentCardToActivate) {
        momentCardToActivate.classList.add('active');
    }
    filtraMusiche(); // Applica i filtri combinati
}


// --- Event Listeners ---

// Player principale
playPauseButton.addEventListener("click", () => {
    if (currentPlayingIndex === -1 && musicas.length > 0) {
        riproduciCanzoneSelezionata(musicas[0], 0);
    } else if (currentPlayingIndex !== -1) {
        riproduciCanzoneSelezionata(musicas[currentPlayingIndex], currentPlayingIndex); // Re-utilizza la funzione per toggle
    }
});

nextButton.addEventListener("click", () => {
    if (currentPlayingIndex < musicas.length - 1) {
        riproduciCanzoneSelezionata(musicas[currentPlayingIndex + 1], currentPlayingIndex + 1);
    } else {
        riproduciCanzoneSelezionata(musicas[0], 0); // Loop alla prima musica
    }
});

prevButton.addEventListener("click", () => {
    if (currentPlayingIndex > 0) {
        riproduciCanzoneSelezionata(musicas[currentPlayingIndex - 1], currentPlayingIndex - 1);
    } else {
        riproduciCanzoneSelezionata(musicas[musicas.length - 1], musicas.length - 1); // Loop all'ultima musica
    }
});

audioPlayer.addEventListener("timeupdate", () => {
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;
    if (!isNaN(duration)) {
        progressBar.value = (currentTime / duration) * 100;
        currentTimeDisplay.textContent = formattaTempo(currentTime);
        totalTimeDisplay.textContent = formattaTempo(duration);
    }
});

progressBar.addEventListener("input", () => {
    const duration = audioPlayer.duration;
    if (!isNaN(duration)) {
        audioPlayer.currentTime = (progressBar.value / 100) * duration;
    }
});

audioPlayer.addEventListener("ended", () => {
    nextButton.click();
});

volumeSlider.addEventListener("input", () => {
    audioPlayer.volume = volumeSlider.value / 100;
});

// Inizializza il volume del player con lo slider
audioPlayer.volume = volumeSlider.value / 100;

// Ricerca
searchInput.addEventListener("input", filtraMusiche);

// Filtri per Genere (Top Bar)
genreFilterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const filterValue = button.dataset.filterValue;
        filtraMusichePerGenere(filterValue);
    });
});

// Bottone "Più..." per i filtri genere - Per ora, solo un alert, potrebbe espandere un menu
document.querySelector(".more-filters-toggle").addEventListener("click", () => {
    alert("Questa sezione potrebbe mostrare più opzioni di filtro in futuro!");
});


// Modulo Newsletter
newsletterForm.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const emailInput = document.getElementById("email-newsletter");
    const email = emailInput.value;
    alert(`Grazie per esserti iscritto, ${email}! Riceverai le novità di MiMusic.`);
    emailInput.value = "";
});

// Bottone per la Modalità Scura/Chiara
themeToggleButton.addEventListener("click", toggleTheme);

// Invio Commento
submitCommentButton.addEventListener("click", aggiungiCommento);
commentTextarea.addEventListener("keypress", (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        aggiungiCommento();
    }
});

// Bottone "Accedi" (simulato)
loginButton.addEventListener("click", () => {
    alert("La funzionalità di accesso non è ancora implementata. Prova più tardi!");
});

// Bottone Play del Banner (riproduce una musica a caso o la prima)
bannerPlayButton.addEventListener("click", () => {
    if (musicas.length > 0) {
        const randomIndex = Math.floor(Math.random() * musicas.length);
        riproduciCanzoneSelezionata(musicas[randomIndex], randomIndex);
    } else {
        alert("Nessuna musica disponibile per la riproduzione!");
    }
});

// Inizializzazione al caricamento della pagina
document.addEventListener("DOMContentLoaded", () => {
    applySavedTheme(); // Applica il tema salvato o quello di sistema
    renderizzaSchedeMusicali(musicas); // Inizialmente, mostra tutte le musiche nella sezione "Album Raccomandati"
    renderizzaMomenti(); // Popola la sezione Momenti
    renderizzaTopHits(); // Popola la sezione Le Più Ascoltate
    renderizzaPlaylistConsigliate(); // Popola la sezione Playlist Consigliate
    renderizzaTuttiIGeneri(); // Popola la sezione Esplora Generi
});