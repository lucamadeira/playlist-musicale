# playlist-musicale

Progetto di playlist musicale statica per dimostrare una pagina con riproduzione delle tracce e visualizzazione delle copertine.

## Descrizione
Pagina semplice che organizza brani e immagini in cartelle separate. Ideale per test locali e prototipi di player.

## Struttura principale
- index.html
- img/
  - rock banner.jpg
  - icon-favicon/
  - imgs-hits/
- audio/
  - alan-walker-ina-wroldsen-barcelona.mp3
  - Bad Bunny - Tití Me Preguntó.mp3
  - billie eilish.mp3
  - ed-sheeran.mp3
  - taylor-swift.mp3
  - imgs-tags/ (copertine e miniature)
  
(Le liste sopra riflettono i file presenti nel repository al momento del commit.)

## Come usare
1. Aprire `index.html` nel browser o servire con un server statico.
2. Per servire localmente (esempio con Python):
   - Python 3: `python -m http.server 8000`
   - Accedere: `http://localhost:8000/`

## Come aggiungere musica o immagine
- Inserire i file audio in `audio/`.
- Inserire le immagini in `img/` o `audio/imgs-tags/`.
- Aggiornare `index.html` se necessario per includere nuovi elementi.

## Dipendenze
Nessuna. Funziona in qualsiasi browser moderno senza backend.

## Licenza
MIT

## Autore
Luca Madeira