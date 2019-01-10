import React, {Component} from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';

class Dashboard extends Component{
    render(){
        return (
            <div className="dashboard container">
                {/* CSS grid*/}
                <div className="row">
                    {/* small screen 12 columns, medium 6 */}
                    <div className="col s12 m6">
                        <ProjectList />
                    </div>
                    {/* small screen 12 columns, medium 5 - leave gap of 1 column */}
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;