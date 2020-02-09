import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import DashboardViewComponents from '../components';
import {
  fetchdashboardsAction,
  loadTypeOptionsAction,
  loadTableOptionsAction,
  dashboardChangeAction,
  cancelModalAction,
  saveModalAction,
  deleteGraphAction,
  saveDashboardAction,
  changeLayoutAction,
  getFiltersAction,
} from '../modules/actions';

function mapStateToProps(state) {
  return {
    dashboard: state.dashboardView.dashboard || {},
    selectedTable: state.dashboardView.selectedTable || {},
    literals: state.i18n.literals.dashboardview || {},
    typeOptions: state.dashboardView.typeOptions || [],
    tableOptions: state.dashboardView.tableOptions || [],
    filters: state.dashboardView.filters || {},
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadDashboards: bindActionCreators(fetchdashboardsAction, dispatch),
    loadTypeOptions: bindActionCreators(loadTypeOptionsAction, dispatch),
    loadTableOptions: bindActionCreators(loadTableOptionsAction, dispatch),
    dashboardChange: bindActionCreators(dashboardChangeAction, dispatch),
    cancelModal: bindActionCreators(cancelModalAction, dispatch),
    saveModal: bindActionCreators(saveModalAction, dispatch),
    deleteGraph: bindActionCreators(deleteGraphAction, dispatch),
    saveDashboard: bindActionCreators(saveDashboardAction, dispatch),
    changeLayout: bindActionCreators(changeLayoutAction, dispatch),
    getFilters: bindActionCreators(getFiltersAction, dispatch),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DashboardViewComponents));
