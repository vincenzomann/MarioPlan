import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';
import { Redirect } from 'react-router-dom';

class CreateProject extends Component {
  state = {
    title: '',
    content: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProject(this.state);
    this.props.history.push('/');
  }

  render() {

    // use destructuring to get auth from props
    const { auth } = this.props;

    if (!auth.uid) return <Redirect to='/login' />

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">

          <h5 className="grey-text text-darken-3">Create New Project</h5>

          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange}/>
          </div>

          <div className="input-field">
            <label htmlFor="text">Project Content</label>
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>

        </form>
      </div>
    )
  }
}

// attach auth to props
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

// pass in dispatch method
const mapDispatchToProps = (dispatch) => {
  // return object createProject - adding property we want to add to props. Calling props.createProject will call this function - dispatch action creator passing in the project
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

// connect component to store
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
