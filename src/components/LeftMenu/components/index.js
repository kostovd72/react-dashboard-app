import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import GroupIcon from 'assets/images/Group.png';

import styles from './styles';

/**
 * @name LeftMenu
 *
 *
 * @param {Object}   user
 * @param {Object}   literals
 *
 * @returns {JSX}
 */
class LeftMenuComponent extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    header: PropTypes.object.isRequired,
    literals: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  }

  shouldComponentUpdate(nextProps) {
    const {
      header,
    } = this.props;

    if (header.open === nextProps.header.open) {
      return false;
    }

    return true;
  }

  handleRedirect = path => () => {
    const {
      history,
    } = this.props;

    history.push(path);
  };

  render() {
    const {
      classes,
      header,
      literals,
    } = this.props;

    return (
      <Drawer
        variant='permanent'
        classes={{
          paper: classNames(classes.root, !header.open && classes.drawerPaperClose),
        }}
        open={header.open}
      >
        <div className={classes.topRow}>
          <img className={classes.groupIcon} src={GroupIcon} alt='Group Icon' />
          <Typography className={classes.groupText}>
            Factory 1
          </Typography>
        </div>
        <Divider className={classes.divider} />
        <List className={classes.list}>
          <ListItem button className={classes.listItem} onClick={this.handleRedirect('/patients')}>
            <ListItemText classes={{ primary: classes.listText }} primary={literals.patients} />
          </ListItem>
          <ListItem button className={classes.listItem} onClick={this.handleRedirect('/diagnostics')}>
            <ListItemText classes={{ primary: classes.listText }} primary={literals.diagnostics} />
          </ListItem>
          <ListItem button className={classes.listItem} onClick={this.handleRedirect('/dashboard')}>
            <ListItemText classes={{ primary: classes.listText }} primary={literals.dashboard} />
          </ListItem>
          <ListItem button className={classes.listItem} onClick={this.handleRedirect('/help')}>
            <ListItemText classes={{ primary: classes.listText }} primary={literals.help} />
          </ListItem>
        </List>
      </Drawer>
    );
  }
}

export default withStyles(styles)(LeftMenuComponent);
