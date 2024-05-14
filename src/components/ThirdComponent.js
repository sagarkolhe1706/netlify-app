
import React, { useEffect, useState } from 'react'
import Toaster from './Toaster'
import Button from '@mui/material/Button';
import NavBar from './NavBar';
import IconButton from '@mui/material/IconButton';
// import SettingsIcon from '@material-ui/icons/Settings';
import SettingsIcon from '@mui/icons-material/Settings';
import PopUp from './PopUp';
import { Grid, TextField, Typography } from '@mui/material';
import { SignalCellularConnectedNoInternet3Bar } from '@mui/icons-material';

const ThirdComponent = () => {
    const [showToast, setShowToast] = useState(false)
    const [counter, setCounter] = useState(1)
    const [showSettings, setShowSettings] = useState(false)
    const [timer, setTimer] = useState(7000)
    const [count, setCount] = useState('')
    const [textToShow, setTextToShow] = useState('')

    return (
        <div>
            <NavBar />
            <Grid container alignItems="center" top={10} >
                <Typography >Enter Countdown Time</Typography>
                <TextField
                    size="small"
                    type='number'
                    variant="outlined"
                    value={count}
                    onChange={(event) => {
                        const input = event.target.value.replace(/\D/g, '');
                        setCount(input);
                    }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    style={{ marginLeft: '10px' }}
                />
            </Grid>
            <Button color="primary" onClick={() => {
                setShowToast(true)
                // setCounter(counter + 1)
                let c = count
                setCount('');
                var interval = setInterval(function () {
                    {
                        setTextToShow(`${c} : ${counter}`)
                        c = c - 1
                    }
                    if (c == 0) {
                        clearInterval(interval);

                        setShowToast(false)
                    }
                }, 1000);


            }}>Start Timer</Button>


            <Toaster setOpen={setShowToast} open={showToast}
                title={textToShow} time={timer} />

            <PopUp open={showSettings} setOpen={setShowSettings} timer={timer} setTimer={setTimer} />
        </div>
    )
}

export default ThirdComponent

