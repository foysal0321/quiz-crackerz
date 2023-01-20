import React from 'react';

const Blog = () => {
    return (
        <div className='container py-5'>
          <div className="ques1 py-2">
            <h3>1.What is The Purpose of React Router? </h3>
            <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. <br />
Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.</p>
          </div>
          <div className="ques2 py-2">
            <h4>2.How to Work with the React Context API?</h4>
            <p>React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
          </div>
          <div className="ques3 py-2">
            <h4>3.What is useRef hook in React?</h4>
            <p>Ref means just reference, so it can be a reference to anything (DOM node, Javascript value, etc). The useRef hook returns a mutable object which doesn’t re-render the component when it’s changed. Think it like useState, but unlike useState, doesn’t trigger re-render of the component. The object that useRef returns have a current property that can hold any modifiable value.</p>
          </div>
        </div>
    );
};

export default Blog;