const btn = document.getElementById("btn")
const feadbacks = document.querySelector(".feadbacks")
const result = document.querySelector(".result")
const feadbacksImo = document.querySelectorAll(".feadback")
const response = document.querySelector(".response")
btn.disabled = true

console.log(response);

btn.addEventListener("click", ()=>{
    feadbacks.style.display = "none"
    result.style.display = "flex"
    feadbacksImo.forEach(feadbackWord => {
        if(feadbackWord.classList.contains("active")){
           let yes =  feadbackWord.childNodes[3].textContent;
           response.textContent = yes
        }
    })
    btn.style.display = "none"
    setInterval(()=>{
        location.reload()
    }, 5000)
})

feadbacksImo.forEach(feadback => {
    feadback.addEventListener("click", () => {
        btn.disabled = false
        feadbacksImo.forEach(feadbackActive=>{
            feadbackActive.classList.remove("active")
        })
        feadback.classList.add("active")
    })
})

