import React, { useState } from 'react'
import Toaster from './Toaster'
import Button from '@mui/material/Button';
import NavBar from './NavBar';
import IconButton from '@mui/material/IconButton';
// import SettingsIcon from '@material-ui/icons/Settings';
import SettingsIcon from '@mui/icons-material/Settings';
import PopUp from './PopUp';
import { Grid, TextField, Typography } from '@mui/material';

const SecondComponent = () => {
    const [showToast, setShowToast] = useState(false)
    const [counter, setCounter] = useState(0)
    const [showSettings, setShowSettings] = useState(false)
    const [timer, setTimer] = useState(7000)
    const [textToShow, setTextToShow] = useState('')
    return (
        <div>
            <NavBar />
            <Grid container alignItems="center" top={10} >
                <Typography >Enter Custom Toast Text</Typography>
                <TextField
                    size="small"
                    variant="outlined"
                    value={textToShow}
                    onChange={(event) => {
                        const input = event.target.value;
                        setTextToShow(input);
                    }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    style={{ marginLeft: '10px' }}
                />
                <IconButton color="primary" aria-label="change-settings" onClick={() => {
                    setShowSettings(true)
                }} >
                    <SettingsIcon />
                </IconButton>
            </Grid>
            <Button onClick={() => {
                setShowToast(true)

                setCounter(counter + 1)
            }}>Show Toast Message</Button>


            <Toaster setOpen={setShowToast} open={showToast}
                title={textToShow} time={timer} />

            <PopUp open={showSettings} setOpen={setShowSettings} timer={timer} setTimer={setTimer} />
        </div> 
    )
}

export default SecondComponent

