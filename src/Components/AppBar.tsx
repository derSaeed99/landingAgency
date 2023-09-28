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
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import Logo from "../assets/react.svg"
import { useTheme } from '@mui/material/styles'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate, Link, useLocation } from 'react-router-dom'

export const AppBar = () => {
    const pathname = useLocation()
    const theme = useTheme()
    const navigate = useNavigate()
    const xs = useMediaQuery(theme.breakpoints.only('xs'))
    const [open, setOpen] = useState(false)
    const showBackButton =
        pathname.pathname.endsWith("/aboutus") ||
        pathname.pathname.endsWith("/pricing")
    return (
        <>
          <CssBaseline />
          <TopBar elevation={0} sx={{ backgroundColor: 'white' }}>
              <Toolbar>
                  <Grid
                      container
                      sx={{
                          display: 'flex',
                          position:"fixed",
                          alignItems: 'center',
                          backgroundColor: 'transparent',
                      }}
                  >
                      <Grid item sm={6} xs={8} display="flex" alignItems={'center'}>
                            <Box
                                sx={{ ml: 2 }}
                                onClick={() => navigate("/")}>
                              <img src={Logo} alt="logo" width={100} height={70} />
                          </Box>
                      </Grid>
                      {!xs && (
                            <Grid item sm={4} display="flex" justifyContent={'flex-end'}>
                                {showBackButton && (
                                <IconButton
                                    onClick={() => navigate("/")}
                                >
                                    <ArrowBackIosIcon />
                                </IconButton>
                            )}
                              <Button
                                  LinkComponent={Link}
                                  onClick={() => navigate("/pricing")}
                                  sx={{ color: 'black' }}
                              >
                                  pricing
                              </Button>
                              <Button sx={{ color: 'black' }} onClick={() => setOpen(!open)}>
                                get in touch
                              </Button>
                              <Button
                                  LinkComponent={Link}
                                  onClick={() => navigate("/aboutus")}
                                  sx={{ color: 'black' }}>
                                  about us
                              </Button>
                          </Grid>
                      )}
                        <Grid item
                            sm={2}
                            xs={4}
                            display="flex"
                            justifyContent={'flex-end'}>
                            {xs && (
                                <IconButton
                                    onClick={() => alert('fuck off')} sx={{
                                    mr: 2
                                }}
                                >
                                    <MenuIcon/>
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
