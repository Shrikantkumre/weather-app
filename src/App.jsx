// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <div className="maincontainer">

// <h1>Weather checker</h1>
// <div className="container">
//   <input type="text" placeholder='Enter the city '/>
//   <button>search</button>
//   </div>
//     </div>
    
//   <div className="maindisplaycontainer">
//   <div className="displaycontainer">

//   </div>
//   </div>
//     </>
//   )
// }

// export default App


// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [city, setCity] = useState('');
//   const [weatherData, setWeatherData] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleSearch = async () => {
//     try {
//       setLoading(true);
//       // Fetch weather data based on the city using an API
//       const apiKey = 'cec0c6efe515e6ee9375257469f52e32';
//       const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
//       const data = await response.json();
//       setWeatherData(data);
//     } catch (error) {
//       console.error('Error fetching weather data:', error);
//     } finally {
//       setLoading(false);
//     }
//   };


  
  
  
//   return (
//     <>
//       <div className="maincontainer">
//         <h1>Weather Checker</h1>
//         <div className="container">
//           <input
//             type="text"
//             placeholder="Enter the city"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//           />
//           <button onClick={handleSearch} disabled={loading}>
//             {loading ? 'Searching...' : 'Search'}
//           </button>
//         </div>
//       </div>

//       <div className="maindisplaycontainer">
//         <div className="displaycontainer">
//           {weatherData && (
//             <>
//               <h2>Weather in {city}</h2>
//               <p>Temperature: {weatherData.temperature}</p>
//               <p>Description: {weatherData.description}</p>
             
//             </>
//           )}
         
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

import { useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setLoading(true);
      // Fetch weather data based on the city using an API
      const apiKey = 'cec0c6efe515e6ee9375257469f52e32';
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Function to convert temperature from Kelvin to Celsius
  const kelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
  };

  return (
    <>
      <div className="maincontainer">
        <h1>Weather Checker</h1>
        <div className="container">
          <input
            type="text"
            placeholder="Enter the city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={handleSearch} disabled={loading}>
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </div>

      <div className="maindisplaycontainer">
        <div className="displaycontainer">
          {weatherData && (
            <>
              <h2>Weather in {weatherData.name}</h2>
              <p>Temperature: {kelvinToCelsius(weatherData.main.temp).toFixed(2)}°C</p>
              <p>Description: {weatherData.weather[0].description}</p>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
