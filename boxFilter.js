function createChexForm(){
    let form = document.createElement('form');
    form.classList.add('filter-form')
    let types = findParam();
    let select = document.createElement('select');
    form.append(select);
    types.forEach(elem=>{
        let option=document.createElement('option')
        option.value=elem;
        switch (elem){
            case 'teatr':
                option.innerHTML='Театр'
                break
            
            case 'movie':
                option.innerHTML='Кино'
                break
            
            case 'concert':
                option.innerHTML='Концерты'
                break
        }
        select.append(option)
    }
    ) 
    formBox.append(form)
}

function findParam(){
    let types = new Set();
    EventsArr.forEach(elem=>{
        types.add(elem.type)
    })
    return types;

}


createChexForm()





