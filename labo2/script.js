class JeudeCartes {
  constructor () {
    this.listeCartes = ['A♦', '2♦', '3♦', '4♦', '5♦', '6♦', '7♦', '8♦', '9♦', '10♦', 'J♦', 'Q♦', 'K♦'
    , 'A♣', '2♣', '3♣', '4♣', '5♣', '6♣', '7♣', '8♣', '9♣', '10♣', 'J♣', 'Q♣', 'K♣',
     'A♥', '2♥', '3♥', '4♥', '5♥', '6♥', '7♥', '8♥', '9♥', '10♥', 'J♥', 'Q♥', 'K♥',
      'A♠', '2♠', '3♠', '4♠', '5♠', '6♠', '7♠', '8♠', '9♠', '10♠', 'J♠', 'Q♠', 'K♠']
  }

  brassageInterCoupe () {
    let longueur = this.listeCartes.length;
    let halfLongueur = longueur / 2;
    paquetFirstHalf = this.listeCartes.slice(0,halfLongueur);
    paquetSecondHalf = this.listeCartes.slice(halfLongueur, longueur);
    let newPaquet = [];
    for (let i = 0; i < halfLongueur; i++) {
      newPaquet.push(paquetFirstHalf[i]);
      newPaquet.push(paquetSecondHalf[i]);
    }
    this.listeCartes = newPaquet;
  
  }

  afficher() {
    let cartes = this.liste_cartes.toString();
    document.querySelector('#p1').textContent = cartes;
  }
}

function dicoImages () {
    let dicoImagesCartes = {"A♦" : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/02_of_diamonds.svg/langfr-300px-02_of_diamonds.svg.png",
    "A♠" : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/01_of_spades_A.svg/langfr-300px-01_of_spades_A.svg.png",
    "A♥" : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/01_of_hearts_A.svg/langfr-300px-01_of_hearts_A.svg.png",
    "A♣" : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/01_of_clubs_A.svg/langfr-300px-01_of_clubs_A.svg.png",
    "2♦" : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/02_of_diamonds.svg/langfr-300px-02_of_diamonds.svg.png",
    "2♠" : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/02_of_spades.svg/langfr-300px-02_of_spades.svg.png",
    "2♥" : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/02_of_hearts.svg/langfr-300px-02_of_hearts.svg.png",
    "2♣" : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/02_of_clubs.svg/langfr-300px-02_of_clubs.svg.png",
    "3♦" : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/03_of_diamonds.svg/langfr-300px-03_of_diamonds.svg.png",
    "3♠" : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/03_of_spades.svg/langfr-300px-03_of_spades.svg.png",
    "3♥ ": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/03_of_hearts.svg/langfr-300px-03_of_hearts.svg.png",
    "3♣" : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/03_of_clubs.svg/langfr-300px-03_of_clubs.svg.png",
    "4♦ ": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/04_of_diamonds.svg/langfr-300px-04_of_diamonds.svg.png",
    "4♠" : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/04_of_spades.svg/langfr-300px-04_of_spades.svg.png",
    "4♥" : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/04_of_hearts.svg/langfr-300px-04_of_hearts.svg.png",
    "4♣" : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/04_of_clubs.svg/langfr-300px-04_of_clubs.svg.png",
    "5♦" : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/05_of_diamonds.svg/langfr-300px-05_of_diamonds.svg.png",
    "5♠" : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/05_of_spades.svg/langfr-300px-05_of_spades.svg.png",
    "5♥" : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/05_of_hearts.svg/langfr-300px-05_of_hearts.svg.png",
    "5♣" : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/05_of_clubs.svg/langfr-300px-05_of_clubs.svg.png",
    "6♦" : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/06_of_diamonds.svg/langfr-300px-06_of_diamonds.svg.png",
    "6♠" : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/06_of_spades.svg/langfr-300px-06_of_spades.svg.png",
    "6♥" : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/06_of_hearts.svg/langfr-300px-06_of_hearts.svg.png",
    "6♣" : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/06_of_clubs.svg/langfr-300px-06_of_clubs.svg.png",
    "7♦" : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/07_of_diamonds.svg/langfr-300px-07_of_diamonds.svg.png",
    "7♠" : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/07_of_spades.svg/langfr-300px-07_of_spades.svg.png",
    "7♥" : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/07_of_hearts.svg/langfr-300px-07_of_hearts.svg.png",
    "7♣" : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/07_of_clubs.svg/langfr-300px-07_of_clubs.svg.png",
    "8♦" : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/08_of_diamonds.svg/langfr-300px-08_of_diamonds.svg.png",
    "8♠" : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/08_of_spades.svg/langfr-300px-08_of_spades.svg.png",
    "8♥" : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/08_of_hearts.svg/langfr-300px-08_of_hearts.svg.png",
    "8♣" : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/08_of_clubs.svg/langfr-300px-08_of_clubs.svg.png",
    "9♦" : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/09_of_diamonds.svg/langfr-300px-09_of_diamonds.svg.png",
    "9♠" : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/09_of_spades.svg/langfr-300px-09_of_spades.svg.png",
    "9♥" : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/09_of_hearts.svg/langfr-300px-09_of_hearts.svg.png",
    "9♣" : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/09_of_clubs.svg/langfr-300px-09_of_clubs.svg.png",
    "10♦" : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/10_of_diamonds_-_David_Bellot.svg/langfr-300px-10_of_diamonds_-_David_Bellot.svg.png",
    "10♠" : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/10_of_spades_-_David_Bellot.svg/langfr-300px-10_of_spades_-_David_Bellot.svg.png",
    "10♥" : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/10_of_hearts_-_David_Bellot.svg/langfr-300px-10_of_hearts_-_David_Bellot.svg.png",
    "10♣" : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/10_of_clubs_-_David_Bellot.svg/langfr-300px-10_of_clubs_-_David_Bellot.svg.png",
    "J♦" : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Jack_of_diamonds_fr.svg/langfr-300px-Jack_of_diamonds_fr.svg.png",
    "J♠" : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Jack_of_spades_fr.svg/langfr-300px-Jack_of_spades_fr.svg.png",
    "J♥" : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Jack_of_hearts_fr.svg/langfr-300px-Jack_of_hearts_fr.svg.png",
    "J♣" : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Jack_of_clubs_fr.svg/langfr-300px-Jack_of_clubs_fr.svg.png",
    "Q♦" : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Queen_of_diamonds_fr.svg/langfr-300px-Queen_of_diamonds_fr.svg.png",
    "Q♠" : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Queen_of_spades_fr.svg/langfr-300px-Queen_of_spades_fr.svg.png",
    "Q♥" : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Queen_of_hearts_fr.svg/langfr-300px-Queen_of_hearts_fr.svg.png",
    "Q♣" : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Queen_of_clubs_fr.svg/langfr-300px-Queen_of_clubs_fr.svg.png",
    "K♦" : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/King_of_diamonds_fr.svg/langfr-300px-King_of_diamonds_fr.svg.png",
    "K♠" : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/King_of_spades_fr.svg/langfr-300px-King_of_spades_fr.svg.png",
    "K♥" : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/King_of_hearts_fr.svg/langfr-300px-King_of_hearts_fr.svg.png",
    "K♣" : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/King_of_clubs_fr.svg/langfr-300px-King_of_clubs_fr.svg.png"}

    return dicoImagesCartes;
}




const paquet = new JeudeCartes();
paquet.afficher();