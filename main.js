let lis = document.querySelectorAll("ul li");
let div = document.querySelector(".experiment");


// If True (there is value in local storage)
if (localStorage.getItem("color")) {
    // [1] use saved color
    div.style.backgroundColor = localStorage.getItem("color") 

    // [2] remove active class from all then add it to specific <li>
    lis.forEach((li)=>{
        li.classList.remove("active");
        document.querySelector(`li[data-color = ${localStorage.getItem("color")}]`).classList.add("active");
    })

}   


lis.forEach((li)=>{
    li.addEventListener("click", (e)=>{

        lis.forEach((li)=>{
            li.classList.remove("active");
            e.currentTarget.classList.add("active");
        })

        div.style.backgroundColor = e.currentTarget.dataset.color;
        localStorage.setItem("color", e.currentTarget.dataset.color);
    })
})
