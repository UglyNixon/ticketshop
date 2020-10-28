
function loadSrc(src) {
    
    return new Promise(function(resolve) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () =>{resolve();}
    document.head.append(script);
    });
   }

let catalog = loadSrc('catalog.js');
catalog
.then (()=>{loadSrc('createCard.js');
medianochka()

})
.then(()=>loadSrc('filters.js'))
.then(()=>loadSrc('boxFilter.js'))



function medianochka(){
    EventsArr.forEach(elem=>{
        console.group()
        console.log(elem.name)
        console.log(elem.hall.name)
console.log(elem.hall.places)
console.groupEnd()

    })
}