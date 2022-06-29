const API_URL = "https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/jesus_gallardo"

export function sendEmployee (data) {
  return fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => data)
}