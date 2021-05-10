import React from 'react'


import Box from '@material-ui/core/Box';
import Styles from "./footer.module.css";
import Grid from '@material-ui/core/Grid';




const footer = () => {
    return (
        <Box className={Styles.footer}>
           

                <h2 className={Styles.text}>Develope By Hasintha Diyaneth</h2>
                <h3 className={Styles.text}> © 2021 Hasintha. All Rights Reserved.</h3>
           
        </Box>
    )
}

export default footer
