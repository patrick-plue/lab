function runOnce(fn) {
    let count = 0;
    function wrapper(...args) {
        if (count == 0) {
            fn(...args);
            count++;
        }
    }

    return wrapper;
}

let greetOnce = runOnce((name) => console.log(`Hello ${name}`));

greetOnce('Karl');
greetOnce('Hannah');
greetOnce('Nobody');

let addOnce = runOnce((a, b) => console.log(a + b));

addOnce(3, 4);
addOnce(12, 42);
