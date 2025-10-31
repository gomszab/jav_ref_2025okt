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

/**
 * @type {HTMLSpanElement} ami tartalmaz egy span elemet, ami a tablazatfejlec elso oszlopa
 */
const firstnameheader = document.createElement('span'); // meghivom a document.createElementet egy stringel, es beleteszem a visszateresi erteket egy firstnameheader nevu valtozoba
firstnameheader.innerText = tableHeaderArray[0].title; // beallitjuk a span element tartalmanak az innerText tulajdonsagon keresztul a tableHeaderArray változó elso elemenek title tulajdonságán talalhato erteket ami egy string es erteke Keresztnév
divforheader.appendChild(firstnameheader) /// hozzafuzzuk a korabban letrehozott divforheader divhez a most beallitott span elementet tartalmazo valtozonk tartalmat

/**
 * @type {HTMLSpanElement} ami tartalmaz egy span elemet, ami  a tablazatfejlec masodik oszlopa
 */
const lastnameheader = document.createElement('span'); // meghivom a document.createElementet egy stringel, es beleteszem a visszateresi erteket egy firstnameheader nevu valtozoba
lastnameheader.innerText = tableHeaderArray[1].title; // beallitjuk a span element tartalmanak az innerText tulajdonsagon keresztul a tableHeaderArray változó elso elemenek title tulajdonságán talalhato erteket ami egy string es erteke Vezetéknév
divforheader.appendChild(lastnameheader) // hozzafuzzuk a korabban letrehozott divforheader divhez a most beallitott span elementet tartalmazo valtozonk tartalmat

/**
 * @type {HTMLDivElement} ami tartalmaz egy div elemet a tablazat elso soranak
 */
const htmlfirstrowdiv = document.createElement('div'); // meghivom a document.createElementet egy stringel, es beleteszem a visszateresi erteket egy htmlfirstrowdiv nevu valtozoba
document.body.append(htmlfirstrowdiv);  // hozzafuzom a letrehozott elemet a html bodyhoz a document.body appendChild fuggvenyenek segitsegevel

/**
 * @type {HTMLSpanElement} ami tartalmaz egy span elemet, ami a tablazat elso sora és elso oszlopa
 */
const htmlFirstRowVeznev = document.createElement('span');  // meghivom a document.createElementet egy stringel, es beleteszem a visszateresi erteket egy htmlFirstRowVeznev nevu valtozoba
htmlFirstRowVeznev.innerText = tableBodyArray[0].lastName; // beallitjuk a span element tartalmanak az innerText tulajdonsagon keresztul a tableBodyArray változó elso elemenek lastname tulajdonságának erteket ami egy string es erteke Dienes
htmlfirstrowdiv.appendChild(htmlFirstRowVeznev); // hozzafuzzuk a korabban letrehozott htmlfirstrowdiv divhez a most beallitott span elementet tartalmazo valtozonk tartalmat

/**
 * @type {HTMLSpanElement} ami tartalmaz egy span elemet, ami a tablazat elso sora masodik oszlopa 
 */
const htmlFirstRowKoznev = document.createElement('span'); // meghivom a document.createElementet egy stringel, es beleteszem a visszateresi erteket egy htmlFirstRowKoznev nevu valtozoba
htmlFirstRowKoznev.innerText = tableBodyArray[0].middleName; // beallitjuk a span element tartalmanak az innerText tulajdonsagon keresztul a tableBodyArray változó elso elemenek middlename tulajdonságának erteket ami egy string es erteke Zoltán
htmlfirstrowdiv.appendChild(htmlFirstRowKoznev); // hozzafuzzuk a korabban letrehozott htmlfirstrowdiv divhez a most beallitott span elementet tartalmazo valtozonk tartalmat

/**
 * @type {HTMLSpanElement} ami tartalmaz egy span elemet, ami a tablazat elso sora harmadik oszlopa 
 */
const htmlFirstRowKernev = document.createElement('span'); // meghivom a document.createElementet egy stringel, es beleteszem a visszateresi erteket egy htmlFirstRowKernev nevu valtozoba
htmlFirstRowKernev.innerText = tableBodyArray[0].firstName; // beallitjuk a span element tartalmanak az innerText tulajdonsagon keresztul a tableBodyArray változó elso elemenek firstname tulajdonságának erteket ami egy string es erteke Pál
htmlfirstrowdiv.appendChild(htmlFirstRowKernev); // hozzafuzzuk a korabban letrehozott htmlfirstrowdiv divhez a most beallitott span elementet tartalmazo valtozonk tartalmat

