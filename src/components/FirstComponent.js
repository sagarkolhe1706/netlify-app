import React, { useState } from 'react'
import Toaster from './Toaster'
import Button from '@mui/material/Button';
import NavBar from './NavBar';
import IconButton from '@mui/material/IconButton';
// import SettingsIcon from '@material-ui/icons/Settings';
import SettingsIcon from '@mui/icons-material/Settings';
import PopUp from './PopUp';

const FirstComponent = () => {
  const [showToast, setShowToast] = useState(false)
  const [counter, setCounter] = useState(0)
  const [showSettings, setShowSettings] = useState(false)
  const [timer, setTimer] = useState(7000)
  return (
    <div>
      <NavBar />
      <Button onClick={() => {
        setShowToast(true)

        setCounter(counter + 1)
      }}>Show Toast Message</Button>
      <IconButton color="primary" aria-label="change-settings" onClick={() => {
        setShowSettings(true)
      }} >
        <SettingsIcon />
      </IconButton>

      <Toaster setOpen={setShowToast} open={showToast}
        title={`Testing ${counter}`} time={timer} />

      <PopUp open={showSettings} setOpen={setShowSettings} timer={timer} setTimer={setTimer} />
    </div>
  )
}

export default FirstComponent