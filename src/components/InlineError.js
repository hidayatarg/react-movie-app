import React from 'react'
import PropTypes from 'prop-types'

const InlineError = props => {
  return (
    <div>
      <div className="inlineError">
          {props.message}
      </div>
    </div>
  );
};

InlineError.propTypes = {
    message: PropTypes.string.isRequired
}

export default InlineError
