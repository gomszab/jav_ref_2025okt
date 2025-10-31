/**
 * @type {string} valtozo ami tartalmazza a cimet, mivel const ezert a kesobbiekben nem valtoztathatjuk
 */
const tabletitle = 'Javítási referencia'; // tabletitle valtozo deklaralasa aminek egy string tipusu erteket

/**
 * @type {{title: string}[]} valtozo ami tartalmazza tablazat header elemeit es tulajdonsagait
 */
const tableHeaderArray = [ // tableHeaderArray valtozo deklaralasa, aminek egy array tipusu erteket adunk
    { // elso elem, ami egy objektum
        title:'Keresztnév'// az objektum title tulajdonsaganak egy string tipusu erteket adunk
    },
    { // masodik elem, ami egy objektum
        title:'Vezetéknév' // az objektum title tulajdonsaganak egy string tipusu erteket adunk
    }
]

/**
 * @type {{ lastName: string, middleName?: string, firstName: string}[]} valtozo ami tartalmazza a tablazat torzsenek adatait egy tombben 
 */
const tableBodyArray = [ // tableBodyArray valtozo deklaralasa, aminek egy array tipusu erteket adunk
    {  // elso elem, ami egy objektum
        lastName: 'Dienes', // az objektum lastName tulajdonsaganak egy string tipusu erteket adunk
        middleName: 'Zoltán', // az objektum middleName tulajdonsaganak egy string tipusu erteket adunk
        firstName: 'Pál' // az objektum firstName tulajdonsaganak egy string tipusu erteket adunk
    },
    {  // masodik elem, ami egy objektum
        lastName: 'Obádovics', // az objektum lastName tulajdonsaganak egy string tipusu erteket adunk
        firstName: 'Gyula' // az objektum firstName tulajdonsaganak egy string tipusu erteket adunk
    },
    {  // harmadik elem, ami egy objektum
        lastName: 'Dávid', // az objektum lastName tulajdonsaganak egy string tipusu erteket adunk
        firstName: 'Gyula' // az objektum firstName tulajdonsaganak egy string tipusu erteket adunk
    }
]

createElementWithContent(document.body, tabletitle, 'div'); // meghivom a korabban definialt createElementWithContent a document.body-val, hogy ahhoz fuzze hozza az uj elemet, a tabletitle valtozoval, hogy az erteke legyen a tartalma, es egy div stringel, hogy a document.createElement egy divelementet hozzon letre.  

/**
 * @type {HTMLDivElement} ami tartalmaz egy div elemet amihez kesobb hozzafuzzuk a fejlecerteket
 */
const divforheader = document.createElement('div'); // meghivom a document.createElementet egy stringel, es beleteszem a visszateresi erteket egy divforheader nevu valtozoba
document.body.appendChild(divforheader); // hozzafuzom a letrehozott elemet a html bodyhoz a document.body appendChild fuggvenyenek segitsegevel

for(const i in tableHeaderArray){ // vegigiteralok a tableHeaderArray elerheto tulajdonsagain. Jelen esetben a ciklusvaltozo mindig egy index erteket veszi fel
    createElementWithContent(divforheader, tableHeaderArray[i].title, 'span');// meghivom a korabban definialt createElementWithContent a divforheader divvel, hogy ahhoz fuzze hozza az uj elemet, a tableHeaderArray aktualis elemenek a title tulajdonsagaval, hogy az legyen a tartalma, es a span stringel, hogy a document.createElement egy spanelementet hozzon letre.  
}

for(const tableArrayElement of tableBodyArray){ // vegig iteralok a tablebodyarrayen es a ciklusvaltozo mindig az aktualis elem erteket veszi fel
    /**
     * @type {HTMLDivElement} ami tartalmaz egy div elemet a tablazat egy adott soranak
     */
    const tableRowwdiv = document.createElement('div'); // meghivom a document.createElementet egy stringel, es beleteszem a visszateresi erteket egy tableRowwdiv nevu valtozoba
    document.body.append(tableRowwdiv);  // hozzafuzom a letrehozott elemet a html bodyhoz a document.body appendChild fuggvenyenek segitsegevel
    createElementWithContent(tableRowwdiv, tableArrayElement.lastName, 'span'); // meghivom a korabban definialt createElementWithContent a tableRowwdiv divvel, hogy ahhoz fuzze hozza az uj elemet, a tableArrayElement aktualis elemenek a lastName tulajdonsagaval, hogy az legyen a tartalma, es a span stringel, hogy a document.createElement egy spanelementet hozzon letre.  

    if(tableArrayElement.middleName != undefined){ // megvizsgalom, hogy a middlename tulajdonsaga a tomb aktualis elemenek definialva van-e
        createElementWithContent(tableRowwdiv, tableArrayElement.middleName, 'span'); // meghivom a korabban definialt createElementWithContent a tableRowwdiv divvel, hogy ahhoz fuzze hozza az uj elemet, a tableArrayElement aktualis elemenek a middleName tulajdonsagaval, hogy az legyen a tartalma, es a span stringel, hogy a document.createElement egy spanelementet hozzon letre.  
    }
    createElementWithContent(tableRowwdiv, tableArrayElement.firstName, 'span'); // meghivom a korabban definialt createElementWithContent a tableRowwdiv divvel, hogy ahhoz fuzze hozza az uj elemet, a tableArrayElement aktualis elemenek a firstName tulajdonsagaval, hogy az legyen a tartalma, es a span stringel, hogy a document.createElement egy spanelementet hozzon letre.  
}

/**
 * 
 * A fuggveny segitsegevel hozunk letre cellakat a tablazatba. 
 * 
 * @param {HTMLElement} parentElement ami azt hatarozza meg, hogy melyik mar letezo elemhez fuzzuk hozza az uj elemet 
 * @param {string} cellContent ami meghatarozza az uj ellem tartalmat
 * @param {string} celltype ami meghatarozza, hogy milyen uj html elemet hozunk letre
 * 
 * @returns {void} a jelenlegi pelda nem indokolja, hogy visszaterjunk a letrehozott elemmel, de ez nem mindig van igy. lasd orai munka 
 */
function createElementWithContent(parentElement, cellContent, celltype){ // definialom 
    /**
     * @type {HTMLElement} valtozo ami tartalmaz egy html-elemet, aminek beallitunk egy tartalmat es hozzafuzzuk egy masik elemhez
     */
    const cellElement = document.createElement(celltype); // meghivom a document.createElement fuggvenyt a bejovo string parameter segitsegevel, es eltarolom egy cellElement valtozoban
    cellElement.innerText = cellContent; // beallitom a letrehozott elem tartalmat a a fuggveny egyik string parameterenek segitsegevel az innerText tulajdonsagan keresztul
    parentElement.appendChild(cellElement) // hozzafuzom a letrehozott elemet a fuggvenynek atadott htmlelementhez 
}