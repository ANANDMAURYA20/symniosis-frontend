// API service for backend communication
const API_BASE_URL = 'http://localhost:5001/api';

class ApiService {
  async submitRequestStaff(formData) {
    try {
      const response = await fetch(`${API_BASE_URL}/forms/request-staff`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('❌ Request Staff API Error:', error);
      throw error;
    }
  }

  async submitContact(formData) {
    try {
      const response = await fetch(`${API_BASE_URL}/forms/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('❌ Contact API Error:', error);
      throw error;
    }
  }

  async testConnection() {
    try {
      const response = await fetch(`${API_BASE_URL}/health`);
      return await response.json();
    } catch (error) {
      console.error('❌ Connection Test Error:', error);
      throw error;
    }
  }
}

export const apiService = new ApiService();
export default apiService;
