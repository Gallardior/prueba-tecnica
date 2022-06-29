const API_URL = "https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/jesus_gallardo"

export function getEmployees () {
  return fetch(API_URL)
    .then(res => res.json())
    .then(data => data.data.employees)
}