// 1. Select all elements of interest
let txtContent = document.getElementById("txtContent");
let btn = document.getElementById("btn");
let infoBox = document.getElementById("infoBox");

//2. Bind btn to an event listener.

btn.addEventListener("click", extractEmails);


//3. Create a eventhandler function.
function extractEmails() {
    let targetString = txtContent.value;


    if (targetString == "") {
      infoBox.innerHTML =  "Empty field not allowed. Please enter some content";
        return;  //a return statement terminates a function.
    }

    let pattern = /[a-z0-9_.]+@\w+\.[a-z.]{2,6}/ig;

    let result = targetString.match(pattern);

    if (result.length > 0) {
        txtContent.value =  result.join(" ");
        infoBox.innerHTML = `${result.length} email(s) found.`;
    } else {
        txtContent.value = "No email found!";
    }    
}