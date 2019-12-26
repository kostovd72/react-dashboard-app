import React from 'react';
import DashboardView from '../components/index';
import {
  dashboardChangeAction,
  saveModalAction,
  changeLayoutAction,
  loadTableOptionsAction,
  loadTypeOptionsAction,
  fetchdashboardsAction,
  cancelModalAction,
  deleteGraphAction,
  saveDashboardAction,
} from '../modules/actions';

describe('<DashboardView/>', () => {
  test('Component Mount test', () => {
    const data = {
      epigraph: null,
      eeff: null,
      graph: [],
      name: 'Tesla Motors - Vista Anual',
      sticky_col: null,
      sticky_row: null,
      type: 'Graph',
      unit: null,
      viewId: 2,
    };
    const literals = {
      dashboardLink: 'Dashboard',
      addGraph: 'Create Graph',
      editGraph: 'Edit Graph',
      deleteGraph: 'Delete Graph',
      saveDashboard: 'Save Dashboard',
      emptyGraph: 'Add Graph',
      modal: {
        name: 'Name',
        type: 'Type',
        dashboard: 'Dashboard',
        treePlaceholder: 'Please Select',
        ok: 'OK',
        cancel: 'Cancel',
        epigraph: 'Epigraph',
        eeff: 'EEFF',
      },
    };
    const component = shallow(<DashboardView
      dashboard={data}
      literals={literals}
      typeOptions={[]}
      tableOptions={[]}
      selectedTable={{}}
      loadDashboards={fetchdashboardsAction}
      loadTableOptions={loadTableOptionsAction}
      loadTypeOptions={loadTypeOptionsAction}
      cancelModal={cancelModalAction}
      deleteGraph={deleteGraphAction}
      selectedTable={{}}
      saveDashboard={saveDashboardAction}
      match={{
        params: {
          id: 2,
        },
      }}
      typeOptions={[]}
      tableOptions={[]}
      dashboardChange={dashboardChangeAction}
      saveModal={saveModalAction}
      changeLayout={changeLayoutAction}
    />);
    expect(component.find('.DashboardView--graph--empty').length).toEqual(1);
  });
});
