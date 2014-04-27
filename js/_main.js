function paralax()
{
    var prlx1 = document.getElementById("prlx");
    prlx1.style.top = - (window.pageYOffset/9) + "px" //This line gets the whole thing done
    
    var prlx2 = document.getElementById("header")
    prlx2.style.top = -(window.pageYOffset/4) + "px"
}
window.addEventListener("scroll", paralax, false) //Triggers a function on scroll event