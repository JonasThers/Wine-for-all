import React, { useState } from 'react';
import { Box, Typography, TextField, makeStyles, FormLabel, RadioGroup, FormControlLabel, Radio, MenuItem, Select, InputLabel, Button } from '@material-ui/core';
import FadeIn from 'react-fade-in';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
    },
    label: {
        color: 'white',
        marginTop: 30,
        marginBottom: 10
    },
    input: {
        marginTop: 10,
        width: '25ch',
        borderBottom: '1px solid white',
    },
    inputText: {
        color: 'white'
    },
    radio: {
        color: 'white',
    },
    select: {
        background: 'white',
        color: 'black',
        marginTop: 10,
        marginBottom: 20,
        width: '25ch',
        borderBottom: 'none',
        paddingLeft: 10,
    },
    button: {
        background: 'white',
        marginTop: 20,
        marginBottom: 30,
        width: '12.5ch',
        '&:hover': {
            background: 'white'
        }
    },
    message: {
        height: 20,
        marginBottom: 30
    }
}));

const SignUp = () => {

    const classes = useStyles();

    const [attend, setAttended] = useState('');
    const [ageLimit, setAgeLimit] = useState('');
    const [open, setOpen] = useState(false);
    const [heardBefore, setHeardBefore] = useState('');
    const [formMessage, setFormMessage] = useState('');
    const [values, setValues] = useState({
        title: "",
        email: "",
        message: "",
      });

    const handleAttend = (event) => {
        setAttended(event.target.value);
    };

    const handleAge = (event) => {
        setAgeLimit(event.target.value);
    };

    const handleHeardBefore = (event) => {
        setHeardBefore(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const sendEmail = (data, event) => {
        event.preventDefault();

        emailjs.sendForm(process.env.envVar.REACT_APP_SERVICE_ID, process.env.envVar.REACT_APP_TEMPLATE_ID, event.target, process.env.envVar.REACT_APP_USER_ID)
            .then((result) => {
                console.log(result.text);
                setFormMessage('Message sent, thank you for your interest');
            }, (error) => {
                console.log(error.text);
                setFormMessage('Something went wrong, try again');
            });
    };

    return (
        <FadeIn>
            <Box mb={2}>
                <Typography variant="h4">Sign up</Typography>
            </Box>
            <Typography variant="body1">We appreciate you taking interest in learning about the world of wines.</Typography>
            <Typography variant="body1">Your door to knowledge and community is just a small sign-up away!</Typography>
            <form
                className={classes.form}
                onSubmit={handleSubmit(sendEmail)}
            >
                <input type="hidden" name="contact_number" />
                <FormLabel component="legend" className={classes.label}>Are you 18 years old or above?</FormLabel>
                <RadioGroup
                    name="age"
                    value={ageLimit}
                    onChange={handleAge}
                >
                    <FormControlLabel
                        value="Yes"
                        control={<Radio className={classes.radio} />}
                        label="Yes"
                    />
                    <FormControlLabel
                        value="No"
                        control={<Radio className={classes.radio} />}
                        label="No"
                    />
                </RadioGroup>
                <TextField
                    className={classes.input}
                    id="standard-basic"
                    label="Name*"
                    name="name"
                    {...register("nameRequired", { required: true })}
                    InputProps={{
                        style: { color: '#fff' },
                        disableUnderline: true
                    }}
                    InputLabelProps={{
                        style: { color: '#fff' },
                    }}
                />
                {errors.nameRequired && <span>This field is required</span>}
                <TextField
                    className={classes.input}
                    id="standard-basic"
                    label="E-mail*"
                    name="email"
                    {...register("emailRequired", { 
                        required: true, 
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      }, })}
                    InputProps={{
                        style: { color: '#fff' },
                        disableUnderline: true
                    }}
                    InputLabelProps={{
                        style: { color: '#fff' },
                    }}
                />
                {errors.emailRequired && <span>Valid email is required</span>}
                <TextField
                    className={classes.input}
                    id="standard-basic"
                    label="Phone*"
                    name="phone"
                    {...register("phoneRequired", { required: true })}
                    InputProps={{
                        style: { color: '#fff' },
                        disableUnderline: true
                    }}
                    InputLabelProps={{
                        style: { color: '#fff' },
                    }}
                />
                {errors.phoneRequired && <span>Valid phone number is required</span>}
                <InputLabel id="demo-controlled-open-select-label" className={classes.label}>Where did you hear about Wine for All?</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    name="heard"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={heardBefore}
                    onChange={handleHeardBefore}
                    className={classes.select}
                    placeholder="Lol"
                >
                    <MenuItem value={'From a friend'}>From a friend</MenuItem>
                    <MenuItem value={'Facebook'}>Facebook</MenuItem>
                    <MenuItem value={'Instagram'}>Instagram</MenuItem>
                    <MenuItem value={'Google'}>Google</MenuItem>
                    <MenuItem value={'Poster at UKH'}>Poster at UKH</MenuItem>
                </Select>
                <FormLabel component="legend" className={classes.label}>Have you attended a Wine for All workshop before?</FormLabel>
                <RadioGroup
                    aria-label="gender"
                    name="attended"
                    value={attend}
                    onChange={handleAttend}
                >
                    <FormControlLabel
                        value="Yes"
                        control={<Radio className={classes.radio} />}
                        label="Yes"
                    />
                    <FormControlLabel
                        value="No"
                        control={<Radio className={classes.radio} />}
                        label="No"
                    />
                </RadioGroup>
                <Button
                    type="submit"
                    className={classes.button}
                >
                    Send
                </Button>
            </form>
            <Box className={classes.message}>
                {formMessage}
            </Box>
        </FadeIn>
    )
}

export default SignUp;