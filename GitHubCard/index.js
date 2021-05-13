import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const result = axios.get("https://api.github.com/users/GidgetPINK")
//console.log(result) - result is a promise: an object representing the result of a computation



/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
result.then((data) => {
  //create the function here, within the .then
  const gitCardMaker = (obj) => {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add("card");
    document.querySelector(".cards").appendChild(cardContainer);

    const cardImg = document.createElement('img');
    cardImg.src = obj.avatar_url;
    document.querySelector(".card").appendChild(cardImg);

    const cardDetails = document.createElement('div');
    cardDetails.classList.add("card-info");
    document.querySelector(".card").appendChild(cardDetails);

    const heading = document.createElement('h3');
    heading.classList.add("name");
    heading.innerHTML = obj.name;
    document.querySelector(".card-info").appendChild(heading);
    

    const para = document.createElement('p');
    para.classList.add("username");
    para.innerHTML = obj.login;
    document.querySelector(".card-info").appendChild(para);

    const para1 = document.createElement('p');
    para1.innerHTML = "Location:", obj.location;
    document.querySelector(".card-info").appendChild(para1);

    const para2 = document.createElement('p');
    para2.innerHTML = "Profile:";
    para2.href = obj.html_url;
    document.querySelector(".card-info").appendChild(para2);

    const para3 = document.createElement('p');
    para3.innerHTML = "Followers:", obj.followers;
    document.querySelector(".card-info").appendChild(para3);

    const para4 = document.createElement('p');
    para4.innerHTML = "Following:", obj.following;
    document.querySelector(".card-info").appendChild(para4);

    const para5 = document.createElement('p');
    para5.innerHTML = "Bio:", obj.bio;
    document.querySelector(".card-info").appendChild(para5);
    
    return cardContainer
  }
  console.log(gitCardMaker(result));
});

 

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
