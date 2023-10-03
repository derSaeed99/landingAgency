import {
    Box,
    Button,
    CssBaseline,
    Grid,
    IconButton,
    useMediaQuery,
    AppBar as TopBar,
    Toolbar,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useTheme } from '@mui/material/styles'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import { CTADialog } from './CTADialog'
import Logo from '../assets/vite.svg'

export const AppBar = () => {
    const pathname = useLocation()
    const theme = useTheme()
    const navigate = useNavigate()
    const xs = useMediaQuery(theme.breakpoints.only('xs'))
    const showBackButton =
        pathname.pathname.endsWith('/aboutus') ||
        pathname.pathname.endsWith('/pricing')
    return (
        <>
            <CssBaseline />
            <TopBar elevation={0} sx={{ backgroundColor: 'transparent' }}>
                <Toolbar sx={{ height: 120 }}>
                    <Grid
                        container
                        sx={{
                            display: 'flex',
                            position: 'fixed',
                            alignItems: 'center',
                            backgroundColor: 'transparent',
                        }}
                    >
                        <Grid
                            item
                            sm={6}
                            xs={8}
                            display="flex"
                            alignItems={'center'}
                        >
                            <Box sx={{ ml: 2 }} onClick={() => navigate('/')}>
                                <img
                                    src={Logo}
                                    alt="logo"
                                    width={100}
                                    height={70}
                                />
                            </Box>
                        </Grid>
                        {!xs && (
                            <Grid
                                item
                                sm={4}
                                display="flex"
                                justifyContent={'flex-end'}
                            >
                                {showBackButton && (
                                    <IconButton
                                        sx={{ color: 'white' }}
                                        onClick={() => navigate('/')}
                                    >
                                        <ArrowBackIosIcon />
                                    </IconButton>
                                )}
                                <Button
                                    LinkComponent={Link}
                                    onClick={() => navigate('/pricing')}
                                    sx={{ color: 'white', mr: 2 }}
                                >
                                    pricing
                                </Button>
                                <CTADialog />
                            </Grid>
                        )}
                        <Grid
                            item
                            sm={2}
                            xs={4}
                            display="flex"
                            justifyContent={'flex-end'}
                        >
                            {xs && (
                                <IconButton
                                    onClick={() => alert('fuck off')}
                                    sx={{
                                        mr: 2,
                                    }}
                                >
                                    <MenuIcon />
                                </IconButton>
                            )}
                        </Grid>
                    </Grid>
                </Toolbar>
            </TopBar>
            <Toolbar />
        </>
    )
}
