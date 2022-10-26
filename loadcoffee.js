function getCoffee() {
fetch('http://api.sampleapis.com/coffee/hot')
    .then(response => response.json())
    .then(coffeeList => console.log)(coffeeList)
    .catch(console.error)
}


function displayCoffees(coffeeList) {
    const main = document.getElementById('main')
    coffeeList.map(coffee => {
        const node = document.createElement('p');
        const textnode = document.createTextNode(coffee.title);
        node.appendChild(textnode);
        main.appendChild(node);
    })
    

}

getCoffee()

  