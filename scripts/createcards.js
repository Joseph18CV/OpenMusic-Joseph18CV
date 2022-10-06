const ul = document.querySelector(".list-albums")

function createCards (element) {
    
        let li = document.createElement("li")
            li.classList.add("items")

        let divCard = document.createElement("div")
            divCard.classList.add("card")

        let img = document.createElement("img")
            img.src = element.img

        let div = document.createElement("div")
            div.classList.add("title-year")
        let p = document.createElement("p")
            p.innerText = element.band
        let span = document.createElement("span")
            span.innerText = element.year

        let h2 = document.createElement("h2")
            h2.innerText = element.title

        let div2 = document.createElement("div2")
            div2.classList.add("price-and-buy")
        let p2 = document.createElement("p")
            p2.innerText = `R$ ${element.price}.00`
        let button = document.createElement("button")
            button.innerText = "Comprar" 

        div.append(p, span)
        div2.append(p2, button)

        divCard.append(div, h2, div2)
        li.append(img, divCard)

        ul.appendChild(li)
}