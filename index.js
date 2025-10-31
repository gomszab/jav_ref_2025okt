/**
 * @type {string} valtozo ami tartalmazza a cimet, mivel const ezert a kesobbiekben nem valtoztathatjuk
 */
const tabletitle = 'Javítási referencia'; // tabletitle valtozo deklaralasa aminek egy string tipusu erteket
/**
 * @type {{title: string}} valtozo ami tartalmazza tablazat header elso oszlopanak tulajdonsagait
 */
const tableheaderfirstname = { // tableheaderformname valtozo deklaralasa, aminek egy objektum tipusu erteket adunk
    title:'Keresztnév' // az objektum title tulajdonsaganak egy string tipusu erteket adunk
}; 
/**
 * @type {{title: string}} valtozo ami tartalmazza tablazat header második oszlopanak tulajdonsagait
 */
const tableheaderlastname = { // tableheaderlastname valtozo deklaralasa, aminek egy objektum tipusu erteket adunk
    title:'Vezetéknév' // az objektum title tulajdonsaganak egy string tipusu erteket adunk
}; 
/**
 * @type {{ lastName: string, middleName: string, firstName: string}} valtozo ami osszevonva tartalmazza az elso sor ertekeit 
 */
const firstRowObject = {  // firstRowObject valtozo deklaralasa, ami egy objektum tipusu ertekkel lesz egyenlo
    lastName: 'Dienes', // az objektum lastName tulajdonsaganak egy string tipusu erteket adunk
    middleName: 'Zoltán', // az objektum middleName tulajdonsaganak egy string tipusu erteket adunk
    firstName: 'Pál' // az objektum firstName tulajdonsaganak egy string tipusu erteket adunk
};

/**
 * @type {{ lastName: string, firstName: string}} valtozo ami osszevonva tartalmazza a masodik sor ertekeit 
 */
const secondRowObject = {  // secondRowObject valtozo deklaralasa, ami egy objektum tipusu ertekkel lesz egyenlo
    lastName: 'Obádovics', // az objektum lastName tulajdonsaganak egy string tipusu erteket adunk
    firstName: 'Gyula' // az objektum firstName tulajdonsaganak egy string tipusu erteket adunk
};

/**
 * @type {{ lastName: string, firstName: string}} valtozo ami osszevonva tartalmazza a harmadik sor ertekeit 
 */
const thirdRowObject = {  // thirdRowObject valtozo deklaralasa, ami egy objektum tipusu ertekkel lesz egyenlo
    lastName: 'Dávid', // az objektum lastName tulajdonsaganak egy string tipusu erteket adunk
    firstName: 'Gyula' // az objektum firstName tulajdonsaganak egy string tipusu erteket adunk
};

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
firstnameheader.innerText = tableheaderfirstname.title; // beallitjuk a span element tartalmanak az innerText tulajdonsagon keresztul a tableheaderforname változó title tulajdonságának erteket ami egy string es erteke Keresztnév
divforheader.appendChild(firstnameheader) /// hozzafuzzuk a korabban letrehozott divforheader divhez a most beallitott span elementet tartalmazo valtozonk tartalmat

/**
 * @type {HTMLSpanElement} ami tartalmaz egy span elemet, ami  a tablazatfejlec masodik oszlopa
 */
const lastnameheader = document.createElement('span'); // meghivom a document.createElementet egy stringel, es beleteszem a visszateresi erteket egy firstnameheader nevu valtozoba
lastnameheader.innerText = tableheaderlastname.title; // beallitjuk a span element tartalmanak az innerText tulajdonsagon keresztul a tableheaderlastname változó title tulajdonságának erteket ami egy string es erteke Vezetéknév
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
htmlFirstRowVeznev.innerText = firstRowObject.lastName; // beallitjuk a span element tartalmanak az innerText tulajdonsagon keresztul a firstRowObject lastname tulajdonságának erteket ami egy string es erteke Dienes
htmlfirstrowdiv.appendChild(htmlFirstRowVeznev); // hozzafuzzuk a korabban letrehozott htmlfirstrowdiv divhez a most beallitott span elementet tartalmazo valtozonk tartalmat

