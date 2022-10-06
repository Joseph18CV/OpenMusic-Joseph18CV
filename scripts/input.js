const inputRange = document.getElementById("input-range")
const spanValueRange = document.getElementById("value")

inputRange.addEventListener("mousemove", () => {
    let range = inputRange.value;
    let color = "linear-gradient(90deg, var(--color-brand-1)" + range + "%, var(--color-grey-5)" + range + "%)";
    inputRange.style.background = color;

    inputRange.oninput = () => {

    spanValueRange.innerText = inputRange.value

    ul.innerHTML = ""
        products.forEach((element) => {
            if(filterActive == element.category && range >= element.price){
               createCards(element)
            }else if(filterActive == 0 && range >= element.price){
                createCards(element)
            }
        })
    }
})

