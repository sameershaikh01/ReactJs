function customRender(elememt , container){
    // const domElement = document.createElement(elememt.type)
    // domElement.innerHTML = elememt.children
    // domElement.setAttribute(href, elememt.props.href)

    // container.appendChild(domElement)

    const domElement = document.createElement(elememt.type)
    domElement.innerHTML = elememt.children
    for(const prop in elememt.props){
        if(prop === "children")continue;
        domElement.setAttribute(prop, elememt.props[prop])
    }

    container.appendChild(domElement);

}




const reactElement = {
    type:"a",
    props:{
        href:"https://Google.com",
        target:"_blank"
    },
    childrem:"clicked me on google"
}

const mainContainer = document.querySelector("#root")


customRender(reactElement, mainContainer)