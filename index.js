const redux= require('redux')
const reduxLogger= require('redux-logger')
const createStore=redux.createStore
const combineReducers= redux.combineReducers;
const logger=reduxLogger.createLogger(P);
const applyMiddleware=redux.applyMiddleware;
const BUY_CAKE='BUY_CAKE'
const BUY_ICE='BUY_ICE'
function buyCake(){
    return{
        type: BUY_CAKE,
        info:' First redux'
    }
}

function buyIce(){
    return{
        type: BUY_ICE,
        info:' First ICE redux'
    }
}
const initialCake={
    noOfCakes:50,
}

const initialIce={
    
    noOfIce:10,
}


const cakeReducer=(state=initialCake, action)=>{
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

const iceReducer=(state=initialIce, action)=>{
    switch(action.type){
        case 'BUY_ICE':
            return{
                ...state,
                noOfIce:state.noOfIce+ 1,
               // noOfCakes:state.noOfCakes*4
            }
           
        default:
            return state
    }
}

const rootReducer=combineReducers({
    cake: cakeReducer,
    ice: iceReducer
})

const store=createStore(rootReducer,applyMiddleware(logger))
console.log('initial state', store.getState())
store.subscribe(()=>{})

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIce())
store.dispatch(buyIce())

