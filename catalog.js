
function randomNum(min,max){
    
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
function createTeaters(teatr){
 teatr.forEach(element => {
     let j=randomNum(1,3);  
    for(let i=0;i<j;i++){
        element.hall[i]={name:`hall_${i+1}`,places:[]}
        let fixedPlaces = randomNum(6,20);
       
        rRow= randomNum(1,10);
        for(let z=0;z<=rRow;z++){ let placesArray=[]
            for (let i=0;i<=fixedPlaces;i++){
                placesArray[i]={status:false,palceNumber:i+1,price:randomNum(500,2000)};
            }
            element.hall[i].places[z]=placesArray;
        }
    }
     })
     localStorage.setItem(teatr,JSON.stringify(teatr))
 }
 /*                 
 ********************************               
  */
 let teaters = [
    {place: "mhat",
    hall:[]
    },
    {place: "estradi",hall:[]},
    {place: 'taganka',hall:[]},
]
let movies =[
    {place: "karo",
    hall:[]
    },
    {place: "3Dmax",hall:[]},
    
]
let concerts = [
    {place: "kremlin",
    hall:[]
    },
    {place: "bar",hall:[]},
 ]

if (localStorage.getItem('teaters')==null) {
createTeaters(teaters)
}
else {   
teaters = JSON.parse(localStorage.getItem('teaters'))
}
if (localStorage.getItem('movies')==null) {
createTeaters(movies)
}
else {   
teaters = JSON.parse(localStorage.getItem('movies'))
}
if (localStorage.getItem('concerts')==null) {
createTeaters(concerts)
}
else {   
teaters = JSON.parse(localStorage.getItem('concerts'))
}





