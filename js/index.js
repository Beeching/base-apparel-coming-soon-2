const input = document.getElementById("email-input");
const yesError = document.getElementsByClassName("content__error");
const noError = document.getElementsByClassName("no-error")



function validate(email) {
    let re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    

    if (re.test(email)) {
    	console.log("correct format")

        while(yesError.length > 0) {
            yesError[0].classList.replace("content__error", "no-error");
        }
        input.value = "";
    } 
    
    else {
        console.log("incorrect format")
        while(noError.length > 0) {
            noError[0].classList.replace("no-error", "content__error");
        }
    }
}


function getInput() {
    let val = input.value;
    validate(val)

}