# Final MCQ Prep Quizzes:

## Quiz Answers

1. Which of the following is required in order to _create_ and _run_ a program?

    > A programming language and a runtime environment.

2. Node.js is:

    > Invented by Ryan Dahl and a JS runtime outside the browser

3. Promises are an alternative way in Javascript to manage asynchronous code. They solve two major issues with callback functions.

    **What are the two most prominent issues with callback functions?**

    > Readability problem (Deeply Nested Code in Callbacks)
    >
    > No Centralized Error Handling

4. Async await and promises are not two completely separate concepts. Rather, async await is a simplified version of the `.then` syntax from promises, and aims to make working with promise-based code simpler and more synchronous-looking.

    > This statement is **_TRUE_**

5. There is no difference between the following two pieces of code:

    ```js
    app.listen(8000, () => console.log("Server has started"));

    // Vs

    app.listen(8001);
    console.log("Server has started");
    ```

    > The statement is **_FALSE_**

6. Express.js is accurately described as:

    > A web framework that sits on top of Node.js

7. EJS is the only way to send HTML to the browser from Express.js

    > This statement is **_FALSE_**

8. EJS supports using both for loops or forEach loops as a way to loop through variable containing lists:

    > This statement is **_TRUE_**

9. The Node REPL is a convenient way for testing and experimenting with Node.js directly within the terminal. Simply by typing in our terminal (command line) the command `node`.

    > This statement is **_TRUE_**

10. You cannot implement email/password authentication in Node.js without using Passport.js.

    > This statement is **_FALSE_**

11. Express session is required in order for Passport to work with sessions. This is why our term project makes use of both express session and passport.

    > This statement is **_TRUE_**

12. Typescript is a superset of Javascript. That is to say, Typescript includes everything Javascript includes and more.

    > This statement is **_TRUE_**

13. Simply by npm installing express, it will automatically work out of the box with Typescript. In other words, Typescript will be able to understand all the types in express like the Request, Response, etc types without any additional packages needing to be installed.

    > This statement is **_FALSE_**
    >
    > You must also install `@types/express`.

14. The EJS code below is valid syntax that will output several `<li>`'s with the text hello in them:

    ```js
    <% for (let i = 0; i < 5; i++) { %>
        <li>Hello</li>
    <%= } %>
    ```

    > This statement is **_FALSE_**
    >
    > The correct way is:
    >
    > ```js
    > <% for (let i = 0; i <5; i++) { %>
    >    <li>Hello</li>
    > <% } %>
    > ```

15. What happens if the user types in: `localhost:3000/myList/computers/phones` but forgets to add a third item lie `/watches` to the end in the following code:

    ```js
    app.get("/myList/:item1/:item2/:item3", (req, res) => {
        const item1 = req.params.item1;
        const item2 = req.params.item2;
        const item3 = req.params.item3;
        console.log(item1, item2, item3);
    });
    ```

    > None of the above, the outcome **_errors_**

16. What happens if the user types in: `localhost:3000/myList?computer=Mac&phone=samsung` in the following code:

    ```js
    app.get("/myList", (req, res) => {
        const item1 = req.params.computer;
        const item2 = req.params.phone;
        const item3 = req.params.watch;
        console.log(item1, item2, item3);
    });
    ```

    > `item1` and `item2` will print out what was inputted, and `item3` will be undefined.

17. Observe the import: `const express = require("express");`. In order for us to run this server, we need to:

    > create an instance of it using `const app = express()` and then have it listen to a port number.

18. Observe the code:

    ```js
    app.get("/dogs", function (req, res) {
        const greeting = "woof woof";
        res.render("pages/dogs", { myDogGreetingMsg: greeting });
    });
    ```

    If I wanted to create an ejs file to show "woof woof", I would need to type:

    > `<%= myDogGreetingMsg %>`

19. By looking at the `package.json` file, we can find out which dependencies our node.js projects rely on. For example, if we have installed and used express in a project, we should be able to see the express dependency showing up in the package.json file.

    > This statement is **_TRUE_**

20. Express.js is faster than the built-in Node.js http server from the http module.

    > This statement is **_FALSE_**

---

## Midterm MCQ Answers

