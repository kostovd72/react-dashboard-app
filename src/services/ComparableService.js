import apiFetch from '../utils/apiFetch';

export function loadSegmentOptions() {
  // return apiFetch(
  //   'GET',
  //   { endPoint: 'client/segments' },
  // );
  const data = ['Corporativa', 'IFIs', 'FFEE'];
  return new Promise((resolve) => {
    resolve(data);
  });
}
export function saveClients(params) {
  // return apiFetch(
  //   'GET',
  //   { endPoint: `/comparable/select?clients=${JSON.stringify(params)}` },
  // );
  let data = [
    {
      id: 1,
      name: 'Client 001',
      eeff: [
        {
          alias: 'EEFF01',
          name: 'EEFF 01',
        },
        {
          alias: 'EEFF02',
          name: 'EEFF 02',
        },
        {
          alias: 'EEFF03',
          name: 'EEFF 03',
        },
        {
          alias: 'EEFF04',
          name: 'EEFF 04',
        },
        {
          alias: 'EEFF05',
          name: 'EEFF 05',
        },
      ],
    },
    {
      id: 2,
      name: 'Client 002',
      eeff: [
        {
          alias: 'EEFF01',
          name: 'EEFF 01',
        },
        {
          alias: 'EEFF02',
          name: 'EEFF 02',
        },
        {
          alias: 'EEFF03',
          name: 'EEFF 03',
        },
        {
          alias: 'EEFF04',
          name: 'EEFF 04',
        },
        {
          alias: 'EEFF05',
          name: 'EEFF 05',
        },
      ],
    },
    {
      id: 3,
      name: 'Client 003',
      eeff: [
        {
          alias: 'EEFF01',
          name: 'EEFF 01',
        },
        {
          alias: 'EEFF02',
          name: 'EEFF 02',
        },
        {
          alias: 'EEFF03',
          name: 'EEFF 03',
        },
        {
          alias: 'EEFF04',
          name: 'EEFF 04',
        },
        {
          alias: 'EEFF05',
          name: 'EEFF 05',
        },
      ],
    },
    {
      id: 4,
      name: 'Client 004',
      eeff: [
        {
          alias: 'EEFF01',
          name: 'EEFF 01',
        },
        {
          alias: 'EEFF02',
          name: 'EEFF 02',
        },
        {
          alias: 'EEFF03',
          name: 'EEFF 03',
        },
        {
          alias: 'EEFF04',
          name: 'EEFF 04',
        },
        {
          alias: 'EEFF05',
          name: 'EEFF 05',
        },
      ],
    },
    {
      id: 5,
      name: 'Client 005',
      eeff: [
        {
          alias: 'EEFF01',
          name: 'EEFF 01',
        },
        {
          alias: 'EEFF02',
          name: 'EEFF 02',
        },
        {
          alias: 'EEFF03',
          name: 'EEFF 03',
        },
        {
          alias: 'EEFF04',
          name: 'EEFF 04',
        },
        {
          alias: 'EEFF05',
          name: 'EEFF 05',
        },
      ],
    },
    {
      id: 6,
      name: 'Client 006',
      eeff: [
        {
          alias: 'EEFF01',
          name: 'EEFF 01',
        },
        {
          alias: 'EEFF02',
          name: 'EEFF 02',
        },
        {
          alias: 'EEFF03',
          name: 'EEFF 03',
        },
        {
          alias: 'EEFF04',
          name: 'EEFF 04',
        },
        {
          alias: 'EEFF05',
          name: 'EEFF 05',
        },
      ],
    },
    {
      id: 7,
      name: 'Client 007',
      eeff: [
        {
          alias: 'EEFF01',
          name: 'EEFF 01',
        },
        {
          alias: 'EEFF02',
          name: 'EEFF 02',
        },
        {
          alias: 'EEFF03',
          name: 'EEFF 03',
        },
        {
          alias: 'EEFF04',
          name: 'EEFF 04',
        },
        {
          alias: 'EEFF05',
          name: 'EEFF 05',
        },
      ],
    },
    {
      id: 8,
      name: 'Client 008',
      eeff: [
        {
          alias: 'EEFF01',
          name: 'EEFF 01',
        },
        {
          alias: 'EEFF02',
          name: 'EEFF 02',
        },
        {
          alias: 'EEFF03',
          name: 'EEFF 03',
        },
        {
          alias: 'EEFF04',
          name: 'EEFF 04',
        },
        {
          alias: 'EEFF05',
          name: 'EEFF 05',
        },
      ],
    },
  ];
  data = data.filter((e) => {
    return params.indexOf(e.id) > -1;
  });
  return new Promise((resolve) => {
    resolve(data);
  });
}

