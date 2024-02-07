const axios = require("axios");

/* Airline Keying Method */
async function fetchUnitedAirlinesKey() {
    const fetched = (await axios.get(`https://www.united.com/api/token/anonymous`)).data;
}

/* Airline Fetching Method */

async function fetchDeltaAirlinesFlight(flightNumber, departureDate) {
    // No key required...
    // Date style = YYYY-MM-DD
    const fetched = (await axios.post("https://flightinformation-api.delta.com/flight-status/details", {
        "flightNumber": flightNumber,
        "airlineCode": "DL",
        "departureDate": departureDate,
        "legDepartureDate": "",
        "originAirportCode": ""
    }, {
        headers: {
            "accept-language": "en-US",
            "content-type": "application/json"
        }
    })).data;
}

async function fetchUnitedAirlinesFlight(flightNumber, departureDate, authorization) {
    // Key required.
    // Date style = YYYY-MM-DD
    const fetched = (await axios.get(`https://www.united.com/api/flight/status/${flightNumber}/${departureDate}?carrierCode=UA`, {
        headers: {
            "x-authorization-api": `bearer ${authorization}`,
            "accept-language": "en-US"
        }
    })).data;
}

async function fetchJetBlueAirwaysFlight(flightNumber, departureDate, authorization) {
    const fetched = (await axios.get(`https://az-api.jetblue.com/flight-status/get-by-number?date=${departureDate}&number=${flightNumber}`, {
        headers: {
            "accept-language": "en-US",
            "apikey": authorization,
            "content-type": "application/json"
        }
    })).data;
}

/* FAA Airport Statuses */

async function fetchAllAirportStatus() {
    
}