/**
 * @type {HTMLSpanElement} ami tartalmaz egy span elemet, ami a tablazat elso sora masodik oszlopa 
 */
const htmlFirstRowKoznev = document.createElement('span'); // meghivom a document.createElementet egy stringel, es beleteszem a visszateresi erteket egy htmlFirstRowKoznev nevu valtozoba
htmlFirstRowKoznev.innerText = firstRowObject.middleName; // beallitjuk a span element tartalmanak az innerText tulajdonsagon keresztul a firstRowObject middlename tulajdonságának erteket ami egy string es erteke Zoltán
htmlfirstrowdiv.appendChild(htmlFirstRowKoznev); // hozzafuzzuk a korabban letrehozott htmlfirstrowdiv divhez a most beallitott span elementet tartalmazo valtozonk tartalmat

/**
 * @type {HTMLSpanElement} ami tartalmaz egy span elemet, ami a tablazat elso sora harmadik oszlopa 
 */
const htmlFirstRowKernev = document.createElement('span'); // meghivom a document.createElementet egy stringel, es beleteszem a visszateresi erteket egy htmlFirstRowKernev nevu valtozoba
htmlFirstRowKernev.innerText = firstRowObject.firstName; // beallitjuk a span element tartalmanak az innerText tulajdonsagon keresztul a firstRowObject firstname tulajdonságának erteket ami egy string es erteke Pál
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
htmlSecondRowVeznev.innerText = secondRowObject.lastName; // beallitjuk a span element tartalmanak az innerText tulajdonsagon keresztul a secondRowObject lastName tulajdonságának erteket ami egy string es erteke Obádovics
htmlsecondrowdiv.appendChild(htmlSecondRowVeznev); // hozzafuzzuk a korabban letrehozott htmlsecondrowdiv divhez a most beallitott span elementet tartalmazo valtozonk tartalmat

/**
 * @type {HTMLSpanElement} ami tartalmaz egy span elemet, ami a tablazat masodik sora masodik oszlopa 
 */
const htmlSecondRowKernev = document.createElement('span'); // meghivom a document.createElementet egy stringel, es beleteszem a visszateresi erteket egy htmlSecondRowKernev nevu valtozoba
htmlSecondRowKernev.innerText = secondRowObject.firstName; // beallitjuk a span element tartalmanak az innerText tulajdonsagon keresztul a secondRowObject firstname tulajdonságának erteket ami egy string es erteke Gyula
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
htmlThirdRowVeznev.innerText = thirdRowObject.lastName; // beallitjuk a span element tartalmanak az innerText tulajdonsagon keresztul a thirdRowObject lastName tulajdonságának erteket ami egy string es erteke Dávid
htmlthirdrowdiv.appendChild(htmlThirdRowVeznev); // hozzafuzzuk a korabban letrehozott htmlthirdrowdiv divhez a most beallitott span elementet tartalmazo valtozonk tartalmat

/**
 * @type {HTMLSpanElement} ami tartalmaz egy span elemet, ami a tablazat harmadik sora masodik oszlopa
 */
const htmlThirdRowKernev = document.createElement('span'); // meghivom a document.createElementet egy stringel, es beleteszem a visszateresi erteket egy htmlThirdRowKernev nevu valtozoba
htmlThirdRowKernev.innerText = thirdRowObject.firstName; // beallitjuk a span element tartalmanak az innerText tulajdonsagon keresztul a thirdRowObject firstname tulajdonságának erteket ami egy string es erteke Gyula
htmlthirdrowdiv.appendChild(htmlThirdRowKernev); // hozzafuzzuk a korabban letrehozott htmlthirdrowdiv divhez a most beallitott span elementet tartalmazo valtozonk tartalmat