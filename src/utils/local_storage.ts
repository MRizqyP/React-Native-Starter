import AsyncStorage from '@react-native-async-storage/async-storage';
import {KEY_STORAGE} from '../constant/storage-key';

/**
 * Loads a string from storage.
 *
 * @param key The key to fetch.
 */
export async function loadString(key: KEY_STORAGE): Promise<string | null> {
  try {
    return await AsyncStorage.getItem(key);
  } catch {
    // not sure why this would fail... even reading the RN docs I'm unclear
    return null;
  }
}

/**
 * Saves a string to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export async function saveString(
  key: KEY_STORAGE,
  value: string,
): Promise<boolean> {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}

/**
 * Loads something from storage and runs it thru JSON.parse.
 *
 * @param key The key to fetch.
 */
export async function load(key: KEY_STORAGE): Promise<any | null> {
  try {
    const almostThere = await AsyncStorage.getItem(key);
    //! non-null assertion
    /** TypeScript also has a special syntax for
     * removing null and undefined from a type without doing any explicit checking.
     * Writing ! after any expression is effectively a type assertion that
     * the value isn’t null or undefined: */
    return JSON.parse(almostThere!);
  } catch {
    return null;
  }
}

/**
 * Saves an object to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export async function save(key: KEY_STORAGE, value: any): Promise<boolean> {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

/**
 * Removes something from storage.
 *
 * @param key The key to kill.
 */
export async function remove(key: KEY_STORAGE): Promise<void> {
  try {
    await AsyncStorage.removeItem(key);
  } catch {}
}

/**
 * Burn it all to the ground.
 */
export async function clear(): Promise<void> {
  try {
    await AsyncStorage.clear();
  } catch {}
}
