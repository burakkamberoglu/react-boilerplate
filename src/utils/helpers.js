export async function fetchFunc(
  url = '',
  data = {},
  token,
  postType = 'POST',
  contentType = 'application/json'
) {
  const response = await fetch(url, {
    method: postType,
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': contentType,
      Authorization: token ? token : ''
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  })
  return response.json()
}
