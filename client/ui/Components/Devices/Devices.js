import React, { Component } from 'react';
import {Tracker} from 'meteor/tracker';
import { connect } from 'react-redux';
import { setId } from '../../actions/index';
import {Data, Id} from '../../../../imports/collections/data'
import './Devices.css'

class Devices extends Component {

    constructor(props) {
        super(props)
        this.state = {
            devices: [],
            activeId: null
        }
    }

    componentDidMount() {
        Tracker.autorun(() => {
            const devices = Id.find({}, {sort: {id: 1}}).fetch().map(device => device.id)
            this.setState({devices, activeId: devices[0]})
        })
    }

    setId(e) {
        this.props.setId(e.target.getAttribute('data-id'))
        this.setState({activeId: e.target.getAttribute('data-id')})
    }

    render() {
        return (
            <div>
                <h1>Device Ids</h1>
                <table className="table table-striped table-bordered table-hover"><tbody>
                    {
                        this.state.devices.map((device, i) => 
                        <tr key={i}>
                            <td 
                            data-id={device} 
                            onClick={this.setId.bind(this)}
                            className={(this.state.activeId == device ? 'active' : '')}
                            >
                                {device}
                            </td>
                        </tr>)
                    }
                </tbody></table>
            </div>
        );
    }

}

export default connect(null, {setId})(Devices);