import axios from 'axios';
axios.defaults.baseURL = 'https://wallet-app-back.onrender.com';

class ApiServices {
  async signIn(userData) {
    try {
      const { data } = await axios.post('/api/auth/login', userData);
      return data.payload;
    } catch (error) {
      throw error;
    }
  }

  async logout() {
    try {
      const req = await axios.get('/api/auth/logout');

      return req.data;
    } catch (error) {
      throw error;
    }
  }

  async signUp(userData) {
    try {
      const { data } = await axios.post('/api/auth/signup', userData);
      return data.payload.user;
    } catch (error) {
      throw error;
    }
  }

  async getCategories() {
    try {
      const req = await axios.get('/wallet/transaction/categories');
      return req.data.payload;
    } catch (error) {
      throw error;
    }
  }

  async getTransactions(token) {
    try {
      const req = await axios.get('/wallet/transactions');
      return req.data.payload;
    } catch (error) {
      throw error
    }
  }

  async getStats({ month, year }, token) {
    try {
      const req = await axios.get(`wallet/stats?month=${month}&year=${year}`);
      return req.data.payload;
    } catch (error) {
      throw error
    }
  }

  async createTransaction(userData, token) {
    if (userData.description === '') {
      delete userData.description;
    }

    try {
      const { data } = await axios.post('/wallet/transaction', userData);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async deleteTransaction(token, id) {
    try {
      const { data } = await axios.delete(`wallet/transaction/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return data.payload;
    } catch (error) {
      throw error;
    }
  }
}

export default new ApiServices();
