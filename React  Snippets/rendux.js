// rat	
// rat	
// rat	
export const xxxx = 'xxxx'
// rac
// rac
// rac
export const actionCreator = (payload) => ({
    type: actionType,
    payload
})

// reducer
// reducer
// reducer
export const reducerName = (state = , action) => {
    switch (action.type) {
        case 'ACTION_TYPE':
            return 
        default:
            return state
    }
}

// store
// store
// store
import { reducerName } from './reducer'
import { createStore } from 'redux'

const store = createStore(reducerName)

export default store	



// selector	
// selector	
// selector	
export const selectorName = createSelector(
    [filter1, filter2]
    (filter1, filter2) => {
        
    }
)
