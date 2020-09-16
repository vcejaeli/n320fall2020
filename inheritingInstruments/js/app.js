class instruments {
    constructor(name) {
        this.loudness = loudness;
        this.family = family;
        this.playVerb = playVerb;
    }

    //not sure I'm understanding this very well. Will have to re study it!
  
    render() {
        return ` 
        <div>${this.loudness}</div>
        <div>Hunger: ${this.family}</div>
        <div>Energy: ${this.playVerb}</div>
        `;
    }
}

class concrete {
    //super constructor?
    constructor(loudness) {
        this.woodwind = woodwind;
        this.percussion = percussion;
        this.stringed = stringed;
    }

    render() {
        return `
        <div>${this.woodwind}</div>
        <div>Hunger: ${this.percussion}</div>
        <div>Energy: ${this.stringed}</div>
        `;
    }
} 

//I still need some practice, my apologies. Will work on imrpoving my code/understanding. 


// let myPet = new VirtualPet("Gidget");
// let my petDiv = document.getElementById("petDiv");
// petDiv.innerHTML = myPet.render();

// function feedPet() {
//     myPet.feed();
//     petDiv.innerHTML = myPet.render();
// }