import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Box,
  Drawer,
  Hidden,
  List,
} from '@material-ui/core';
import NavItem from './NavItem';
import NavSubItems from './NavSubItems';
import Logo from './Logo';

const items = [
  {
    href: '/app/home',
    icon: 'homeIcon',
    title: 'Home',
  },
  {
    href: '/app/coinfarm',
    icon: 'farmIcon',
    title: 'CoinFarm',
    subitems: [
      {
        href: '/app/coinfarm/farms',
        title: 'Farms'
      },
      {
        href: '/app/coinfarm/create-farm',
        title: 'Create a farm'
      },
    ]
  },
  {
    href: '/app/coinpad',
    icon: 'padIcon',
    title: 'CoinPad',
    subitems: [
    ]
  },
  {
    href: '/app/faq',
    icon: 'faqIcon',
    title: 'FAQ'
  },
  {
    href: '/app/more',
    icon: 'moreIcon',
    title: 'More'
  }
];

const DashboardSidebar = ({ onMobileClose, openMobile }) => {
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          p: 2,
          marginTop: '40px'
        }}
      >
        <Logo />
      </Box>
      <Box>
        <List>
          {items.map((item) => (
            item.subitems === undefined ? 
              <NavItem
                href={item.href}
                key={item.title}
                title={item.title}
                icon={item.icon}
              /> :
              <NavSubItems
                href={item.href}
                key={item.title}
                title={item.title}
                subitems={item.subitems}
                icon={item.icon}
              />
          ))}
        </List>
      </Box>
      <Box ml={5} mt={6} display="flex">
        <Box mr={2.5} sx={{cursor: 'pointer'}}><img src="/static/icons/twitterIcon.svg" alt="twitter" /></Box>
        <Box mr={2.5} sx={{cursor: 'pointer'}}><img src="/static/icons/telegramIcon.svg" alt="telegram" /></Box>
        <Box sx={{cursor: 'pointer'}}><img src="/static/icons/mIcon.svg" alt="m" /></Box>
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
          PaperProps={{
            sx: {
              width: 326
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: 326,
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

DashboardSidebar.defaultProps = {
  onMobileClose: () => {
  },
  openMobile: false
};

export default DashboardSidebar;
