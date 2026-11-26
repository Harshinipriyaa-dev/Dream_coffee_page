// COFFEE DISCOVERY

const coffees = [

    {
        name: "Ethiopian Yirgacheffe",
        origin: "Yirgacheffe, Ethiopia",
        method: "Pour-over",
        flavour: "Floral, citrusy and tea-like",
        quote: "A little sunshine in every sip."
    },

    {
        name: "Colombian Supremo",
        origin: "Colombia",
        method: "Espresso",
        flavour: "Nutty, chocolatey and balanced",
        quote: "Some moments deserve to be savoured."
    },

    {
        name: "Brazilian Santos",
        origin: "Santos, Brazil",
        method: "French Press",
        flavour: "Smooth, mild and naturally sweet",
        quote: "Happiness is brewed one cup at a time."
    },

    {
        name: "Vietnamese Coffee",
        origin: "Vietnam",
        method: "Traditional drip filter",
        flavour: "Strong, rich and sweet",
        quote: "Life is too short for an empty coffee cup."
    },

    {
        name: "Indian Monsoon Malabar",
        origin: "Malabar Coast, India",
        method: "French Press",
        flavour: "Earthy, mellow and full-bodied",
        quote: "Find your calm in a cup of coffee."
    }

];

const discoverBtn = document.getElementById("discoverBtn");

discoverBtn.addEventListener("click", function () {

    const randomIndex = Math.floor(Math.random() * coffees.length);

    const coffee = coffees[randomIndex];

    showCoffee(coffee);

});
// COFFEE MODAL

const coffeeModal = document.getElementById("coffeeModal");

function showCoffee(coffee) {

    document.getElementById("coffeeName").textContent = coffee.name;

    document.getElementById("coffeeOrigin").textContent = coffee.origin;

    document.getElementById("coffeeMethod").textContent = coffee.method;

    document.getElementById("coffeeFlavour").textContent = coffee.flavour;

    document.getElementById("coffeeQuote").textContent =
        "“" + coffee.quote + "”";

    coffeeModal.classList.add("active");

}


// CLOSE MODAL

document.getElementById("closeModal").addEventListener("click", () => {
    coffeeModal.classList.remove("active");
});


// CLICK OUTSIDE TO CLOSE

coffeeModal.addEventListener("click", (event) => {

    if (event.target === coffeeModal) {
        coffeeModal.classList.remove("active");
    }

});


// DISCOVER ANOTHER COFFEE

document.getElementById("discoverAgain").addEventListener("click", () => {

    const randomIndex = Math.floor(Math.random() * coffees.length);

    showCoffee(coffees[randomIndex]);

});
const noteInput = document.getElementById("noteInput");
const addNoteBtn = document.getElementById("addNoteBtn");
const notesList = document.getElementById("notesList");

// Get previously saved notes
let notes = JSON.parse(localStorage.getItem("roasteryNotes")) || [];

function displayNotes() {
    notesList.innerHTML = "";

    if (notes.length === 0) {
        notesList.innerHTML =
            '<p class="empty-notes">No notes yet. Be the first to leave one!</p>';
        return;
    }

    notes.forEach(function(note) {
        const noteElement = document.createElement("div");

        noteElement.className = "note";
        noteElement.textContent = note;

        notesList.appendChild(noteElement);
        
    });
}

addNoteBtn.addEventListener("click", function() {
    const message = noteInput.value.trim();

    if (message === "") {
        alert("Write a little something first!");
        return;
    }

    notes = [message];

    localStorage.setItem("roasteryNotes", JSON.stringify(notes));

    noteInput.value = "";

    displayNotes();
});

// Display saved notes when the page loads
displayNotes();
const monthYear = document.getElementById("monthYear");
const calendarGrid = document.getElementById("calendarGrid");

const today = new Date();

let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function renderCalendar() {
    calendarGrid.innerHTML = "";

    // Display weekday names
    weekdays.forEach(function(day) {
        const dayElement = document.createElement("div");
        dayElement.className = "calendar-day";
        dayElement.textContent = day;
        calendarGrid.appendChild(dayElement);
    });

    // Get first weekday and number of days
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Display month and year
    monthYear.textContent = new Date(
        currentYear,
        currentMonth
    ).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric"
    });

    // Empty spaces before the first date
    for (let i = 0; i < firstDay; i++) {
        const empty = document.createElement("div");
        empty.className = "calendar-date empty";
        calendarGrid.appendChild(empty);
    }

    // Display dates
    for (let date = 1; date <= totalDays; date++) {
        const dateElement = document.createElement("div");

        dateElement.className = "calendar-date";
        dateElement.textContent = date;

        if (
            date === today.getDate() &&
            currentMonth === today.getMonth() &&
            currentYear === today.getFullYear()
        ) {
            dateElement.classList.add("today");
        }

        calendarGrid.appendChild(dateElement);
    }
}

document.getElementById("prevMonth").addEventListener("click", function() {
    currentMonth--;

    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }

    renderCalendar();
});

document.getElementById("nextMonth").addEventListener("click", function() {
    currentMonth++;

    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }

    renderCalendar();
});

renderCalendar();
const noBtn = document.getElementById("noBtn");

function moveButton() {
    // Random movement within a limited area
    const x = Math.random() * 180 - 90;
    const y = Math.random() * 100 - 50;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// Desktop: move when the mouse approaches
noBtn.addEventListener("pointerenter", function(event) {
    if (event.pointerType === "mouse") {
        moveButton();
    }
});

// Mobile: move when someone touches it
noBtn.addEventListener("touchstart", function(event) {
    event.preventDefault();
    moveButton();
}, { passive: false });
const yesBtn = document.getElementById("yesBtn");

yesBtn.addEventListener("click", function() {
    alert("Yay! ☕ Your coffee date awaits!");
});

