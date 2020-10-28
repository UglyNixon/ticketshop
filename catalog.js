
function randomNum(min,max){
    
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
function createTeaters(teatr,name){
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
     localStorage.setItem(name,JSON.stringify(teatr))
 }
function createMovies(movie,name){
 movie.forEach(element => {
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
     localStorage.setItem(name,JSON.stringify(movie))
 }
function createConcert(concert,name){
 concert.forEach(element => {
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
     localStorage.setItem(name,JSON.stringify(concert))
 }

 function randomDate(){
    let date = new Date();
    date.setDate(date.getDate() + randomNum(5,120));
    let d= date.getDate();
    let m = date.getMonth()+1;
    if (d<10) {d=`0${d}`}
    if (m<10) {m=`0${m}`}
   return`${d}-${m}-${date.getFullYear()}`
}

function filterHall (type,nazv){
  let arr = type.filter(elem=>elem.place==nazv)
  return  arr[0].hall[randomNum(0,arr[0].hall.length-1)]

}

function createTeatEvents (type,number){
    for (let i=0;i<number;i++){
        let nazv =TeatrsNames[randomNum(0,TeatrsNames.length-1)]
        teatrEvents[i]={
            type:'teatr',
            name : teatEventsNames[randomNum(0,teatEventsNames.length-1)],
            place : nazv,
            date :randomDate(),
            hall: filterHall(type,nazv),
           
       
            buyTicket: function ()  {
                       console.log(this.name)
                   },
           showTicket : function () {
                       console.log(this.place)
                   }
                   }

        }
  
    }
function createMoviEvents (type,number){
   
    for (let i=0;i<number;i++){
        let nazv =MoviesNames[randomNum(0,MoviesNames.length-1)]
        movieEvents[i]={
            type:'movie',
            name : MoviesEventsNames[randomNum(0,MoviesEventsNames.length-1)],
            place : nazv,
            date :randomDate(),
            hall: filterHall(type,nazv),
           
       
            buyTicket: function ()  {
                       console.log(this.name)
                   },
           showTicket : function () {
                       console.log(this.place)
                   }
                   }

        }
    }

   
function createConcEvents (type,number){
    for (let i=0;i<number;i++){
        let nazv =ConcertNames[randomNum(0,ConcertNames.length-1)]
        concertEvents[i]={
            type:'concert',
            name : concEventsNames[randomNum(0,concEventsNames.length-1)],
            place : nazv,
            date :randomDate(),
            hall: filterHall(type,nazv),
           
       
            buyTicket: function ()  {
                       console.log(this.name)
                   },
           showTicket : function () {
                       console.log(this.place)
                   }
                   }

        }
        
    }
 /*                 
 ********************************               
  */





 /*
 ************************
 */


    let teatrEvents=[];
    let movieEvents=[];
    let concertEvents=[];
    
    let TeatrsNames = ['МХАТ','Театр Эстрады','Театр на Таганке'];
    let teatEventsNames=['король лир','Щелкунчик','Кабала святош','Три сестры','Чайка','Мыши,Кай и зелененький']
    let MoviesNames = ['КАРО','3Dmax'];
    let MoviesEventsNames=['Бэтмен','Золушка','Дуное дело не хитрое','Зловещие мертвецы','Дети против волшебников']
    let ConcertNames = ['Крокус Сити Холл',"Китайский телчик Джао да"];
    let concEventsNames=['Metalica','Киркоров','Aphex Twin','Воровайки']
    let teaters = [
       {place: "МХАТ",   hall:[] ,imgSrc :''},
       {place: "Театр Эстрады",hall:[],imgSrc :''},
       {place: 'Театр на Таганке',hall:[],imgSrc :''},
   ]
   let movies =[
       {place: "КАРО",
       hall:[],
       imgSrc :''
       },
       {place: "3Dmax",hall:[],imgSrc :''},
       
   ]
   let concerts = [
       {place: "Крокус Сити Холл",
       hall:[],imgSrc :''
       },
       {place: "Китайский телчик Джао да",hall:[],imgSrc :''},
    ]
    if (localStorage.getItem('teaters')==null) {
        createTeaters(teaters,"teaters")
        }
        else {   
        teaters = JSON.parse(localStorage.getItem('teaters'))
        }
        if (localStorage.getItem('movies')==null) {
        createMovies(movies,"movies")
        }
        else {   
        movies = JSON.parse(localStorage.getItem('movies'))
        }
        if (localStorage.getItem('concerts')==null) {
        createConcert(concerts,"concerts")
        }
        else {   
        concerts = JSON.parse(localStorage.getItem('concerts'))
        }
      
      
      
         
 createTeatEvents(teaters,randomNum(5,20))
 createMoviEvents(movies,randomNum(10,30))
 createConcEvents(concerts,randomNum(7,25))
let EventsArr = [...teatrEvents,...movieEvents,...concertEvents]


/*
тип события +
Название события;+
Дата проведения;+
Место проведения;+
Зал;+
Ряды;
Места;
Id;
Цена;
Статус (продан/свободен);
Метод: Купить билет (ряд, место);+
Метод: Показать билет+
*/


