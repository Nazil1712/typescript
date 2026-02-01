

// typeNarrowing
function getChai(kind : string | number) {
    if(typeof kind === 'string') {
        return `Making ${kind} chai...`
    }
    return `Chair order : ${kind}`
}


// Truthiness
function serveChai(msg? : string) {
    if(msg) {
        return `Serving ${msg}`
    }

    return `Serving default masala chai`
}


// Exhastive Checks
function orderChai(size: "small" | "medium" | "large" | number) {
    if(size == "small") {
        return `small cutting chai`;
    }

    else if(size == 'large' || size == "medium") {
        return `Make Extra chai`;
    }

    return `chai order #${size}`
} 


class KulhadChai {
    serve() {
        return `Serving kulhad chai`
    }
}


class Cutting {
    serve() {
        return `Serving cutting chai`
    }
}


// gaurd checking  | OR | Type guard
function serve(chai : KulhadChai | Cutting) {
    if(chai instanceof KulhadChai) {
        return chai.serve()
    }
}


type ChaiOrder = {
    type: string,
    suagr: number
}


function isChaiOrder(obj: any): obj is ChaiOrder {
    return (
        typeof obj == "object" 
            && obj != null 
            && typeof obj.type == "string" 
            && typeof obj.type == "number" 
    )
}


function serverOrder(item: ChaiOrder | string) {
    if(isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.suagr} sugar `
    }

    return `Serving custom chai: ${item}`
}



type MasalaChai = {type: "masala", spicelevel: number}
type GingerChai = {type: "ginger", amount: number}
type ElaichiChai = {type: "elaichi", spicelevel: number}

type Chai = MasalaChai | GingerChai | ElaichiChai

function MakeChai(order: Chai) {
    switch(order.type) {
        case "masala" :
            return `Masala chai`
            break;

        case "ginger" :
            return `Ginger chai`
            break;

        case "elaichi" :
            return `Elaichi chai`
            break;
    }
}


function brew(order: MasalaChai | GingerChai) {
    if("spicelevel" in order) {
        // If spice level is there in order, that means it's masalaChai 
    }
}


function isStringArray(arr: unknown): arr is string[] {
    return string[]
}