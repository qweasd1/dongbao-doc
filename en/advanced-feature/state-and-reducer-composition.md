# State & Reducer composition

In redux, we can use combineReducer to compose root reducer from several
small reducers. In dongbao, we use small state to compose root state.

## A quick sample for state composition
```javascript
let state ={
  user:{
    isLogin:true,
    userName:"Tony",
    email:"tony@123.com"
  },
  entries:{
    products:{
      data: [
              {
                name:"book 1",
                price:50
              },
              {
                name:"bike 2",
                price:300
              }
      ],
      filter:{
        price:{
          $gt:100
        }
      }
    },
    providers:{
      data:[
        {
          name:"provider 1"
        },
        {
          name:"provider 1"
        }
      ]
    }
  }
  
}

```
to build the nested state with dongbao, we need to pass a ```path``` attribute on
our **StateConfig**, here is the code

```javascript
userState = State({
  path:"user",
  initial:{
      isLogin:true,
      userName:"Tony",
      email:"tony@123.com"
  }
})

productState = State({
      path:"entries/products",
      initial: {
        data: [
          {
            name:"book 1",
            price:50
          },
          {
            name:"bike 2",
            price:300
          }   
        ],
        filter:{
          price:{
            $gt:100
          }
        }
      }
  })
  
productState = State({
    path:"entries/providers",
    initial: {
     data:[
       {
         name:"provider 1"
       },
       {
         name:"provider 1"
       }
     ]
    }
})
```

as you can see ```path``` is nothing but the relative path from your state to root state. In real project, we can specify 
```__dirname``` to the ```path``` and it will automatically map the folder structure to the state structure:
 
``` 
// if you have the following file structure 
// and set all path of StateConfig in *-state.js as __dirname
// it will generate same state strcuture
|- src
   |- login
        login-state.js
   |- entries
       |- products
            products-state.js
       |- providers
            products-state.js
    
```
The reason we design so is when you want to move state to another directory, you
 don't need to change the path (it's always __dirname) but the state
 structure is changed

## Reducer composition

The composition is also apply to reducers. Actually the **Action** 
methods you defined on state is a local version reducer which 
only process the local state. Dongbao will compose all the local reducers
together with their **path** to form the root reducer. Also the Action
 type will add path as its prefix:
 
```javascript
// e.g. the following actionFn will generate an Action type called "some/state/changeState" 
State({
  path:"some/state",
  ...,
  actions:{
    changeState(state,payload){
      ....
    }
  }
})
```

## Conclusion

With state composition, we can divide our state into several independent sub states. 
We can even clone a template **StateConfig** and give them different path and add them to root state.
(which means we can build configurable & reusable **StateConfig** )