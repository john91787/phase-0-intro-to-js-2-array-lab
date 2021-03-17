// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(Ralph){
    console.log (cats.push(Ralph));
}

function destructivelyPrependCat(Bob){
    console.log(cats.unshift(Bob));
}

function destructivelyRemoveLastCat(Garfield){
    console.log(cats.pop(Garfield));
}

function destructivelyRemoveFirstCat(Milo){
    console.log(cats.shift(Milo));
}

function appendCat(Broom){
    return [...cats, Broom];
}

function prependCat(Arnold){
    return [Arnold,...cats];
}

function removeLastCat(){
    return cats.slice(0,2);
}

function removeFirstCat(){
    return cats.slice(-2);
}