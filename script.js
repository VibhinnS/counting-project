let count = 0;
let finalValue;

function increment() {

    count = count + 1;
    document.getElementById("counting").innerText = count;
    finalValue = count


}

function decrement() {

    count = count - 1;
    document.getElementById("counting").innerText = count;
    finalValue = count


}


function save() {

    finalValue = count;
    document.getElementById("confirmText").innerText = "Value saved is " + finalValue;
}


function previousEntries() {

    document.getElementById("previouslog").innerText = finalValue;

}
