import { Invoice } from "./classes/Invoice.js"
import { ListContainer } from "./classes/ListContainer.js"
import { Payment } from "./classes/Payment.js"

import { HasFormatting } from "./interfaces/HasFormatting.js"

const form = document.querySelector('.form-add-finance') as HTMLFormElement

//get all the fields
const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector("#tofrom") as HTMLInputElement
const details = document.querySelector("#details") as HTMLInputElement
const amount = document.querySelector("#amount") as HTMLInputElement

//container ul
const container = document.querySelector('ul')!

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    let doc:HasFormatting

    if(type.value === 'Invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    }else{
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }

    const renderer = new ListContainer(container)
    renderer.render(doc, type.value, 'bottom')
})