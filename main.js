
let personProfiled = {name: "Dan Brewer", profile:"campaigner", communication:"one-on-one"};

let peopleLikeMe = 
[ "Robert Downey Jr", " Will Smith ", " Willy Wonka"]


const saveDatabase = function (personProfiled, localStorageKey) {
    const stringifiedDatabase = JSON.stringify(personProfiled)
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}
saveDatabase(personProfiled, "taco")
const loadDatabase = function (localStorageKey) {
    const databaseString = localStorage.getItem(localStorageKey)
    return JSON.parse(databaseString)
}
console.log(loadDatabase("taco"))
loadDatabase("taco")
const myData = loadDatabase("taco")

// 
const saveDatabase2 = function (peopleLikeMe, localStorageKey) {
    const stringifiedDatabase2 = JSON.stringify(peopleLikeMe)
    localStorage.setItem(localStorageKey, stringifiedDatabase2)
}
saveDatabase2(peopleLikeMe, "supertaco")
const loadDatabase2 = function (localStorageKey) {
    const databaseString = localStorage.getItem(localStorageKey)
    return JSON.parse(databaseString)
}
console.log(loadDatabase2("supertaco"))
loadDatabase2("supertaco")
const similarPeople = loadDatabase2("supertaco")




// 
document.getElementById("Person").innerHTML = `<h1>${myData.name}</h1>`;

document.getElementById("Profile").innerHTML = `   <h3>Things I agree with</h3>
<ul id="Agree" >
    <li>Crave creativity and freedom</li>
    <li>Know how to relax</li>
    <li>Tend to see life as a big, complex puzzle where everything is connected</li>
</ul>
<h3>Things I don't agree with</h3>
<ul id="Disagree" >
    <li>Fiercely independent</li>
    <li>Life of the party</li>
    <li>Self esteem is dependent on their ability to come up with original solutions </li>
</ul>`

// document.getElementById("People").innerHTML = ` <h3>People Like Me</h3>
// <ul id ="PPL" >
//     <li>Robert Downey Jr</li>
//     <li>Will Smith</li>
//     <li>Robin Williams</li>
//     <li>Willy Wonka</li>
// </ul>`
document.getElementById("People").innerHTML = `<h3>People with similar personalities are: ${similarPeople}`;

document.getElementById("Communication").innerHTML = ` <h3>Communication</h3>
<ul ="PPL" >
    <li>I communicate with my sib in person,through slack and via text.</li>
    <li>I like one on one communication with the instructors.</li>
    <li>I really enjoy the group projects and believe that I work best in small groups.</li>
</ul>`





