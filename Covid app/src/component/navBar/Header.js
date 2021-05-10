import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Styles from "./Header.modue.css";

const Header = () => {
    return (
        <AppBar>
          <Toolbar>
              <h3 className={Styles.Header}>Global Covid-19 Situation</h3>
            {/* <Typography className={Styles.Header}variant="h4">Global Covid-19 Situation</Typography> */}
          </Toolbar>
        </AppBar>
    )
}

export default Header
