function runOnce(fn) {
    let count = 0;
    function wrapper() {
        if (count == 0) {
            fn();
            count++;
        }
    }

    return wrapper;
}

let greetOnce = runOnce(() => console.log('Hello World'));

greetOnce();
greetOnce();
greetOnce();
