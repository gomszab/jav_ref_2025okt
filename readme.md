# Tartalomjegyzék
- [Tartalomjegyzék](#tartalomjegyzék)
- [Beállítások](#beállítások)
- [Követelmények](#követelmények)
- [Commit jegyzék](#commit-jegyzék)
- [GYIK](#gyik)
- [Tagek es tipusok](#tagek-es-tipusok)
- [Linkek](#linkek)

# Beállítások
Miután kiválasztottad melyik feladatot szeretnéd csinálni. Csinálsz 1 új repót (lehet privát is) az alábbi táblázat alapján:
| röpdoga csoport | repository neve |
| :-----------: |:-------------:|
| [A csoport](./A_csoport.pdf) | terulet_esemeny |
| [B csoport](./B_csoport.pdf) | irodalom_szereplok |
| [C csoport](C_csoport.pdf) | irodalom_tipusok |
| [D csoport](./D_csoport.pdf) | tori_ezernegyszaz |


Miután klónoztad a repót, git bash segítségével belenavigálsz a klónozott mappába, és kiadod az alábbi parancsot:

1. Nem kell külön mappát létrehoznod! mehet közvetlen a klónozott git repó mappájába. Létrehozod az index.html-t és beirod a táblázat html kódját. A táblázat után teszel egy
```html
<br/>
<hr>
<br/>
```
kódot (azért, hogy lásd majd hol van vége az eredeti táblázatnak, és hol kezdődik a javascript), majd beágyazod az index.js-t és létrehozod az index.js-t az index.html mellé. 
Az index.html head szekciójába beilleszted az alábbit:
```html
<style>
        table, tr,td,th {
            border: 1px black solid;
            border-collapse: collapse;
        }
    </style>
```
Erre azért van szükség, hogy lásd a cellákat (illetve én is szeretném látni)

2. Felcommitolod ezt a változtatást "tablazat inicializalasa" szöveggel
   
3. A git-bash-ben kiadod a következő utasítást:
curl -fsSL "https://gist.githubusercontent.com/gomszab/56aa1947132d2be70e48fcea2e606a1a/raw/b8d43cc8fb4c0f45e2e2186a135ed5c6133deeb4/setup.sh" | tr -d '\r' | bash -c "bash"

A script csakis a git repó mappában adható ki. Miután feltelepült a script minden commit előtt ellenőrzi, hogy az index.js fájl változtatásai megfelelnek-e a [követelményeknek](#követelmények). A program forráskódját [itt](https://github.com/gomszab/commit_checker). Nem tartalmaz sem keyloggert, sem virust, és aktív internetkapcsolat sem kell hozzá (miután persze a scriptet futtattad). Elvileg "Kész vagyunk" feliratot kell látnod miután ez lefutott. Innentől minden commitodnak kell tartalmaznia az index.js fájlt.

# Követelmények
- Minden sor végén ami nem csak kapcsos zárójel, kell lennie //-es kommentnek, ahol leírod, hogy mit csinál a sor (scriptelt commit követelmény)
- minden változódeklarálás felett kell lennie jsdoc-nak (/** */ javasolt több sorban írni, hogy átlátható legyen) ahol megmondod mi a típusa a változónak, és a típus után leírod miért csináltad (scriptelt commit követelmény)
- minden függvénydefiníciónál kötelező a paraméterek típusának a meghatározása és az is, valamint hogy mire fogod használni (scriptelt commit követelmény)
- Minden commitnak a táblázatban leírt commit szövegnek kell lennie
- Minden változónévnek legalább 5 karakter hosszúnak kell lennie, és számot/ékezetes karaktert nem tartalmazhat (scriptelt commit követelmény)
- Minden commitnál csak a megengedett eszközöket használhatod.
- Értelemszerűen a js nem dobhat hibát
- Minden commit-nál ellenőrízd, hogy le fut-e a script
- Kódot ne kikommentezz a commit után, hanem töröld/írd át (utólag úgy is vissza tudod nézni)
- Ha észreveszek AI commentet a sorok végén, vagy a jsdoc-ban autómatikusan beírom a karót, nem fogok rákérdezni, hogy ezt AI-val írtad-e
- Ha utólag veszed észre, hogy valamit rosszul csináltál egy előző commitban, akkor szólsz
- Ha észreveszem a komment vagy a változónév egyezéseket (akár az én változóneveimel/kommentjeimmel), akár más pótlóval, akkor karó
- Ha bárhol kérdés van, szólsz, kérdezel. Ha kóddal kapcsolatos kérdésed van és nem megy a commit, akkor az index.js fájl tartalmát [pastebin.com](https://pastebin.com/) on beilleszted kiválasztod a Syntax highlightingnál a javascriptet, és Create new paste, a linket meg elküldöd.
- A referencia megoldásom nem táblázat, csak a menetet szemlélteti. Értelemszerűen neked is a html fájl alapján kell implementálnod a javascriptet.
- Beadandó: egy colspan/rowspan-os megoldás teljesen, és egy másik (ha colspanos volt akkor rowspanon, ha rowspanos volt, akkor colspanos) a "ciklus bevezetese" committól

# Commit jegyzék
| Commit szám | Commit szövege        | Mit használhatok?           | Hogy néz ki?  | példa commit url |
|:-----------|:------:|:-------------:| :-----:|----:|
| 1. | tablazat inicializalasa | technikailag nem kell még kódolni | Az eredeti táblázat szegéllyel, illetve alatta egy vizszintes vonal | [commit](https://github.com/gomszab/jav_ref_2025okt/tree/1bd7ec2ba299483551551f843aec88beeea1bb42) |
| 2. | konzolra kiirjuk a stringeket | console.log függvény hívást | A devtools (F12) konzolon megjelenik a kiírt szöveg | [commit](https://github.com/gomszab/jav_ref_2025okt/tree/3a6411f5c1817533b7ec1ba3bb4c99a8fbcaf83b) |
| 3. | valtozok bevezetese | változó deklaráláshoz constot vagy letet | A devtools (F12) konzolon megjelenik a kiírt szöveg | [commit](https://github.com/gomszab/jav_ref_2025okt/tree/8898a2c16ec8e93e592b3661118726e87c764240) |
| 4. | createElement bevezetese | document.body, document.createElement, innerText, appendChild, colspan, rowspan | Megjelenik a táblázat | [commit](https://github.com/gomszab/jav_ref_2025okt/tree/952907e00df9f9fcee26aecf8f77673b21f42cc2) |
| 5. | objektum bevezetese | objektum és tulajdonság deklarálás | Megjelenik a táblázat | [commit](https://github.com/gomszab/jav_ref_2025okt/tree/1c4af6833d37f9712e9d0253b2fd466808cc539a) |
| 6. | fejlec tomb bevezetese | tömb és indexel megcímezheted az elemeket | Megjelenik a táblázat | [commit](https://github.com/gomszab/jav_ref_2025okt/tree/594432fec9d19079f98a5bc4a1b61f986da5273e) |
| 7. | body tomb bevezetese | tömb és indexel megcímezheted az elemeket | Megjelenik a táblázat | [commit](https://github.com/gomszab/jav_ref_2025okt/tree/bdf6a054f35ca97f370fe6ad3c40b7bb46a516c0) |
| 8. | ciklus bevezetese | barmilyen ciklust hasznalhatsz, a colspanos rowspanos részeket érdemes törölni erre a lépésre | ❗ Megjelenik a táblázat hibásan, mivel megjelennek undefined tartalmú cellák is ❗. Rowspan esetén a két soros objektumoknál az első oszlopba kerül a második sor második cellájának eleme. A szimpla soros elemekből dupla sor lesz, és undefinedek vannak a cellában. A colspanos táblázat esetén ahol összevonnánk cellákat ott az egyik cellában undefined van. | [commit](https://github.com/gomszab/jav_ref_2025okt/tree/3e1a94ce72341b76130f65b89972a82e2a5f5a57) |
| 9. | elagazas bevezetese | Használhatsz elágazást is, illetve colspan, rowspan | Megjelenik a táblázat, immár rendesen | [commit](https://github.com/gomszab/jav_ref_2025okt/tree/dbba625ad009de979d5f25be1850cdc6e7cffa00) |
| 10. | fuggveny bevezetese | Használhatsz fuggvenyt | Megjelenik a táblázat | [commit](https://github.com/gomszab/jav_ref_2025okt/tree/4d7dc1924bcd1e2568fc5cae5bbfe1644813be45) |

# GYIK
- Nem kell spanokat meg diveket csinálni, mivel az eredeti html fájlt szeretnénk újra alkotni js-ben
- Bármelyik ciklust hasnálhatod a 8-as lépésben, és nem kell változtatgatni, ahogy a referencia-megoldásban teszem
- A 8-as lépés végén nem fog helyesen megjelenni a táblázat.
- A colspanos és rowspanos adatstruktúrákra a tablebody generálásához az órai munkában találsz példákat, javasolt azt a mintát követni, természetesen lehet egyedi algoritmust írni (a 8-as lépésben még elágazás nélkül), az nem tiltott
- Ha a script nem működik, nézd meg az adott commit referenciát, hogy hátha valamit kihagytál, nézd át a kódodat
- Minden esetben a commit előtt nézd meg, hogy megjelenik-e aminek meg kell jelennie.
- A ciklusváltozókra nincs az 5 karakteres megkötés minden esetben. A növekményes ciklusnál maradhat az i, a for of, és a for in esetében is 5 karakteres változónév az elvárt
- A css részét nem kell megcsinálni semminek, elég ha látszik a border
- Az órai anyagok tartalmaznak további hasznos linkeket, de ha azután sem akar valami működni, akkor keress
- A kommenteket minden esetben manuálisan is elolvasom, hogy tudjam melyik része nem megy. Ha találok valamit az összesítésben megírom

# Tagek es tipusok
- td, th - [HTMLTableCellElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableCellElement)
- tbody, thead - [HTMLTableSectionElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableSectionElement)
- table - [HTMLTableElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement)
- document.body - [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

# Linkek
- [rowSpan](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableCellElement/rowSpan)
- [colSpan](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableCellElement/colSpan)
- [appendChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
- [createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)