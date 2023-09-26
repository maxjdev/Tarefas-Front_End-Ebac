function validacaoJs() {
    /* vars */
    const age1 = document.getElementById("age1").value;
    const age2 = document.getElementById("age2").value;
    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;
    document.getElementById("compareButton").addEventListener("click", function(event) {
        event.preventDefault();
    })

    /* full name */
    const name1split = name1.split(" ");
    const name2split = name2.split(" ");
    if (name1split.length <= 1 || name2split.length <= 1) {
        if (name1split.length <= 1) {
            document.querySelector(".error1").style.display = "block";
        } else {
            document.querySelector(".error2").style.display = "block";
        }
        return false;
    }
    document.querySelector(".error1").style.display = "none";
    document.querySelector(".error2").style.display = "none";

    /* age valid */
    if (age1 > age2) {
        alert("age1 > age2");
    } else if (age2 > age1) {
        alert("age2 > age1");
    }else {
        alert("equals");
    }

    /* end */
    document.getElementById("myForm").reset();
    return true;
}