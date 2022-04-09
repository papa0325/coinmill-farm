import PropTypes from 'prop-types';
import {
  Box,
  Hidden,
  IconButton,
  Button
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const DashboardNavbar = ({ onMobileNavOpen}) => {

  return (
    <Box px={5.6} >
      <Box py={5} display="flex" justifyContent="flex-end" sx={{borderBottom: '1px solid #56606C'}}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#FF5E15',
            borderRadius: '6px',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '16px',
            lineHeight: '24px',
            padding: '13px 39px',
            marginRight: '30px',
            textTransform: 'none',
          }}
        >
          Connect wallet
        </Button>
        <Button
          sx={{
            border: '2px solid #FF5E15',
            boxSizing: 'border-box',
            borderRadius: '6px',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '16px',
            lineHeight: '24px',
            padding: '13px 60px',
            marginRight: '30px',
            textTransform: 'none',
          }}
        >
          Buy CML
        </Button>
        <Hidden lgUp>
          <IconButton color="primary" onClick={onMobileNavOpen} size="large">
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Box>
    </Box>
  );
};

DashboardNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func
};

export default DashboardNavbar;
