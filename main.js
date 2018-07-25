
let personProfiled = {name: "Dan", profile:"campaigner", communication:"one-on-one"};

let peopleLikeMe = 
[ "Robert Downey Jr", "Will Smith", "Willy Wonka"]


const saveDatabase = function (personProfiled, localStorageKey) {
    /*
        Convert the Object into a string.
    */
    const stringifiedDatabase = JSON.stringify(personProfiled)

    /*
        Create a key in local storage, and store the string
        version of your inventory database as the value
    */
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}
saveDatabase(personProfiled, "taco")
const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}
console.log(loadDatabase("taco"))
loadDatabase("taco")
const myData = loadDatabase("taco")

document.getElementById("Person").innerHTML = `myData`;

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

document.getElementById("People").innerHTML = ` <h3>People Like Me</h3>
<ul id ="PPL" >
    <li>Robert Downey Jr</li>
    <li>Will Smith</li>
    <li>Robin Williams</li>
    <li>Willy Wonka</li>
</ul>`

document.getElementById("Communication").innerHTML = ` <h3>Communication</h3>
<ul ="PPL" >
    <li>I communicate with my sib in person,through slack and via text.</li>
    <li>I like one on one communication with the instructors.</li>
    <li>I really enjoy the group projects and believe that I work best in small groups.</li>
</ul>`





