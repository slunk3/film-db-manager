import React, { Component } from 'react';

class TableRow extends Component {
    render() {
        return (
            <tr>
                <td width="100" className="truncate">
                    {this.props.obj._id}
                </td>
                <td>
                    {this.props.obj.title}
                </td>
                <td>
                    {this.props.obj.director}
                </td>
                <td>
                    {this.props.obj.year}
                </td>
                <td>
                    {this.props.obj.plot}
                </td>
                <td>
                    {this.props.obj.keywords}
                </td>
                <td>
                    {this.props.obj.availability}
                </td>
                <td>
                    {this.props.obj.cost || '$0.00'}
                </td>
            </tr>
        );
    }
}

export default TableRow;