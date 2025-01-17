const mockRecords = [
    {
        name: "Timothy Abney",
        charges: "Failure to comply, obstruction, DUS",
        warrant: "No",
        dob: "3/19/1976",
        agency: "City Police Department",
        caseNumber: "C739285",
        bookingID: "B520973",
        thumbnail: "https://png.pngtree.com/png-vector/20220105/ourmid/pngtree-gray-beautiful-fingerprint-matting-free-png-transparent-layer-material-png-image_4086952.png",
        recordUrl: "https://warren.miamivalleyjails.org/JAILBOOKING.ASPX?CJIS_OR_PARTY_ID=C1416140&JAILBOOKING_ID=60977701"
    },
    {
        name: "Demetra Dohner",
        charges: "Theft, Assault, Obstruction, etc",
        warrant: "No",
        dob: "8/6/1996",
        agency: "County Sheriff's Office",
        caseNumber: "C359183",
        bookingID: "B105639",
        thumbnail: "https://png.pngtree.com/png-vector/20220105/ourmid/pngtree-gray-beautiful-fingerprint-matting-free-png-transparent-layer-material-png-image_4086952.png",
        recordUrl: "https://warren.miamivalleyjails.org/JAILBOOKING.ASPX?CJIS_OR_PARTY_ID=C71237279&JAILBOOKING_ID=52587317"
    },
    {
        name: "Ian Newman",
        charges: "Possession",
        warrant: "No",
        dob: "11/05/1995",
        agency: "State Police",
        caseNumber: "C953421",
        bookingID: "B749320",
        thumbnail: "https://png.pngtree.com/png-vector/20220105/ourmid/pngtree-gray-beautiful-fingerprint-matting-free-png-transparent-layer-material-png-image_4086952.png",
        recordUrl: "https://warren.miamivalleyjails.org/JAILBOOKING.ASPX?CJIS_OR_PARTY_ID=C35436745&JAILBOOKING_ID=62026177"
    },
    {
        name: "Luigi Berardo",
        charges: "Acts in contempt of court",
        warrant: "No",
        dob: "5/29/1956",
        agency: "U.S. Bailiff Department",
        caseNumber: "C928854",
        bookingID: "B762004",
        thumbnail: "https://t4.ftcdn.net/jpg/00/77/39/99/360_F_77399930_E2pJ7F2UJ3JXre2zMjVVC2arQbwbkFYp.jpg",
        recordUrl: "https://warren.miamivalleyjails.org/JAILBOOKING.ASPX?CJIS_OR_PARTY_ID=C1511640&JAILBOOKING_ID=61779118"
    },
    {
        name: "Corinne Sharma",
        charges: "Domestic Violence",
        warrant: "No",
        dob: "11/29/1986",
        agency: "County Police",
        caseNumber: "C733946",
        bookingID: "B665829",
        thumbnail: "https://t4.ftcdn.net/jpg/00/77/39/99/360_F_77399930_E2pJ7F2UJ3JXre2zMjVVC2arQbwbkFYp.jpg",
        recordUrl: "https://warren.miamivalleyjails.org/JAILBOOKING.ASPX?CJIS_OR_PARTY_ID=C78363206&JAILBOOKING_ID=62026593"
    },
    {
        name: "Anthony Franklin",
        charges: "Failure to comply, DUS",
        warrant: "No",
        dob: "6/23/1989",
        agency: "State Patrol",
        caseNumber: "C929399",
        bookingID: "B722494",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdfOsZQfLrDQwBVEmhTatWC4yTgIMaHxT2Ow&s",
        recordUrl: "https://warren.miamivalleyjails.org/JAILBOOKING.ASPX?CJIS_OR_PARTY_ID=C3117435&JAILBOOKING_ID=58509848"
    },
    {
        name: "Shawn Watts",
        charges: "Theft",
        warrant: "No",
        dob: "10/8/1980",
        agency: "City Police Department",
        caseNumber: "C992889",
        bookingID: "B739859",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdfOsZQfLrDQwBVEmhTatWC4yTgIMaHxT2Ow&s",
        recordUrl: "https://warren.miamivalleyjails.org/JAILBOOKING.ASPX?CJIS_OR_PARTY_ID=C1413056&JAILBOOKING_ID=60704310"
    },
    {
        name: "James Walker",
        charges: "Clean record",
        warrant: "No",
        dob: "07/30/1988",
        agency: "County Sheriff's Office",
        caseNumber: "C920894",
        bookingID: "B883998",
        thumbnail: "https://media.istockphoto.com/id/503585750/photo/fingerprint-in-black-and-white.jpg?s=612x612&w=0&k=20&c=DhuRaBuyFDuC_4zBfr_D6XByAFJqPy-PQoczjJBMP4A=",
        recordUrl: "https://warren.miamivalleyjails.org/DEFAULT.ASPX?search=James%20Walker"
    },
    {
        name: "Jesse Lakes",
        charges: "PV",
        warrant: "No",
        dob: "2/5/1993",
        agency: "State Police",
        caseNumber: "C593042",
        bookingID: "B739842",
        thumbnail: "https://i.pinimg.com/736x/67/2e/0f/672e0f6d6a26da17a965ab335350eedd.jpg",
        recordUrl: "https://warren.miamivalleyjails.org/JAILBOOKING.ASPX?CJIS_OR_PARTY_ID=C24115860&JAILBOOKING_ID=61195757"
    },
    {
        name: "Emma Lewis",
        charges: "Clean Record",
        warrant: "No",
        dob: "04/02/1992",
        agency: "City Police Department",
        caseNumber: "C740992",
        bookingID: "B920985",
        thumbnail: "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvam9iNjczLTA2OS1wLnBuZw.png",
        recordUrl: "https://warren.miamivalleyjails.org/DEFAULT.ASPX?search=Emma%20Lewis"
    },
    {
        name: "William Clark",
        charges: "Clean Record",
        warrant: "No",
        dob: "06/15/1990",
        agency: "City Police Department",
        caseNumber: "C983024",
        bookingID: "B877099",
        thumbnail: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3B4MTMzMzY4OS1pbWFnZS1qb2I4NDlfMS5wbmc.png",
        recordUrl: "https://warren.miamivalleyjails.org/DEFAULT.ASPX?search=William%20Clark"
    }
];


