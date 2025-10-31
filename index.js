/**
 * @type {string} valtozo ami tartalmazza a cimet, mivel const ezert a kesobbiekben nem valtoztathatjuk
 */
const tabletitle = 'Javítási referencia'; // tabletitle valtozo deklaralasa aminek egy string tipusu erteket
/**
 * @type {string} valtozo ami tartalmazza a keresztnevet, mivel const ezert a kesobbiekben nem valtoztathatjuk
 */
const tableheaderfirstname = 'Keresztnév'; // tableheaderfirstname valtozo deklaralasa, aminek egy string tipusu erteket adunk
/**
 * @type {string} valtozo ami tartalmazza a vezeteknevet, mivel const ezert a kesobbiekben nem valtoztathatjuk
 */
const tableheaderlastname = 'Vezetéknév'; // tableheaderlastname valtozo deklaralasa, aminek egy string tipusu erteket adunk
/**
 * @type {string} valtozo ami tartalmazza a Dienes szoveget, mivel const ezert a kesobbiekben nem valtoztathatjuk
 */
const tablefirstrowlastname = 'Dienes'; // tablefirstrowlastname valtozo deklaralasa, aminek egy string tipusu erteket adunk
/**
 * @type {string} valtozo ami tartalmazza a Zoltán szoveget, mivel const ezert a kesobbiekben nem valtoztathatjuk
 */
const tablefirstrowmiddlename = 'Zoltán'; // tablefirstrowmidlename valtozo deklaralasa, aminek egy string tipusu erteket adunk
/**
 * @type {string} valtozo ami tartalmazza a Pál szoveget, mivel const ezert a kesobbiekben nem valtoztathatjuk
 */
const tablefirstrowfirstname = 'Pál'; // tablefirstrowfirstname valtozo deklaralasa, aminek egy string tipusu erteket adunk
/**
 * @type {string} valtozo ami tartalmazza a Obádovics szoveget, mivel const ezert a kesobbiekben nem valtoztathatjuk
 */
const tablesecondrowlastname = 'Obádovics'; // tablesecondrowlastname valtozo deklaralasa, aminek egy string tipusu erteket adunk
/**
 * @type {string} valtozo ami tartalmazza a Gyula szoveget, mivel const ezert a kesobbiekben nem valtoztathatjuk
 */
const tablesecondrowfirstname = 'Gyula'; // tablesecondrowfirstname valtozo deklaralasa, aminek egy string tipusu erteket adunk
/**
 * @type {string} valtozo ami tartalmazza a Dávid szoveget, mivel const ezert a kesobbiekben nem valtoztathatjuk
 */
const tablethirdrowlastname = 'Dávid'; // tablethirdrowlastname valtozo deklaralasa, aminek egy string tipusu erteket adunk
/**
 * @type {string} valtozo ami tartalmazza a Gyula szoveget, mivel const ezert a kesobbiekben nem valtoztathatjuk
 */
const tablethirdrowfirstname = 'Gyula'; // tablethirdrowfirstname valtozo deklaralasa, aminek egy string tipusu erteket adunk

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
firstnameheader.innerText = tableheaderfirstname; // beallitjuk a span element tartalmanak az innerText tulajdonsagon keresztul a tableheaderforname valtozo erteket ami egy string es erteke Keresztnév
divforheader.appendChild(firstnameheader) /// hozzafuzzuk a korabban letrehozott divforheader divhez a most beallitott span elementet tartalmazo valtozonk tartalmat

/**
 * @type {HTMLSpanElement} ami tartalmaz egy span elemet, ami  a tablazatfejlec masodik oszlopa
 */
const lastnameheader = document.createElement('span'); // meghivom a document.createElementet egy stringel, es beleteszem a visszateresi erteket egy firstnameheader nevu valtozoba
lastnameheader.innerText = tableheaderlastname; // beallitjuk a span element tartalmanak az innerText tulajdonsagon keresztul a tableheaderlastname valtozo erteket ami egy string es erteke Vezetéknév
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
htmlFirstRowVeznev.innerText = tablefirstrowlastname; // beallitjuk a span element tartalmanak az innerText tulajdonsagon keresztul a tablefirstrowlastname valtozo erteket ami egy string es erteke Dienes
htmlfirstrowdiv.appendChild(htmlFirstRowVeznev); // hozzafuzzuk a korabban letrehozott htmlfirstrowdiv divhez a most beallitott span elementet tartalmazo valtozonk tartalmat

