
import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function Toaster({ title, open, setOpen, time }) {
    // const [open, setOpen] = React.useState(false);

    // const handleClick = () => {
    //     setOpen(true);
    // };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div>
            {/* <Button onClick={handleClick}>Open Snackbar</Button> */}
            <Snackbar open={open} autoHideDuration={time} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert
                    onClose={handleClose}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {title}
                </Alert>
            </Snackbar>
        </div>
    );
}