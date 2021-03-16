import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, makeStyles, Typography } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab';
import React from 'react'
import useRequest from '../hooks/useRequest';

const useStyles = makeStyles({
  grid: {
    marginTop: 20
  },
  card: {
    maxWidth: 210,
    height: 300
  },
  media: {
    height: 200
  }
});

export const Media = () => {
  const classes = useStyles();
  const { data, loading } = useRequest('https://jsonplaceholder.typicode.com/photos');
  const sliceData = data.slice(0, 8);

  return (
    <Container maxWidth="md">
      <Grid container direction="row" justify="center" alignItems="center" maxWidth="md" spacing={1}>
        {!loading && sliceData.map((item, key) => (
          <Grid item key={key} className={classes.grid}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={item.url}
                  alt="image"
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" components="p">
                    {item.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
        {loading && [1,2,3,4,5,6,7,8].map(key => (
          <Grid item key={key} className={classes.grid}>
            <Grid width={200}>
              <Skeleton variant="rect" width={210} height={210} />
              <Box pt={0.5} height={52}>
                <Skeleton />
                <Skeleton width={60} />
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
