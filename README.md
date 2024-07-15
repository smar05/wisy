# Weather Forecast App

This is an Angular application that fetches weather forecast data from an API and visualizes it using Chart.js. The app displays a line chart representing the temperature data for different locations.

## Features

- Home screen with weather forecasting options:
  - District of Columbia Forecast (LWX)
  - Kansas Forecast (TOP)
- Each option redirects to a weather-specific page with the corresponding forecast identifier (e.g., `/weather/LWX`, `/weather/TOP`).
- Fetches data from a weather API and retrieves temperature forecasts.
- Parses the JSON response and extracts necessary data for the chart.
- Displays a line chart using Chart.js.
- Customizable chart appearance, including labels, colors, and tooltips.
- Redirects any unknown routes to the home screen.

## Requirements

- Node.js (v16.16.0)
- Angular CLI (16.0.6)

## Getting Started

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/smar05/wisy.git
   cd wisy
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

### Running the Application

To start the development server, run:

```sh
npm run start
```

Navigate to `http://localhost:4200/` in your browser to see the application.

You can view the result in the following hosting: `https://66957ccde97f891708e2be26--clever-crepe-4cf4ce.netlify.app/`

### Building the Application

To build the project for production, run:

```sh
npm run build
```

The build artifacts will be stored in the dist/ directory.

## API Endpoints

The application fetches weather data from the following endpoints:

Kansas: `https://api.weather.gov/gridpoints/TOP/31,80/forecast`
District of Columbia: `https://api.weather.gov/gridpoints/LWX/31,80/forecast`

## Usage

### Home Screen

The home screen displays a list of weather forecasting options. Click on an option to navigate to the weather forecast page for that location.

### Weather Forecast Page

The weather forecast page fetches and displays the temperature forecast in a line chart. The chart shows temperature data over time.

# Contact

If you have any questions or feedback, feel free to contact me at:

- Nombre: Ricardo Mantilla
- Correo electrónico: `mantillasanchezr@gmail.com`
