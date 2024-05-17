const container = document.getElementById("container");
console.log('parent ',container.parentElement);
console.log(' nextSiblings', container.nextElementSibling);
console.log(' previousSibling', container.previousElementSibling);
console.log("children", container.children);
console.log('firstchild', container.firstElementChild);
console.log('last child',container.lastElementChild);


const html = document.documentElement;
console.log({html})
console.log('body', document.body)

// UPDATING DOM
const heading = document.getElementById('heading')
heading.innerHTML = "Introduction to dom manipulation"
heading.style.color = 'red';

// Create dom
const textChild = document.createElement('p')
container.append(textChild);
textChild.innerHTML ='This is the new child'
textChild.setAttribute('class','container_new_child');
textChild.setAttribute( 'id','"paragraph');

// deleting
heading.remove();

const button = document.getElementById('button');
button.style.border ='none';
button.style.padding = "10px 10px"
button.style.borderRadius ="5px"
button.style.cursor="pointer";
button.style.backgroundColor = "#0096FF"
button.style.color = "#ffffff"

// event listener adding
button.addEventListener('click',function(){
    button.innerHTML='clicked!';
    button.style.background ='#50C878'
})

