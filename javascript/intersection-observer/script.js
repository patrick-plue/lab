const main = document.getElementsByTagName('main')[0];

function createBox() {
    const box = document.createElement('div');
    box.classList.add('box');
    return box;
}

function observerCallback(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.removeAttribute('id');
            const boxes = new Array(10).fill().map(() => createBox());
            boxes[5].setAttribute('id', 'trigger');
            for (box of boxes) {
                main.appendChild(box);
            }
            observer.observe(document.getElementById('trigger'));
        }
    });
}

const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.1,
});

observer.observe(document.getElementById('trigger'));
