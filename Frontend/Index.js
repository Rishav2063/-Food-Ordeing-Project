// import {foodItem} from'./fooditem.js'

// console.log(foodItem);

// function displayItems(){
//     var  BURGERList= document.getElementById('BURGERList');
//     var  PIZZASLIST= document.getElementById('PIZZASLIST');
//     var  SOUTHINDIANLIST= document.getElementById('SOUTHINDIANLIST');
//     var  CHINESEITEMLIST= document.getElementById('CHINESEITEMLIST');
//     var  PUREVEGDISHLIST= document.getElementById('PUREVEGDISHLIST');
//     var  CAKESITEMLIST= document.getElementById('CAKESITEMLIST');
   
//     const BURGERListData= foodItem.filter(item=> item. category=='Burgers');
//     console.log(BURGERListData);

//     const PIZZASLISTData= foodItem.filter(item=> item. category=='Pizzas');
//     console.log(PIZZASLISTData);

//     const SOUTHINDIANLISTData= foodItem.filter(item=> item. category=='South Indian');
//     console.log(SOUTHINDIANLISTData);
    
//     const CHINESEITEMLISTData= foodItem.filter(item=> item. category=='Chinese Corner');
//     console.log(CHINESEITEMLISTData);
    
//     const PUREVEGDISHLISTData= foodItem.filter(item=> item. category=='Pure Veg Dishes');
//     console.log(PUREVEGDISHLISTData);
    
//     const CAKESITEMLISTData= foodItem.filter(item=> item. category=='Cakes');
//     console.log(CAKESITEMLISTData);
    
// BURGERListData.map(item=> {
//     var itemCard= document.createElement('div');
//     itemCard.setAttribute('id','item-card');

//     var cardTop=document.createElement('div');
//     cardTop.setAttribute('id','card-top');

//     var star= document.createElement('i');
//     star.setAttribute('class','fa fa-star');
//     star.setAttribute('id','item.id');
//     star.innerText= ''+ item.rating;

//     var heart= document.createElement('i');
//    heart.setAttribute('class','fa fa-heart-o add-to-cart');
//     heart.setAttribute('id','item.id');
//     heart.innerText= ''+ item.rating;

//     cardTop.appendChild(star);
//     cardTop.appendChild(heart);

//     var img= document.createElement('img');
//     img.src=item.img;

//     var itemName= document.createElement('p');
//     itemName.setAttribute('id','item-name');
//     itemName.innerText= itemName.name;

//     var itemPrice= document.createElement('p');
//     itemPrice.setAttribute('id','item-price');
//     itemPrice.innerText= 'price : &#8377 '+ item.Price;

//     itemCard.appendChild(cardTop);
//     itemCard.appendChild(img);
//     itemCard.appendChild(itemName);
//     itemCard.appendChild(itemPrice);
    
//     BURGERList.appendChild(itemCard);

    


// })
// PIZZASLISTData.map(item=> {
//     var itemCard= document.createElement('div');
//     itemCard.setAttribute('id','item-card');

//     var cardTop=document.createElement('div');
//     cardTop.setAttribute('id','card-top');

//     var star= document.createElement('i');
//     star.setAttribute('class','fa fa-star');
//     star.setAttribute('id','item.id');
//     star.innerText= ''+ item.rating;

//     var heart= document.createElement('i');
//    heart.setAttribute('class','fa fa-heart-o add-to-cart');
//     heart.setAttribute('id','item.id');
//     heart.innerText= ''+ item.rating;

//     cardTop.appendChild(star);
//     cardTop.appendChild(heart);

//     var img= document.createElement('img');
//     img.src=item.img;

//     var itemName= document.createElement('p');
//     itemName.setAttribute('id','item-name');
//     itemName.innerText= itemName.name;

//     var itemPrice= document.createElement('p');
//     itemPrice.setAttribute('id','item-price');
//     itemPrice.innerText= 'price : &#8377 '+ item.Price;

//     itemCard.appendChild(cardTop);
//     itemCard.appendChild(img);
//     itemCard.appendChild(itemName);
//     itemCard.appendChild(itemPrice);
    
//     PIZZASLIST.appendChild(itemCard);

    


// })
// SOUTHINDIANLISTData.map(item=> {
//     var itemCard= document.createElement('div');
//     itemCard.setAttribute('id','item-card');

//     var cardTop=document.createElement('div');
//     cardTop.setAttribute('id','card-top');

//     var star= document.createElement('i');
//     star.setAttribute('class','fa fa-star');
//     star.setAttribute('id','item.id');
//     star.innerText= ''+ item.rating;

//     var heart= document.createElement('i');
//    heart.setAttribute('class','fa fa-heart-o add-to-cart');
//     heart.setAttribute('id','item.id');
//     heart.innerText= ''+ item.rating;

//     cardTop.appendChild(star);
//     cardTop.appendChild(heart);

//     var img= document.createElement('img');
//     img.src=item.img;

//     var itemName= document.createElement('p');
//     itemName.setAttribute('id','item-name');
//     itemName.innerText= itemName.name;

//     var itemPrice= document.createElement('p');
//     itemPrice.setAttribute('id','item-price');
//     itemPrice.innerText= 'price : &#8377 '+ item.Price;

//     itemCard.appendChild(cardTop);
//     itemCard.appendChild(img);
//     itemCard.appendChild(itemName);
//     itemCard.appendChild(itemPrice);
    
//     SOUTHINDIANLIST.appendChild(itemCard);

// })


// }
// displayItems();

// const categoryListData= [...new Map(foodItem.map(item=> [item ['category'],item])).values()];
// console.log(categoryListData);
 
// function categoryList(){
//     var categoryListdata= document.getElementById('category-list'); 
    
// }