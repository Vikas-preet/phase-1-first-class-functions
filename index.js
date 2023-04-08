function divide (a,b){
    return a/b;
}

function receivesAFunction (divide){
    return divide();
}

function returnsANamedFunction (){
    return receivesAFunction;
}


function returnsAnAnonymousFunction (){
    return (function(){});
}
