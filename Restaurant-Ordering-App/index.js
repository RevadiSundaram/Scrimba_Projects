import menuArray from './data.js';
const containerEl = document.getElementById('container');
let order = [];

function renderHtml(){
    return menuArray.map((menu,index) => {
        const {
            name,
            ingredients,
            id,
            price,
            emoji
         } = menu;
    return `
    <div class="menu-items">
        <div class="flex">
            <div class="space">
                <p class="emoji">${emoji}</p>
                <div class="details">
                    <h4>${name}</h4>
                    <p class="ingredients">${ingredients}</p>
                    <p>$${price}</p>
                </div>
            </div>
            <i class="fa-solid fa-plus plus" data-plus="${index}"></i>
        </div>
        <p class="line"></p>
    </div>
    `
    }).join('');
}


containerEl.innerHTML = renderHtml();



const buttonEl = document.querySelectorAll('.plus'); 

buttonEl.forEach(function(btn){
    btn.addEventListener('click',function(e){
        document.getElementById("order").style.display = 'flex'; 
    });
    
});

document.addEventListener("click", function(e){
    if(e.target.dataset.plus){
        handleClick(e.target.dataset.plus)
    }
    if(e.target.dataset.remove){
        console.log(e.target.dataset.remove)
        removeItem(e.target.dataset.remove);
    }
})

function handleClick(id){
    const dataObj = menuArray.filter((arr,index) => index == id) [0];
    order.push(dataObj);
    document.getElementById("order-item").innerHTML =  showOrder();
    document.getElementById("total-price").innerHTML = `$${total(order)}`;
}

function showOrder(){
    let showFeed = '';
     order.map(item => {
        showFeed += `<div class="each">
                    <p>${item.name}&nbsp; 
                        <button class="removeBtn" data-remove="${item.id}">(remove)</button>
                    </p>
                    <p>$${item.price}</p>
                    </div>`

    }).join('');
    return showFeed;
}


function removeItem(id){
    
    if(order.length == 1){
        order.pop();
    }
    else{
        order.splice(id, 1);
    }
    document.getElementById("order-item").innerHTML =  showOrder();
    document.getElementById("total-price").innerHTML = `$${total(order)}`;
    console.log(order);
}

function total(orderItem){
   const array = orderItem.reduce((total, cur) => {
    return total + cur.price
   },0);
   return array;
}
const modal = document.getElementById("modal");
document.getElementById("complete").addEventListener("click", function(){
    modal.style.display = 'flex';
})
document.getElementById("closeBtn").addEventListener("click", function(){
    modal.style.display = 'none';
})
document.getElementById("payBtn").addEventListener("click", function(){
    modal.style.display = 'none';
    document.getElementById("order").style.display = 'none';
    document.getElementById("final").style.display = 'block';
})