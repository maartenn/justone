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
    "Uitsmijter", "Vermiljoen", "Windmolen", "Xenoglossie", "Yoghurtmaker", "Zeilboot", "Aardappel", "Bureaulamp", "Citruspers", "Draaideur",
    "Espresso", "Flamingo", "Grasveld", "Hakmes", "IJspegel", "Jongleur", "Kerstboom", "Lippenstift", "Mammoet", "Natuurkunde",
    "Oester", "Piramide", "Quinoa", "Radiator", "Saxofoon", "Tijdschrift", "Uitzending", "Vleugel", "Wasknijper", "Xenofoob",
    "Yoghurt", "Zonnewijzer", "Aardewerk", "Bijenkorf", "Champignon", "Draaimolen", "Eekhoorn", "Fotolijst", "Gloeilamp", "Hagelslag",
    "IJsblokje", "Jaloezie", "Kaleidoscoop", "Lavalamp", "Magnetron", "Nachtmerrie", "Olijfolie", "Pindakaas", "Quiche", "Radijs",
    "Schommel", "Trompet", "Uiensoep", "Vlindernet", "Weegschaal", "Xenofilie", "Yoghurt", "Zwaardvis", "Abrikoos", "Bieslook",
    "Croissant", "Domino", "Eierdopje", "Fruitmand", "Grindtegel", "Hangslot", "IJshockey", "Jutezak", "Klimop", "Lijnzaad",
    "Marsepein", "Nachtlampje", "Oregano", "Pepermolen", "Quinoa", "Rugzak", "Staartster", "Trekharmonica", "Uiercrème", "Vijgenblad",
    "Wandelstok", "Xyloliet", "Yogamat", "Zandbak", "Aardappel", "Basilicum", "Citroengras", "Dekbedovertrek", "Eierwekker", "Frituurpan",
    "Gember", "Houtskool", "IJsthee", "Jachtluipaard", "Knoflook", "Limoensap", "Mosterd", "Nootmuskaat", "Ovenwant", "Pepermunt",
    "Quichevorm", "Rijsmiddel", "Saffraan", "Tijm", "Uienring", "Vanillestokje", "Wortel", "Xeresazijn", "Yoghurtdrank", "Zeezout",
    "Appelmoes", "Boerenkool", "Citroensap", "Druivensuiker", "Eiwit", "Framboos", "Grapefruit", "Hazelnoot", "IJzerkruid", "Jasmijnthee",
    "Kardemom", "Lavendel", "Melisse", "Nectarine", "Oregano", "Paprikapoeder", "Quinoa", "Rozemarijn", "Salie", "Tomaat",
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
let score = 0;
let huidigeRonde = 1;
const totaalRondes = 13;
let gebruikteWoorden = [];

// Overige functies blijven hetzelfde

function updateScore(punten) {
    score += punten;
    document.getElementById('score').textContent = score;
    if (huidigeRonde === totaalRondes) {
        document.getElementById('eindscore').textContent = score;
    }
}




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
    woordKeuzeDiv.innerHTML = ''; // Maak het div-element leeg voor nieuwe woorden
    woorden.forEach(function(woord, index) {
        let btn = document.createElement("button");
        btn.className = "woordKnop";
        btn.innerHTML = `<span class="woordNummer">${index + 1}.</span> ${woord}`;
        btn.onclick = function() { kiesWoord(woord); };
        woordKeuzeDiv.appendChild(btn);
    });
}

function kiesWoord(woord) {
    document.getElementById('huidigWoord').textContent = woord;
    document.getElementById('woordKeuze').style.display = 'none';
    document.getElementById('gekozenWoord').style.display = 'block';
    // Wacht op gebruikersactie om volgende ronde te starten of implementeer een timer
}

function nieuweRonde() {
    if (huidigeRonde < totaalRondes) {
        document.getElementById('woordKeuze').style.display = 'block';
        document.getElementById('gekozenWoord').style.display = 'none';
        document.getElementById('huidigeRonde').textContent = ++huidigeRonde;
        genereerWoordenVoorRonde();
    } else {
        document.getElementById('woordKeuze').style.display = 'none';
        document.getElementById('gekozenWoord').style.display = 'none';
        document.getElementById('eindeSpel').style.display = 'block';
        document.getElementById('eindscore').textContent = score;

    }
}

// Functie om pagina te herladen blijft hetzelfde

function herlaadPagina() {
    location.reload();
}
