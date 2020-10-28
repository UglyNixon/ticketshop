function createCard(events){
    
    mainField.classList.add("main-info")
    mainField.innerHTML=''
    events.forEach((elem,index) => {
    let div = document.createElement('div');
    div.id=`event${++index}`
    div.innerHTML=`    
    <div class="card-item-info">
      <div class="item-img"></div>
      <div class="item-info">
        <div class="event-name event-info">Название:</div>
        <div class="event-place event-info">Место проведения:</div>
        <div class="event-date event-info">Дата:</div>
        <div class="event-hall event-info">Залл:</div>
      </div>
    </div>
    <div class="card-item-form">
    <button class="item-buy-button">Купить</button>
    </div>
  `
  div.classList.add('main-card');
  div.querySelector('.item-img').dataset.type=elem.type;
//   switch(elem.type) {
//     case 'teatr':  
//       div.querySelector('.item-img').style.backgroundImage = `url('teatr.svg')`;
//   break
//     case 'movie':  
//     div.querySelector('.item-img').style.backgroundImage = `url('movie.svg')`;
//     break
//     case 'concert':
//         div.querySelector('.item-img').style.backgroundImage = `url('concert.svg')`;
//         break
//   }

  div.querySelector('.event-name').innerHTML+=` "${elem.name}"`
  div.querySelector('.event-place').innerHTML+=` "${elem.place}"`
  div.querySelector('.event-date').innerHTML+=` "${elem.date}"`
  div.querySelector('.event-hall').innerHTML+=` "${elem.hall.name}"`
  
  mainField.append(div);


});



}
createCard(EventsArr);


