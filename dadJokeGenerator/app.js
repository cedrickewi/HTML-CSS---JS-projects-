const btn = document.getElementById("btn");
const displayjoke = document.getElementById("joke");
const apiKey = "knHx38/k1fSUuww+qbJ5iQ==QDXv8wfaflVhfAU8";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiUrl = `https://api.api-ninjas.com/v1/dadjokes?limit=1`;

const generateJoke = async () => {
    try {
        displayjoke.innerText = "updating...";
        btn.disabled = true;
        btn.innerText = "Loading";
        const response = await fetch(apiUrl, options);
        const data = await response.json();
        joke = data[0].joke;
        displayjoke.textContent = joke;
        btn.innerText = "tell a Joke";
        btn.disabled = false;
        
    } catch (error) {
        displayjoke.innerText = "check internet and refresh page"
        btn.innerText = "Network issue!!"
    }
 
};

btn.addEventListener("click", generateJoke);
