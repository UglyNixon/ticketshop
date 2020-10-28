function filterCatalog(arr,search){
    let sortArr= arr.filter(item=>
      item.type.includes(search)
       
    )
    return sortArr;
}
document.addEventListener('click',(event)=>{
   let target = event.target.parentElement;
   event.stopPropagation();
if (target.dataset.type!='filter') return;
createCard(
filterCatalog(EventsArr,target.dataset.search))
})

