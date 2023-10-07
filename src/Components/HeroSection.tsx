import { Box, Typography } from '@mui/material'

export const HeroSection = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'flex-end',
                flexDirection: 'column',
            }}
        >
            <Typography fontWeight={'bold'} color="#333333" variant="h1">
                WE MAKE
            </Typography>
            <Typography fontWeight={'bold'} variant="h1" color="#333333">
                BUSINESSES <br />
            </Typography>
            <Typography fontWeight={'bold'} color="#333333" variant="h1">
                AWESOME! <br />
            </Typography>
        </Box>
    )
}
