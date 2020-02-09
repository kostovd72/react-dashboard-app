import React from 'react';
import DashboardPage from '../components/index';
import {
  fetchdashboardsAction,
  searchdashboardsAction,
  saveDashboardAction,
} from '../modules/actions';

describe('<DashboardPage/>', () => {
  test('Component Mount test', () => {
    const data = [
      {
        viewId: 1,
        name: 'Tesla Motors - Vista General',
        type: 'Table',
      },
      {
        viewId: 2,
        name: 'Tesla Motors - Vista Anual',
        type: 'Graph',
      },
      {
        viewId: 3,
        name: 'Tesla Motors - Vista por Trimestres',
        type: 'Graph',
      },
    ];
    const literals = {
      title: 'Todas tus vistas',
      createDashboard: 'Create Dashboard',
      public: 'Public',
      search: 'Search',
      applicant: 'Applicie',
      modal: {
        name: 'Name',
        ok: 'OK',
        cancel: 'Cancel',
      },
    };
    const component = shallow(<DashboardPage
      dashboards={data}
      literals={literals}
      totalDashboards={data}
      saveDashboard={saveDashboardAction}
      search={searchdashboardsAction}
      loadDashboards={fetchdashboardsAction}
    />);
    expect(component.find('.Dashboard--list__list-item').length).toEqual(3);
  });
});
