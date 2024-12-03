1. Nevem: 
Salamon Kamilla Ágnes

2. Github link:
https://kamillasalamon.github.io/webfejlesztes/

3. Weboldalam témája:
Weboldalamat egy kitalált virágboltról csináltam. A szöveget ChatGPT segítségével csináltam, a képek szabadon felhasználhatóak. 

4. JS kódóm: 
A JavaScript kódom a Rendelés oldalon található. Az űrlapon összeállított csokornak kiírja az árát és egy kép is megjelenik a választott csokorfajta alapján. Az ár gombnyomásra, a kép a csokorfajta kiválasztása után jelenik meg.

5. Fonttípus:
4 féle Google fontot használtam: 
Minden címsor és a menü betűtípusa Playfair Display. 
A főoldalon szereplő idézet betűtípusa Alex Brush.
A főoldalon a Virágválaszték és Szolgáltatásaink szövege Baskervville.
Minden más szöveg betűtípusa Cormorant Garamond.


6. Átvett kódok:
A hamburgermenüt az alábbi youtube videó alapján csináltam: https://www.youtube.com/watch?v=OjQP7rPwJyE
Több dolgon is változtattam, de nem mindenen. A mobil nézet menü ikonja (3 vonal) és formázása teljes mértékben a videóban szereplő kód, a javascript kódon se változtattam. A menü többi részét nagyjából teljesen átformáztam és mobil firstre "konvertáltam", de a videó alapján készítettem el.  

Videóból teljesen átvett kódok:
HTML kód:
<div id="hamburger-icon" onclick="hamburgermenu(this)">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
        <ul class="mobilmenu">
            <li><a href="index.html" class="current">Főoldal</a></li>
            <li><a href="rendeles.html">Rendelés</a></li>
            <li><a href="uzleteink.html">Üzleteink</a></li>
            <li><a href="galeria.html">Galéria</a></li>
            <li><a href="kapcsolat.html">Kapcsolat</a></li>
        </ul>
</div>


javascript kód:
function hamburgermenu(menu) {
    menu.classList.toggle('open');
}


CSS kód:
.open .mobilmenu {
  display: flex;
}
.open .bar1 {
  transform: rotate(-45deg) translate(-6px, 6px);
}
.open .bar2 {
  opacity: 0;
}
.open .bar3 {
  transform: rotate(45deg) translate(-6px, -8px);
}