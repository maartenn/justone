let alleWoorden = [
    "Appel", "Boom", "Computer", "Diamant", "Eiland", "Fiets", "Giraf", "Huis", "IJstijd", "Jacht",
    "Kangoeroe", "Lamp", "Muziek", "Noot", "Oceaan", "Piano", "Quiche", "Robot", "Ster", "Trein",
    "Uil", "Vliegtuig", "Wolf", "Xylofoon", "Yoghurt", "Zebra", "Aap", "Bal", "Cactus", "Dobbelsteen",
    "Egel", "Fluit", "Gitaar", "Hoed", "Inkt", "Jas", "Kikker", "Leeuw", "Maan", "Nectar",
    "Oog", "Papegaai", "Quiz", "Ring", "Schaap", "Tomaat", "Ufo", "Vork", "Wolk", "Xenon",
    "Yak", "Zon", "Aardbei", "Bos", "Citroen", "Duif", "Eend", "Fietsbel", "Gans", "Harp",
    "Ijsbeer", "Jam", "Koek", "Lucht", "Mier", "Narwal", "Olijf", "Pinguïn", "Quokka", "Reiger",
    "Slang", "Tulp", "Umbrella", "Vlinder", "Walvis", "X-ray", "Yucca", "Zaklamp", "Achtbaan", "Banaan",
    "Chocolade", "Dolfijn", "Eekhoorn", "Fakkel", "Gorilla", "Hamburger", "IJsklontje", "Joker", "Klaver", "Limoen",
    "Mango", "Nachos", "Octopus", "Pompoen", "Quinoa", "Raket", "Sok", "Tijger", "Uilskuiken", "Vampier",
    "Walnoot", "Xenofobie", "Yoga", "Zandloper", "Accordeon", "Baksteen", "Cello", "Dobbelsteen", "Emmer", "Föhn",
    "Golfbal", "Hinkelspel", "Insect", "Jaloezie", "Klompen", "Lantaarn", "Microfoon", "Neushoorn", "Oven", "Puzzel",
    "Quetzal", "Röntgen", "Satelliet", "Telefoon", "Uitkijktoren", "Viool", "Waterski", "X-chromosoom", "Yoghurtijs", "Zweefvliegtuig",
    "Achtertuin", "Biljart", "Concert", "Druif", "Elastiek", "Frisbee", "Graffiti", "Hindernis", "IJsje", "Jubileum",
    "Kwartet", "Laser", "Mozaïek", "Nijptang", "Omelet", "Parachute", "Quickstep", "Rozenstruik", "Scheikunde", "Trampoline",
    "Uitsmijter", "Vermiljoen", "Windmolen",  "Yoghurtmaker", "Zeilboot", "Aardappel", "Bureaulamp", "Citruspers", "Draaideur",
    "Espresso", "Flamingo", "Grasveld", "Hakmes", "IJspegel", "Jongleur", "Kerstboom", "Lippenstift", "Mammoet", "Natuurkunde",
    "Oester", "Piramide", "Quinoa", "Radiator", "Saxofoon", "Tijdschrift", "Uitzending", "Vleugel", "Wasknijper", "Xenofoob",
    "Yoghurt", "Zonnewijzer", "Aardewerk", "Bijenkorf", "Champignon", "Draaimolen", "Eekhoorn", "Fotolijst", "Gloeilamp", "Hagelslag",
    "IJsblokje", "Jaloezie", "Kaleidoscoop", "Lavalamp", "Magnetron", "Nachtmerrie", "Olijfolie", "Pindakaas", "Quiche", "Radijs",
    "Schommel", "Trompet", "Uiensoep", "Vlindernet", "Weegschaal", "Xenofilie", "Yoghurt", "Zwaardvis", "Abrikoos", "Bieslook",
    "Croissant", "Domino", "Eierdopje", "Fruitmand", "Grindtegel", "Hangslot", "IJshockey", "Jutezak", "Klimop", "Lijnzaad",
    "Marsepein", "Nachtlampje", "Oregano", "Pepermolen", "Quinoa", "Rugzak", "Staartster", "Trekharmonica", "Uiercrème", "Vijgenblad",
    "Wandelstok", "Xyloliet", "Yogamat", "Zandbak", "Aardappel", "Basilicum", "Citroengras", "Dekbedovertrek", "Eierwekker", "Frituurpan",
    "Gember", "Houtskool", "IJsthee", "Jachtluipaard", "Knoflook", "Limoensap", "Mosterd", "Nootmuskaat", "Ovenwant", "Pepermunt",
    "Rijsmiddel", "Saffraan", "Tijm", "Uienring", "Vanillestokje", "Wortel", "Zeezout",
    "Appelmoes", "Boerenkool", "Citroensap", "Druivensuiker", "Eiwit", "Framboos", "Grapefruit", "Hazelnoot", "Tomaat",
    "Ui", "Veenbes", "Watermeloen", "Xocoatl", "Yoghurt", "Zwarte peper", "Abrikoos", "Braam", "Citroen", "Dadel", "Elderbes",
    "Framboos", "Granaatappel", "Honingmeloen", "IJzerkruid", "Jeneverbes", "Kers", "Limoen", "Mango", "Noot", "Olijf",
    "Papaja", "Quinoa", "Rabarber", "Sinaasappel", "Tamarinde", "Ugli", "Vijg", "Walnoot", "Ximenia", "Yucca", "Zoethout",
    "Acacia", "Bamboe", "Ceder", "Den", "Eik", "Ficus", "Ginkgo", "Hazelaar", "Iep", "Jeneverbes",
    "Kastanje", "Lariks", "Mahonie", "Noot", "Olijfboom", "Palm", "Quercus", "Rozelaar", "Spar", "Taxus",
    "Ulmus", "Vlier", "Wilg", "Xanthoceras", "Yucca", "Zilverspar", "Aap", "Bever", "Cavia", "Dolfijn", "Egel",
    "Fret", "Giraf", "Hamster", "IJsbeer", "Jaguar", "Koala", "Lynx", "Muis", "Nijlpaard", "Otter",
    "Panda", "Quokka", "Rat", "Schildpad", "Tijger", "Uil", "Vos", "Walvis", "Xerus", "Yak",
    "Zebra", "Albatros", "Buizerd", "Condor", "Duif", "Ekster", "Flamingo", "Gans", "Havik", "Ibis",
    "Jan-van-gent", "Kolibrie", "Lepelaar", "Merel", "Nachtegaal", "Ooievaar", "Pauw", "Quetzal", "Raaf", "Specht",
    "Tureluur", "Uil", "Valk", "Wielewaal", "Xenops", "IJsvogel", "Zwaluw", "Anemoon", "Boterbloem", "Chrysant", "Dahlia", "Ereprijs",
    "Fresia", "Geranium", "Hortensia", "Iris", "Jasmijn", "Klaproos", "Lelie", "Madeliefje", "Narcis", "Orchidee",
    "Petunia", "Roos", "Sneeuwklokje", "Tulp", "Viooltje", "Wisteria", "Xerofyt", "Yucca", "Zonnebloem", "Aardappel"];
