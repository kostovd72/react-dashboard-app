const styles = theme => ({
  button: {
    marginLeft: theme.spacing.unit * 2,
  },
  addIcon: {
    marginRight: theme.spacing.unit,
    fontSize: 25,
  },
  downIcon: {
    marginRight: theme.spacing.unit,
    fontSize: 15,
  },
  grow: {
    flexGrow: 1,
  },
  searchBar: {
    marginTop: theme.spacing.unit * 6,
  },
  filter: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
  },
  select: {
    marginLeft: theme.spacing.unit,
    minWidth: 120,
    fontSize: 14,
    padding: '5px',
    border: '1px solid #000',
  },
  selectText: {
    fontSize: 16,
  },
  count: {
    marginTop: theme.spacing.unit * 3,
  },
  entires: {
    fontSize: 12,
    color: theme.palette.darkGray.main,
  },
  tableContainer: {
    width: '100%',
    overflowX: 'auto',
    marginTop: theme.spacing.unit / 2,
  },
  table: {
  },
  avatar: {
    verticalAlign: 'middle',
    marginRight: theme.spacing.unit,
    width: 32,
  },
  statusActive: {
    color: theme.palette.green.main,
  },
  link: {
    color: 'red',
    textDecoration: 'underline',
    textTransform: 'none',
  },
  pagination: {
    marginTop: theme.spacing.unit * 2,
  },
});

export default styles;
