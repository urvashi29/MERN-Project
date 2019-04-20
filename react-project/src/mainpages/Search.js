import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import './search.css'
const styles = {
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

}

const details = [
    {
        name: 'Ms. Supriya Setia',
        mail: 'supriya@chitkara.edu.in',
        dept: 'cse',
        facultyroom: 'Newton-1'
    },
    {
        name: 'Ms. Tanya Gera',
        mail: 'tanya@chitkara.edu.in',
        dept: 'cse',
        facultyroom: 'Turimg-3'
    },
    {
        name: 'Ms. Vanshita Baweja',
        mail: 'vanshita@chitkara.edu.in',
        dept: 'cse',
        facultyroom: 'Turing-5'
    }
]
function searchFor(term) {
    return function (x) {
        return x.name.toLowerCase().includes(term.toLowerCase()) || !term
    }
}
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details: details,
            term: ''
        }
        this.searchHandler = this.searchHandler.bind(this)
    }

    searchHandler(e) {
        this.setState({
            term: e.target.value
        })
    }
    render() {
        const { term, details } = this.state
        const { classes } = this.props
        const detailslist = details.filter(searchFor(term)).map(info => {
            return (
                <div key={info.mail} className='cards'>
                    <Card className='flip-card'>
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <CardContent>
                                    <Typography className={classes.details}>Name:{info.name}</Typography>
                                    <p className={classes.detailsx}>
                                        Email:{info.mail}
                                    </p>
                                    <p className={classes.detailsx}>
                                        Department:{info.dept}
                                    </p>
                                    <p className={classes.detailsx}>
                                        faculty Room:{info.facultyroom}
                                    </p>
                                </CardContent>
                            </div>
                            <div className="flip-card-back">
                            </div>
                        </div>
                    </Card>
                </div>
            )
        });
        return (
            <div className='banner'>
                <div className='center'>
                    <TextField className='text'
                        margin="normal"
                        onChange={this.searchHandler}

                        label='Enter Name'
                    />
                    &nbsp; &nbsp;
                        <TextField className='text'
                        margin="normal"
                        label='Enter Department'
                    />
                    {detailslist}
                </div>
            </div>

        )
    }
}

export default withStyles(styles)(Search)

