export class ListContainer {
    constructor(container) {
        this.container = container;
    }
    render(doc, title, position) {
        const li = document.createElement('li');
        const h3 = document.createElement('h3');
        h3.innerText = title;
        li.append(h3);
        const p = document.createElement('p');
        p.innerText = doc.format();
        li.append(p);
        if (position === 'top') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
