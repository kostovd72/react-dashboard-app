import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddCircleOutlined from '@material-ui/icons/AddCircleOutlined';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Pagination from 'components/Pagination';
import Search from 'components/Search';

import { DownloadIcon } from 'components/Icons';

import HeaderAvatar from 'assets/test/header_avatar.png';

import styles from './styles';

/**
 * @name PatientsPage
 *
 *
 * @param {Object}   user
 * @param {Object}   literals
 *
 * @returns {JSX}
 */
class PatientsPage extends Component {
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

    let id = 0;

    function createData(name, status, factory) {
      id += 1;
      return {
        id,
        name,
        status,
        factory,
      };
    }

    const rows = [
      createData('Naina Johar', 'Active', 'Factory 1'),
      createData('Naina Johar', 'Active', 'Factory 1'),
      createData('Naina Johar', 'Active', 'Factory 1'),
      createData('Naina Johar', 'Active', 'Factory 1'),
      createData('Naina Johar', 'Active', 'Factory 1'),
      createData('Naina Johar', 'Active', 'Factory 1'),
      createData('Naina Johar', 'Active', 'Factory 1'),
      createData('Naina Johar', 'Active', 'Factory 1'),
      createData('Naina Johar', 'Active', 'Factory 1'),
    ];

    return (
      <div className='PatientsPage'>
        <Grid container justify='flex-end'>
          <Grid item>
            <Button variant='contained' color='primary' className={classes.button} onClick={this.handleRedirect('/patients/new/')}>
              <AddCircleOutlined fontSize='large' className={classes.addIcon} />
              {literals.newpatient}
            </Button>
            <Button variant='contained' color='secondary' className={classes.button}>
              <DownloadIcon className={classes.downIcon} />
              {literals.downloaddata}
            </Button>
          </Grid>
        </Grid>
        <Grid container className={classes.searchBar} spacing={24} alignItems='center'>
          <Grid item md={5} lg={4} xs={12}>
            <Search placeholder={literals.search} />
          </Grid>
          <Grid item md={7} lg={8} xs={12}>
            <div className={classes.filter}>
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
            </div>
          </Grid>
        </Grid>
        <Grid container justify='flex-end' className={classes.count}>
          <Grid item>
            <Typography noWrap className={classes.entires}>
              451
              {literals.entires}
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <div className={classes.tableContainer}>
              <Table className={classes.table}>
                <colgroup>
                  <col width='35%' />
                  <col width='20%' />
                  <col width='25%' />
                  <col width='20%' />
                </colgroup>
                <TableBody>
                  {rows.map((row) => {
                    return (
                      <TableRow key={row.id}>
                        <TableCell component='th' scope='row'>
                          <Typography noWrap>
                            <img className={classes.avatar} src={HeaderAvatar} alt='header_avatar' />
                            {row.name}
                          </Typography>
                        </TableCell>
                        <TableCell numeric>
                          <Typography
                            noWrap
                            className={classes.statusActive}
                          >
                            {row.status}
                          </Typography>
                        </TableCell>
                        <TableCell numeric>
                          <Typography noWrap>
                            {row.factory}
                          </Typography>
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
            </div>
          </Grid>
        </Grid>
        <Grid container className={classes.pagination} justify='center'>
          <Grid item>
            <Pagination />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(PatientsPage);
