import React, { Fragment } from 'react';

import {
    Typography,
    AppBar,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    CssBaseline,
    Grid,
    Button,
    Toolbar,
    Container,
} from '@mui/material';

import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

import module from './styles.module.css';

function App() {
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <Fragment>
            <CssBaseline />
            <AppBar position='relative'>
                <Toolbar>
                    <PhotoCameraIcon className={module.icon} />
                    <Typography variant='h6'>Photo Album</Typography>
                </Toolbar>
            </AppBar>

            <main>
                <div className={module.container}>
                    <Container maxWidth='sm' style={{ marginTop: '100px' }}>
                        <Typography
                            variant='h2'
                            align='center'
                            color='textPrimary'
                            fontSize={{
                                lg: 55,
                                md: 55,
                                sm: 35,
                                xs: 35,
                            }}
                        >
                            Photo Album
                        </Typography>

                        <Typography
                            variant='h6'
                            align='center'
                            color='textSecondary'
                            paragraph
                            fontSize={{
                                lg: 20,
                                md: 20,
                                sm: 15,
                                xs: 15,
                            }}
                        >
                            Fugiat laborum dolor pariatur ipsum dolor veniam
                            eiusmod anim exercitation.
                        </Typography>
                        <div>
                            <Grid
                                container
                                spacing={2}
                                justifyContent='center'
                                alignItems='center'
                            >
                                <Grid item>
                                    <Button variant='contained' color='primary'>
                                        See Photos
                                    </Button>
                                </Grid>

                                <Grid item>
                                    <Button variant='outlined' color='primary'>
                                        Lorem Ipsum
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>

                <Container className={module.cardGrid} maxWidth='md'>
                    <Grid
                        container
                        spacing={4}
                        justifyContent='center'
                        alignItems='center'
                    >
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={module.card}>
                                    <CardMedia
                                        className={module.cardMedia}
                                        image='https://source.unsplash.com/random'
                                        title='title'
                                    />
                                    <CardContent className={module.cardContent}>
                                        <Typography variant='h5' gutterBottom>
                                            Image Card
                                        </Typography>
                                        <Typography>
                                            Sunt qui ut do velit qui nisi amet
                                            amet deserunt anim.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size='small' color='primary'>
                                            View
                                        </Button>
                                        <Button size='small' color='primary'>
                                            Edit
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>

            <footer className={module.footer}>
                <Typography variant='h6' align='center' alignContent='center'>
                    Footer
                </Typography>

                <Typography
                    variant='subtitle1'
                    align='center'
                    alignContent='center'
                    color='textSecondary'
                >
                    In Lorem velit tempor dolor anim duis.
                </Typography>
            </footer>
        </Fragment>
    );
}

export default App;