let gebruikteWoorden = [];
let huidigeRonde = 1;
const totaalRondes = 13;
let score = 0;
let huidigeScoreKeuze = null;
let scoreKnopGekozen = false;

document.addEventListener('DOMContentLoaded', function() {
    genereerWoordenVoorRonde();
});

function genereerWoordenVoorRonde() {
    if (gebruikteWoorden.length + 5 > alleWoorden.length) {
        alert("Niet genoeg unieke woorden voor een nieuwe ronde!");
        return;
    }

    let rondeWoorden = [];
    while (rondeWoorden.length < 5) {
        let willekeurigWoord = alleWoorden[Math.floor(Math.random() * alleWoorden.length)];
        if (!gebruikteWoorden.includes(willekeurigWoord)) {
            rondeWoorden.push(willekeurigWoord);
            gebruikteWoorden.push(willekeurigWoord);
        }
    }

    toonWoorden(rondeWoorden);

}

function toonWoorden(woorden) {
    let woordKeuzeDiv = document.getElementById('woordKeuze');
    woordKeuzeDiv.innerHTML = '';
    document.getElementById('gekozenWoord').style.display = 'none';
    document.getElementById('woordKeuze').style.display = 'block';

    woorden.forEach(function(woord, index) {
        let btn = document.createElement("button");
        btn.className = "woordKnop";
        btn.innerHTML = `${index + 1}. ${woord}`;
        btn.onclick = function() { kiesWoord(woord); };
        woordKeuzeDiv.appendChild(btn);
    });
}

function kiesWoord(woord) {
    document.getElementById('huidigWoord').textContent = woord;
    document.getElementById('woordKeuze').style.display = 'none';
    document.getElementById('gekozenWoord').style.display = 'block';
}

function updateScore(punten) {
    huidigeScoreKeuze = punten;
    scoreKnopGekozen = true;

    // Update knopstijlen
    const scoreKnoppen = document.querySelectorAll('.scoreKnop');
    scoreKnoppen.forEach(knop => {
        knop.style.backgroundColor = knop.getAttribute('data-punten') == punten ? '#28a745' : '#dc3545';
    });
}

function bevestigScoreEnGaVerder() {
    if (scoreKnopGekozen) {
        score += huidigeScoreKeuze;
        document.getElementById('score').textContent = score;
        nieuweRonde();
    } else {
        alert("Kies eerst een scoreoptie.");
    }
}

function nieuweRonde() {
    if (huidigeRonde < totaalRondes) {
        huidigeRonde++;
        document.getElementById('huidigeRonde').textContent = huidigeRonde;

        // Reset knopstijlen en keuzestatus
        scoreKnopGekozen = false;
        const scoreKnoppen = document.querySelectorAll('.scoreKnop');
        scoreKnoppen.forEach(knop => knop.style.backgroundColor = '#dc3545');

        // Voeg logica toe om een nieuwe ronde te starten
        genereerWoordenVoorRonde();
    } else {
        document.getElementById('woordKeuze').style.display = 'none';
        document.getElementById('gekozenWoord').style.display = 'none';
        document.getElementById('eindeSpel').style.display = 'block';
        document.getElementById('eindscore').textContent = score;
    }
}

function herlaadPagina() {
    location.reload();
}

