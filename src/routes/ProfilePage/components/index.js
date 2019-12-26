import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import EmailImg from 'assets/images/email.png';
import PhoneImg from 'assets/images/phone.png';
import EditImg from 'assets/images/edit.png';
import BasicImg from 'assets/images/basic.png';
import WorkerImg from 'assets/images/worker.png';
import ProfileAvatar from 'assets/test/Profile.png';

import styles from './styles';

/**
 * @name ProfilePage
 *
 *
 * @param {Object}   user
 * @param {Object}   literals
 *
 * @returns {JSX}
 */
class ProfilePage extends Component {
  static propTypes = {
    literals: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  componentDidUpdate() {
  }

  handleRedirect = path => () => {
    const {
      history,
    } = this.props;

    history.push(path);
  };

  render() {
    const {
      literals,
      classes,
    } = this.props;

    return (
      <div className='ProfilePage'>
        <Grid container justify='flex-end'>
          <Grid item>
            <Button variant='contained' color='secondary' className={classes.button} onClick={this.handleRedirect('/profile/professional')}>
              {literals.proprofile}
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
              <Grid item md={11} xs={12}>
                <Grid container justify='space-between' alignItems='center'>
                  <Grid item>
                    <Typography noWrap className={classes.infoTitle}>
                      {literals.basicinfo}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Grid container alignItems='center'>
                      <img src={EditImg} alt='edit_icon' className={classes.edit} onClick={this.handleRedirect('/profile/edit')} />
                      <Typography noWrap className={classes.edit} onClick={this.handleRedirect('/profile/edit')}>
                        {literals.edit}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container className={classes.infoBox}>
                  <Grid item container xs={2} className={classes.boxLeft} alignItems='center' justify='center'>
                    <img src={BasicImg} alt='basic_icon' />
                  </Grid>
                  <Grid item xs={10} className={classes.boxRight}>
                    <Grid container spacing={16} direction='column'>
                      <Grid item container spacing={16}>
                        <Grid item className={classes.infoSet}>
                          <Typography noWrap className={classes.label}>
                            {literals.address}
                          </Typography>
                          <Typography noWrap className={classes.text}>
                            Tejgoan Industrial Area
                          </Typography>
                        </Grid>
                        <Grid item className={classes.infoSet}>
                          <Typography noWrap className={classes.label}>
                            {literals.number}
                          </Typography>
                          <Typography noWrap className={classes.text}>
                            1208
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item container spacing={16}>
                        <Grid item className={classes.infoSet}>
                          <Typography noWrap className={classes.label}>
                            {literals.country}
                          </Typography>
                          <Typography noWrap className={classes.text}>
                            Bangladesh
                          </Typography>
                        </Grid>
                        <Grid item className={classes.infoSet}>
                          <Typography noWrap className={classes.label}>
                            {literals.region}
                          </Typography>
                          <Typography noWrap className={classes.text}>
                            Dhaka
                          </Typography>
                        </Grid>
                        <Grid item className={classes.infoSet}>
                          <Typography noWrap className={classes.label}>
                            {literals.pc}
                          </Typography>
                          <Typography noWrap className={classes.text}>
                            123455
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={11} xs={12}>
                <Grid container justify='space-between' alignItems='center'>
                  <Grid item>
                    <Typography noWrap className={classes.infoTitle}>
                      {literals.workerinfo}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Grid container alignItems='center'>
                      <img src={EditImg} alt='edit_icon' className={classes.edit} onClick={this.handleRedirect('/profile/edit')} />
                      <Typography noWrap className={classes.edit} onClick={this.handleRedirect('/profile/edit')}>
                        {literals.edit}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container className={classes.infoBox}>
                  <Grid item container xs={2} className={classes.boxLeft} alignItems='center' justify='center'>
                    <img src={WorkerImg} alt='worker_icon' />
                  </Grid>
                  <Grid item xs={10} className={classes.boxRight}>
                    <Grid container spacing={16} direction='column'>
                      <Grid item container spacing={16}>
                        <Grid item className={classes.infoSet}>
                          <Typography noWrap className={classes.label}>
                            {literals.workerid}
                          </Typography>
                          <Typography noWrap className={classes.text}>
                            192837
                          </Typography>
                        </Grid>
                        <Grid item className={classes.infoSet}>
                          <Typography noWrap className={classes.label}>
                            {literals.position}
                          </Typography>
                          <Typography noWrap className={classes.text}>
                            Nurse
                          </Typography>
                        </Grid>
                        <Grid item className={classes.infoSet}>
                          <Typography noWrap className={classes.label}>
                            {literals.factory}
                          </Typography>
                          <Typography noWrap className={classes.text}>
                            Fake Factory 32
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item container spacing={16}>
                        <Grid item className={classes.infoSet}>
                          <Typography noWrap className={classes.label}>
                            {literals.startdate}
                          </Typography>
                          <Typography noWrap className={classes.text}>
                            12/11/2000
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(ProfilePage);
