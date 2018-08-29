import React, { Component } from 'react';
import { Tracker } from 'meteor/tracker';
import { connect } from 'react-redux';
import { Data, Id } from '../../../../imports/collections/data'
import store from '../../store/index'

class DataComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            device: "1",
            data: []
        }
    }

    getDataFromMongo() {
        Tracker.autorun(() => {
            const data = Data
                .find({
                    id: this.state.device
                }, 
                {
                    sort: {
                        createdAt: -1
                    }, 
                    limit: 10
                })
                .fetch()
                .map(data => data.data)
            this.setState({data})
        })
    }

    initialDeviceData() {
        Tracker.autorun(() => {
            this.setState({device: Id.find({}, {sort: {id: 1}, limit: 1}).fetch().map(device => device.id)[0]}, () => {
                this.getDataFromMongo()
            })
        })
    }

    updatedDeviceData() {
        store.subscribe(() => {
            this.setState({device: store.getState().devices}, () => {
                this.getDataFromMongo()
            })
        })
    }

    componentDidMount() {
        this.initialDeviceData()
        this.updatedDeviceData()
    }

    render() {
        return (
            <div>
                <h1>Data</h1>
                <table className="table table-striped table-bordered table-hover"><tbody>
                    {this.state.data.map((d, i) => {
                        return (
                        <tr key={i}><td>
                            Temp: {d.temp} Humidity: {d.humidity}</td>
                        </tr>)
                    })}
                </tbody></table>
            </div>
        );
    }
}


let mapStateToProps = (state) => {
    return {
        device: state.devices
    }
}

export default connect(mapStateToProps)(DataComponent);