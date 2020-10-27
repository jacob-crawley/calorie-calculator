# Calorie Calculator
A web app designed using React to calculate the number of calories a person would need to consume to maintain/gain/lose weight based on the gender, height, age and activity level.

-------------------------------------------------------------------------
## How to use
The site presents a form where the user is able to enter their  gender, height, age and activity level. 

As long as all these fields are filled correctly pressing the calculate button will reveal a second window displaying the calories required to maintain current weight, and a table showing the calories that need to be consumed to gain or lose weight. 

From here any data in the form can be changed and pressing the calculate button again will change the result. Note, all calorie values are estimates calculated using the Harris-Benedict equation for BMR with multipliers for activity level.

![image](https://user-images.githubusercontent.com/66950962/97300175-02e4d900-184e-11eb-8c94-2b2bb67be529.png)


-------------------------------------------------------------------------

## Available Scripts
The page isn't currently hosted on a web server, use these commands to run/develop locally.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
