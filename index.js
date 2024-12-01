//Hamburgermenü

//document.getElementById("hamburger-icon").addEventListener("click",hamburgermenu(this))
function hamburgermenu(menu) {
    menu.classList.toggle('open');
}

//Fizetendő kiszámolása
document.getElementById("szamoldki").addEventListener("click",arszamolo)
function arszamolo(){
    let a=0
    //Méretfajta select
    if (document.getElementById("meretfajta").selectedIndex==0)
        {a=a+1000};
    if (document.getElementById("meretfajta").selectedIndex==1)
        {a=a+1400};
    if (document.getElementById("meretfajta").selectedIndex==2)
        {a=a+1800};
    if (document.getElementById("meretfajta").selectedIndex==3)
        {a=a+2000};
    
    //Csokorfajta select
    if (document.getElementById("csokorfajta").selectedIndex==1)
        {a=a+3200};
    if (document.getElementById("csokorfajta").selectedIndex==2)
        {a=a+3400};
    if (document.getElementById("csokorfajta").selectedIndex==3)
        {a=a+3900};
    if (document.getElementById("csokorfajta").selectedIndex==4)
        {a=a+6500};
    if (document.getElementById("csokorfajta").selectedIndex==5)
        {a=a+3400};

    //Csomagoló select
    if (document.getElementById("csomagolo").selectedIndex==0)
        {a=a+200};
    if (document.getElementById("csomagolo").selectedIndex==1)
        {a=a+1000};
    if (document.getElementById("csomagolo").selectedIndex==2)
        {a=a+500};

    //Házhozszállítás radiohead
    if (document.getElementById("hazhozszall").checked)
        {a=a+1200};

    //Extrák checkbox
    if (document.getElementById("felirat").checked)
        {a=a+500};
    if (document.getElementById("masni").checked)
        {a=a+200};
    if (document.getElementById("maci").checked)
        {a=a+900};
    if (document.getElementById("lufi").checked)
        {a=a+800};

    a=a+` Ft`

    document.getElementById("fizetendo").innerHTML=a;


}


//Kép mutatása
document.getElementById("csokorfajta").addEventListener("change",csokormutat)


function csokormutat(){
    const kep=document.getElementById("valasztottkep");

    const kepek={
        alap: '',
        1: "kepek/klasszikus.jpg",
        2: "kepek/vidam.jpg",
        3: "kepek/napraforgo.jpg",
        4: "kepek/eskuvoi.jpg",
        5: "kepek/modern.jpg"  
    }

    const valasztott=document.getElementById("csokorfajta").value
    if (valasztott==`alap`){
        alert(`Válassz ki egy csokrot!`);
        kep.src=``
        kep.alt=`Nincs kiválasztott kép`
    }
    else{
        kep.style.display=`block`
        kep.src=kepek[valasztott];
        kep.alt=`A választott csokrod: ${valasztott}`;
    }
}