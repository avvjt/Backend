// const express = require('express')  --> old method commonJs
import express from 'express'; // import from module
// require('dotenv').config();
import 'dotenv/config';


const app = express()


const githubData = {
  "login": "avvjt",
  "id": 75140057,
  "node_id": "MDQ6VXNlcjc1MTQwMDU3",
  "avatar_url": "https://avatars.githubusercontent.com/u/75140057?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/avvjt",
  "html_url": "https://github.com/avvjt",
  "followers_url": "https://api.github.com/users/avvjt/followers",
  "following_url": "https://api.github.com/users/avvjt/following{/other_user}",
  "gists_url": "https://api.github.com/users/avvjt/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/avvjt/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/avvjt/subscriptions",
  "organizations_url": "https://api.github.com/users/avvjt/orgs",
  "repos_url": "https://api.github.com/users/avvjt/repos",
  "events_url": "https://api.github.com/users/avvjt/events{/privacy}",
  "received_events_url": "https://api.github.com/users/avvjt/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Abhi",
  "company": "Cllasify",
  "blog": "",
  "location": "kolkata",
  "email": null,
  "hireable": null,
  "bio": "Watching neural learning",
  "twitter_username": null,
  "public_repos": 53,
  "public_gists": 0,
  "followers": 8,
  "following": 5,
  "created_at": "2020-11-27T19:00:29Z",
  "updated_at": "2025-06-03T04:01:10Z"
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/khushi', (req, res)=> {
res.send('i love you baby')
})

app.get(
    '/null', (req, res)=> {
        res.send('its me abhi')
    }
)

app.get('/git', (req, res)=>{
res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
