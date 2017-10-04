/* @flow */

import { AsyncStorage } from 'react-native';


export default class Storage {
  constructor(prefix = null) {
    this._prefix = prefix;
  }

  _key(key) {
    return `${this._prefix}${key}`;
  }

  async get(key) {
    try {
      return await AsyncStorage.getItem(this._key(key));
    } catch (err) {
      return null;
    }
  }

  async set(key, value) {
    return await AsyncStorage.setItem(this._key(key), value.toString());
  }

  async setFromObject(obj) {
    for (const key in obj)
      await this.set(key, obj[key]);
  }

  substorage(prefix) {
    return new Storage(this._prefix ? `${this._prefix}${prefix}` : prefix);
  }

  static create() {
    return new Storage();
  }
}
