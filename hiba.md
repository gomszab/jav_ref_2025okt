Szeretném előre leszögezni, hogy ez nem tekinthető 100%-ban megbízható szakmai tartalomnak! Csupán a hibajelenség tisztázása a célom, nem mély biztonsági és hálózati ismeretek átadása.

A teljes hiba:
```
curl: (35) schannel: next InitializeSecurityContext failed: CRYPT_E_NO_REVOCATION_CHECK (0x80092012)  - A visszavonási funkció nem tudta ellenőrizni a tanúsítvány visszavonását.

```
# What a heck is SSL?
A hiba okának a felderítéséhez mindenek előtt tisztáznunk kell, mi is az az ssl, amit ki kell gyilkolni.
Amikor beírod a böngésző címsorába, hogy https://github.com akkor a böngésződ egy titkosított csatornát hoz létre az oldal szerveréhez. Ezt úgynevezett tanusítvány segítségével éri el. Az SSL felel a biztonságos kapcsolat létrejöttéért, hogy harmadik fél ne tudja a kapcsolatot köztetek monitorizni. Tehát így néz ki:
1. beírod a https://github.com weboldal címét.
2. A böngésződ rácsatlakozik a szerverre, majd a szerver elküldi ezt az SSL tanusítványt.
3. A böngésző ellenörzi a tanúsítványt, hogy megbizható-e (hiteles tanusítványkiadótól származik). Ezt egy úgynevezett tanusítványlánc segítségével éri el: Ha ismeretlen a tanusítvány, akkor megnézi ki adta ki, ha az is ismeretlen, akkor megnézi azt ki adta ki, és addig megy míg nem talál olyat, amit már ismert, és megbízható.
4. Ellenörzi a tanusítvány hitelességét is a böngésző: mert ezek le szoktak járni.
5. Ha minden oké, akkor eltárolja a certet, hogy a böngésző kapcsolatot ne terhelje a későbbiekben.

# What a heck is curl?
A curl egy olyan progi, aminek a segítségével tudunk letölteni oldalakat/progikat az internetországból. A paraméterezésébe mélyen nem mennék bele, elegendő annyit tudni, hogy rákér egy címre és leszed valamit.

# Mi köze a böngészőnek a curl-hoz?
Ha curl-al is https://github.com weboldaldra kérsz be, akkor ugyanaz a tanisítványlánc felépítősdi végbemegy. Igen ám, de ez már böngészős kapcsolatot épít, hanem az operációs rendszered tanusítványtárát használja, és ugyanúgy elkezdi felépíteni a tanusítványláncot (a 3-as pontban foglaltak szerint). Ha a tűzfalad nem jól van konfigurálva, itt könnyen tud bukfencet dobni, mert mondjuk megnézi ki adott ki egy tanusítványt, rákérdez a szervernél aztán jól nem éri el.


# What a heck is Visszavonási funkció?
És most jött el az idő, hogy emésztgessük "visszavonási funkció" fogalmát. Ahhoz hogy ezt megértsük íme elnagyoltan az ssl tanusítvány ellenőrzés:
1. Minden ssl tanusítvány rendelkezik információval, hogy hol találjuk (aka szerveren) a Tanusítvány visszavonási listáját (CRL). Ezeket a tanusítvány kiszolgálótól kapta.
2. Felépíti hasonlóan a a böngészőhöz a tanusítványláncot.

A visszavonási funkció tehát bekér egy szerverre megnézni a mi a helyzet a certel, és ha tűzfal/proxy blokkolja a szerverelérést. 

Ha a curl-hoz megmondjuk a ```--ssl-no-revoke``` parancsal, hogy ezt a dolgot hagyja ki, akkor ugyan a kommunikáció nem lesz biztonságos a szerver és közted (tehát más figyelheti), de le tudod szedni a scriptemet.