import React from 'react';
import Comparable from '../components/index';
import {
  loadTypeOptionsAction,
  loadCountryOptionsAction,
  loadCountryGroupOptionsAction,
  loadSegmentOptionsAction,
  searchClientsAction,
  loadSectorOptionsAction,
  compareClientsAction,
} from '../modules/actions';

describe('<Comarable/>', () => {
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
    const component = shallow(<Comparable
      literals={literals}
      segmentOptions={[]}
      sectorOptions={[]}
      countryOptions={[]}
      countryGroupOptions={[]}
      clients={[]}
      ratingOptions={[1, 2, 3, 4, 5]}
      loadTypeOptions={loadTypeOptionsAction}
      loadCountryOptions={loadCountryOptionsAction}
      loadCountryGroupOptions={loadCountryGroupOptionsAction}
      loadSegmentOptions={loadSegmentOptionsAction}
      typeOptions={[]}
      search={searchClientsAction}
      loadSectorOptions={loadSectorOptionsAction}
      compareClients={compareClientsAction}
    />);
    expect(component.find('.ClientsView--content--empty').length).toEqual(1);
  });
});
