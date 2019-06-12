## Project Installation
- Step 1: Go to Project Directory 
`yarn install`. It will install all dependencies for React
- Step 2: Go to Project Directory/backend and `yarn install`. It will install all dependencies for Node.js Backend

## Start Project
- Step 1: Go to Project Directory `yarn start`. It will start the React Project
- Step 2: Go to the Project Directory/backend `nodemon`. NOTE that Nodemon Should be installed or type `node index.js`. I will start the backend

GO to localhost:3000. 

- To add a movie you need admin credentials
  - Username: osman and password: 1234
  

## Project Dependencies

npm i redux react-redux react-thunk --save

npm i --save redux-devtools-extension

Provider:
Component sariyoruz. Ve Redux react kullanmis hale geliyor.

npm i react-router-dom --save
npm i semantic-ui-react --save
npm i semantic-ui-css --save


Redux Logger

npm i redux-logger --save

Now we can read the states from console.

npm i redux-promise-middleware --save

Spinner 

npm install react-spinners --save

Active Link

  <Menu.Item as={NavLink} to="/movies" activeClassName="selected">

## Web service delay
if web service delay it fall a erro on the next state > new movie

When ever we refresh the page it will lose the props array so we need Fetch the movie via id from database

Finding the change in new movie form, react life Cyle to Understand the change in the props by using componentWillReceiveProps(nextProps)

```javascript
componentWillReceiveProps(nextProps) {
  // if there is an incoming title and it is not equal with current title in the state
  if (nextProps.newMovie.movie.title 
      && 
      nextProps.newMovie.movie.title !== this.state.title) {
        // set the state to the new props
        this.setState({
            title: nextProps.newMovie.movie.title,
            cover: nextProps.newMovie.movie.cover
        });
      }
}
```

After delete the screen shouldrefresh and delte that user 

### High order component
Wrapping a function by other function

```javascript
function printMessage(){
  
}
function log(func){
  console.log('start');

  func();

  console.log('finish');

}
```
