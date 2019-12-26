import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { initPatients } from 'routes/PatientsPage/modules/actions';
import DiagnosticsSearchPageComponents from '../components';

function mapStateToProps(state) {
  return {
    patients: state.patients.patientsList,
    isAuthenticated: state.session.authenticated,
    literals: state.i18n.literals.diagnosticsSearchPage,
    user: state.session.user,
  };
}

export default withRouter(connect(mapStateToProps, dispatch => bindActionCreators(initPatients, dispatch))(DiagnosticsSearchPageComponents));
