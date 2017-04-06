# State Binding
In the Counter sample project, we already introduce the ```connect```
function which bind state to react component's props. In this section,
we show how to use **state selector** in ```connect``` method to help
you select the state you want

## connect(options)
The connect function has the following signature:
```javascript
// here is the es6 destructuring arguments syntax
function connect({
  path=undefined, // points to root if not provide
  states=["."], // points to current state if not provide
  map // fn(...states)
})
```
we only use the ```map``` function in our Counter sample, let's 
see the other two parameters
* path: point to a relative path to the root state, use this as an anchor point. If
missing, it points to the root 
* states: an array of the relative paths to the anchor point, if missing, will be ["."] which points to the anchor point. The paths
 value can contains ```"."``` and ```".."```, you can also specify absolute state path with "/" at head, here are some samples:
    * "." : points to anchor point
    * "..": points to anchor point's parent
    * "/from/root": absolute path 

> we might add more selectors in the future (e.g. "/**")

All the states select here will be passed as arguments to the ```map``` function:
```javascript
// e.g. we use the following options to select productState and providerState 
connect({
  path:"entries",
  state:["./products","./providers"],
  map:(productState, providerState)=>{
    ...
  }
})
```

> Tips: path can also work with __dirname, see the following

## organize your code
Usually, your view will work most with its related local state, so you
can organize your code like the following

```
|-module
  |-components
    componentA.jsx  
    componentB.jsx  
  state.js
  views.js // connect componentA and componentB in this file and using __dirname to bind it to local state
```

## Conclusion
* now we understand the state selectors and we can easily bind state from 
different part of root state to specific component. 