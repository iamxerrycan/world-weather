import axios from 'axios';

describe('Weather API Test (Live)', () => {
  it('should return real weather data for city "delhi"', async () => {
    const response = await axios.get('https://rest-api-backend-lad4.onrender.com/weather?q=delhi');

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('name', 'Delhi'); 
  });
});
