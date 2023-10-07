import {
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
import { ContactProps } from '../typing/props'

interface CTAProps {
    sx?: SxProps
}

export const CTADialog = ({ sx }: CTAProps) => {
    const [open, setOpen] = useState<boolean>(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState<ContactProps>()
    const sendContactInformations = async () => {
        contact && (await addContacts(contact))
        setOpen(false)
    }
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
                    }}
                    variant="outlined"
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
                            onClick={() => {
                                setContact({
                                    name,
                                    email,
                                    message:
                                        'Hallo! Ich habe Interesse an Ihrer Dienstleistung',
                                })
                                sendContactInformations()
                            }}
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
