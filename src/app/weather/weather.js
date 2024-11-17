"use client"; // Add this directive to enable client components
import styles from "../../styles/weather.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Weather = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [weather, setWeather] = useState(null);
    const [location, setLocation] = useState(null); // State to hold location
    const [city, setCity] = useState(null); // State to hold city name

    useEffect(() => {
        const fetchWeatherData = async (latitude, longitude) => {
            try {
                const response = await axios.get(
                    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
                );
                setWeather(response.data.current_weather);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        const fetchCityName = async (latitude, longitude) => {
            try {
                const response = await axios.get(
                    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
                );
                if (response.data.address && response.data.address.city) {
                    setCity(response.data.address.city);
                } else if (response.data.address && response.data.address.town) {
                    setCity(response.data.address.town); // Use town if city is not available
                } else {
                    setCity("Unknown Location");
                }
            } catch (err) {
                console.log("Could not fetch city name:", err.message);
            }
        };

        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        setLocation({ latitude, longitude });
                        fetchWeatherData(latitude, longitude);
                        fetchCityName(latitude, longitude);
                    },
                    (error) => {
                        setError("Unable to retrieve your location.");
                    }
                );
            } else {
                setError("Geolocation is not supported by this browser.");
            }
        };

        getLocation();
    }, []);

    if (loading) {
        return <>Loading...</>;
    }
    if (error) {
        return <>Error!</>;
    }
    const temperature = weather.temperature;
    let season = "sommar"; // Standardvärde
    if (temperature < 10) {
        season = "vinter";
    } else if (temperature >= 10 && temperature < 20) {
        season = "höst";
    }

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1>Kläder efter väder? Det är trots allt {season}!</h1>
                {weather && (
                    <div>
                        <p>Location: {city ? city : "Unknown city"}</p>
                        <p>Temperature: {weather.temperature} °C</p>
                        <p>Weather Code: {weather.weathercode}</p>
                    </div>
                )}
            </main>
            <footer className={styles.footer}></footer>
        </div>
    );
}

export default Weather;
