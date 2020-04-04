/*
* El siguiente código representa el algoritmo para encontrar la raíz de una función f(x)
* según el método de bisección.
*/

function f(t) {
    let g = 32.17;
    let s0 = 300.0;
    let m = 0.25;
    let k = 0.1;

    return s0 - (((m*g)/k)*t) + (((Math.pow(m,2))*g)/(Math.pow(k,2)))*(1.0 - Math.pow(Math.E,((-k*t)/m)));
}

function getN(a,b,epsilon) {
    return Math.ceil(Math.log2(((b-a)/epsilon)));
}

function bisection() {
    console.log("n", "\ta", "\tb", "\tp", "\tf(p)", "\terror", "\tabs error");
     
    let a = 0.0;
    let b = 10.0;
    let epsilon = Math.pow(10,-5);
    let n = getN(a,b,epsilon);
    let count = 0;

    while (n != 0) {
        let p = a + ((b-a)/2.0);

        console.log(count, "\t", a, "\t", b, "\t", p, "\t", f(p), "\t", Math.abs(b-a), "\t", (Math.abs(b-a))/2.0);

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
