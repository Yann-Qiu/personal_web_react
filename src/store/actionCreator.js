import * as actionType from './actionType.js';

export const setActiveItem = (itemName) => {
	return {
		type: actionType.SET_ACTIVE_ITEM,
		payload: itemName
    }
}

export const setDisplayNavBar = (display) => {
	return {
		type: actionType.SET_DISPLAY_NAVBAR,
		payload: display
    }
}

export const setSmallScreen = (isSmallScreen) => {
	return {
		type: actionType.SET_SMALL_SCREEN,
		payload: isSmallScreen
    }
}