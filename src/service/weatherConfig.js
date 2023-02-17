export const weatherConfig = {
    url: "https://api.open-meteo.com/v1/gfs?hourly=temperature_2m&timezone=IST",
    cities: {
        Rehovot: { latitude: 31.8928, longitude: 34.8113 },
        Haifa: { latitude: 32.7940, longitude: 34.9896 },
        Jerusalem: { latitude: 31.7683, longitude: 35.2137 },
        Tel_Aviv: { latitude: 32.0853, longitude: 34.7818 },
        Eilat: { latitude: 29.5577, longitude: 34.9519 }
    },
    hour: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
}