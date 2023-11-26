// connect/test js file to html
// console.log('testing')

// .getElementsByTagName()
// const h1a = document.getElementsByTagName('h1')
// console.log(h1s[0])

// .getElementsByClassName()
// const students = document.getElementsByClassName('student')
// console.log(students)
// .getElementById()
// const instructors = document.getElementById('instructors')
// console.log(instructors)
// .querySelector() (ES6 Modern Approach)
// const h1sAgain = document.querySelector('h1')
// console.log(h1sAgain)

// .querySelectorAll()

// .innerText property: Changes the text
// students[1].innerText = 'Jack'

// .innerHTML property: Allows you to write HTML code
// const dylansDiv = document.getElementsByClassName('dylans-div')[0]
// dylansDiv.innerHTML = `
// <p> I got the gravvvvyyyyyy</p>`
// .createElement()
// NOTE: Rememeber when creating an element in JS, you need to append to your document with .append()
// const dylansBtn = document.createElement('button')
// dylansBtn.innerText = 'Dylans Button'
// document.body.append(dylansBtn)


// Javascript is an event driven language
// We can take advantage of its events by using .addEventListener(event_type, callback function)
// dylansBtn.addEventListener('Click', () => {
//     console.log('I am being clicked')
// })
// Option 2: using onclick attribute in HTML
// onclick="function(event)"

// Lets create a new button and append to a specfic div

// adding addEventListener() to new button to add text every time its clicked

// grabbing form data with .addEventListener()
const form = document.getElementById('pokemon_form');
const pokemon_info = document.getElementById('pokemon_info');
form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const inputValue = document.getElementById('pokemon_input').value;
    const data = await pokemon_data(inputValue);
    display_pokemon(data);
});

// api call
const pokemon_data = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    return data;

};


const display_pokemon = (data) => {
    const { name, sprites, abilities } = data;

    const abilities_list = abilities.map(ability => ability.ability.name).join(', ');

    const html = `
        <h2>${name.charAt(0).toUpperCase() + name.slice(1)}</h2>
        <p>Abilities: ${abilities_list}</p>
        <img src="${sprites.front_default}" alt="${name}"/>
    `
    ;
    // injecting into html
    pokemon_info.innerHTML = html;
};