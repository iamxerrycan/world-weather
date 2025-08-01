import { rest } from 'msw';

export const handlers = [
  rest.get('https://api.openweathermap.org/data/2.5/weather', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ name: 'Delhi', main: { temp: 298.15 }, weather: [{ main: 'Clouds' }] })
    );
  }),
];
