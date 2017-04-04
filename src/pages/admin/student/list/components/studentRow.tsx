import * as React from 'react';
import { Link } from 'react-router';
import { StudentSummary } from '../../../../../model/studentSummary';
import { TableRowProps, TableRowComponent } from '../../../../../common/virtualized/tableRow';
import { adminRouteEnums } from '../../../../../common/routeEnums/admin';

const classNames: any = require('./studentRowStyles.scss');

interface Props extends TableRowProps {
  rowData: StudentSummary;
}

// We can use spread operator for React properties too
// https://facebook.github.io/react/docs/jsx-in-depth.html#spread-attributes
export const StudentRowComponent: React.StatelessComponent<Props> = (props) => {
  return (
    <TableRowComponent
      {...props}
      // We have enable camelCase parser in webpack.config.js
      className={`${props.className} ${classNames.rowStriped}`}
    >
      <input type="checkbox" disabled={true} checked={props.rowData.isActive} />
      <span>{props.rowData.fullname}</span>
      <span>{props.rowData.email}</span>
      <Link to={`${adminRouteEnums.student.edit}/${props.rowData.id}`} className="btn btn-primary">
        <i className="glyphicon glyphicon-pencil" />
      </Link>
    </TableRowComponent>
  );
};
