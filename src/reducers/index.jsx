import { combineReducers } from 'redux';
import { routerReducer as routing} from 'react-router-redux'

import authentication from '../reducers/authenticationReducer'
import post from '../reducers/postReducer'
import textInput from '../reducers/textInputReducer'

export default combineReducers({
    authentication,
    textInput,
    post,    
    routing
});