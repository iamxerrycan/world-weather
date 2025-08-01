// src/mocks/handlers.js
import { rest } from 'msw';

export const handlers = [
  rest.get('https://rest-api-backend-lad4.onrender.com/weather', (req, res, ctx) => {
    const city = req.url.searchParams.get('q');
    if (!city) {
      return res(ctx.status(400), ctx.json({ error: 'City name is required' }));
    }
    if (city === 'NoSuchCityXYZ') {
      return res(ctx.status(404), ctx.json({ error: 'City not found' }));
    }
    return res(ctx.status(200), ctx.json({
      city,
      temperature: '30°C',
      description: 'Clear sky',
    }));
  }),
];
