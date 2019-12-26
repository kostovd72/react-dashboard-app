import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from 'routes/DiagnosticsNewPage/modules/actions';
import DiagnosticsNewPageComponents from '../components';

function mapStateToProps(state) {
  return {
    nodes: state.diagnosis.nodes,
    isAuthenticated: state.session.authenticated,
    literals: state.i18n.literals.diagnosticsNewPage,
    user: state.session.user,
  };
}

export default withRouter(connect(mapStateToProps, actions)(DiagnosticsNewPageComponents));
