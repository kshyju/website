import React, { Component } from 'react'
import PivotValueCustomComponent from './PivotValueCustomComponent'

/**
 * Custom Pivot Component used for render inside TreeTable structure
 * 
 */
export default class PivotCustomComponent extends Component {
  render() {
    const { defaultProps, ...cellInfo } = this.props;

    if (cellInfo.value === "undefined") {
      return <div>
        <PivotValueCustomComponent {...cellInfo} />
      </div>
    }
    else {
      return <div>
        <defaultProps.ExpanderComponent {...cellInfo} />
        <defaultProps.PivotValueComponent {...cellInfo} />
      </div>
    }
  }
}