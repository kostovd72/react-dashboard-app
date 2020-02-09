import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import 'react-grid-layout/css/styles.css';
import { Input, Select } from 'antd';
import AddModalContent from './AddModalContent';
import Navbar from '../../../components/Navbar/container/index';

/**
 * @name Comparable Component
 *
 * @param {Object}   literals
 * @param {Array}   typeOptions
 * @param {Array}   countryOptions
 * @param {Array}   countryGroupOptions
 * @param {Array}   segmentOptions
 * @param {Array}   sectorOptions
 * @param {Array}   ratingOptions
 * @param {Func}   search
 * @param {Func}   loadTypeOptions
 * @param {Func}   loadCountryOptions
 * @param {Func}   loadSegmentOptions
 * @param {Func}   loadSectorOptions
 *
 * @returns {JSX}
 */

class Comparable extends Component {
  static propTypes = {
    loadTypeOptions: PropTypes.func.isRequired,
    loadCountryOptions: PropTypes.func.isRequired,
    loadCountryGroupOptions: PropTypes.func.isRequired,
    loadSegmentOptions: PropTypes.func.isRequired,
    loadSectorOptions: PropTypes.func.isRequired,
    search: PropTypes.func.isRequired,
    literals: PropTypes.object.isRequired,
    typeOptions: PropTypes.array.isRequired,
    countryOptions: PropTypes.array.isRequired,
    countryGroupOptions: PropTypes.array.isRequired,
    segmentOptions: PropTypes.array.isRequired,
    sectorOptions: PropTypes.array.isRequired,
    ratingOptions: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      modalTitle: '',
      modalOpen: false,
      clients: [],
    };
  }

  componentDidMount() {
    const {
      loadTypeOptions,
      loadCountryOptions,
      loadCountryGroupOptions,
      loadSegmentOptions,
      loadSectorOptions,
    } = this.props;
    loadTypeOptions();
    loadCountryOptions();
    loadCountryGroupOptions();
    loadSegmentOptions();
    loadSectorOptions();
  }

  /**
   * @name addModalOpen
   * Open graph modal
   *
   */

  addModalOpen = () => {
    const { literals } = this.props;
    this.setState({ modalOpen: true, modalTitle: literals.modalTitle });
  };

  /**
   * @name addModalClose
   * Close graph modal
   *
   */
  addModalClose = () => {
    this.setState({ modalOpen: false });
  };

  /**
   * @name saveCallback
   * call after add comparable clients
   * @param {Array} data
   */

  saveCallback = (data) => {
    const st = this.state;
    const clients = st.clients;
    this.setState({
      clients: clients.concat(data),
    });
    this.setState({ modalOpen: false });
  };
  /**
   * @name save
   * add comparable clients
   * @param {Array} data
   */

  save = (params) => {
    const p = this.props;
    p.save(params, this.saveCallback);
  };
  /**
   * @name setFfee
   * set ffee of comparable clients
   * @param {Number} index
   * @param {String} val
   */

  setFfee = (index, val) => {
    const st = this.state;
    const clients = st.clients;
    clients[index].eeffVal = val;
    this.setState(clients);
  };
  /**
   * @name compare
   * save comparable view
   */

  compare = () => {
    const st = this.state;
    const data = st.clients.map((e) => {
      const rlt = {
        client: e.id || '',
        eeff: e.eeffVal || '',
      };
      if (e.eeff.length === 0) {
        rlt.new = true;
      }
      return rlt;
    });
    const p = this.props;
    p.compare(data);
  };
  /**
   * @name render
   * render view
   */

  render() {
    const {
      literals,
      typeOptions,
      countryOptions,
      countryGroupOptions,
      segmentOptions,
      sectorOptions,
      ratingOptions,
      search,
    } = this.props;
    const {
      modalOpen,
      modalTitle,
      clients,
    } = this.state;
    const Option = Select.Option;
    return (
      <div>
        <Navbar title={literals.title} />
        <div className='ClientsView'>
          <Dialog
            open={modalOpen}
            onClose={this.addModalClose}
            className='ClientsView__Dialog'
          >
            <DialogTitle>
              { modalTitle }
            </DialogTitle>
            <DialogContent>
              <AddModalContent
                onRef={(ref) => { this.childModal = ref; }}
                addModalClose={this.addModalClose}
                literals={literals}
                typeOptions={typeOptions}
                countryOptions={countryOptions}
                countryGroupOptions={countryGroupOptions}
                segmentOptions={segmentOptions}
                sectorOptions={sectorOptions}
                ratingOptions={ratingOptions}
                search={search}
                save={this.save}
              />
            </DialogContent>
          </Dialog>
          <h4>
            {literals.title}
          </h4>
          <div className='ClientsView--content'>
            {
              clients.map((item, i) => {
                return (
                  <div className='ClientsView--content--item' key={i}>
                    <h5 className='text-center'>
                      {literals.clientCompare}
                    </h5>
                    <div className='ClientsView--content--item--content'>
                      <p>
                        {item.name}
                      </p>
                      <p>
                        {literals.eeffList}
                      </p>
                      {
                        item.eeff.length > 0 && (
                          <Select
                            showSearch
                            style={{ width: '100%' }}
                            value={item.eeffVal}
                            placeholder={literals.eeff}
                            onChange={(val) => { this.setFfee(i, val); }}
                            optionFilterProp='children'
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                          >
                            {
                              item.eeff && item.eeff.map((p, j) => {
                                return (
                                  <Option value={p.alias} key={j}>
                                    { p.name }
                                  </Option>
                                );
                              })
                            }
                          </Select>
                        )
                      }
                      {
                        item.eeff.length === 0 && (
                          <Input onChange={(e) => { this.setFfee(i, e.target.value); }} placeholder={literals.eeff} value={item.eeffVal} />
                        )
                      }
                    </div>
                  </div>
                );
              })
            }
            <div className='ClientsView--content--empty' onClick={this.addModalOpen}>
              <h5 className='text-center'>
                {literals.clientCompare}
              </h5>
              <div className='ClientsView--content--empty--content'>
                {literals.addClient}
              </div>
            </div>
            <div className='clearfix' />
          </div>
          <div className='ClientsView--bottom'>
            <Button variant='contained' onClick={this.compare}>
              { literals.create }
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Comparable;
