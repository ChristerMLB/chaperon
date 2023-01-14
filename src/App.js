import './App.css';
import React, { useState, useMemo } from "react";

import { filFormat, bildene, showDescription } from './bildene';
import ToppVenstre from './toppvenstre';
import BunnHoire from './bunnhoire';

console.log("showDescription:", showDescription);

function App() {

  const [shownImg, setShownImg] = useState([bildene[0]]);

  const velgebilder = useMemo(() => {
    return velgebilderListeMekke(shownImg[shownImg.length - 1][0])
  }, [shownImg]);


  function velgebilderListeMekke(sisteBilde){

//filtrerer
    let tmp = bildene
    .filter(img => {
      return img[1] === sisteBilde
    });

//fjerner duplikater
    let returArr = [tmp[0]];

    tmp.forEach(element => {
      returArr.forEach(tmpElement => {
        if(!element===tmpElement){
          returArr.push(element)
        }
      })
    })

//returnerer
    if(returArr[0] === undefined){ return [] }else{ return returArr}

  }

  function fadeInn(a){
    a.classList.remove("transparent");
    a.classList.remove("fadeUt");
    void a.offsetWidth; // trigger recalc, gjør at det under funker
    a.classList.add("fadeIn");
  }

  function fadeUt(a){
    a.classList.remove("fadeIn");
    void a.offsetWidth; // trigger recalc, gjør at det under funker
    a.classList.add("fadeUt");
  }

  function valgAnim(toppvenstre, bunnhoyre, nubilde){

    fadeUt(bunnhoyre);
    fadeInn(nubilde);

    toppvenstre.classList.add("move");
    
  }

  function valgAnimStopp(toppvenstre, nubilde){
    toppvenstre.classList.remove('move');
    nubilde.classList.remove("fadeIn");
    void nubilde.offsetWidth; // trigger recalc, gjør at det under funker
    nubilde.classList.add("transparent");
  }

  /* let delayedSpinner; */
  function ventPaBilder(bunnhoyre){

    /* let spinner = document.getElementById("spinner"); */
    /* delayedSpinner = setTimeout(fadeInn, 2000, spinner); */

    Promise.all(Array.from(bunnhoyre.getElementsByTagName("img")).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
        /* clearTimeout(delayedSpinner); */
        /* fadeUt(spinner); */
        fadeInn(bunnhoyre);
    });

  }
  
function handleClick(bilde){

  let nubilde = document.getElementById("nubilde");
  let toppvenstre = document.getElementById("toppvenstre");
  let bunnhoyre = document.getElementById("bunnhoyre");
  
  nubilde.src = "fortellimg/"+bilde[0]+"."+filFormat;
  valgAnim(toppvenstre, bunnhoyre, nubilde);

  setTimeout(setShownImg, 300, shownImg.concat([bilde]));

  setTimeout(valgAnimStopp, 350, toppvenstre, nubilde);
  setTimeout(ventPaBilder, 350, bunnhoyre);

}

function printImg(){

        let images = shownImg.map((img) => {
            return ["fortellimg/"+img[0]+"."+filFormat, img[2]];
        });

        console.log(images);

        images.forEach((img, index) => {
            let elem = document.createElement("img");
            elem.setAttribute("alt", img[1])
            elem.setAttribute("index", index)
            elem.setAttribute("src", img[0])
            document.getElementById("tegneserieBildene").appendChild(elem);
        });
        
        fadeInn(document.getElementById("tegneserie"));

}

function restart(){
  window.location.reload();
}

/* ...nå er vel egentlig minimumsfunksjonaliteten på plass - det som mangler er:

    prioritert:

    - flere bilder!

    polish:
    - lage spinner og få den til å vise på første loadings, og få delayen til å funke
    - fuzzy blå kanter på bunnhoire, så scrollingen ikke blir så skarp

    features:
    - rendring av alt-tekst når det er sjekket av
    - fikse linking og tilbakeknapp (mulig det er en del arbeid!)
    - betingelser (positive, negative)

    annet:
    - testing og errors?

*/

  return (
    <div className="App">

      <div id="tegneserie" className='transparent'>
        <span id="tegneserieBildene"></span>
        <span><button className="endeknapp" onClick={restart}>↻</button></span>
      </div>

      <ToppVenstre currentImg={shownImg[shownImg.length - 1]} filFormat={filFormat} />

      <BunnHoire className="transparent" velgebilder={velgebilder} filFormat={filFormat} restart={restart} printImg={printImg} handleClick={handleClick} />

    </div>
  );
}

export default App;