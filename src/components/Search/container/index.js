import { connect } from 'react-redux';
import { fetchPatientsAction } from 'routes/PatientsPage/modules/actions';
import SearchComponent from '../components';

export default connect(null, { fetchPatientsAction })(SearchComponent);
