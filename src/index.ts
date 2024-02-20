

import { BehaviorSubject } from "rxjs";

function stateComponent<T>(initialValue: T, 
                           elementId: string, 
                           tag: string, 
                           render: (value: T, elementId: string, tag: string) => void) {

    const state = new BehaviorSubject<T>(initialValue);
    state.subscribe(value => render(value, elementId, tag));
    
    return state;
}

type Component<T, K extends keyof T> = {
    render: (props: Pick<T, K>, elementId: string, elementTag: string) => HTMLElement;
};

const renderProperty = (value: string | number, elementId: string, elementTag: string) => {
    
    let element = document.getElementById(elementId);
    if (!element) {
        element = document.createElement(elementTag);
        element.id = elementId;
        document.body.appendChild(element);
    }
    element.textContent = `${value}`;
};

// --------------------------          product.ts          --------------------------
type Product = {
    title: string;
    price: number;
    description: string;
};

const product:Product = { title: "Coffee Mug", price: 500, description: "A large coffee mug." };
stateComponent(product.title, 'product-title', 'h1', renderProperty);
stateComponent(product.price, 'product-price', 'h2', renderProperty);
stateComponent(product.description, 'product-description', 'h3', renderProperty);


// --------------------------          product.ts          --------------------------





















