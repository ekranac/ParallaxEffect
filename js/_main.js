function paralax()
{
    var prlx = document.getElementById("prlx");
    prlx.style.top = - (window.pageYOffset/9) + "px" //This line gets the whole thing done
}
window.addEventListener("scroll", paralax, false) //Triggers a function on scroll event