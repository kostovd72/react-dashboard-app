import React from 'react';
import AddModalContent from '../components/AddModalContent';
describe('<AddModalContent/>', () => {
  test('Component Mount test', () => {
    const literals = {
      title: 'Comparables',
      modalTitle: 'Add Clients',
      create: 'Create Comparables',
      addClient: 'Add Clients',
      clientCompare: 'Client Comparable',
      eeffList: 'EEFF List',
      eeff: 'EEFF',
      modal: {
        searchNameLabel: 'Search Name',
        searchName: 'Search Name',
        noResult: 'No result? Add manually!',
        name: 'Name',
        advancedSearch: 'Advanced Search',
        code: 'Code',
        codeLocal: 'Code Local',
        segment: 'Segment',
        sector: 'Sector',
        type: 'Type',
        rating: 'Rating',
        country: 'Country',
        countryGroup: 'Country Group',
        checkAll: 'Check All',
        compare: 'Compare',
        createCompare: 'Create and Compare',
        cancel: 'Cancel',
        search: 'Search',
      },
    };
    const component = shallow(<AddModalContent
      selectedTable={{}}
      dashborad={{}}
      typeOptions={[]}
      countryOptions={[]}
      countryGroupOptions={[]}
      segmentOptions={[]}
      sectorOptions={[]}
      ratingOptions={[]}
      literals={literals}
      onRef={() => {}}
      search={() => {}}
      save={() => {}}
      addModalClose={() => {}}
    />);
    expect(component.find('.ClientsView__AddModal').length).toEqual(1);
  });
});
