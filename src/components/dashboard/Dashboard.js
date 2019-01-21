import React, {Component} from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component{
    render(){

        // console.log(this.props);
        // grab projects from state using destructuring then pass as props into the ProjectList component
        const { projects, auth, notifications } = this.props;

        if (!auth.uid) return <Redirect to='/login'/>

        return (
            <div className="dashboard container">
                {/* CSS grid*/}
                <div className="row">
                    {/* small screen 12 columns, medium 6 */}
                    <div className="col s12 m6">
                        <ProjectList projects={projects}/>
                    </div>
                    {/* small screen 12 columns, medium 5 - leave gap of 1 column */}
                    <div className="col s12 m5 offset-m1">
                        <Notifications notifications={notifications}/>
                    </div>
                </div>
            </div>
        )
    }
}

// map state from the store and pass in as props so component can access it
const mapStateToProps = (state) => {
    console.log(state);
    // return object - represents which properties are attached to the props of this component
    // firestore ordered property contains the data
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

// connect component to the store state
// connect component to firestore, telling what data to sync
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects', orderBy: ['createdAt', 'desc'] },
        { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
    ])
)(Dashboard);