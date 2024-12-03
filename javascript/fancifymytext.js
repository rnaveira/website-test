function bigger()
{
    document.getElementById("text").style.fontSize = "24px";
}

function FancyShmancy()
{
    let textbox = document.getElementById("text")
    textbox.style.fontWeight = "bold";
    textbox.style.textDecoration = "underline";
    textbox.style.color = "blue";
}

function BoringBetty()
{
    let textbox = document.getElementById("text");
    textbox.removeAttribute('style');
}

function mooIGuess()
{
    let textbox = document.getElementById("text")
    textbox.style.textTransform = "uppercase";
    
    let str = textbox.value;
    let strs = str.split(".") //list of strings
    str = strs.join("-Moo.")
    textbox.value = str;
}
