const reason = document.querySelector("#input-reason");
const amount = document.querySelector("#input-amount");
const clear = document.querySelector("#btn-clear");
const add = document.querySelector("#btn-add");
const itemlist = document.querySelector("#item-list");


add.addEventListener('click', ()=>{
   reasonValue = reason.value;
   amountValue = amount.value;


   if(reasonValue.trim().lenght <=0 || amountValue <=0 || amountValue.trim().lenght <=0){
        return;
   }
const newItem = document.createElement('ion-item');
newItem.textContent = reasonValue+' : '+amountValue;
itemlist.appendChild(newItem);
})



