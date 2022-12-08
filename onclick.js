document.getElementById('btn').onclick = function () {
    const name = document.getElementById('name').value;
    const age = document.getElementById('number').value;
    if (name === "mohamud" && age >= 20) {
        
        document.getElementById('output').innerHTML = "you are welcome age is fine";
    }
    else{
        document.getElementById('output').innerHTML = "make up your name or age";
    }
}