import React from 'react'
import './about.css'
import Card from "@material-ui/core/Card";
import Service from './service.png'
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import CardMedia from '@material-ui/core/CardMedia';
import Typography from "@material-ui/core/Typography";
// import { NavLink } from 'react-router-dom'
const styles = {
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Lobster'
    },
    text: {
        fontSize: 15,
        textTransform: 'capitalize',
        paddingTop: 20,
        textAlign: 'justify',
        fontFamily: 'cursive',
        textJustify: 'inter-word'
    },
    details: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Lobster',
        textTransform: 'capitalize',
        paddingTop: 50,
    },
    detailsx: {
        fontSize: 15,
        fontFamily: 'cursive',
    },
    heading: {
        height: 150,
        width: 300,
        alignContent: 'center',
        margin: 0,
        padding: 10
    },
    card: {
        display: 'flex',
        justifyContent: 'center'
    }
};
const About = (props) => {
    const { classes } = props
    return (
        <div>
            <div className='parallex-first'>

                <div className='about-content'>
                    <p>
                        Hi, chitkarians!! You all must have face the problems like
                            locating the teacher?
                            Roaming for hours in the campus without any clue about the teacher?
                            Missing lectures in the entire process?
                        <br />
                        <br />
                        We have realised that this is the common problem faced by all the students, so we thought of coming up with the solution for the same. We have created a platform that will enable both the teachers and students to connect without any problem. The platform will enable the students to make an appointment with the teacher pre hand and even can access the details of the student easily without any confusions. The students can search for the teacher, check for availability of a teacher, communicate its doubts, set for a meeting point & time, check teacher timetable as well. The teachers can access the student’s information, communicate with them & respond effectively.
                    </p>
                </div>
                <br />
                <br />
                <Card className={classes.card}>
                    <CardMedia
                        image={Service}
                        className={classes.heading}
                    />
                </Card>
                <br />
                <br />
                <div className='services'>
                    <Card className='card'>
                        <CardContent>
                            <Typography className={classes.title}>
                                Timetable
                            </Typography>
                            <Typography component="p" color='textSecondary' className={classes.text}>
                                {'this feature will enable the students to access the teachers timetable and can barge for the appointments accordingly.'}
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card className='card'>
                        <CardContent>
                            <Typography className={classes.title}>
                                Search
                            </Typography>
                            <Typography component="p" color='textSecondary' className={classes.text}>
                                the students can search for the prospective faculty and the faculty can search for the students.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card className='card'>
                        <CardContent>
                            <Typography className={classes.title}>
                                Availability
                            </Typography>
                            <Typography component="p" color='textSecondary' className={classes.text}>
                                this will help the students and the teacher to check for each other’s availability.
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card className='card'>
                        <CardContent>
                            <Typography className={classes.title}>
                                Location
                            </Typography>
                            <Typography component="p" color='textSecondary' className={classes.text}>
                                this will enable the students to track the faculty.
                            </Typography>
                        </CardContent>
                    </Card>
                </div>

                <h4 className='heading'>Our Team</h4>
                <div className='team'>
                    <Card className='flip-card'>
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <CardContent>
                                    <Typography className={classes.details}>Name:Urvashi</Typography>
                                    <p className={classes.detailsx}>
                                        Email: urvashi1925.cse16@chitkara.edu.in
                                    </p>
                                    <p className={classes.detailsx}>
                                        Department: CSE
                                    </p>
                                    {/* <NavLink to="https://github.com/urvashi29?tab=repositories" class="fa fa-github" />
                                    <NavLink to="https://www.linkedin.com/in/urvashi-singla-6ab810152/" class="fa fa-linkedin" /> */}
                                </CardContent>
                            </div>
                            <div className="flip-card-back-one">
                            </div>
                        </div>
                    </Card>
                    <Card className='flip-card'>
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <CardContent>
                                    <Typography className={classes.details}>Name:Saurav</Typography>
                                    <p className={classes.detailsx}>
                                        Email: saurav1785.cse16@chitkara.edu.in
                                    </p>
                                    <p className={classes.detailsx}>
                                        Department: CSE
                                    </p>
                                    {/* <NavLink to='' class="fa fa-github" />
                                    <NavLink to='' class="fa fa-linkedin" /> */}
                                </CardContent>
                            </div>
                            <div className="flip-card-back-two">
                            </div>
                        </div>
                    </Card>
                    <Card className='flip-card'>
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <CardContent>
                                    <Typography className={classes.details}>Name:Sheenam</Typography>
                                    <p className={classes.detailsx}>
                                        Email: Sheenam1787.cse16@chitkara.edu.in
                                    </p>
                                    <p className={classes.detailsx}>
                                        Department: CSE
                                    </p>
                                    {/* <a href="#" class="fa fa-github"></a>
                                    <a href="#" class="fa fa-linkedin"></a> */}
                                </CardContent>
                            </div>
                            <div className="flip-card-back-three">
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}
export default withStyles(styles)(About);