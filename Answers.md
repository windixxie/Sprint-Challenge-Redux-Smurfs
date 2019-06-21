1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    Map, Concat, Filter. To accomplish creating a new object and extending the properties from another object, we can use the older Object.assign method and pass the new or appended properties as the last argument.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    - Store is in charge of your data. 
    - Reducers are the only things in your app that are in charge of updating your store. 
    - Actions dispatch actions. Actions tell your reducer how to update the store and what to update the store with

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
1.  What is middleware?

    Component state is the state that individual stateful/class components maintain. application state is a single source of truth state usually achieved through some additional library like redux that manages all state. the component state application can be fine on smaller simple projects where bringing in a state management library will be overkill as the boilerplate would be more than the few stateful components you would need, but if the application is going to scale and be more complex, with the need for numerous stateful components, then it may be time to bring in a library to utilize application state mangament.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux is looking for an object to come through to it from our action creators. The problem is that it's synchronous in nature and there are times when we may need an async call, like when we are doing API calls or other requests that may not resolve immediately. Thunk is a middleware that we put in between the action creators and the reducers that will check to see what type of object we are passing it... a simple object that redux expects will simply pass on by thunk, but if we pass in a function, thunk will intercept this function and return a new dispatch method to us that we can give the result of the function we initially passed in and dispatch this new object we created from the result of the async call, either a resolution or an error, and pass this object to the reducer that is expecting it

1.  Which `react-redux` method links up our `components` with our `redux store`?


    react-redux gives us the connect method that enables us to link up our props and methods to the store and components that need it