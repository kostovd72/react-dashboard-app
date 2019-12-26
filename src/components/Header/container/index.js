import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import HeaderComponent from '../components';

import * as actions from '../modules/actions';

function mapStateToProps(state) {
  return {
    header: state.header,
    isAuthenticated: state.session.authenticated,
    literals: state.i18n.literals.mainpage,
    user: state.session.user,
  };
}

const mapDispatchToProps = dispatch => ({
  headerActions: bindActionCreators(actions, dispatch),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderComponent));
