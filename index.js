
function receivesAFunction(callback)
{
    return callback();
}

const x = function x()
 { 
     return "Stretch! Work that core!"; 
 }

receivesAFunction(x);


const anonymousFxn = function y() {
    return 'Stretch! Work that core!';
 }
function returnsANamedFunction()
{
    return anonymousFxn;
}


function returnsAnAnonymousFunction()
{
    return function(){return "abc";}
}

