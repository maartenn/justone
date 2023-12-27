let alleWoorden = [
    "Appel", "Boom", "Computer", "Diamant", "Eiland", "Fiets", "Giraf", "Huis", "IJstijd", "Jacht",
    "Kangoeroe", "Lamp", "Muziek", "Noot", "Oceaan", "Piano", "Quiche", "Robot", "Ster", "Trein",
    "Uil", "Vliegtuig", "Wolf", "Xylofoon", "Yoghurt", "Zebra", "Aap", "Bal", "Cactus", "Dobbelsteen",
    "Egel", "Fluit", "Gitaar", "Hoed", "Inkt", "Jas", "Kikker", "Leeuw", "Maan", "Nectar",
    "Oog", "Papegaai", "Quiz", "Ring", "Schaap", "Tomaat", "Ufo", "Vork", "Wolk", "Zon",
    "Aardbei", "Bos", "Citroen", "Duif", "Eend", "Fietsbel", "Gans", "Harp", "Ijsbeer",
    "Jam", "Koek", "Lucht", "Mier", "Olijf", "Pinguïn", "Reiger", "Slang", "Tulp", "Umbrella",
    "Vlinder", "Walvis", "Zaklamp", "Achtbaan", "Banaan", "Chocolade", "Dolfijn", "Eekhoorn", "Fakkel",
    "Gorilla", "Hamburger", "IJsklontje", "Joker", "Klaver", "Limoen", "Mango", "Nachos", "Octopus",
    "Pompoen", "Quinoa", "Raket", "Sok", "Tijger", "Uilskuiken", "Vampier", "Walnoot", "Yoga",
    "Zandloper", "Accordeon", "Baksteen", "Cello", "Emmer", "Föhn", "Golfbal", "Insect", "Jaloezie",
    "Klompen", "Lantaarn", "Microfoon", "Neushoorn", "Oven", "Puzzel", "Röntgen", "Satelliet", "Telefoon",
    "Uitkijktoren", "Viool", "Zweefvliegtuig", "Achtertuin", "Biljart", "Concert", "Druif", "Elastiek",
    "Frisbee", "Graffiti", "Hindernis", "IJsje", "Jubileum", "Kwartet", "Laser", "Mozaïek",
    "Omelet", "Parachute","Scheikunde", "Trampoline", "Uitsmijter", "Windmolen",
    "Zeilboot", "Aardappel", "Bureaulamp", "Citruspers", "Draaideur", "Espresso", "Jongleur",
    "Kerstboom", "Lippenstift", "Mammoet", "Natuurkunde", "Oester", "Piramide", "Radiator", "Saxofoon", "Tijdschrift",
    "Vleugel", "Wasknijper", "Yoghurt", "Zonnewijzer", "Aardewerk", "Bijenkorf", "Champignon", "Draaimolen", "Fotolijst",
    "Gloeilamp", "Hagelslag", "IJsblokje", "Kaleidoscoop", "Lavalamp", "Magnetron", "Nachtmerrie", "Olijfolie", "Pindakaas",
    "Radijs", "Schommel", "Trompet", "Uiensoep", "Vlindernet", "Weegschaal", "Zwaardvis", "Abrikoos", "Bieslook",
    "Croissant", "Domino", "Eierdopje", "Fruitmand", "Grindtegel", "Hangslot", "IJshockey", "Jutezak", "Klimop",
    "Lijnzaad", "Marsepein", "Nachtlampje", "Pepermolen", "Quinoa", "Rugzak",
    "Wandelstok", "Zandbak", "Dekbedovertrek", "Eierwekker",
    "Frituurpan", "Gember", "Houtskool", "IJsthee", "Knoflook",  "Mosterd",
    "Ovenwant", "Pepermunt", "Rijsmiddel", "Wortel", "Appelmoes", "Boerenkool", "Citroensap", "Eiwit", "Framboos",
    "Grapefruit", "Hazelnoot", "Tomaat", "Ui", "Watermeloen", "Peper", "Sinaasappel",
    "Walnoot", "Aap", "Bever", "Cavia", "Dolfijn", "Egel", "Fret", "Hamster", "IJsbeer", "Jaguar",
    "Koala", "Muis", "Nijlpaard", "Otter", "Panda", "Rat", "Schildpad", "Tijger", "Uil",
    "Vos", "Walvis", "Zebra", "Duif", "Ekster", "Flamingo", "Gans", "Ooievaar", "Pauw"];

let gebruikteWoorden = [];
let huidigeRonde = 1;
const totaalRondes = 13;
let score = 0;
let huidigeScoreKeuze = null;
let scoreKnopGekozen = false;

// document.addEventListener('DOMContentLoaded', function() {
//     genereerWoordenVoorRonde();
// });

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



function bevestigScoreEnGaVerder() {
    if (scoreKnopGekozen) {
        score += huidigeScoreKeuze;
        document.getElementById('score').textContent = score;
        setCookie("score", score, 1); // Bewaar voor 1 dag
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
        toonEindbericht(score)
        setCookie("huidigeRonde", "", -1);
        setCookie("score", "", -1);
    }
    setCookie("huidigeRonde", huidigeRonde, 1);
}

function herlaadPagina() {
    location.reload();
}
function toonEindbericht(score) {
    let bericht = "";
    if (score === 13) {
        bericht = "Fantastisch! Perfect gespeeld! Durf je het aan om dit resultaat te evenaren in een nieuwe ronde?";
    } else if (score >= 10) {
        bericht = "Geweldig gedaan! Je bent een echte Just One-meester!";
    } else if (score >= 5) {
        bericht = "Goed gedaan! Je bent goed op weg om een expert te worden!";
    } else if (score > 0) {
        bericht = "Leuk gespeeld! Met een beetje meer oefening haal je de top!";
    } else if (score === 0) {
        bericht = "Dat was een uitdagende ronde! Probeer het nog eens om je score te verbeteren!";
    } else {
        bericht = "Oeps, dat was lastig! Maar geef niet op, de volgende ronde gaat beter!";
    }


    let eindberichtElement = document.getElementById('eindbericht');
    typeTekstAnimatie(eindberichtElement, bericht, 3000); // 3000 milliseconden = 3 seconden
}

function typeTekstAnimatie(element, tekst, duur) {
    let huidigeIndex = 0;
    const totaleLengte = tekst.length;
    const tijdPerLetter = duur / totaleLengte;
    element.textContent = '';

    const typen = () => {
        if (huidigeIndex < totaleLengte) {
            element.textContent += tekst.charAt(huidigeIndex);
            huidigeIndex++;
            setTimeout(typen, tijdPerLetter);
        }
    };

    typen();
}

function startSpel() {
    document.getElementById('startScherm').style.display = 'none';
    document.getElementById('spelContainer').style.display = 'block';
    genereerWoordenVoorRonde(); // Roep deze functie aan om het spel te starten
}


function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function checkSpelStatus() {
    let opgeslagenRonde = getCookie("huidigeRonde");
    let opgeslagenScore = getCookie("score");

    if (opgeslagenRonde && opgeslagenScore) {
        huidigeRonde = parseInt(opgeslagenRonde);
        score = parseInt(opgeslagenScore);
        document.getElementById('huidigeRonde').textContent = huidigeRonde;
        document.getElementById('score').textContent = score;
        startSpel();

        // Voeg eventueel meer code toe om de spelstatus te herstellen
    } else {
        // Start een nieuw spel
        huidigeRonde = 1;
        score = 0;
    }
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
// Roep checkSpelStatus aan wanneer de pagina laadt
document.addEventListener('DOMContentLoaded', checkSpelStatus);




