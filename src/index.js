import React from 'react';
import ReactDOM from 'react-dom';
//Create a new component. This component should produce so HTML
//const declares a constant which is a steady variable that does 
//not change
const App = () => {
	return <div>Hi!<div>;
	//the <div> is JSX a subset or dialect of javascript that allows
	//us to write what looks like HTML but is javascript
}
//Take this component's generated HTML and put it on the page 
//(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

