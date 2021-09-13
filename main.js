let isShow_history = true;
function isShowHistory(){
    if(isShow_history){
        document.getElementById("history-view").style.display="block";
    } else {
        document.getElementById("history-view").style.display="none";
    }
    isShow_history = !isShow_history;
}

let isShow_cart = true;
function isShowCart(){
    if(isShow_cart){
        document.getElementById("cart-view").style.display="block";
    } else {
        document.getElementById("cart-view").style.display="none";
    }
    isShow_cart = !isShow_cart;
}

let isShow_sortPrice = true;
function isShowSortPrice(){
    if(isShow_sortPrice){
        document.getElementById("price-sort-selection").style.display="block";
    } else {
        document.getElementById("price-sort-selection").style.display="none";
    }
    isShow_sortPrice = !isShow_sortPrice;
}