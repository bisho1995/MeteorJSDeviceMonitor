import React, { Component } from 'react';
import Devices from '../Devices/Devices';
import DataComponent from '../Data/DataComponent';


export default class Home extends Component {
    render() {
        return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <Devices />
                </div>
                <div className="col-sm-6">
                    <DataComponent />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="bg-danger text-white mx-1 px-3">
                        <p><b>Bug:</b> Currently I messed up setting up redux store so to see any change in data, double click the device id instead of single click. Will fix it later. Sorry!!</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="bg-primary text-white mx-1 px-3">
                        <p>This application auto updates the device ids and device data as it receives from the IOT devices and pushes the data to your screen. You need not refresh the page to see the changes. </p>
                        <p>The project is made with Meteorjs and react.</p>
                    </div>
                </div>
            </div>
        </div>
    );
    }
}