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

/**
 * @type {HTMLDivElement} ami tartalmaz egy div elemet a weboldal cimenek
 */
const divfortitle = document.createElement('div') // meghivom a document.createElementet egy stringel, es beleteszem a visszateresi erteket egy divfortitle nevu valtozoba
divfortitle.innerText = tabletitle // beallitjuk a span element tartalmanak az innerText tulajdonsagon keresztul a tabletitle valtozo erteket, ami egy string es erteke Javítási referencia
document.body.appendChild(divfortitle) // hozzafuzom a letrehozott elemet a html bodyhoz a document.body appendChild fuggvenyenek segitsegevel

/**
 * @type {HTMLDivElement} ami tartalmaz egy div elemet amihez kesobb hozzafuzzuk a fejlecerteket
 */
const divforheader = document.createElement('div'); // meghivom a document.createElementet egy stringel, es beleteszem a visszateresi erteket egy divforheader nevu valtozoba
document.body.appendChild(divforheader); // hozzafuzom a letrehozott elemet a html bodyhoz a document.body appendChild fuggvenyenek segitsegevel

for(let i = 0; i< tableHeaderArray.length; i++){ // novekmenyes ciklus, ahol a ciklus valtozo a tableHeaderArray elemeinek indexet veszi fel
    /**
    * @type {HTMLSpanElement} ami tartalmaz egy span elemet, amit a ciklusvaltozo alapjan beallitunk
    */
    const headerSpanElement = document.createElement('span'); // meghivom a document.createElementet egy stringel, es beleteszem a visszateresi erteket egy headerSpanElement nevu valtozoba
    headerSpanElement.innerText = tableHeaderArray[i].title; // beallitjuk a span element tartalmanak az innerText tulajdonsagon keresztul a tableHeaderArray változó aktualis elemenek title tulajdonságán talalhato erteket ami egy string
    divforheader.appendChild(headerSpanElement) /// hozzafuzzuk a korabban letrehozott divforheader divhez a most beallitott span elementet tartalmazo valtozonk tartalmat
}

for(let i = 0; i< tableBodyArray.length; i++){ // novekmenyes ciklus, ahol a ciklus valtozo a tableBodyArray elemeinek indexet veszi fel
    /**
     * @type {HTMLDivElement} ami tartalmaz egy div elemet a tablazat egy adott soranak
     */
    const tableRowwdiv = document.createElement('div'); // meghivom a document.createElementet egy stringel, es beleteszem a visszateresi erteket egy tableRowwdiv nevu valtozoba
    document.body.append(tableRowwdiv);  // hozzafuzom a letrehozott elemet a html bodyhoz a document.body appendChild fuggvenyenek segitsegevel

    /**
     * @type {HTMLSpanElement} ami tartalmaz egy span elemet az adott sor elso oszlop tartalmanak
     */
    const htmlRowVeznev = document.createElement('span');  // meghivom a document.createElementet egy stringel, es beleteszem a visszateresi erteket egy htmlFirstRowVeznev nevu valtozoba
    htmlRowVeznev.innerText = tableBodyArray[i].lastName; // beallitjuk a span element tartalmanak az innerText tulajdonsagon keresztul a tableBodyArray változó aktualis elemenek lastname tulajdonságának erteket ami egy string
    tableRowwdiv.appendChild(htmlRowVeznev); // hozzafuzzuk a korabban letrehozott tableRowwdiv divhez a most beallitott span elementet tartalmazo valtozonk tartalmat

    /**
     * @type {HTMLSpanElement} ami tartalmaz egy span elemet az adott sor masodik oszlop tartalmanak
     */
    const htmlRowKoznev = document.createElement('span'); // meghivom a document.createElementet egy stringel, es beleteszem a visszateresi erteket egy htmlFirstRowKoznev nevu valtozoba
    htmlRowKoznev.innerText = tableBodyArray[i].middleName; // beallitjuk a span element tartalmanak az innerText tulajdonsagon keresztul a tableBodyArray aktualis elemenek  middlename tulajdonságának erteket ami egy string vagy nem definialt
    tableRowwdiv.appendChild(htmlRowKoznev); // hozzafuzzuk a korabban letrehozott tableRowwdiv divhez a most beallitott span elementet tartalmazo valtozonk tartalmat

    /**
     * @type {HTMLSpanElement} ami tartalmaz egy span elemet az adott sor harmadik oszlop tartalmanak
     */
    const htmltRowKernev = document.createElement('span'); // meghivom a document.createElementet egy stringel, es beleteszem a visszateresi erteket egy htmlFirstRowKernev nevu valtozoba
    htmltRowKernev.innerText = tableBodyArray[i].firstName; // beallitjuk a span element tartalmanak az innerText tulajdonsagon keresztul a tableBodyArray aktualis elemenek firstname tulajdonságának erteket ami egy string
    tableRowwdiv.appendChild(htmltRowKernev); // hozzafuzzuk a korabban letrehozott htmlfirstrowdiv divhez a most beallitott span elementet tartalmazo valtozonk tartalmat
}