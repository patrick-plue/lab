const main = document.getElementsByTagName('main')[0];

function createBox() {
    const box = document.createElement('div');
    box.classList.add('box');
    return box;
}

const trigger = document.getElementById('trigger');

function observerCallback(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const fragment = new DocumentFragment();
            const boxes = new Array(10).fill().map(() => createBox());
            for (let box of boxes) {
                fragment.appendChild(box);
            }
            main.appendChild(fragment);
        }
    });
}

const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.3,
});

observer.observe(trigger);
