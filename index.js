
function receivesAFunction(callback)
{
    return callback();
}

const x = function x()
 { 
     return "Stretch! Work that core!"; 
 }

receivesAFunction(x);


const namedFxn = function y() {
    return 'Stretch! Work that core!';
 }
function returnsANamedFunction()
{
    return namedFxn;
}


function returnsAnAnonymousFunction()
{
    return function(){return "abc";}
}

