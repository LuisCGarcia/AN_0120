/*
* El siguiente código representa el algoritmo para encontrar la raíz de una función f(x)
* según el método de bisección.
*/

function f(x) {
    return Math.pow(x,3) + 4*(Math.pow(x,2)) - 10;
}

function getN(a,b,epsilon) {
    return Math.ceil(Math.log2(((b-a)/epsilon)));
}

function bisection() {
    console.log("n", "\ta", "\tp", "\terror");
     
    let a = 1.0;
    let b = 2.0;
    let epsilon = Math.pow(10,-4);
    let n = getN(a,b,epsilon);
    let count = 0;

    while (n != 0) {
        let p = a + ((b-a)/2.0);

        console.log(count, "\t", a, "\t", p, "\t", Math.abs(b-a));

        if (((f(a)*f(p)) > 0)) {
            a = p;
        } else if (((f(a)*f(p)) < 0)) {
            b = p;
        }

        count = (count + 1);
        n = (n - 1);
    }    
}

bisection();