export function compareClients(data) {
  return apiFetch(
    'POST',
    { endPoint: 'comparable/create' },
    data,
  );
  // return new Promise((resolve) => {
  //   resolve([]);
  // });
}
export function createClients(data) {
  // return apiFetch(
  //   'POST',
  //   { endPoint: 'client' },
  //   data,
  // );
  return new Promise((resolve) => {
    resolve(data);
  });
}
export function searchClients() {
  // return apiFetch(
  //   'POST',
  //   { endPoint: 'client/search' },
  //    params,
  // );
  const data = [
    {
      id: 1,
      name: 'Client 001',
      code: '001',
      localCode: 'LC001',
      segment: 'Corporativa',
      sector: 'Bebidas',
      type: '',
      rating: '',
      country: 'Argentina',
      countryGroup: 'Argentina',
    },
    {
      id: 2,
      name: 'Client 002',
      code: '002',
      localCode: 'LC002',
      segment: 'IFIs',
      sector: 'Bancos',
      type: '',
      rating: '',
      country: 'EEUU',
      countryGroup: 'EEUU',
    },
    {
      id: 3,
      name: 'Client 003',
      code: '003',
      localCode: 'LC003',
      segment: 'Corporativa',
      sector: 'Consumo',
      type: '',
      rating: '',
      country: 'España',
      countryGroup: 'España',
    },
    {
      id: 4,
      name: 'Client 004',
      code: '004',
      localCode: 'LC004',
      segment: 'FFEE',
      sector: 'LBO',
      type: 'RPP',
      rating: '',
      country: 'España',
      countryGroup: 'España',
    },
    {
      id: 5,
      name: 'Client 005',
      code: '005',
      localCode: 'LC005',
      segment: 'Corporativa',
      sector: 'Electricidad',
      type: '',
      rating: '',
      country: 'Reino Unido',
      countryGroup: 'Reino Unido',
    },
    {
      id: 6,
      name: 'Client 006',
      code: '006',
      localCode: 'LC006',
      segment: 'IFIs',
      sector: 'Supranacionales',
      type: '',
      rating: '',
      country: 'EEUU',
      countryGroup: 'EEUU',
    },
    {
      id: 7,
      name: 'Client 007',
      code: '007',
      localCode: 'LC007',
      segment: 'FFEE',
      sector: 'ABF',
      type: 'Titu',
      rating: '',
      country: 'Polonia',
      countryGroup: 'Polonia',
    },
    {
      id: 8,
      name: 'Client 008',
      code: '008',
      localCode: 'LC008',
      segment: 'FFEE',
      sector: 'Derechos de Crédito',
      type: 'PF',
      rating: '',
      country: 'Brasil',
      countryGroup: 'Brasil',
    },
  ];
  return new Promise((resolve) => {
    resolve(data);
  });
}

