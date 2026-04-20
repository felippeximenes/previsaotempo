# Weather Forecast

A clean, responsive weather app built with **React** and the **OpenWeatherMap API**. Search any city in the world to get the current conditions and a 5-day outlook — all wrapped in a glassmorphism UI!

---

## Features

- **Current weather** — temperature, feels-like, humidity and pressure
- **5-day forecast** — daily high/low with weather icons
- **Instant search** — press Enter or click the button
- **Loading & error states** — spinner while fetching, friendly message on invalid city
- **Glassmorphism design** — frosted-glass cards over a sky gradient background
- **Fully responsive** — works on mobile, tablet and desktop

---

## Tech Stack

| Layer | Tool |
|-------|------|
| UI library | React 19 |
| Build tool | Vite |
| HTTP client | Axios |
| Weather data | OpenWeatherMap API |
| Styling | CSS (Flexbox, backdrop-filter, custom properties) |
| Font | Poppins (Google Fonts) |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or higher
- An [OpenWeatherMap](https://openweathermap.org/api) API key (free tier is enough)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/felippeximenes/previsaotempo.git
cd previsaotempo

# 2. Install dependencies
npm install

# 3. Add your API key
#    Open src/App.jsx and replace the value of `key` with your own key
const key = "YOUR_API_KEY_HERE"

# 4. Start the development server
npm run dev
```

Open `http://localhost:5173` in your browser.

### Build for production

```bash
npm run build       # outputs to /dist
npm run preview     # serves the production build locally
```

---

## Project Structure

```
src/
├── components/
│   ├── WeatherInformations/
│   │   ├── WeatherInformations.jsx   # Current weather card
│   │   └── WeatherInformations.css
│   └── WeatherInformations5Days/
│       ├── WeatherInformations5Days.jsx  # 5-day forecast cards
│       └── WeatherInformations5Days.css
├── App.jsx       # Root component — search logic, state, API calls
├── App.css       # Layout, search bar, spinner, error styles
├── index.css     # Global reset, background gradient, font
└── main.jsx      # React entry point
```

---

## API Reference

This project uses two [OpenWeatherMap](https://openweathermap.org/api) endpoints:

| Endpoint | Purpose |
|----------|---------|
| `/data/2.5/weather` | Current weather by city name |
| `/data/2.5/forecast` | 3-hour forecast for 5 days |

Both requests use `units=metric` (°C) and `lang=pt_br` for description text.

---

## Roadmap

- [ ] Geolocation — auto-detect the user's city on load
- [ ] Dynamic background — change gradient based on weather condition
- [ ] Wind speed and UV index in the current weather card
- [ ] Dark mode toggle

---

## License

Distributed under the [MIT License](LICENSE).
