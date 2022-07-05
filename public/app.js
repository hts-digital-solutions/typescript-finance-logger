import { Invoice } from "./classes/Invoice.js";
import { ListContainer } from "./classes/ListContainer.js";
import { Payment } from "./classes/Payment.js";
const form = document.querySelector('.form-add-finance');
//get all the fields
const type = document.querySelector('#type');
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
//container ul
const container = document.querySelector('ul');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'Invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    const renderer = new ListContainer(container);
    renderer.render(doc, type.value, 'bottom');
});
