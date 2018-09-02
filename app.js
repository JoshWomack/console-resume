
/*Create variables, lists, and objects*/
let name = "josh womack";

let description = "If you're not into competitive dog grooming, soap carving, and ok with occasionally having to fake your own death, swipe left."

let companies = ['Clowning Inc.', 'Industrial Mime Workers', 'Abracadabra'];

let jobTitles = ['Clown', 'Mime', 'Magician'];

let descriptions = [
    'Scared children, made baloon animals, juggled', 
    '...',
    'Made things disappear',
]

let interests = ["Eating","Sleeping","Breathing"]

let skills = [
    {
        skill: "Invisibility",
        cool: true,
    },
    {
        skill: "Mouse Taming",
        cool: false,
    },
    {
        skill: "Seeking (hide and seek)",
        cool: true
    },
    {
        skill: "Walking",
        cool: false,
    }
]

/*Define functions to output information to the log*/
function displayName(name) {
    console.log("Name: " + name.toUpperCase());
    console.log("");
}

function displayDescription(description) {
    console.log("Description:");
    console.log(description);
    console.log("");
}

function displayPosition(companies, jobTitles, descriptions) {
        console.log("WORK HISTORY:");
        for (i=0; i < companies.length; i++) {
            console.log("  Company: " + companies[i]);
            console.log("  Job Title: " + jobTitles[i]);
            console.log("  Job Description: " + descriptions[i]);
            console.log("");
        }
}

function displaySkills(skills) {
    console.log("SKILLS:");
    for (i = 0; i < skills.length; i++) {
        if (skills[i].cool == true) {
            console.log("  * BAM: " + skills[i].skill);
        } else {
            console.log("  * " + skills[i].skill);
        }
    }
    console.log("");
}

function displayInterests(interests) {
    console.log("INTERESTS:");
    for (i = 0; i < interests.length; i++) {
        console.log("  " + interests[i]);
    }
}



/*call functions to display out to the log*/
displayName(name);
displayDescription(description);
displayPosition(companies,jobTitles,descriptions);
displaySkills(skills);
displayInterests(interests);

