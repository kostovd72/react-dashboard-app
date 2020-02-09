import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import './styles.css';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import RGL, { WidthProvider } from 'react-grid-layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import 'react-grid-layout/css/styles.css';
import { Popper } from '@material-ui/core';
import AddModalContent from './AddModalContent';
import FilterModalContent from './FilterModalContent';
import GraphView from './GraphView';
// import { DASHBOARD_URL } from '../../../constants/urls';


/**
 * @name DashboardViewPage
 *
 * @param {Object}   dashboard
 * @param {Object}   selectedTable
 * @param {Object}   tableOptions
 * @param {Object}   typeOptions
 * @param {Object}   literals
 *
 * @returns {JSX}
 */

const ReactGridLayout = WidthProvider(RGL);
class DashboardView extends Component {
  static propTypes = {
    loadDashboards: PropTypes.func.isRequired,
    loadTypeOptions: PropTypes.func.isRequired,
    loadTableOptions: PropTypes.func.isRequired,
    saveModal: PropTypes.func.isRequired,
    cancelModal: PropTypes.func.isRequired,
    dashboardChange: PropTypes.func.isRequired,
    deleteGraph: PropTypes.func.isRequired,
    saveDashboard: PropTypes.func.isRequired,
    changeLayout: PropTypes.func.isRequired,
    getFilters: PropTypes.func.isRequired,
    dashboard: PropTypes.object.isRequired,
    selectedTable: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    literals: PropTypes.object.isRequired,
    typeOptions: PropTypes.array.isRequired,
    tableOptions: PropTypes.array.isRequired,
    filters: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      modalTitle: '',
      modalOpen: false,
      name: '',
      open: false,
    };

    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    const {
      loadTypeOptions,
      loadDashboards,
      match,
      loadTableOptions,
      getFilters,
    } = this.props;
    loadDashboards(match.params.id, {}, this.setName);
    loadTypeOptions();
    loadTableOptions();
    getFilters();
  }

  /**
   * @name setName
   * Sets dashboard name state
   *
   * @param {Obj} Dashboard
   */
  setName = (res) => {
    this.setState({ name: res.name });
  };

  /**
   * @name handleClick
   * Sets Option menu state
   *
   * @param {Obj} event
   */
  // handleClick = (event) => {
  //   this.setState({ anchorEl: event.currentTarget });
  // };

  /**
   * @name handleClose
   * Close Option menu
   *
   */
  // handleClose = () => {
  //   this.setState({ anchorEl: null });
  // };

  /**
   * @name addModalOpen
   * Open graph modal
   *
   */

  addModalOpen = () => {
    const { literals } = this.props;
    this.setState({ modalOpen: true, modalTitle: literals.addGraph });
  };

  handleClick = (event) => {
    const { currentTarget } = event;
    // const localState = this.state;

    // if(!localState.open) {
    //   document.addEventListener('click', this.handleOutsideClick, false);
    // } else {
    //   document.removeEventListener('click', this.handleOutsideClick, false);
    // }

    this.setState(state => ({
      anchorEl: currentTarget,
      open: !state.open,
    }));
  };

  handleOutsideClick = (event) => {
    if (this.popperEl.contains(event.target)) {
      return;
    }

    this.handleClick(event);
  }

  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  /**
   * @name editGraph
   * Open graph modal and set form data
   *
   * @param {Obj} selected graph data
   */
  editGraph = (item) => {
    const { literals } = this.props;
    this.setState({ modalOpen: true, modalTitle: literals.editGraph });
    const p = this.props;
    p.dashboardChange(item.sourceView);
    setTimeout(() => {
      this.childModal.editGraph(item);
    }, 0);
  };

  /**
   * @name addModalClose
   * Close graph modal
   *
   */
  addModalClose = () => {
    this.setState({ modalOpen: false });
    const {
      cancelModal,
    } = this.props;
    cancelModal();
  };

  /**
   * @name dashboardSave
   * Save the dashboard
   *
   */
  dashboardSave = () => {
    const state = this.state;
    const { saveDashboard, dashboard } = this.props;
    const data = dashboard;
    data.name = state.name;
    saveDashboard(data);
  };

  /**
   * @name changeName
   * Sets name state when change dashboard name
   * @param {Obj} input event
   */
  changeName = (e) => {
    this.setState({ name: e.target.value });
    return true;
  };

  deleteCallback = () => {
    this.setState({ modalOpen: false });
  };

  deleteGraph = (item) => {
    const { deleteGraph } = this.props;
    deleteGraph(item, this.deleteCallback);
  };

  closePopper = () => {
    console.log('close popper');
    this.setState({ open: false });
  }

  onClickFilter = (filters) => {
    const {
      loadDashboards,
      match,
    } = this.props;
    loadDashboards(match.params.id, filters, this.setName);
  }

  render() {
    const {
      dashboard,
      literals,
      typeOptions,
      tableOptions,
      selectedTable,
      dashboardChange,
      saveModal,
      changeLayout,
      filters,
    } = this.props;
    const {
      anchorEl,
      modalOpen,
      modalTitle,
      name,
      open,
    } = this.state;
    // const open = Boolean(anchorEl);
    return (
      <div>
        <div className='DashboardView'>
          <Dialog
            open={modalOpen}
            onClose={this.addModalClose}
            className='DashboardView__Dialog'
          >
            <DialogTitle>
              { modalTitle }
            </DialogTitle>
            <DialogContent>
              <AddModalContent onRef={(ref) => { this.childModal = ref; }} dashboard={dashboard} addModalClose={this.addModalClose} saveModal={saveModal} literals={literals} selectedTable={selectedTable} typeOptions={typeOptions} tableOptions={tableOptions} dashboardChange={dashboardChange} />
            </DialogContent>
          </Dialog>
          <div className='DashboardView--top'>
            <h4 className='DashboardView--top--title text-align-left'>
              <Input onChange={this.changeName} className='DashboardView--top--title__input' value={name} />
            </h4>
            <div className='DashboardView--top--option text-align-right'>
              <Button aria-label='Add' onClick={this.addModalOpen}>
                { literals.addGraph }
              </Button>

              <IconButton
                aria-owns={open ? 'filter' : undefined}
                aria-haspopup='true'
                variant='contained'
                onClick={this.handleClick}
              >
                <FontAwesomeIcon icon={faFilter} color='#B12534' />
              </IconButton>
              <Popper
                id='filter'
                placement='bottom-end'
                open={open}
                anchorEl={anchorEl}
                onClose={this.handleClose}
              >
                <div ref={(el) => { this.popperEl = el; }}>
                  <FilterModalContent closePopper={this.closePopper} onRef={(ref) => { this.childModal = ref; }} literals={literals} filters={filters} onApply={this.onClickFilter} />
                </div>
              </Popper>

              {/* <IconButton
                aria-haspopup='true'
                onClick={this.handleClick}
                color='inherit'
              >
                <MoreHoriz />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                open={open}
                onClose={this.handleClose}
              >
                <MenuItem><a href={`/${DASHBOARD_URL}`}>{ literals.dashboardLink }</a></MenuItem>
                <MenuItem><a onClick={this.addModalOpen}>{ literals.addGraph }</a></MenuItem>
              </Menu> */}
            </div>
          </div>
          <div className='DashboardView--graph'>
            {
              (!dashboard.graph || dashboard.graph.length === 0) && <div className='DashboardView--graph--empty' onClick={this.addModalOpen}>{ literals.emptyGraph }</div>
            }
            <ReactGridLayout cols={12} rowHeight={130} width={1200} onLayoutChange={changeLayout}>
              { dashboard.graph && dashboard.graph.map((item) => {
                // let width = 3;
                // if (item.type !== GRAPH_TYPE_INDICATOR) {
                //   width = 4;
                // }
                return (
                  <div
                    key={item.graphId}
                    data-grid={
                      {
                        x: parseInt(item.position_x, 10),
                        y: parseInt(item.position_y, 10),
                        w: item.width,
                        h: item.height,
                      }
                    }
                  >
                    <GraphView item={item} literals={literals} editGraph={this.editGraph} deleteGraph={this.deleteGraph} />
                  </div>
                );
              })
              }
            </ReactGridLayout>
          </div>
          <div className='DashboardView--bottom'>
            <Button variant='contained' onClick={this.dashboardSave}>
              { literals.saveDashboard }
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardView;
