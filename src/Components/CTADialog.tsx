import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    SxProps,
    Typography,
} from '@mui/material'
import { useState } from 'react'

interface CTAProps {
    sx?: SxProps
    type?: string
}

export const CTADialog = ({ sx }: CTAProps) => {
    const [open, setOpen] = useState<boolean>(false)
    return (
        <>
            <Box sx={sx}>
                <Button
                    sx={{
                        color: 'white',
                        border: '1px solid rgba(255, 255, 255, 0.5)',
                        ':hover': {
                            color: 'black',
                            backgroundColor: 'white',
                            border: '1px solid rgba(255, 255, 255, 0)',
                        },
                        backgroundColor: '#333333',
                    }}
                    variant="contained"
                    onClick={() => setOpen(!open)}
                >
                    get in touch
                </Button>

                <Dialog
                    open={open}
                    onClose={() => setOpen(false)}
                    sx={{
                        '& .MuiPaper-root': {
                            opacity: 0.9,
                            backgroundColor: '#333333',
                            boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.5)',
                        },
                    }}
                >
                    <DialogTitle>
                        <DialogContent>
                            <Box sx={{}}>
                                <Typography color="white" gutterBottom>
                                    Check my Repo: <br />
                                    <strong>
                                        <a> https://github.com/derSaeed99</a>
                                    </strong>
                                </Typography>
                                <Typography color="white">
                                    Write me:
                                    <br />{' '}
                                    <strong>saeed@signatureapp.de</strong>
                                </Typography>
                            </Box>
                        </DialogContent>
                    </DialogTitle>
                    <DialogActions>
                        <Button
                            onClick={() => setOpen(false)}
                            sx={{ color: 'white' }}
                        >
                            Abbrechen
                        </Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </>
    )
}
