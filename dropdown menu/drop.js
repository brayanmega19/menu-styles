document.addEventListener("click",e=>{
    console.log("Hola");
    const dropDownButton = e.target.matches("[data-dropdown-button]");
    if(!dropDownButton && e.target.closest('[data-dropdown]') != null) return

    let currentDropDown;
    if(dropDownButton){
        currentDropDown = e.target.closest("[data-dropdown]");
        console.log(currentDropDown);
        currentDropDown.classList.toggle("active"); 
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown=>{
        if (dropdown === currentDropDown) return;
        dropdown.classList.remove("active");
    });
});