/**
 * @type {HTMLSpanElement} ami tartalmaz egy span elemet, ami a tablazat elso sora masodik oszlopa 
 */
const htmlFirstRowKoznev = document.createElement('span'); // meghivom a document.createElementet egy stringel, es beleteszem a visszateresi erteket egy htmlFirstRowKoznev nevu valtozoba
htmlFirstRowKoznev.innerText = tablefirstrowmiddlename; // beallitjuk a span element tartalmanak az innerText tulajdonsagon keresztul a tablefirstrowmiddlename valtozo erteket ami egy string es erteke Zoltán
htmlfirstrowdiv.appendChild(htmlFirstRowKoznev); // hozzafuzzuk a korabban letrehozott htmlfirstrowdiv divhez a most beallitott span elementet tartalmazo valtozonk tartalmat

/**
 * @type {HTMLSpanElement} ami tartalmaz egy span elemet, ami a tablazat elso sora harmadik oszlopa 
 */
const htmlFirstRowKernev = document.createElement('span'); // meghivom a document.createElementet egy stringel, es beleteszem a visszateresi erteket egy htmlFirstRowKernev nevu valtozoba
htmlFirstRowKernev.innerText = tablefirstrowfirstname; // beallitjuk a span element tartalmanak az innerText tulajdonsagon keresztul a tablefirstrowfirstname valtozo erteket ami egy string es erteke Pál
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
htmlSecondRowVeznev.innerText = tablesecondrowlastname; // beallitjuk a span element tartalmanak az innerText tulajdonsagon keresztul a tablesecondrowlastname valtozo erteket ami egy string es erteke Obádovics
htmlsecondrowdiv.appendChild(htmlSecondRowVeznev); // hozzafuzzuk a korabban letrehozott htmlsecondrowdiv divhez a most beallitott span elementet tartalmazo valtozonk tartalmat

/**
 * @type {HTMLSpanElement} ami tartalmaz egy span elemet, ami a tablazat masodik sora masodik oszlopa 
 */
const htmlSecondRowKernev = document.createElement('span'); // meghivom a document.createElementet egy stringel, es beleteszem a visszateresi erteket egy htmlSecondRowKernev nevu valtozoba
htmlSecondRowKernev.innerText = tablesecondrowfirstname; // beallitjuk a span element tartalmanak az innerText tulajdonsagon keresztul a tablesecondrowfirstname valtozo erteket ami egy string es erteke Gyula
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
htmlThirdRowVeznev.innerText = tablethirdrowlastname; // beallitjuk a span element tartalmanak az innerText tulajdonsagon keresztul a tablethirdrowlastname valtozo erteket ami egy string es erteke Dávid
htmlthirdrowdiv.appendChild(htmlThirdRowVeznev); // hozzafuzzuk a korabban letrehozott htmlthirdrowdiv divhez a most beallitott span elementet tartalmazo valtozonk tartalmat

/**
 * @type {HTMLSpanElement} ami tartalmaz egy span elemet, ami a tablazat harmadik sora masodik oszlopa
 */
const htmlThirdRowKernev = document.createElement('span'); // meghivom a document.createElementet egy stringel, es beleteszem a visszateresi erteket egy htmlThirdRowKernev nevu valtozoba
htmlThirdRowKernev.innerText = tablethirdrowfirstname; // beallitjuk a span element tartalmanak az innerText tulajdonsagon keresztul a tablethirdrowfirstname valtozo erteket ami egy string es erteke Gyula
htmlthirdrowdiv.appendChild(htmlThirdRowKernev); // hozzafuzzuk a korabban letrehozott htmlthirdrowdiv divhez a most beallitott span elementet tartalmazo valtozonk tartalmat