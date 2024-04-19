const fs = require("fs/promises");
const { EOL } = require("os");
const path = require("path");

function title(str) {
    return str
        .toLowerCase()
        .split(" ")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
}

// * Question 1 - Who is the oldest user?
function question1(data) {
    const userRows = data.split(EOL);
    const oldestUser = { name: "", age: -1 };
    const youngestUser = { name: "", age: Infinity };
    userRows.forEach((row) => {
        const [id, name, age, hobby] = row.split(",");
        if (parseInt(age) > oldestUser.age) {
            oldestUser.name = name;
            oldestUser.age = age;
        }
        if (parseInt(age) < youngestUser.age) {
            youngestUser.name = name;
            youngestUser.age = age;
        }
    });
    console.log(`The oldest user is ${title(oldestUser.name)} of age ${oldestUser.age}`);
    console.log(`The youngest user is ${title(youngestUser.name)} of age ${youngestUser.age}`);
}

// * Question 2 - Who are the top 5 oldest users?
// * Will have to use "sort" method (Quick Sort)
function question2(data) {
    // ! Sort the users by age
    const userRows = data.split(EOL);
    const users = [];
    userRows.forEach((row) => {
        const [id, name, age, hobby] = row.split(",");
        users.push({ id, name, age, hobby });
    });
    users.sort((a, b) => a.age - b.age);
    console.log("Top 5 Youngest Users");
    users.slice(0, 5).forEach((user) => {
        console.log(user);
        // console.log(`${title(user.name)} is ${user.age} years old`);
    });
    console.log("=====================================");
    console.log("Top 5 Oldest Users");
    users.slice(-5).forEach((user) => {
        // console.log(`${title(user.name)} is ${user.age} years old`);
        console.log(user);
    });
}

// * Question 3 - What is the most popular hobbies amongst the users?
// * They will be using another file, so you will need to read the file and parse it
function question3(userData, hobbyData) {
    const userRows = userData.split(EOL);
    const hobbyRows = hobbyData.split(EOL);
    const hobbyCount = {};
    const hobbyInfo = {};

    userRows.forEach((user) => {
        const [id, name, age, hobby] = user.split(",");
        hobbyCount[hobby] = hobbyCount[hobby] ? hobbyCount[hobby] + 1 : 1;
    });
    hobbyRows.forEach((hobby) => {
        const [id, name] = hobby.split(",");
        hobbyInfo[id] = name;
    });

    // * ForEach() method for getting Hobby ID
    let maxHobbyCount = 0;
    let maxHobbyID = null;

    Object.keys(hobbyCount).forEach((hobbyID) => {
        if (hobbyCount[hobbyID] > maxHobbyCount) {
            maxHobbyCount = hobbyCount[hobbyID];
            maxHobbyID = hobbyID;
        }
    });

    const hobbyID = maxHobbyID;

    // * Reduce Method for Hobby ID
    // const hobbyID = Object.keys(hobbyCount).reduce((a, b) => (hobbyCount[a] > hobbyCount[b] ? a : b));

    // * ForEach() method for getting Hobby Name
    let maxHobbyCount2 = 0;
    let maxHobbyID2 = null;

    Object.keys(hobbyCount).forEach((hobbyID) => {
        if (hobbyCount[hobbyID] > maxHobbyCount2) {
            maxHobbyCount2 = hobbyCount[hobbyID];
            maxHobbyID2 = hobbyID;
        }
    });

    const hobbyName = hobbyInfo[maxHobbyID];

    // * Reduce Method for Hobby Name
    // const hobbyName = hobbyInfo[Object.keys(hobbyCount).reduce((a, b) => (hobbyCount[a] > hobbyCount[b] ? a : b))];

    console.log(`${title(hobbyName)} is the most popular hobby with ${hobbyCount[hobbyID]} users`);
}

// Might be using a map to get the hobbies of the users

// * Question 4
// ! HINT: They will be using both files, so you will need to read both files and parse them

async function main() {
    // ! Less Correct Way
    // const users = await fs.readFile("users.csv", "utf-8");
    // const hobbies = await fs.readFile("hobbies.csv", "utf-8");
    try {
        // ! More Correct Way; Runs the csv files in parallel
        const [userData, hobbyData] = await Promise.all([fs.readFile(path.join(__dirname, "users.csv"), "utf-8"), fs.readFile(path.join(__dirname, "hobbies.csv"), "utf-8")]);
        // * Returns the result of array [Users.csv Content, Hobbies.csv Content] ; using result[1] will get Users.csv Content
        question1(userData);
        question2(userData);
        question3(userData, hobbyData);
        // question4();
    } catch (error) {
        console.error(error);
    }
}

main();
