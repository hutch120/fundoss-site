import API from '../services/API'

async function GetContributors ({ org, repo }) {
  // console.log('GetContributors org', org, 'repo', repo)
  let url = `https://api.github.com/repos/${org}/${repo}/contributors`
  if (window.location.hostname === 'localhost') {
    url = `${process.env.PUBLIC_URL}/test/contributors.json`
  }
  return await API.Get({ url })
}

async function GetUser ({ login }) {
  // console.log('GetUser', login)
  let url = `https://api.github.com/users/${login}`
  if (window.location.hostname === 'localhost') {
    url = `${process.env.PUBLIC_URL}/test/content.json`
  }
  return await API.Get({ url })
}
export default {
  GetContributors,
  GetUser
}
