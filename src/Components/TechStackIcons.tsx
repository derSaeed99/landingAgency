import { Grid, Tooltip, Typography } from '@mui/material'

export const TechStackIcons = () => {
    return (
        <Grid container spacing={2} alignItems={'center'} sx={{ ml: 2 }}>
            <Grid item>
                <Typography fontWeight={800}>My Main TechStack:</Typography>
            </Grid>
            <Grid item>
                <Tooltip title="TypeScript">
                    <img
                        width="40"
                        height="40"
                        src="https://img.icons8.com/ios/100/typescript.png"
                        alt="typescript"
                    />
                </Tooltip>
            </Grid>
            <Grid item>
                <Tooltip title="React">
                    <img
                        width="40"
                        height="40"
                        src="https://img.icons8.com/dotty/40/react.png"
                        alt="react"
                    />
                </Tooltip>
            </Grid>
            <Grid item>
                <Tooltip title="Firebase">
                    <img
                        width="40"
                        height="40"
                        src="https://img.icons8.com/external-tal-revivo-light-tal-revivo/96/external-firebase-a-googles-mobile-platform-that-helps-you-quickly-develop-high-quality-apps-logo-light-tal-revivo.png"
                        alt="firebase"
                    />
                </Tooltip>
            </Grid>
            <Grid item>
                <Tooltip title="Google Cloud">
                    <img
                        width="40"
                        height="40"
                        src="https://img.icons8.com/ios/100/google-cloud-platform.png"
                        alt="google-cloud-platform"
                    />
                </Tooltip>
            </Grid>
            <Grid item>
                <Tooltip title="Design">
                    <img
                        width="40"
                        height="40"
                        src="https://img.icons8.com/ios/100/design--v1.png"
                        alt="design"
                    />
                </Tooltip>
            </Grid>
            <Grid item>
                <Tooltip title="GitHub">
                    <img
                        width="40"
                        height="40"
                        src="https://img.icons8.com/ios/100/github--v1.png"
                        alt="github"
                    />
                </Tooltip>
            </Grid>
        </Grid>
    )
}
