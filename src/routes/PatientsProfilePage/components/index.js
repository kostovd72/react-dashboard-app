import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import AddCircleOutlined from '@material-ui/icons/AddCircleOutlined';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import PatientInfo from 'components/PatientInfo';
import PatientContact from 'components/PatientContact';

import EditImg from 'assets/images/edit.png';
import BasicImg from 'assets/images/basic.png';
import WorkerImg from 'assets/images/worker.png';
import OtherImg from 'assets/images/other.png';
import SecurityImg from 'assets/images/security.png';

import styles from './styles';

/**
 * @name PatientsProfilePage
 *
 *
 * @param {Object}   user
 * @param {Object}   literals
 *
 * @returns {JSX}
 */
class PatientsProfilePage extends Component {
  static propTypes = {
    literals: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
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
      match,
    } = this.props;

    const patientsId = match.params.patientsId;

    return (
      <div className='ProfilePage'>
        <Grid container justify='flex-end'>
          <Grid item>
            {/* <Button variant='contained' color='primary' className={classes.button} onClick={this.handleRedirect('/profile/professional')}>
              <AddCircleOutlined fontSize='large' className={classes.leftIcon} />
              {literals.newdiagnosis}
            </Button> */}
            <Button variant='contained' color='secondary' className={classes.button} onClick={this.handleRedirect(`/patients/profile/medical/${patientsId}`)}>
              {literals.medicalprofile}
            </Button>
          </Grid>
        </Grid>
        <Grid container className={classes.patientInfo}>
          <PatientInfo />
        </Grid>
        <Grid container>
          <Grid item lg={3} md={4} sm={6} xs={12} className={classes.contactInfo}>
            <PatientContact />
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
                      <img src={EditImg} alt='edit_icon' className={classes.edit} onClick={this.handleRedirect(`/patients/profile/edit/${patientsId}`)} />
                      <Typography noWrap className={classes.edit} onClick={this.handleRedirect(`/patients/profile/edit/${patientsId}`)}>
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
                      <img src={EditImg} alt='edit_icon' className={classes.edit} onClick={this.handleRedirect(`/patients/profile/edit/${patientsId}`)} />
                      <Typography noWrap className={classes.edit} onClick={this.handleRedirect(`/patients/profile/edit/${patientsId}`)}>
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
                        <Grid item className={classes.infoSet}>
                          <Typography noWrap className={classes.label}>
                            {literals.insurancestartdate}
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
              <Grid item md={11} xs={12}>
                <Grid container justify='space-between' alignItems='center'>
                  <Grid item>
                    <Typography noWrap className={classes.infoTitle}>
                      {literals.otherinfo}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Grid container alignItems='center'>
                      <img src={EditImg} alt='edit_icon' className={classes.edit} onClick={this.handleRedirect(`/patients/profile/edit/${patientsId}`)} />
                      <Typography noWrap className={classes.edit} onClick={this.handleRedirect(`/patients/profile/edit/${patientsId}`)}>
                        {literals.edit}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container className={classes.infoBox}>
                  <Grid item container xs={2} className={classes.boxLeft} alignItems='center' justify='center'>
                    <img src={OtherImg} alt='other_icon' />
                  </Grid>
                  <Grid item xs={10} className={classes.boxRight}>
                    <Grid container spacing={16} direction='column'>
                      <Grid item container spacing={16}>
                        <Grid item className={classes.infoSet}>
                          <Typography noWrap className={classes.label}>
                            {literals.fathersname}
                          </Typography>
                          <Typography noWrap className={classes.text}>
                            Humayun Azad
                          </Typography>
                        </Grid>
                        <Grid item className={classes.infoSet}>
                          <Typography noWrap className={classes.label}>
                            {literals.mothersname}
                          </Typography>
                          <Typography noWrap className={classes.text}>
                            Kajol Chopra
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item container spacing={16}>
                        <Grid item className={classes.infoSet}>
                          <Typography noWrap className={classes.label}>
                            {literals.homeaddress}
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
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={11} xs={12}>
                <Grid container justify='space-between' alignItems='center'>
                  <Grid item>
                    <Typography noWrap className={classes.infoTitle}>
                      {literals.beneficiary}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Grid container alignItems='center'>
                      <img src={EditImg} alt='edit_icon' className={classes.edit} onClick={this.handleRedirect(`/patients/profile/edit/${patientsId}`)} />
                      <Typography noWrap className={classes.edit} onClick={this.handleRedirect(`/patients/profile/edit/${patientsId}`)}>
                        {literals.edit}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container className={classes.infoBox}>
                  <Grid item container xs={2} className={classes.boxLeft} alignItems='center' justify='center'>
                    <img src={SecurityImg} alt='security_icon' />
                  </Grid>
                  <Grid item xs={10} className={classes.boxRight}>
                    <Grid container spacing={16} direction='column'>
                      <Grid item container spacing={16}>
                        <Grid item className={classes.infoSet}>
                          <Typography noWrap className={classes.label}>
                            {literals.name}
                          </Typography>
                          <Typography noWrap className={classes.text}>
                            192837
                          </Typography>
                        </Grid>
                        <Grid item className={classes.infoSet}>
                          <Typography noWrap className={classes.label}>
                            {literals.id}
                          </Typography>
                          <Typography noWrap className={classes.text}>
                            Nurse
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item container spacing={16}>
                        <Grid item className={classes.infoSet}>
                          <Typography noWrap className={classes.label}>
                            {literals.address}
                          </Typography>
                          <Typography noWrap className={classes.text}>
                            192837
                          </Typography>
                        </Grid>
                        <Grid item className={classes.infoSet}>
                          <Typography noWrap className={classes.label}>
                            {literals.number}
                          </Typography>
                          <Typography noWrap className={classes.text}>
                            Nurse
                          </Typography>
                        </Grid>
                        <Grid item className={classes.infoSet}>
                          <Typography noWrap className={classes.label}>
                            {literals.pc}
                          </Typography>
                          <Typography noWrap className={classes.text}>
                            192837
                          </Typography>
                        </Grid>
                        <Grid item className={classes.infoSet}>
                          <Typography noWrap className={classes.label}>
                            {literals.region}
                          </Typography>
                          <Typography noWrap className={classes.text}>
                            Nurse
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item container spacing={16}>
                        <Grid item className={classes.infoSet}>
                          <Typography noWrap className={classes.label}>
                            {literals.tel}
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

export default withStyles(styles)(PatientsProfilePage);
