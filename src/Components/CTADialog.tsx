import {
    Alert,
    Avatar,
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    SxProps,
    TextField,
} from '@mui/material'
import { useState } from 'react'
import { addContacts } from '../firebase'
import logo from '../assets/vite.svg'

interface CTAProps {
    sx?: SxProps
    type?: string
}

export const CTADialog = ({ sx, type }: CTAProps) => {
    const [open, setOpen] = useState<boolean>(false)
    const [sent, setSent] = useState<boolean>(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const sendContactInformations = async () => {
        name &&
            email &&
            (await addContacts({
                name,
                email,
                message: `Hallo! Ich habe Interesse an ${type}`,
            }))
        setOpen(false)
        setSent(true)
        setTimeout(() => setSent(false), 3000)
    }
    return (
        <>
            <Box sx={sx}>
                {sent ? (
                    <Box sx={{ width: 250, height: 36, m: 0, p: 0 }}>
                        <Alert severity="success">
                            Thank You! Talk to you later
                        </Alert>
                    </Box>
                ) : (
                    <Button
                        sx={{
                            color: 'white',
                            border: '1px solid rgba(255, 255, 255, 0.5)',
                            ':hover': {
                                color: 'black',
                                backgroundColor: 'white',
                                border: '1px solid rgba(255, 255, 255, 0)',
                            },
                        }}
                        variant="outlined"
                        onClick={() => setOpen(!open)}
                    >
                        get in touch
                    </Button>
                )}
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
                            <Avatar src={logo}></Avatar>
                            <Box sx={{ m: 1 }}>
                                <TextField
                                    sx={{
                                        color: 'white',
                                        border: '1px solid rgba(255, 255, 255, 0.5)',
                                        ':hover': {
                                            color: 'white',
                                            border: '1px solid rgba(255, 255, 255, 0)',
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor:
                                                    'rgba(0, 0, 0, 0.23)',
                                            },
                                            '&.Mui-focused fieldset': {
                                                border: 'white',
                                            },
                                        },
                                        '& .MuiInputBase-input': {
                                            color: 'white',
                                        },
                                    }}
                                    required
                                    name="email"
                                    placeholder="Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Box>
                            <Box sx={{ m: 1 }}>
                                <TextField
                                    sx={{
                                        color: 'white',
                                        border: '1px solid rgba(255, 255, 255, 0.5)',
                                        ':hover': {
                                            color: 'white',
                                            border: '1px solid rgba(255, 255, 255, 0)',
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor:
                                                    'rgba(0, 0, 0, 0.23)',
                                            },
                                            '&.Mui-focused fieldset': {
                                                border: 'white',
                                            },
                                        },
                                        '& .MuiInputBase-input': {
                                            color: 'white',
                                        },
                                    }}
                                    required
                                    name="name"
                                    placeholder="Name"
                                    onChange={(e) => setName(e.target.value)}
                                />
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
                        <Button
                            variant="outlined"
                            onClick={sendContactInformations}
                            sx={{
                                color: 'white',
                                border: '1px solid rgba(255, 255, 255, 0.5)',
                                ':hover': {
                                    color: 'black',
                                    backgroundColor: 'white',
                                    border: '1px solid rgba(255, 255, 255, 0)',
                                },
                            }}
                        >
                            Senden
                        </Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </>
    )
}
