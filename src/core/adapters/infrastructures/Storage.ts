import {IStorage} from './interfaces/iStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class Storage implements IStorage {
  getItem(key: string): Promise<string | null> {
    return AsyncStorage.getItem(key);
  }

  setItem(key: string, value: string): Promise<void> {
    return AsyncStorage.setItem(key, value);
  }
}
