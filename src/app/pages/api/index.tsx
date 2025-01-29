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

  const lng = '-105.4410';
  const lat = '20.8691';

  const res = await fetch(`https://api.stormglass.io/v2/tide/extremes/point?lat=${lat}&lng=${lng}&start=${start}&end=${end}`, requestOptions);
  const data = await res.json();
  return data;
}
export default function Page(data: any) {
  return data
}
