import React from 'react'
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

export default function Contributors () {
  return (
    <div>
      <Profile
        avatar={'https://avatars.githubusercontent.com/u/211514?s=60&amp;v=4'}
        name='Andreas Hocevar'
        id='ahocevar'
        desc='I am currently the most active developer of OpenLayers, and maintain and contribute to other projects in the open source geospatial ecosystem, including proj4js and ol-mapbox-style.'
        descExtra='I run a small company, ahocevar geospatial, with a focus on geospatial web application development and Open Source geospatial consulting. Your financial contribution helps me to reserve time for Open Source development and maintenance work.'
        fundUrl='https://github.com/sponsors/ahocevar?o=esb'
      />
      <Profile
        avatar={'https://avatars.githubusercontent.com/u/41094?s=60&amp;v=4'}
        name='Tim Schaub'
        id='tschaub'
        desc='Prefers to keep an air of mystery about them.'
        descExtra=''
        fundUrl='https://github.com/sponsors/ahocevar?o=esb'
      />
      <Profile
        avatar={'https://avatars.githubusercontent.com/u/49240900?s=60&amp;v=4'}
        name='mike-000'
        id='mike-000'
        desc='Prefers to keep an air of mystery about them.'
        descExtra=''
        fundUrl='https://github.com/sponsors/ahocevar?o=esb'
      />
      <Profile
        avatar={'https://avatars.githubusercontent.com/u/4426597?s=60&amp;v=4'}
        name='MoonE'
        id='moone'
        desc='Prefers to keep an air of mystery about them.'
        descExtra=''
        fundUrl='https://github.com/sponsors/ahocevar?o=esb'
      />
    </div>
  )
}

Contributors.propTypes = {}

function Profile ({ avatar, name, id, desc, descExtra, fundUrl }) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label={id} className={classes.avatar} src={avatar} />
        }
        title={name}
        subheader=''
      />
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          {desc}<br /><br />{descExtra}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites' href={fundUrl}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='share' href={`https://github.com/${id}`}>
          <GithubIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  desc: PropTypes.string,
  descExtra: PropTypes.string,
  fundUrl: PropTypes.string
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
