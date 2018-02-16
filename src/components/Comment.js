import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


function Comment({ comment, id }) {
  return (
    <div>
      { comment.text } <b>by { comment.user }</b>
    </div>
  )
}

Comment.propTypes = {
  id: PropTypes.string.isRequired,
  comment: PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.string
  }).isRequired
};

export default connect(
  (state, ownProps) => {
    return {
      comment: state.comments.find(comment => comment.id === ownProps.id)
    }
  }, null)(Comment)