export function loadSectorOptions() {
  // return apiFetch(
  //   'GET',
  //   { endPoint: 'client/sectors' },
  // );
  const data = [
    {
      segment: 'Corporativa',
      sectors: [
        'Aguas',
        'Alimentación',
        'Automoción',
        'Bancos',
        'Bebidas',
        'Consumo',
        'Distribución',
        'Electricidad',
        'Envases/Embalajes',
        'Farmacia',
        'Financieras',
        'Hoteles y Ocio',
        'Industria Aeroespacial',
        'Infraestructuras',
        'Ingeniería',
        'Inmobiliario',
        'Maquinaria pesada y bienes de equipo',
        'Materiales de Construcción',
        'Medios de Comunicación',
        'Papel y Celulosa',
        'Petroleo y Gas',
        'Químico',
        'Seguridad y Cash',
        'Servicios de Telecomunicaciones',
        'Servicios',
        'Siderurgia y Minería',
        'Tabaco',
        'Telecomunicaciones',
        'Transporte',
        'Varios',
      ],
    },
    {
      segment: 'IFIs',
      sectors: [
        'Aseguradoras',
        'Bancos',
        'Cámaras de Compensación',
        'Financieras',
        'Fondos Soberanos',
        'Fondos',
        'Gestoras',
        'Soberano',
        'Sociedades de Valores y otros auxiliares financieros',
        'Supranacionales',
      ],
    },
    {
      segment: 'FFEE',
      sectors: [
        'ABF',
        'CRE',
        'Derechos de Crédito',
        'LBO',
        'PF',
        'RPP',
        'Swap-Titu',
        'Titu',
      ],
    }];
  return new Promise((resolve) => {
    resolve(data);
  });
}

export function loadTypeOptions() {
  // return apiFetch(
  //     'GET',
  //     { endPoint: 'client/types' },
  // );
  const data = [
    'ABF',
    'CRE',
    'Derechos de Crédito',
    'LBO',
    'PF',
    'RPP',
    'Swap-Titu',
    'Titu',
  ];
  return new Promise((resolve) => {
    resolve(data);
  });
}

export function loadCountryGroupOptions() {
  // return apiFetch(
  //     'GET',
  //     { endPoint: 'client/cgroup' },
  // );
  const data = [
    'Alemania',
    'Argentina',
    'Brasil',
    'Chile',
    'China',
    'Colombia',
    'EEUU',
    'España',
    'Marruecos',
    'México',
    'Perú',
    'Polonia',
    'Portugal',
    'Puerto Rico',
    'Reino Unido',
    'Uruguay',
  ];
  return new Promise((resolve) => {
    resolve(data);
  });
}

