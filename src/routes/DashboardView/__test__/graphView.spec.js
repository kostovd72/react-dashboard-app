import React from 'react';
import GraphView from '../components/GraphView';
describe('<GraphView/>', () => {
  test('Component Mount test', () => {
    const item = {
      eeff: [
        {
          name: 'Estado Financiero 5',
          alias: 'EEFFPT00001',
          values: [
            {
              calcValue: 2.35,
              name: 'BAL',
              value: '= (@ANC * 2) / (@AC / 3)',
            },
            {
              calcValue: 0.35,
              name: 'ANCIFIMT',
              value: '= (@AC / 3)',
            },
          ],
        },
      ],
      epigraph: [
        {
          alias: 'BAL',
          isComparable: null,
          isVisible: null,
          items: null,
          name: 'Cuenta de resultados',
          order: null,
          type: null,
        },
        {
          alias: 'ANCIFIMT',
          isComparable: null,
          isVisible: null,
          items: null,
          name: 'Inmuebles, maquinaria y equipo',
          order: null,
          type: null,
        },
      ],
      graphId: 1,
      height: 2,
      name: 'EE.FF. trimestral',
      position_x: '0',
      position_y: '5',
      sourceView: 1,
      type: 2,
      viewId: 12,
      width: 8,
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
    }
    const component = shallow(<GraphView
      item={item}
      literals={literals}
    />);
    expect(component.find('h5').text()).toEqual('EE.FF. trimestral');
  });
});
