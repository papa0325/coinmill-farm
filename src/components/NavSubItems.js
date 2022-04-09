import { useState } from 'react';
import {
  NavLink as RouterLink,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, ListItem, List, Collapse } from '@material-ui/core';
import {
  FaAngleDown,
  FaAngleUp
} from 'react-icons/fa';

const NavSubItems = ({
  href,
  icon: Icon,
  title,
  subitems,
  ...rest
}) => {
  const [openList, setOpenList] = useState(false);

  return (
    <List 
      disablePadding
      sx={{
        ...(openList && {
            background: 'rgba(255, 255, 255, 0.04)',
            borderLeft: '2px solid #FF5E15',
        }),
      }}
    >
      <ListItem
        disableGutters
        sx={{
          display: 'flex',
          py: 0,
        }}
        {...rest}
        onClick={()=>setOpenList(!openList)}
      >
        <Button
          sx={{
            color: 'text.secondary',
            fontWeight: 'medium',
            justifyContent: 'flex-start',
            letterSpacing: 0,
            py: 1.25,
            pl: '40px',
            fontSize: '16px',
            textTransform: 'none',
            width: '100%',
            ...(openList && {
              color: 'primary.main'
            }),
            '& svg': {
              mr: 1
            }
          }}
        >
          <img src={"/static/icons/" + Icon + ".svg"} alt={Icon} style={{marginRight:'10px'}}/>
          <span>
            {title}
          </span>
          {openList ? <FaAngleUp /> : <FaAngleDown />}
        </Button>
      </ListItem>
      <Collapse in={openList} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {subitems.map((item, i) => (
            <ListItem
              disablePadding
              key={item.title}
            >
              <Button
                component={RouterLink}
                sx={{
                  color: 'text.secondary',
                  fontWeight: 'medium',
                  justifyContent: 'flex-start',
                  letterSpacing: 0,
                  py: 1.25,
                  pl: '70px',
                  fontSize: '16px',
                  textTransform: 'none',
                  width: '100%',
                  ...(openList && {
                    color: 'primary.main'
                  }),
                  '& svg': {
                    mr: 1
                  }
                }}
                to={item.href}
              >
                <span>
                  {item.title}
                </span>
              </Button>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </List>
  );
};

NavSubItems.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.elementType,
  title: PropTypes.string
};

export default NavSubItems;
