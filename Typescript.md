# Using TypeScript to do Javascript.
```typescript

// The following will throw an error

function sum1(n1, n2) {
    console.log(n1 + n2);
}

sum1(10, "5");

// NOTE: JavaScript is a weakly typed language

// Languages that are weakly typed will automatically convert the string to a number and perform the operation

// Compared to python, which is strongly typed, you would have to convert the string to a number

// Try to make the function to only allow numbers

function sum2(n1, n2) {
    if (typeof n1 !== "number" || typeof n2 !== "number") {
        throw new Error("Only numbers are allowed");
    }
    console.log(n1 + n2);
}

sum2(10, 5);

// The following will throw an error

function showWeather(weatherObj) {
    if (!weatherObj.city || !weatherObj.forecast) {
        throw new Error("Invalid input");
    } else {
        console.log("The weather in " + weatherObj.city + " is " + weatherObj.forecast);
    }
}

showWeather({ city: "Vancouver", forecast: "Sunny" });

// Typescript will allow you to define the type of the object before the code is run
```
