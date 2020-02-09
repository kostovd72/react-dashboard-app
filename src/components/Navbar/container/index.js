import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavbarComponents from '../components';

function mapStateToProps(state) {
  return {
    literals: state.i18n.literals.navbar || {},
  };
}

function mapDispatchToProps() {
  return {
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavbarComponents));