3. The code in the screenshot demonstrates correct usage of callbacks to display the result of number1 to the power number2 `(ex -3^4)`, both in the function declaration as well as the calling of the function.

    ```js
    function powerOf(number1, number2, callback) {
        if (typeof number1 !== "number" || typeof number2 !== "number") {
            return new Error("the first and second arguments must be number");
        } else {
            const result = Math.pow(number1, number2);
        }
    }

    powerOf(3, 4, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    });
    ```

    > The statement is **_FALSE_**
    >
    > Corrected Code:
    >
    > ```js
    > function powerOf(number1, number2, callback) {
    >     if (typeof number1 !== "number" || typeof number2 !== "number") {
    >         callback(new Error("the first and second arguments must be numbers"));
    >     } else {
    >         const result = Math.pow(number1, number2);
    >         callback(null, result);
    >     }
    > }
    >
    > powerOf(3, 4, function (err, result) {
    >     if (err) {
    >         console.log(err.message);
    >     } else {
    >         console.log(result);
    >     }
    > });
    > ```

4. The code below will correctly use callbacks to _asynchronously_ execute the logic of the powerOf function.

    ```js
    function powerOf(number1, number2, callback) {
        if (typeof number1 !== "number" || typeof number2 !== "number") {
            callback(new Error("the first and second arguments must be number"));
        } else {
            const result = Math.pow(number1, number2);
            callback(null, result);
        }
    }

    powerOf(3, 4, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    });
    ```

    > The statement is **_FALSE_**
    >
    > This is because the above code is not async because there is nothing running in the background.
    >
    > We can ask are we using `fs`, `os`, or anything that uses `…sync()`

5. `unlinkSync` is a function which will delete a file. In this case, it is trying to delete the file being created in our `fs.writeFile` call. Due to `unlinkSync` showing up after our `writeFile` function call, we can guarantee that it will delete `file.txt` AFTER `writeFile` has successfully created it.

    ```js
    const fs = require("fs");
    fs.writeFile("file.txt", "content to write", (err) => {
        if (err) return console.log(err);
    });
    fs.unlinkSync("file.txt");
    ```

    > This statement is **_FALSE_**
    >
    > This is because there as the fs write is going to run in the background and jump to delete the file when the file hasn’t been created. You need to nest the fs.

6. Let's say I want to write a program which will asynchronously read `file1.txt`, take the data from `file1.txt1` and use it as an input to the next `fs.readFile` call, and do this over and over until reading the final file. Once we read the final file, we will print out to console the contents (You have reached the end). The code below will correctly do this asynchronously, and gracefully deal with errors should they occur. In other words, the code in the screenshot can be considered a complete solution to this problem.

    ```js
    const fs = require("fs");

    fs.readFile("file1.txt", "uft8", (err, fileTwo) => {
        if (err) {
            console.log(err);
        }
        fs.readFile(fileTwo, "uft8", (err, fileThree) => {
            if (err) {
                console.log(err);
            }
            fs.readFile(fileFour, "utf8", (err, fileFourResult) => {
                if (err) {
                    console.log(err);
                }
                console.log(`Contents of file4: ${fileFourResult}`);
            });
        });
    });
    ```

    > The statement is **_FALSE_**
    >
    > To fix this we could do:
    >
    > ```js
    > const fs = require("fs");
    >
    > function readFile(filename) {
    >     return new Promise((resolve, reject) => {
    >         fs.readFile(filename, "utf8", (err, data) => {
    >             if (err) {
    >                 reject(err);
    >             } else {
    >                 resolve(data);
    >             }
    >         });
    >     });
    > }
    >
    > async function processFiles() {
    >     try {
    >         let filename = "file1.txt";
    >         while (true) {
    >             const data = await readFile(filename);
    >             console.log(`Contents of ${filename}: ${data}`);
    >             const nextFilename = data.trim();
    >             if (nextFilename === "final.txt") {
    >                 console.log("You have reached the end");
    >                 break;
    >             }
    >             filename = nextFilename;
    >         }
    >     } catch (error) {
    >         console.error(error);
    >     }
    > }
    >
    > processFiles();
    > ```

7. Assume I wanted to pass 4 numbers into my terminal, and have them captured from within my Node.js problem. The following code demonstrates how I can get ahold of those 4 data points:

    ```js
    // get input using process.argv (ex node main.js 10 5 2 3)
    const { argv } = require("process");

    const x1 = argv[0]; // "10"
    const y1 = argv[1]; // "5"
    const x2 = argv[2]; // "2"
    const y2 = argv[3]; // "3"
    ```

    > The statement is **_FALSE_**
    >
    > It will actually get:
    >
    > ```js
    > const x1 = argv[0]; // "Node"
    > const y1 = argv[1]; // "main.js"
    > const x2 = argv[2]; // "10"
    > const y2 = argv[3]; // "5"
    > ```

