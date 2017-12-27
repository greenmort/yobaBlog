import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import {createPost} from '../actions/index';
import '../styles/post_create.scss';

const required = value => value?undefined:'Required';
const alphaNumeric = value =>
    value && /[^a-zA-Z0-9 ]/i.test(value)
        ? 'Only alphanumeric characters'
        : undefined;

const renderField = ({
    input,
    label,
    type,
    meta: {touched, invalid, error, warning}
}) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} type={type}/>
            {touched&&((error&&<span className="error">{error}</span>)||
            (warning&&<span className="warning">{warning}</span>))}
        </div>
    </div>
);

class PostCreate extends Component {

    onSubmit = props => {this.props.createPost(props)
        .then(()=>this.props.history.push('/'))};

  render() {
      const {handleSubmit} = this.props;
    return (<form onSubmit={handleSubmit(this.onSubmit)}>
        <h3>Create new post</h3>
                <Field
                    name="title"
                    component={renderField}
                    type="text"
                    label="Title"
                    validate={required}
                    warn={alphaNumeric}
                    className="form-control"
                />
                <Field
                    name="categories"
                    component={renderField}
                    type="text"
                    label="Categories"
                    validate={required}
                    warn={alphaNumeric}
                    className="form-control"
                />
        <div className="form-group">
            <label htmlFor="content" >
                Content
                <Field
                    name="content"
                    component="textarea"
                    className="post-area form-control"
                />
            </label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
    </form>);
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({createPost}, dispatch);

PostCreate = connect(null, mapDispatchToProps)(PostCreate);

export default reduxForm({
    form: 'createPostForm',
})(PostCreate)