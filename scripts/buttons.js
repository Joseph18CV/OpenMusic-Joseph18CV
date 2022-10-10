const genreButtons = document.querySelector(".genre-buttons")

function listCategories () {

    categories.forEach((element) => {
        
      const button = document.createElement("button")
            button.classList.add("buttons-categories")
            button.innerText = element
            button.addEventListener("click", () => {
                const index = categories.indexOf(element)
                ul.innerHTML = ""
                filterActive = index
                products.forEach((element) => {
                    if(index === element.category && inputRange.value >= element.price){
                        createCards(element)
                        
                    }
                    if(index === 0 && inputRange.value >= element.price){
                        createCards(element)
                    }
                })
            })
            genreButtons.appendChild(button)
    })
}
listCategories()

