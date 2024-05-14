import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import { Box, Grid, TextField, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { green } from '@mui/material/colors';

const PopUp = ({ open, setOpen, timer, setTimer }) => {

    const [timeValue, setTimeValue] = useState('')

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose} >
                <IconButton
                    aria-label="close"
                    style={{
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        margin: '8px',
                    }}
                    onClick={handleClose}
                >
                    <CloseIcon />
                </IconButton>
                <div style={{ padding: '20px', marginTop: '40px' }}>
                    <Grid container spacing={2} alignItems="center" top={10}>
                        <Typography >Set Timeout:</Typography>
                        <TextField

                            size="small"
                            type="number"
                            variant="outlined"
                            value={timeValue}
                            onChange={(event) => {
                                const input = event.target.value.replace(/\D/g, '');
                                setTimeValue(input);
                            }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                    </Grid>
                    <Box display="flex" justifyContent="center" style={{ marginTop: '20px' }}>
                        <Button
                            style={{
                                backgroundColor: green[500],
                                color: '#fff',
                                '&:hover': {
                                    backgroundColor: green[700],
                                },
                            }}
                            onClick={() => {
                                setTimer(timeValue)
                                handleClose()
                                setTimeValue('')
                            }} color="primary">
                            Confirm
                        </Button>
                    </Box>
                </div>
            </Dialog>
        </div>
    );
}
export default PopUp