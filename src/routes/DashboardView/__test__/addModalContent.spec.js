import React from 'react';
import AddModalContent from '../components/AddModalContent';
describe('<AddModalContent/>', () => {
  test('Component Mount test', () => {
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
    const component = shallow(<AddModalContent
      selectedTable={{}}
      dashborad={{}}
      typeOptions={[]}
      tableOptions={[]}
      literals={literals}
      onRef={() => {}}
    />);
    expect(component.find('.DashboardView__AddModal--formControl').length).toEqual(6);
  });
});
