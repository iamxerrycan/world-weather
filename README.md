# 🌦️ Weather Web App

A responsive, modern weather application built using **React.js** and **OpenWeatherMap API**. It features geolocation-based weather, dynamic day/night UI, dark/light mode, hourly and 7-day forecasts, weather alerts, animated backgrounds, and search modal.

---

## 🚀 Features


- 🔎 **Search modal** – Search weather by city name with autocomplete.
- 🌤️ **Dynamic images** – Changes background based on weather condition and day/night.
- 🎨 **Dark/Light mode** – Toggle between themes.
- 🌡️ **Unit toggle** – Switch between Celsius and Fahrenheit.
- 📱 **Responsive design** – Mobile-friendly and adaptive UI.
- 🌀 **Animated backgrounds** – Smooth visual weather transitions.

---

## 🧰 Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **API:** [OpenWeatherMap](https://openweathermap.org/api)
- **Testing:** Jest, React Testing Library, Cypress (UI + API testing)
- **Mocking:** MSW (Mock Service Worker)

---

## 📁 Folder Structure

```

world-weather/
├── public/
├── src/
│ ├── assets/ # Icons and images
│ ├── components/ # All UI components
│ ├── context/ # Theme or unit context
│ ├── hooks/ # Custom React hooks
│ ├── services/ # API services
│ ├── styles/ # Tailwind & CSS
│ ├── tests/ # Cypress + Jest test files
│ ├── mocks/ # MSW mock server
│ ├── App.js
│ ├── index.js
│ ├── setupTests.js
│ ├── App.test.js
├── babel.config.js
├── jest.config.js
├── cypress.config.js
├── README.md

```

---

## ✨ Credits
OpenWeatherMap

Tailwind CSS

React Testing Library

Cypress

MSW

---

## 🧪 Testing Overview
This project includes both End-to-End (E2E) and API testing using modern tools:

Type	Tool	Location	Command
E2E (UI flow)	Cypress	cypress/e2e	npm run test:e2e
API (live data)	Jest + Axios	src/__tests__/remote.api.test.js	npm run test:api

## ✅ End-to-End Testing (Cypress)
Tool: Cypress
Purpose: Simulates a real user journey on the deployed app.

🔍 What it tests:
User can open search modal

Search for a city

Wait for API data to load

Weather information appears correctly

Handles real API data (no mocking)

```bash
https://weather-cities-x.netlify.app/
```

## 🌐 API Testing (Jest + Axios)
Tool: Jest + Axios
Purpose: Validates backend weather API responses directly, independent of UI.

🔍 What it tests:
Valid cities return 200 OK

res.data includes required fields (e.g., city)

```bash
https://rest-api-backend-lad4.onrender.com/weather?q={city}
```

## 📜 Scripts in package.json

```json

{
  "scripts": {
    "test:e2e": "cypress open",
    "test:api": "jest --config=jest.api.config.js"
  }
}
```

---
## 📄 License
MIT

Made with ☁️ by iamxerrycan