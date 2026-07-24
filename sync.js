const display = 3000; // 3 seconds

function register() {
    setTimeout(waitForInput, display);
    console.log("Registering...");
}

function login() {
    console.log("Logging in...");
}

function getData() {
    console.log("Getting data...");
}

function displayData() {
    console.log("Displaying data...");
}

function waitForInput() {
    const ct = Date.now();
    const ms = ct + display;

    while (Date.now() < ms) {
        // Waiting (not recommended)
    }

    console.log("Waiting finished.");
}

register();
login();
getData();
displayData();
console.log("Call another app...");