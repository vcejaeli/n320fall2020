class VendingMachine {
    constructor(name) {
        this.name = name;
        this.amount = 5;
        this.price = 1.00;
    }
    render() {
        return `
            <div>${this.name}</div>
            <div>Stock: ${this.amount}</div>
            <div>Price: ${this.price}</div>
        `;
    }

    //should reduce stock and add purchase amnt
    buy() {
        this.amount --;
        this.price ++;
    }
}

let myPurchase = new VendingMachine("Candy");
let vendingDiv = document.getElementById("vendingDiv");
vendingDiv.innerHTML = myPurchase.render();

function buy() {
    myPurchase.buy();
    vendingDiv.innerHTML = myPurchase.render();
}

//kinda understanding.. I wish this was easier for me to get!
//Thanks for your patience. 

//Notes 
// store pproperties for:
// firstCandy
// SecondCandy
// firstChips

// When buying item, only allow purchase if stock is above zero.
// When bought reduce stock by 1
// render function

// 3 buttons 
// attempts purchase
// updates html 
