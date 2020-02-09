import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import DashboardPageComponents from '../components';
import {
  fetchdashboardsAction,
  searchdashboardsAction,
  saveDashboardAction,
} from '../modules/actions';

function mapStateToProps(state) {
  return {
    dashboards: state.dashboard.dashboards || [],
    totalDashboards: state.dashboard.dashboards || [],
    literals: state.i18n.literals.dashboard || {},
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadDashboards: bindActionCreators(fetchdashboardsAction, dispatch),
    saveDashboard: bindActionCreators(saveDashboardAction, dispatch),
    search: bindActionCreators(searchdashboardsAction, dispatch),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DashboardPageComponents));
