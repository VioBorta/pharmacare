import {AsyncStorage} from "react-native";

export const storeData = async (key, value) => {
	try {
		await AsyncStorage.setItem(key, value);
	} catch (error) {
		console.log(error);
	}
};

export const retrieveData = async key => {
	try {
		const value = await AsyncStorage.getItem(key);
		if (value !== null) {
			return value;
		}
	} catch (error) {
		console.log(error);
	}
};

export const removeItem = async key => {
	try {
		await AsyncStorage.removeItem(key);

	} catch (error) {
		console.log(error);
	}
};

export const removeMulti = async key => {
	try {
		await AsyncStorage.multiRemove(keys);
	} catch (error) {
		console.log(error);
	}
};