// Login credentials
const USERNAME = "AustinBarnes";
const PASSWORD = "Forensics84";

// DOM Elements
const loginScreen = document.getElementById("loginScreen");
const uploadScreen = document.getElementById("uploadScreen");
const searchingScreen = document.getElementById("searchingScreen");
const resultScreen = document.getElementById("resultScreen");
const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");
const uploadForm = document.getElementById("uploadForm");
const restartBtn = document.getElementById("restartBtn");
const logoutBtn = document.getElementById("logoutBtn");
const logoutFromResultBtn = document.getElementById("logoutFromResultBtn");

// Result fields
const personName = document.getElementById("personName");
const personCharges = document.getElementById("personCharges");
const personWarrant = document.getElementById("personWarrant");
const personDOB = document.getElementById("personDOB");
const personCaseNumber = document.getElementById("personCaseNumber");
const personBookingID = document.getElementById("personBookingID");
const personAgency = document.getElementById("personAgency");
const personThumbnail = document.getElementById("personThumbnail");
const personRecordLink = document.getElementById("personRecordLink");

// Variables to manage state
let lastFile = null;
let lastMatchedRecord = null;

// Handle Login
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === USERNAME && password === PASSWORD) {
        loginError.textContent = "";
        loginScreen.classList.add("hidden");
        uploadScreen.classList.remove("hidden");
    } else {
        loginError.textContent = "Invalid username or password.";
        loginError.style.color = "red";
    }
});

// Handle Fingerprint Upload
uploadForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const file = document.getElementById("fingerprintFile").files[0];

    if (file) {
        if (file === lastFile) {
            // Keep the same matched record if the file is the same
        } else {
            lastFile = file;
            lastMatchedRecord = mockRecords[Math.floor(Math.random() * mockRecords.length)];
        }
        startSearch();
    } else {
        alert("Please upload a valid file.");
    }
});

// Simulate search with a 15-second delay
function startSearch() {
    uploadScreen.classList.add("hidden");
    searchingScreen.classList.remove("hidden");

    setTimeout(() => {
        searchingScreen.classList.add("hidden");
        showResult();
    }, 15000);
}

// Display results
function showResult() {
    resultScreen.classList.remove("hidden");
    personName.textContent = lastMatchedRecord.name;
    personCharges.textContent = lastMatchedRecord.charges;
    personWarrant.textContent = lastMatchedRecord.warrant;
    personDOB.textContent = lastMatchedRecord.dob;
    personCaseNumber.textContent = lastMatchedRecord.caseNumber;
    personBookingID.textContent = lastMatchedRecord.bookingID;
    personAgency.textContent = lastMatchedRecord.agency;
    personThumbnail.src = lastMatchedRecord.thumbnail;
    personThumbnail.alt = `Fingerprint for ${lastMatchedRecord.name}`;
    personRecordLink.href = lastMatchedRecord.recordUrl;
}

// Restart search
restartBtn.addEventListener("click", () => {
    resultScreen.classList.add("hidden");
    uploadScreen.classList.remove("hidden");
});

// Logout
logoutBtn.addEventListener("click", logout);
logoutFromResultBtn.addEventListener("click", logout);

function logout() {
    lastFile = null;
    lastMatchedRecord = null;
    resultScreen.classList.add("hidden");
    uploadScreen.classList.add("hidden");
    searchingScreen.classList.add("hidden");
    loginScreen.classList.remove("hidden");
}