8. Assume I wanted to pass 4 numbers into my terminal, and have them captured from within my Node.js problem. The following code demonstrates how I can get ahold of those 4 data points:

    ```js
    // get input using process.argv (ex node main.js 10 5 2 3)
    const { argv } = require("process");

    const x1 = argv(2); // "10"
    const y1 = argv(3); // "5"
    const x2 = argv(4); // "2"
    const y2 = argv(5); // "3"
    ```

    > The statement is **_FALSE_**
    >
    > `argv()` doesn't work, it needs to be `argv[]`

9. The code below correctly defines two functions, squareRoot and square, and correctly exports them both using module.exports.

    ```js
    let squareRoot = num => return Math.sqrt(num);

    let square = num => return num * num;

    module.exports = {squareRoot, square}
    ```

    > The statement is **_FALSE_**
    >
    > Arrow functions automatically return the function post arrow, so no need to write `return`
    >
    > To fix the code:
    >
    > ```js
    > let squareRoot = (num) => Math.sqrt(num);
    >
    > let square = (num) => num * num;
    >
    > module.exports = { squareRoot, square };
    > ```

10. The code below, assuming no errors occur, will print to the console:

    ```js
    const fs = require("fs");

    fs.writeFile("myFile.txt", "some content", (err) => {
        if (err) {
            console.log(err);
        } else {
            fs.readFile("myFile.txt", (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(data);
                }
            });
        }
    });
    ```

    > The statement is **_FALSE_**
    > You need `utf8` in order to read the file
    >
    > To fix the code:
    >
    > ```js
    > const fs = require("fs");
    >
    > fs.writeFile("myFile.txt", "some content", (err) => {
    >     if (err) {
    >         console.log(err);
    >     } else {
    >         fs.readFile("myFile.txt", "utf8", (err, data) => {
    >             if (err) {
    >                 console.log(err);
    >             } else {
    >                 console.log(data);
    >             }
    >         });
    >     }
    > });
    > ```

11. Ecmascript nad Node.js are the same thing.

    > The statement is **_FALSE_**
    >
    > Ecmascript is the standard scripting language defining specifications for JS.
    >
    > Node.js is a runtime environment for executing JS outside a browser.

12. The following code correctly demonstrates us `promisifying` the `fs.writeFile` function. (Turning `fs.writeFile` into a function that works with promises):

    ```js
    const writeFileP = (file, content) => {
        return new Promise((resolve, reject) => {
            fs.writeFile(file, content, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("done");
                }
            });
        });
    };

    writeFileP("someFile.txt", "hi")
        .then(() => console.log("operation complete"))
        .catch((err) => console.log(err));
    ```

    > The statement is **_FALSE_**
    >
    > As the code does not return the error as nothing is rejected or resolved. It needs to use resolve and reject.
    >
    > To fix the code:
    >
    > ```js
    > const fs = require("fs");
    >
    > const writeFileP = (file, content) => {
    >     return new Promise((resolve, reject) => {
    >         fs.writeFile(file, content, (err) => {
    >             if (err) {
    >                 reject(err); // Reject the promise if an error occurs
    >             } else {
    >                 resolve(); // Resolve the promise if the operation is successful
    >             }
    >         });
    >     });
    > };
    >
    > writeFileP("someFile.txt", "hi")
    >     .then(() => console.log("operation complete"))
    >     .catch((err) => console.log(err));
    > ```

13. The following code correctly `promisifies fs.writeFile` (correctly taking the callback version of `fs.writeFile` and wrapping it so it works with promises).

    ```js
    const writeFileP = (file, content) => {
        return new Promise(resolve, reject) => {
            fs.writeFile(file, content, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        };
    };

    writeFileP("someFile.txt", "hi")
        .then(() => console.log("operation complete"))
        .catch((err) => console.log(err));
    ```

    > The statement is **_FALSE_**
    >
    > There is a syntax error where the parentheses after `return new Promise` should wrap the arrow function.
    >
    > To fix the code:
    >
    > ```js
    > const writeFileP = (file, content) => {
    >     return new Promise((resolve, reject) => {
    >         fs.writeFile(file, content, (err) => {
    >             if (err) {
    >                 reject(err);
    >             } else {
    >                 resolve();
    >             }
    >         });
    >     });
    > };
    >
    > writeFileP("someFile.txt", "hi")
    >     .then(() => console.log("operation complete"))
    >     .catch((err) => console.log(err));
    > ```
