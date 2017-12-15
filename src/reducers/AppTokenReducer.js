import * as types from '../actions/Types'

const APP_TOKEN_INITIAL_STATE = {
  'token': '',
  'expiresIn': 0,
  'tokenType': '',
  'loading': false
}

export default (state = APP_TOKEN_INITIAL_STATE, action) => {
  switch (action.type) {
    case types.APP_TOKEN_INIT:
      return { ...state, loading: true }
    case types.APP_TOKEN_SUCCESS:
      return {
        ...state,
        token: action.access_token,
        expiresIn: action.expires_in,
        tokenType: action.token_type,
        loading: false
      }
    case types.APP_TOKEN_FAILURE:
      let errorMsg
      errorMsg = 'Initial Lander App Token not received.'
      return { ...state, error: errorMsg, loading: false }
    default:
      return state
  }
}