import React from 'react'

export default React.createClass({
  render() {
    return (
      <div className="borderreds page-content-wrapper">
      <div >
        <h2>{this.props.params.repoName}</h2>
      </div>
      </div>
    )
  }
})
