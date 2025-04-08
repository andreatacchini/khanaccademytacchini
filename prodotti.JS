document.getElementById("myButton").onclick = function() {
    alert("Hai cliccato il pulsante!");
    
  }// Eseguiamo il codice una volta che la pagina è completamente caricata
document.addEventListener('DOMContentLoaded', function() {
    // Creazione della struttura HTML tramite JavaScript

    // Creazione del paragrafo con la classe "ringraziamenti"
    let pRingraziamenti = document.createElement('p');
    pRingraziamenti.classList.add('ringraziamenti');
    pRingraziamenti.textContent = "GRAZIE PER AVER APERTO IL NOSTRO SITO !!";
    document.body.appendChild(pRingraziamenti);

    // Creazione del titolo h1
    let h1 = document.createElement('h1');
    h1.textContent = "3D.motolab";
    h1.style.fontSize = '70px';
    h1.style.fontFamily = "'Times New Roman', Times, serif";
    h1.style.backgroundColor = 'rgb(0, 0, 0)';
    h1.style.color = 'white';
    h1.style.textAlign = 'center';
    document.body.appendChild(h1);

    // Creazione del secondo titolo h2 con la barra di navigazione
    let h2 = document.createElement('h2');
    h2.textContent = "HOME - PRODOTTI - COLLABORA CON NOI - CONTATTI";
    h2.style.fontSize = '35px';
    h2.style.fontFamily = "'Times New Roman', Times, serif";
    h2.style.backgroundColor = 'rgb(0, 0, 0)';
    h2.style.color = 'white';
    h2.style.textAlign = 'center';
    document.body.appendChild(h2);

    // Creazione dell'immagine
    let img = document.createElement('img');
    img.src = 'https://cdn.shopify.com/s/files/1/0572/6987/8922/files/1_1_72789b38-9501-40b0-9366-2c5fa28dc959_1024x1024.jpg?v=1672616496';
    img.alt = 'immagine moto';
    img.style.display = 'block';
    img.style.margin = '0 auto';
    document.body.appendChild(img);

    // Creazione del paragrafo descrittivo
    let pProdotti = document.createElement('p');
    pProdotti.textContent = 'Prodotti personalizzati per rendere unica la tua moto';
    pProdotti.style.fontSize = '30px';
    pProdotti.style.fontFamily = "'Times New Roman', Times, serif";
    pProdotti.style.backgroundColor = 'rgb(0, 0, 0)';
    pProdotti.style.color = 'white';
    pProdotti.style.textAlign = 'center';
    pProdotti.style.borderBottom = '1px solid rgb(230, 230, 230)';
    pProdotti.style.padding = '3px';
    document.body.appendChild(pProdotti);

    // Creazione del link "PRODOTTI"
    let aProdotti = document.createElement('a');
    aProdotti.href = 'paginahome.html';
    aProdotti.textContent = 'PRODOTTI';
    aProdotti.style.color = 'blue';
    aProdotti.style.textDecoration = 'none';
    aProdotti.style.fontSize = '20px';
    aProdotti.style.marginTop = '20px';
    document.body.appendChild(aProdotti);

    // Creazione di un bottone con il saluto
    let button = document.createElement('button');
    button.textContent = 'Clicca per salutare';
    button.addEventListener('click', saluto);
    document.body.appendChild(button);

    // Creazione del tag h2 con la classe "metal"
    let h2Metal = document.createElement('h2');
    h2Metal.classList.add('metal');
    document.body.appendChild(h2Metal);

    // Funzione di saluto per il pulsante
    function saluto() {
        alert('Ciao, benvenuto nella pagina dei prodotti!');
    }
});

// Creazione degli stili dinamicamente
let style = document.createElement('style');
style.innerHTML = `
    body {
        background-color: rgb(0, 0, 0);
    }
    h1, h2, p {
        font-family: 'Times New Roman', Times, serif;
    }
    .ringraziamenti {
        color: rgb(0, 0, 0);
        background-color: rgb(98, 0, 255);
        text-align: center;
        font-family: 'Times New Roman', Times, serif;
    }
    .metal {
        background-color: red;
        color: white;
    }
    a:hover {
        text-decoration: underline;
    }
`;
document.head.appendChild(style);