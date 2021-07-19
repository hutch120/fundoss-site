import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import GithubIcon from '@material-ui/icons/GitHub'
import PropTypes from 'prop-types'
import GitHub from '../services/GitHub'
import { useParams } from 'react-router-dom'

export default function Contributors () {
  const [contributors, setContributors] = useState(null)
  const params = useParams()

  const org = params?.org
  const repo = params?.repo

  if (!org || !repo) return null

  useEffect(async () => {
    const res = await GitHub.GetContributors({ org, repo })
    setContributors(res)
  }, [])

  if (!contributors) return null

  return (
    <div>
      {contributors.map((contributor, index) => {
        return (
          <Profile
            index={index}
            key={contributor?.id}
            contributor={contributor}
            org={org}
            repo={repo}
          />
        )
      })}

    </div>
  )
}

Contributors.propTypes = {}

function Profile ({ contributor, org, repo, index }) {
  const classes = useStyles()
  const [content, setContent] = useState(null)

  useEffect(async () => {
    if (index <= 0) {
      const res = await GitHub.GetUser({ login: contributor?.login })
      setContent(res)
    }
  }, [])

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={contributor?.avatar_url && <Avatar aria-label={contributor?.id} className={classes.avatar} src={contributor?.avatar_url} />}
        title={content?.name ?? contributor?.login}
        subheader={content?.blog && <a href={content?.blog}>{content?.blog}</a>}
      />
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          {content?.location && content?.name + ' is from ' + content?.location}
          {contributor?.contributions && ' and has made ' + contributor?.contributions + ' contributions.'}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites' href={contributor?.fundUrl}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='share' href={`https://github.com/${contributor?.id}`}>
          <GithubIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

Profile.propTypes = {
  index: PropTypes.number,
  contributor: PropTypes.object,
  org: PropTypes.string,
  repo: PropTypes.string
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 10,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'left'
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  }
}))
