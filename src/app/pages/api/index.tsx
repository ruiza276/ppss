import { time } from 'console';
import type {  } from 'next'

export async function fetchData() {

  const myHeaders = new Headers();
  myHeaders.append("Authorization", "67b921c6-d76a-11ef-acf2-0242ac130003-67b92266-d76a-11ef-acf2-0242ac130003");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow" as RequestRedirect,
};

  const date = new Date();
  const start = date.toISOString();
  const end = new Date().setDate(date.getDate() + 1);

  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(today.getDate() + 1)

  const lng = '-105.4410';
  const lat = '20.8691';

  const res = await fetch(`https://api.stormglass.io/v2/tide/extremes/point?lat=${lat}&lng=${lng}&start=${today.toISOString()}&end=${tomorrow.toISOString()}`, requestOptions);
  const data = await res.json();
  console.log(start);
  console.log(end);
  console.log(today.toISOString());
  console.log(tomorrow.toISOString());
  console.log(data);
 /*  const data = {
    "data": [
        {
            "height": 1.18,
            "time": "2019-03-15 03:40:44+00:00",
            "type": "high"
        },
        {
            "height": 0.60,
            "time": "2019-03-15 09:53:54+00:00",
            "type": "low"
        },
        {
            "height": 1.20,
            "time": "2019-03-15 16:23:29+00:00",
            "type": "high"
        },
        {
            "height": 0.61,
            "time": "2019-03-15 22:39:15+00:00",
            "type": "low"
        }
    ],
    "meta": {
        "cost": 1,
        "dailyQuota": 800,
        "end": "2019-03-16 00:00",
        "lat": 60.936,
        "lng": 5.114,
        "requestCount": 145,
        "start": "2019-03-15 00:00",
        "station": {
            "distance": 61,
            "lat": 60.398046,
            "lng": 5.320487,
            "name": "bergen",
            "source": "sehavniva.no"
        }
    }
} */
  return data;
}

