function customRender(reactElement,container){// where to inject the element
   /* const domElement=document.createElement(reactElement.type)

    domElement.innerHTML=reactElement.children
    //set attributes
    domElement.setAttribute('href' , reactElement.props.href)
    domElement.setAttribute('target' , reactElement.props.href)
    container.appendChild(domElement)*/

    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for (const prop in reactElement.props){
        if(prop =='children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])

    }
    //this code is better ad it removes reduncy do setAttributes for each prop element
    container.appendChild(domElement)

}
const reactElement={
type :'a',
props:{
href:'https://google.com',
target:'_blank',

}, //object
children: " Click me "
//tree graph
}
//how to grab root
const mainContainer = document.querySelector('#root')
//how to render a tag

customRender(reactElement,mainContainer) //what to render and where to render