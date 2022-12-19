import AsyncStorage from '@react-native-async-storage/async-storage';

class LocalStorage {
  storeDataSingle = async (key : any, value : any) => {
    try {
      // await AsyncStorage.setItem(key, JSON.stringify(value));
      await AsyncStorage.setItem(key, value);
    } catch (e) {}
  };

  storeDataObject = async (key : any, value : any) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {}
  };

  getDataSingle = async (key : any) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return value;
      }
    } catch (e) {}
  };

  getDataObject = async (key: any) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      if (jsonValue != null) {
        var value = JSON.parse(jsonValue);
        return value;
      }
      return null;
    } catch (e) {}
  };

  removeDataSingle = async (key: any) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {}
  };
}

export const appLocalStorage = new LocalStorage();
