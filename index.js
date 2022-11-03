const redux= require('redux')
const createStore=redux.createStore

const BUY_CAKE='BUY_CAKE'

function buyCake(){
    return{
        type: BUY_CAKE,
        info:' First redux'
    }
}

const initialState={
    noOfCakes:50
}

const reducer=(state=initialState, action)=>{
    switch(action.type){
        case 'BUY_CAKE':
            return{
                ...state,
                noOfCakes:state.noOfCakes + 1,
               // noOfCakes:state.noOfCakes*4
            }
        default:
            return state
    }
}

const store=createStore(reducer)
console.log('initial state', store.getState())
store.subscribe(()=> console.log('update state', store.getState()))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

