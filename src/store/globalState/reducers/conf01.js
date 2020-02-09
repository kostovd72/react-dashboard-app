import { routerReducer as router } from 'react-router-redux';
import { sessionReducer as session } from 'redux-react-session';
import i18n from 'components/LanguageSelector/modules';
import { reducer as idle } from 'modules/idleMonitor';
import login from 'routes/Login/modules';
import signup from 'routes/Signup/modules';
import header from 'components/Header/modules';
import patients from 'routes/PatientsPage/modules';
import diagnosis from 'routes/DiagnosticsNewPage/modules';
import dashboard from 'routes/DashboardPage/modules';
import dashboardView from 'routes/DashboardView/modules';
import global from '../global';

export default {
  router,
  session,
  i18n,
  idle,
  login,
  signup,
  global,
  header,
  patients,
  diagnosis,
  dashboard,
  dashboardView,
};
