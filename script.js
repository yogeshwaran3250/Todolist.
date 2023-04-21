let input = document.getElementById('input')

let btn = document.getElementById('btn')

let listContainer = document.getElementById('list-container')

btn.addEventListener('click',()=>{


    let li = document.createElement('li')
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    let divname = document.createElement('div')

    let divBtn = document.createElement('div')

    li.className = "Yogesh"

    li.append(divname,divBtn)
    
    divBtn.parentElement.setAttribute("onClick",'removeitem(event)')

    divBtn.innerHTML='<i class="fa fa-xmark"></i>'

    divname.textContent=input.value

    li.append(divname)
    li.append(divBtn)

    
    
    listContainer.append(li)

    input.value=""

})

function removeitem(event){

    
    let removeitem = event.target.parentNode.parentNode

    removeitem.remove()
}