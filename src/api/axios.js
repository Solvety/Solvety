import axios from 'axios';

const baseURL = "https://solvety.info/api";
// const baseURL = 'https://dummyjson.com/carts'
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MTIwMTM1MDUsImV4cCI6MTcxMjAyMDcwNSwidXNlcklkIjoiNiIsImVtYWlsIjoiZW1lbmlrZWF1Z3VzdGluZTMwMUBnbWFpbC5jb20iLCJ1c2VydHlwZSI6InJlc2VhcmNoZXIifQ.8xe6WHxtbt965vBXoPyoSFVULYL4v2yOVt3Md7pePVY"

export const getSelectsur = async () => {
  try {
    const response = await axios.get(`${baseURL}/selectsur.php`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
