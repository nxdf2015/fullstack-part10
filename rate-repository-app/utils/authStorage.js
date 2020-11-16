import AsyncStorage from '@react-native-community/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    // Get the access token for the storage
    const token = await AsyncStorage.getItem(this.namespace);
    return token;
  }

  async  setAccessToken(accessToken) {
    // Add the access token to the storage
    await AsyncStorage.setItem(this.namespace,accessToken);

  }

  removeAccessToken() {
    // Remove the access token from the storage
    AsyncStorage.removeItem(this.namespace);
  }
}

export default AuthStorage;