export function loadCountryOptions() {
  // return apiFetch(
  //     'GET',
  //     { endPoint: 'client/countries' },
  // );
  const data = [
    'Afganistán',
    'Akrotiri',
    'Albania',
    'Alemania',
    'Andorra',
    'Angola',
    'Anguila',
    'Antártida',
    'Antigua y Barbuda',
    'Antillas Neerlandesas',
    'Arabia Saudí',
    'Arctic Ocean',
    'Argelia',
    'Argentina',
    'Armenia',
    'Aruba',
    'Ashmore andCartier Islands',
    'Atlantic Ocean',
    'Australia',
    'Austria',
    'Azerbaiyán',
    'Bahamas',
    'Bahráin',
    'Bangladesh',
    'Barbados',
    'Bélgica',
    'Belice',
    'Benín',
    'Bermudas',
    'Bielorrusia',
    'Birmania Myanmar',
    'Bolivia',
    'Bosnia y Hercegovina',
    'Botsuana',
    'Brasil',
    'Brunéi',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Bután',
    'Cabo Verde',
    'Camboya',
    'Camerún',
    'Canadá',
    'Chad',
    'Chile',
    'China',
    'Chipre',
    'Clipperton Island',
    'Colombia',
    'Comoras',
    'Congo',
    'Coral Sea Islands',
    'Corea del Norte',
    'Corea del Sur',
    'Costa de Marfil',
    'Costa Rica',
    'Croacia',
    'Cuba',
    'Dhekelia',
    'Dinamarca',
    'Dominica',
    'Ecuador',
    'Egipto',
    'El Salvador',
    'El Vaticano',
    'Emiratos Árabes Unidos',
    'Eritrea',
    'Eslovaquia',
    'Eslovenia',
    'España',
    'Estados Unidos',
    'Estonia',
    'Etiopía',
    'Filipinas',
    'Finlandia',
    'Fiyi',
    'Francia',
    'Gabón',
    'Gambia',
    'Gaza Strip',
    'Georgia',
    'Ghana',
    'Gibraltar',
    'Granada',
    'Grecia',
    'Groenlandia',
    'Guam',
    'Guatemala',
    'Guernsey',
    'Guinea',
    'Guinea Ecuatorial',
    'Guinea-Bissau',
    'Guyana',
    'Haití',
    'Honduras',
    'Hong Kong',
    'Hungría',
    'India',
    'Indian Ocean',
    'Indonesia',
    'Irán',
    'Iraq',
    'Irlanda',
    'Isla Bouvet',
    'Isla Christmas',
    'Isla Norfolk',
    'Islandia',
    'Islas Caimán',
    'Islas Cocos',
    'Islas Cook',
    'Islas Feroe',
    'Islas Georgia del Sur y Sandwich del Sur',
    'Islas Heard y McDonald',
    'Islas Malvinas',
    'Islas Marianas del Norte',
    'IslasMarshall',
    'Islas Pitcairn',
    'Islas Salomón',
    'Islas Turcas y Caicos',
    'Islas Vírgenes Americanas',
    'Islas Vírgenes Británicas',
    'Israel',
    'Italia',
    'Jamaica',
    'Jan Mayen',
    'Japón',
    'Jersey',
    'Jordania',
    'Kazajistán',
    'Kenia',
    'Kirguizistán',
    'Kiribati',
    'Kuwait',
    'Laos',
    'Lesoto',
    'Letonia',
    'Líbano',
    'Liberia',
    'Libia',
    'Liechtenstein',
    'Lituania',
    'Luxemburgo',
    'Macao',
    'Macedonia',
    'Madagascar',
    'Malasia',
    'Malaui',
    'Maldivas',
    'Malí',
    'Malta',
    'Man, Isle of',
    'Marruecos',
    'Mauricio',
    'Mauritania',
    'Mayotte',
    'México',
    'Micronesia',
    'Moldavia',
    'Mónaco',
    'Mongolia',
    'Montserrat',
    'Mozambique',
    'Namibia',
    'Nauru',
    'Navassa Island',
    'Nepal',
    'Nicaragua',
    'Níger',
    'Nigeria',
    'Niue',
    'Noruega',
    'Nueva Caledonia',
    'Nueva Zelanda',
    'Omán',
    'Pacific Ocean',
    'Países Bajos',
    'Pakistán',
    'Palaos',
    'Panamá',
    'Papúa-Nueva Guinea',
    'Paracel Islands',
    'Paraguay',
    'Perú',
    'Polinesia Francesa',
    'Polonia',
    'Portugal',
    'Puerto Rico',
    'Qatar',
    'Reino Unido',
    'República Centroafricana',
    'República Checa',
    'República Democrática del Congo',
    'República Dominicana',
    'Ruanda',
    'Rumania',
    'Rusia',
    'Sáhara Occidental',
    'Samoa',
    'Samoa Americana',
    'San Cristóbal y Nieves',
    'San Marino',
    'San Pedro y Miquelón',
    'San Vicente y las Granadinas',
    'Santa Helena',
    'Santa Lucía',
    'Santo Tomé y Príncipe',
    'Senegal',
    'Seychelles',
    'Sierra Leona',
    'Singapur',
    'Siria',
    'Somalia',
    'Southern Ocean',
    'Spratly Islands',
    'Sri Lanka',
    'Suazilandia',
    'Sudáfrica',
    'Sudán',
    'Suecia',
    'Suiza',
    'Surinam',
    'Svalbard y Jan Mayen',
    'Tailandia',
    'Taiwán',
    'Tanzania',
    'Tayikistán',
    'TerritorioBritánicodel Océano Indico',
    'Territorios Australes Franceses',
    'Timor Oriental',
    'Togo',
    'Tokelau',
    'Tonga',
    'Trinidad y Tobago',
    'Túnez',
    'Turkmenistán',
    'Turquía',
    'Tuvalu',
    'Ucrania',
    'Uganda',
    'Unión Europea',
    'Uruguay',
    'Uzbekistán',
    'Vanuatu',
    'Venezuela',
    'Vietnam',
    'Wake Island',
    'Wallis y Futuna',
    'West Bank',
    'World',
    'Yemen',
    'Yibuti',
    'Zambia',
    'Zimbabue',
  ];
  return new Promise((resolve) => {
    resolve(data);
  });
}
