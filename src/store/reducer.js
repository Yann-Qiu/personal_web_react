import { SET_ACTIVE_ITEM,SET_DISPLAY_NAVBAR,SET_SMALL_SCREEN } from './actionType.js'

const defaultState = {
	active: "Home",
	displayNavbar: true,
	isSmallScreen: false
}

export default function reducer(prevstate = defaultState,action){
	if(action.type === SET_ACTIVE_ITEM){
		const newState = JSON.parse(JSON.stringify(prevstate));
		newState.active = action.payload;
		return newState;
	}
	if(action.type === SET_DISPLAY_NAVBAR ){
		const newState = JSON.parse(JSON.stringify(prevstate));
		newState.displayNavbar = action.payload;
		return newState;
	}
	if(action.type === SET_SMALL_SCREEN ){
		const newState = JSON.parse(JSON.stringify(prevstate));
		newState.isSmallScreen = action.payload;
		return newState;
	}
	return prevstate;
}