"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// typeNarrowing
function getChai(kind) {
    if (typeof kind === 'string') {
        return `Making ${kind} chai...`;
    }
    return `Chair order : ${kind}`;
}
// Truthiness
function serveChai(msg) {
    if (msg) {
        return `Serving ${msg}`;
    }
    return `Serving default masala chai`;
}
// Exhastive Checks
function orderChai(size) {
    if (size == "small") {
        return `small cutting chai`;
    }
    else if (size == 'large' || size == "medium") {
        return `Make Extra chai`;
    }
    return `chai order #${size}`;
}
class KulhadChai {
    serve() {
        return `Serving kulhad chai`;
    }
}
class Cutting {
    serve() {
        return `Serving cutting chai`;
    }
}
// gaurd checking  | OR | Type guard
function serve(chai) {
    if (chai instanceof KulhadChai) {
        return chai.serve();
    }
}
function isChaiOrder(obj) {
    return (typeof obj == "object"
        && obj != null
        && typeof obj.type == "string"
        && typeof obj.type == "number");
}
function serverOrder(item) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.suagr} sugar `;
    }
    return `Serving custom chai: ${item}`;
}
function MakeChai(order) {
    switch (order.type) {
        case "masala":
            return `Masala chai`;
            break;
        case "ginger":
            return `Ginger chai`;
            break;
        case "elaichi":
            return `Elaichi chai`;
            break;
    }
}
function brew(order) {
    if ("spicelevel" in order) {
        // If spice level is there in order, that means it's masalaChai 
    }
}
/*
function isStringArray(arr: unknown): arr is string[] {
    return string[]
} */ 
//# sourceMappingURL=typeNarrowing.js.map