/**
 * @type {HTMLDivElement} ami tartalmaz egy div elemet a tablazat masodik soranak
 */
const htmlsecondrowdiv = document.createElement('div'); // meghivom a document.createElementet egy stringel, es beleteszem a visszateresi erteket egy htmlsecondrowdiv nevu valtozoba
document.body.append(htmlsecondrowdiv);  // hozzafuzom a letrehozott elemet a html bodyhoz a document.body appendChild fuggvenyenek segitsegevel

/**
 * @type {HTMLSpanElement} ami tartalmaz egy span elemet, ami a tablazat masodik sora elso oszlopa
 */
const htmlSecondRowVeznev = document.createElement('span');  // meghivom a document.createElementet egy stringel, es beleteszem a visszateresi erteket egy htmlSecondRowVeznev nevu valtozoba
htmlSecondRowVeznev.innerText = tableBodyArray[1].lastName; // beallitjuk a span element tartalmanak az innerText tulajdonsagon keresztul a tableBodyArray változó masodik elemenek lastName tulajdonságának erteket ami egy string es erteke Obádovics
htmlsecondrowdiv.appendChild(htmlSecondRowVeznev); // hozzafuzzuk a korabban letrehozott htmlsecondrowdiv divhez a most beallitott span elementet tartalmazo valtozonk tartalmat

/**
 * @type {HTMLSpanElement} ami tartalmaz egy span elemet, ami a tablazat masodik sora masodik oszlopa 
 */
const htmlSecondRowKernev = document.createElement('span'); // meghivom a document.createElementet egy stringel, es beleteszem a visszateresi erteket egy htmlSecondRowKernev nevu valtozoba
htmlSecondRowKernev.innerText = tableBodyArray[1].firstName; // beallitjuk a span element tartalmanak az innerText tulajdonsagon keresztul a tableBodyArray változó masodik elemenek firstname tulajdonságának erteket ami egy string es erteke Gyula
htmlsecondrowdiv.appendChild(htmlSecondRowKernev); // hozzafuzzuk a korabban letrehozott htmlsecondrowdiv divhez a most beallitott span elementet tartalmazo valtozonk tartalmat

/**
 * @type {HTMLDivElement} ami tartalmaz egy div elemet a tablazat harmadik soranak
 */
const htmlthirdrowdiv = document.createElement('div'); // meghivom a document.createElementet egy stringel, es beleteszem a visszateresi erteket egy htmlthirdrowdiv nevu valtozoba
document.body.append(htmlthirdrowdiv);  // hozzafuzom a letrehozott elemet a html bodyhoz a document.body appendChild fuggvenyenek segitsegevel

/**
 * @type {HTMLSpanElement} ami tartalmaz egy span elemet, ami a tablazat harmadik sora elso oszlopa
 */
const htmlThirdRowVeznev = document.createElement('span');  // meghivom a document.createElementet egy stringel, es beleteszem a visszateresi erteket egy htmlThirdRowVeznev nevu valtozoba
htmlThirdRowVeznev.innerText = tableBodyArray[2].lastName; // beallitjuk a span element tartalmanak az innerText tulajdonsagon keresztul a tableBodyArray változó harmadik elemenek lastName tulajdonságának erteket ami egy string es erteke Dávid
htmlthirdrowdiv.appendChild(htmlThirdRowVeznev); // hozzafuzzuk a korabban letrehozott htmlthirdrowdiv divhez a most beallitott span elementet tartalmazo valtozonk tartalmat

/**
 * @type {HTMLSpanElement} ami tartalmaz egy span elemet, ami a tablazat harmadik sora masodik oszlopa
 */
const htmlThirdRowKernev = document.createElement('span'); // meghivom a document.createElementet egy stringel, es beleteszem a visszateresi erteket egy htmlThirdRowKernev nevu valtozoba
htmlThirdRowKernev.innerText = tableBodyArray[2].firstName; // beallitjuk a span element tartalmanak az innerText tulajdonsagon keresztul a tableBodyArray változó harmadik elemenek firstname tulajdonságának erteket ami egy string es erteke Gyula
htmlthirdrowdiv.appendChild(htmlThirdRowKernev); // hozzafuzzuk a korabban letrehozott htmlthirdrowdiv divhez a most beallitott span elementet tartalmazo valtozonk tartalmat