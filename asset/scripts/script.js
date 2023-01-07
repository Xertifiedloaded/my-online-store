let backgroundBody = document.querySelector(".middle");
let radio = document.querySelectorAll(".radio-btn");
radio.forEach(btn => {
    btn.addEventListener("click", () => {
        radio.forEach((e) => {
            e.classList.remove("active-radio")
        })
        btn.classList.add("active-radio")
        let src = btn.getAttribute("data-src")
        backgroundBody.style.backgroundImage = 'url("' + src + '")'
    })
})
let right = document.querySelector(".angleL")
let left = document.querySelector(".angleR")
let allProducts = document.querySelectorAll(".product")
console.log(right)
let products = document.querySelector(".products")
right.addEventListener("click", () => {
    products.scrollLeft -= 150
    for (let i = 0; i < allProducts.length; i++) {
        const myProduct = allProducts[i]
        if (myProduct == i) {
            console.log(myProduct)
        }
    }
})
left.addEventListener("click", () => {
    products.scrollLeft += 150

})
fetch('https://fakestoreapi.com/products').then((response) => {
    return response.json()
}).then((completedData) => {
    console.log(completedData[1])
    let newData = ""
    completedData.map((values) => {
        newData += `    
         <ul key=${values.id}>
                    <li>
             <img class="api-img" src=${values.image}>
                    </li>
                </ul>`
    })
    document.querySelector(".root").innerHTML = newData
}).catch((error) => {
    console.log(error)
})


