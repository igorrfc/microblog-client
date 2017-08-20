import React, { Component } from 'react';
import axios from 'axios';

import { handleFieldChange } from '../actions/fields';
import { allFieldsPresent, validatePresence, isFormValid } from '../validations';

import FieldError from './FieldError';

class PostsForm extends Component {
  validForm () {
    const { post: { title, description } } = this.props;
    const fields = [title, description];

    return allFieldsPresent(fields) && isFormValid(fields);
  }

  createPost() {
    if (this.validForm()) {
      const {
        users: { logged },
        post,
        createPost,
      } = this.props;

      axios.post('/users/' + logged.id + '/posts', {
          post: {
            title: post.title.value,
            description: post.description.value,
          },
      }).then(({ data: response }) => createPost(response.data));  
    }
  }

  render() {
    const { updatePostAttribute, post: { title, description } } = this.props;

    return (
      <div>
        <div className={`col-md-8 col-md-offset-2`}>
          <h2 className={`font-big`}>What have you been thinking?</h2>
        </div>
        <div className={`col-md-8 col-md-offset-2 marg-top-20`}>
          <input
            id={`title`}
            name={`title`}
            type={`text`}
            placeholder={`Title`}
            className={`form-control`}
            onChange={handleFieldChange(updatePostAttribute, [validatePresence])}
            onBlur={handleFieldChange(updatePostAttribute, [validatePresence])}
          />

          <FieldError errors={title.errors} />
        </div>
        <div className={`col-md-8 col-md-offset-2 marg-top-20`}>
          <textarea
            id={`description`}
            name={`description`}
            type={`text`}
            rows={`3`}
            placeholder={`Tell me more...`}
            className={`form-control`}
            onChange={handleFieldChange(updatePostAttribute, [validatePresence])}
            onBlur={handleFieldChange(updatePostAttribute, [validatePresence])}
          />

          <FieldError errors={description.errors} />
        </div>
        <div className={`col-md-4 col-md-offset-2 marg-top-10`}>
          <input
             className={`btn btn-success col-md-8 col-xs-8`}
             type='submit'
             value='Post'
             disabled={!this.validForm()}
             onClick={this.createPost.bind(this)}
           />
        </div>
      </div>
    );
  }
}

export default PostsForm;
