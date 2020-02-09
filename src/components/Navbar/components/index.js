import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Home from '@material-ui/icons/Home';
import Storage from '@material-ui/icons/Storage';
import FileCopy from '@material-ui/icons/FileCopy';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {
  COMPARABLE_URL,
} from '../../../constants/urls';
import '../styles.css';

class Navbar extends React.Component {
  state = {
    anchorEl: null,
  };

  static propTypes = {
    literals: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const { literals, title } = this.props;
    return (
      <div>
        <AppBar position='static' className='Navbar' color='default'>
          <Toolbar className='Navbar--top'>
            <Typography variant='title' className='grow text-align-left Navbar--top--title'>
              <span className='Navbar--top--title--main'>{ literals.logo }</span>
              <span className='Navbar--top--title--sub'>{ title }</span>
            </Typography>
            <div className='Navbar--top--right'>
              <IconButton
                aria-haspopup='true'
                onClick={this.handleClick}
                color='inherit'
              >
                <AccountCircle />
                <span>Federico Ramirez Cuenca</span>
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                open={open}
                onClose={this.handleClose}
              >
                <MenuItem>{ literals.profile }</MenuItem>
                <MenuItem>{ literals.logout }</MenuItem>
              </Menu>
            </div>
          </Toolbar>
          <Toolbar className='Navbar--bottom'>
            <span className='Navbar--bottom--left'>
              <Storage className='mlr15' />
            </span>
            <Button color='inherit'>
              <Home className='mlr15' />
              { literals.first }
            </Button>
            <Button color='inherit'>
              <FileCopy className='mlr15' />
              { literals.second }
            </Button>
            <Button color='inherit'>
              <Home className='mlr15' />
              { literals.third }
            </Button>
            <a href={`/${COMPARABLE_URL}`}>
              <Button color='inherit'>
                <Home className='mlr15' />
                { literals.forth }
              </Button>
            </a>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default Navbar;
