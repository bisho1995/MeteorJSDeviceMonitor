import React, { Component } from 'react';
import {Tracker} from 'meteor/tracker';
import { connect } from 'react-redux';
import {Data, Id} from '../../../../imports/collections/data'
import store from '../../store/index'

class DataComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            id: 1
        }
        console.log(this.props.devices)
    }

    getDataFromMongo() {
        Tracker.autorun(() => {
            this.setState({data: Data.find({id: this.props.devices}, {sort: {createdAt: -1}, limit: 10}).fetch().map(data => data.data)})
        })
    }

    componentDidMount() {
        this.getDataFromMongo()
        store.subscribe(() => {
            this.setState({id: store.getState().devices})
            this.getDataFromMongo()
        })
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

function mapStateToProps(state ) {
    return state
}

export default connect(mapStateToProps, null)(DataComponent);