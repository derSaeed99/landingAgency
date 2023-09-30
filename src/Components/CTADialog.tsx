import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material"
import { useState } from "react"

export const CTADialog = () => {
    const [open, setOpen] = useState<boolean>(false)
    return (
        <>
            <Button
                sx={{ color: 'black' }}
                onClick={() => setOpen(!open)}>
                get in touch
            </Button>
            <Dialog open={open} onClose={()=>setOpen(false)}>
                <DialogTitle>
                    <DialogContent>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">

  <circle cx="50" cy="50" r="48" fill="#333" />


  <text x="20" y="60" font-family="Arial, sans-serif" font-size="40" fill="#fff">A</text>
  <text x="52" y="60" font-family="Arial, sans-serif" font-size="40" fill="#fff">S</text>
</svg>
                        <Box sx={{m: 1}}>
                            <TextField name="email" placeholder="Email" />
                        </Box>
                        <Box sx={{m: 1}}>
                            <TextField name="name" placeholder="Name" />
                        </Box>
                    </DialogContent>
                </DialogTitle>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Abbrechen</Button>
                    <Button >Senden</Button>
                </DialogActions>
            </Dialog>
        </>
  )
}
