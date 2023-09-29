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
