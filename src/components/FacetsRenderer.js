// Copyright (c) Microsoft Corporation and others. Licensed under the MIT license.
// SPDX-License-Identifier: MIT

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Tag from 'antd/lib/tag'

/**
 * Specific renderer for Facets
 *
 */
class FacetsRenderer extends Component {
  static propTypes = {
    item: PropTypes.shape({
      value: PropTypes.array
    }).isRequired
  }

  render() {
    const { item } = this.props
    return (
      <div>
        {item.value.map((val, i) => (
          <Tag key={i} className={val.isDifferent ? 'facets--isEdited' : ''}>
            {val.value || 'core'}
          </Tag>
        ))}
      </div>
    )
  }
}

export default FacetsRenderer
