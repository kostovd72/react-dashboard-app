import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import DiagnosticsTable from 'components/DiagnosticsTable';

import EmailImg from 'assets/images/email.png';
import PhoneImg from 'assets/images/phone.png';
import ProfileAvatar from 'assets/test/Profile.png';
import HeaderAvatar from 'assets/test/header_avatar.png';

import styles from './styles';

/**
 * @name ProfileProPage
 *
 *
 * @param {Object}   user
 * @param {Object}   literals
 *
 * @returns {JSX}
 */
class ProfileProPage extends Component {
  static propTypes = {
    literals: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  state = {
    value: 0,
  };

  componentDidUpdate() {
  }

  handleRedirect = path => () => {
    const {
      history,
    } = this.props;

    history.push(path);
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const {
      literals,
      classes,
    } = this.props;

    const { value } = this.state;

    let id = 0;

    function createData(name) {
      id += 1;
      return {
        id,
        name,
      };
    }

    const rows = [
      createData('Naina Johar'),
      createData('Naina Johar'),
      createData('Naina Johar'),
      createData('Naina Johar'),
      createData('Naina Johar'),
    ];

    return (
      <div className='WorkersPage'>
        <Grid container justify='flex-end'>
          <Grid item>
            <Button variant='contained' color='secondary' className={classes.button} onClick={this.handleRedirect('/profile')}>
              {literals.perprofile}
            </Button>
          </Grid>
        </Grid>
        <Grid container className={classes.mainSection} spacing={32}>
          <Grid item>
            <img className={classes.avatar} src={ProfileAvatar} alt='profile_avatar' />
          </Grid>
          <Grid item>
            <Typography noWrap className={classes.name}>
              Aarusha Badour
            </Typography>
            <Typography noWrap className={classes.national}>
              <span className={classes.nationalSpan}>{literals.nationalid}</span>
              {' '}
              123456789
            </Typography>
          </Grid>
          <Grid item>
            <Typography noWrap className={classes.status}>
              Active
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid container item lg={3} md={4} sm={6} xs={12} className={classes.contactInfo} direction='column' spacing={16}>
            <Grid container item justify='space-between' alignItems='center'>
              <Grid item>
                <Typography noWrap className={classes.label}>
                  {literals.email}
                </Typography>
                <Typography noWrap className={classes.text}>
                  aarusha2email.com
                </Typography>
              </Grid>
              <Grid item>
                <img src={EmailImg} alt='email_icon' />
              </Grid>
            </Grid>
            <Grid container item justify='space-between' alignItems='center'>
              <Grid item>
                <Typography noWrap className={classes.label}>
                  {literals.tel}
                </Typography>
                <Typography noWrap className={classes.text}>
                  798645132985
                </Typography>
              </Grid>
              <Grid item>
                <img src={PhoneImg} alt='email_icon' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={9} md={8} xs={12} className={classes.boxSection}>
            <Grid container justify='flex-end' spacing={32} direction='row'>
              <Grid container item md={11} xs={12} direction='column'>
                <Grid item>
                  <Tabs value={value} onChange={this.handleChange}>
                    <Tab label={literals.patients} />
                    <Tab label={literals.diagnostics} />
                  </Tabs>
                </Grid>
                {value === 0 && (
                  <Grid item container className={classes.tabContainer}>
                    <Grid item container className={classes.tabHeader} alignItems='center'>
                      <Typography noWrap className={classes.selectText}>
                        {literals.filterby}
                        :
                      </Typography>
                      <select className={classes.select}>
                        <option>{literals.status}</option>
                        <option value={1}>Active</option>
                        <option value={2}>Withdrwan</option>
                      </select>
                      <select className={classes.select}>
                        <option>{literals.factory}</option>
                        <option value={1}>Factory1</option>
                        <option value={2}>Factory2</option>
                        <option value={3}>Factory3</option>
                      </select>
                    </Grid>
                    <Grid item>
                      <Table className={classes.table}>
                        <colgroup>
                          <col width='80%' />
                          <col width='20%' />
                        </colgroup>
                        <TableBody>
                          {rows.map((row) => {
                            return (
                              <TableRow key={row.id}>
                                <TableCell component='th' scope='row'>
                                  <Grid container alignItems='center' spacing={16}>
                                    <Grid item>
                                      <img src={HeaderAvatar} alt='header_avatar' onClick={() => this.handleRedirect('/patients/profile')} />
                                    </Grid>
                                    <Grid item>
                                      <Typography noWrap>
                                        {row.name}
                                      </Typography>
                                    </Grid>
                                  </Grid>
                                </TableCell>
                                <TableCell numeric>
                                  <Link to={`/patients/profile/${row.id}`}>
                                    <Typography noWrap className={classes.link}>
                                      {literals.profile}
                                    </Typography>
                                  </Link>
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </Grid>
                  </Grid>
                )}
                {value === 1 && (
                  <Grid item container className={classes.tabContainer}>
                    <DiagnosticsTable search={false} entires={false} photoShow={false} />
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(ProfileProPage);
