import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import TableComponents from '../components';
import fetchdashboardsAction from '../modules/actions';

function mapStateToProps(state) {
  return {
    dashboards: state.dashboard.dashboards || [],
    literals: state.i18n.literals.dashboard || {},
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadDashboards: bindActionCreators(fetchdashboardsAction, dispatch),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TableComponents));
