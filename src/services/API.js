async function Get ({ url }) {
  const method = 'get'
  return await FetchData({ method, url })
}

async function Post ({ url, payload }) {
  const method = 'post'
  return await FetchData({ method, url, payload })
}

async function FetchData ({ url, method, payload }) {
  try {
    const options = {
      method,
      headers: {
        Accept: 'application/vnd.github.v3+json'
      }
    }
    if (payload && method === 'post') options.body = JSON.stringify(payload)
    const response = await window.fetch(url, options)
    if (!response.ok) {
      console.error('Unable to get data from server.')
      return null
    }
    const responseJson = await response.json()
    // console.log(responseJson)
    return responseJson
  } catch (err) {
    console.error('Failed to get data. Reason:', err)
    return null
  }
}

export default {
  Get,
  Post
}
