// 1)
/* class Chai {
    flavour: string;
    price: number

    constructor(flavour: string, price: number) {
        this.flavour = flavour;
        this.price = price
        console.log(this)
    }
}

const masalaChai = new Chai("masala",10) */


// 2) public - private
class Chai {
    public flavour: string = "masala"
    private secretIngredient: string = "secret" 

    reveal() {
        return this.secretIngredient; // revealing the private attribute here is OK
    }
}


const c = new Chai();
console.log(c.reveal());



// 3) Protected
class Shop {
    protected shopName: string = "Chai ki dukaan"
}


class Branch extends Shop {
    getShopName() {
        return this.shopName;
    }
}


const b1 = new Branch()
console.log(b1.getShopName())



// 4) # ==> Private attribute
class Wallet {
    #balance = 45000

    getBalance() {
        return this.#balance
    }
}


const w1 = new Wallet();
console.log(w1.getBalance())



// 5) readOnly properties
class Cup {
    readonly capcity: number = 250

    constructor (capcity: number) {
        this.capcity = capcity
    }
}

const c1 = new Cup(458)
console.log(c1.capcity)
// c1.capcity = 789; //==> Wll give error - as it is readonly




// 6) Getters and setters

/* It is standard way for Naming convention of private variables to assign _ (UnderScore) ahead of variable name */

class ModernChai {
    private _sugar = 2

    get sugar() {
        return this._sugar;
    }

    set sugar(value: number) {
        if(value > 5) throw new Error("Too Sweet")

        this._sugar = value;
    }
}


const mch = new ModernChai();
mch.sugar = 5;

console.log(mch.sugar)



// 7) static
class EkChai {
    static shopName = "chaicode caffe"

    constructor(public flavour: string) {}
} 

console.log(EkChai.shopName)


// 8) abstarct
abstract class Drink {
    abstract make(): void
}

class MyChai extends Drink {
    make() {
        console.log("Brewing chai...")
    }
}



// 9) Composition

/* 

Some companies prefers composition instead of Inheritance, 
Some prefers inheritance - Based on use cases, every one prefers something

*/

class Heater{
    heat(){
        console.log(`Providing heat...`)
    }
}


class ChaiMaker{
    constructor (private heater: Heater){}

    make() {
        this.heater.heat()
    }
}