import {
   GET_ROOMBUILDING_SUCCESS,
   GET_ROOMBUILDING_ERROR,
} from '../actions/actionTypes';

var initialState = 'get all room building';
const roomBuildingReducers = (login = initialState, action) => {
   try {
      switch (action.type) {
         case GET_ROOMBUILDING_SUCCESS:
            // console.log('room success', action.response);
            return {
               ...action.response,
               isfetching: true,
            };
         case GET_ROOMBUILDING_ERROR:
            return action.response ? action.response.isSuccess : -1;
         default:
            return login;
      }
   } catch (error) {
      console.log('catch reducers: ', error);
      return login;
   }
};
export default roomBuildingReducers;
