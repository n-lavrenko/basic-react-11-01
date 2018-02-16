import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { commentsSelectorFactory } from '../selectors';


function Comment({ comment }) {
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

const mapStateToProps = () => {
  const commentsSelector = commentsSelectorFactory();
  
  return (state, ownProps) => {
    return {
      comment: commentsSelector(state, ownProps)
    }
  }
};

export default connect(mapStateToProps)(Comment)
