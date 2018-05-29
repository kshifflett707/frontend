import { 
  WEB3_INITIALIZED, 
  NO_METAMASK,
  GET_MIN_BOUNTY,
  GET_DURATION,
  GET_ANSWER_FEE,
  GET_QUESTIONS_COUNT,
  UP_VOTE,
  PAYOUT_WINNER,
  CREATE_ANSWER,
  CREATE_QUESTION,
} from '../actions/types'

import { getContract } from '../web3'

const initialState = {
  web3: null,
  contract: null,
  status: 'Waiting',
}

const web3Reducer = (state = initialState, action) => {
  
  switch (action.type) {
    case WEB3_INITIALIZED:
      const web3 = action.payload.web3Instance;
      return {
        ...state, 
        web3,
        contract: getContract(web3),
      }
    

    case `${GET_MIN_BOUNTY}_PENDING`:
      return {
        ...state, 
      }
    
    case `${GET_MIN_BOUNTY}_FULFILLED`:
      return {
        ...state, 
      }
    
    case `${GET_MIN_BOUNTY}_REJECTED`:
      return {
        ...state, 
      }
    
      case `${GET_DURATION}_PENDING`:
      return {
        ...state, 
      }
    
    case `${GET_DURATION}_FULFILLED`:
      return {
        ...state, 
      }
    
    case `${GET_DURATION}_REJECTED`:
      return {
        ...state, 
      }

    case `${GET_ANSWER_FEE}_PENDING`:
      return {
        ...state, 
      }
    
    case `${GET_ANSWER_FEE}_FULFILLED`:
      return {
        ...state, 
      }
    
    case `${GET_ANSWER_FEE}_REJECTED`:
      return {
        ...state, 
      }

    case `${GET_QUESTIONS_COUNT}_PENDING`:
      return {
        ...state, 
      }
    
    case `${GET_QUESTIONS_COUNT}_FULFILLED`:
      return {
        ...state, 
      }
    
    case `${GET_QUESTIONS_COUNT}_REJECTED`:
      return {
        ...state, 
      }
   
    case `${UP_VOTE}_PENDING`:
      return {
        ...state,
      }
    
    case `${UP_VOTE}_HASHED`:
      return {
        ...state,
      }

    case `${UP_VOTE}_CONFIRMED`:
      return {
        ...state,
      }

    case `${UP_VOTE}_RECIEPT`:
      return {
        ...state,
      }

    case `${UP_VOTE}_REJECTED`:
      return {
        ...state,
      }
    
    case `${PAYOUT_WINNER}_PENDING`:
      return {
        ...state,
      }
    
    case `${PAYOUT_WINNER}_HASHED`:
      return {
        ...state,
      }

    case `${PAYOUT_WINNER}_CONFIRMED`:
      return {
        ...state,
      }

    case `${PAYOUT_WINNER}_RECIEPT`:
      return {
        ...state,
      }

    case `${PAYOUT_WINNER}_REJECTED`:
      return {
        ...state,
      }

    case `${CREATE_ANSWER}_PENDING`:
      return {
        ...state,
      }
    
    case `${CREATE_ANSWER}_HASHED`:
      return {
        ...state,
      }

    case `${CREATE_ANSWER}_CONFIRMED`:
      return {
        ...state,
      }

    case `${CREATE_ANSWER}_RECIEPT`:
      return {
        ...state,
      }

    case `${CREATE_ANSWER}_REJECTED`:
      return {
        ...state,
      }

    case `${CREATE_QUESTION}_PENDING`:
      return {
        ...state,
      }
    
    case `${CREATE_QUESTION}_HASHED`:
      return {
        ...state,
      }

    case `${CREATE_QUESTION}_CONFIRMED`:
      return {
        ...state,
      }

    case `${CREATE_QUESTION}_RECIEPT`:
      return {
        ...state,
      }

    case `${CREATE_QUESTION}_REJECTED`:
      return {
        ...state,
      }
    
    default:
      return state
  }
}

export default web3Reducer
