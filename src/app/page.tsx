// 'use client';
// import Image from 'next/image';

// import { useState, ChangeEvent } from 'react';
// import axios from 'axios';
// const Home = () => {
//   const apiKey = 'f56f24967aaf51182d1d4df628297c6d';
//   const [inputCity, setInputCity] = useState<string>('');
//   const [data, setData] = useState<any | null>(null);
//   const getWeatherDetails = async (cityName: string) => {
//     if (!cityName) return;
//     const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
//     try {
//       const response = await axios.get(apiURL);
//       setData(response.data);
//     } catch (error) {
//       console.error('Error fetching weather data:', error);
//     }
//   };
//   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setInputCity(e.target.value);
//   };
//   const handleSearch = () => {
//     getWeatherDetails(inputCity);
//   };
//   return (
//     <div className="col-md-12">
//       <div className="weatherBg">
//         <h1 className="heading">Weather App</h1>
//         <div className="d-grid gap-3 col-4 mt-4">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter city name"
//             value={inputCity}
//             onChange={handleInputChange}
//           />
//           <button className="btn btn-primary" onClick={handleSearch}>
//             Search
//           </button>
//         </div>
//       </div>
//       {data && (
//         <div className="col-md-12 text-center mt-5">
//           <div className="shadow rounded weatherResultbox">
//             <Image
//               className="weathericn"
//               src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"
//               alt="Weather Icon"
//             />
//             <h5 className="weathercity">{data.name || 'City Name'}</h5>
//             <h6 className="weathertmp">
//               {data.main?.temp
//                 ? `${(data.main.temp - 273.15).toFixed(2)} °C`
//                 : 'Temperature'}
//             </h6>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;

// 'use client';
// import Image from 'next/image';
// import { useState, ChangeEvent } from 'react';
// import axios from 'axios';

// const Home = () => {
//   const apiKey = 'f56f24967aaf51182d1d4df628297c6d';
//   const [inputCity, setInputCity] = useState<string>('');
//   const [data, setData] = useState<any | null>(null);

//   const getWeatherDetails = async (cityName: string) => {
//     if (!cityName) return;
//     const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
//     try {
//       const response = await axios.get(apiURL);
//       setData(response.data);
//     } catch (error) {
//       console.error('Error fetching weather data:', error);
//     }
//   };

//   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setInputCity(e.target.value);
//   };

//   const handleSearch = () => {
//     getWeatherDetails(inputCity);
//   };

//   return (
//     <div className="col-md-12">
//       <div className="weatherBg">
//         <h1 className="heading">Weather App</h1>
//         <div className="d-grid gap-3 col-4 mt-4">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter city name"
//             value={inputCity}
//             onChange={handleInputChange}
//           />
//           <button className="btn btn-primary" onClick={handleSearch}>
//             Search
//           </button>
//         </div>
//       </div>
//       {data && (
//         <div className="col-md-12 text-center mt-5">
//           <div className="shadow rounded weatherResultbox">
//             <Image
//               className="weathericn"
//               src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"
//               alt="Weather Icon"
//               width={100}
//               height={100}
//             />
//             <h5 className="weathercity">{data.name || 'City Name'}</h5>
//             <h6 className="weathertmp">
//               {data.main?.temp
//                 ? `${(data.main.temp - 273.15).toFixed(2)} °C`
//                 : 'Temperature'}
//             </h6>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;




'use client';
import Image from 'next/image';
import { useState, ChangeEvent } from 'react';
import axios from 'axios';

interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
}

const Home = () => {
  const apiKey = 'f56f24967aaf51182d1d4df628297c6d';
  const [inputCity, setInputCity] = useState<string>('');
  const [data, setData] = useState<WeatherData | null>(null);

  const getWeatherDetails = async (cityName: string) => {
    if (!cityName) return;
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    try {
      const response = await axios.get(apiURL);
      setData(response.data as WeatherData);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputCity(e.target.value);
  };

  const handleSearch = () => {
    getWeatherDetails(inputCity);
  };

  return (
    <div className="col-md-12">
      <div className="weatherBg">
        <h1 className="heading">Weather App</h1>
        <div className="d-grid gap-3 col-4 mt-4">
          <input
            type="text"
            className="form-control"
            placeholder="Enter city name"
            value={inputCity}
            onChange={handleInputChange}
          />
          <button className="btn btn-primary" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      {data && (
        <div className="col-md-12 text-center mt-5">
          <div className="shadow rounded weatherResultbox">
            <Image
              className="weathericn"
              src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"
              alt="Weather Icon"
              width={100}
              height={100}
            />
            <h5 className="weathercity">{data.name || 'City Name'}</h5>
            <h6 className="weathertmp">
              {data.main?.temp
                ? `${(data.main.temp - 273.15).toFixed(2)} °C`
                : 'Temperature'}
            </h6>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

