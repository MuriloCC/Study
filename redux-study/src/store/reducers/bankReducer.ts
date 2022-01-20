import { actionType } from "../actions/actions"

const initialState: number = 0

const bankReducer = (state: number = initialState, action: actionType) => {
  switch (action.type) {
    case 'DEPOSIT': 
      return state + action.payload
    case 'WITHDRAW':
      return state - action.payload
    case 'BANKRUPT': 
      return 0
    default: 
      return state
  }
}

export default bankReducer