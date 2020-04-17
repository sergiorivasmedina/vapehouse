import React from 'react';
import styled from 'styled-components';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';

const Table = styled.table `
  padding: 20px;
  > tbody > tr > td {
    padding: 10px 5px;
  }
`;
const Status = styled.div `
  width: 50px;
  height: 50px;
  display: inline-block;
  color: white;
  text-align: center;
  line-height: 50px;
  font-size: 30px;
  background: ${props => {
    switch(props.state) {
      case "Ordered":
        return "#FF0500";
      case "Processed":
        return "#FF9300";
      case "Received":
        return "#C3E42B";
      default:
        return "#00B852";
    }
  }}
`;

const AdminTable = (props) => {
  const getStatus = status => (
    <Status state={status}>{status.charAt(0)}</Status>
  );

  const { view_status, orders, statuses, shipping } = props;

  return (
    <div>
      <Tabs value={view_status} onChange={props.switchView}>
        <Tab value="paid" label="paid" />
        <Tab value="fulfilled" label="fulfilled" />
        <Tab value="created" label="created" />
        <Tab value="canceled" label="canceled" />
      </Tabs>
      <Table>
        <tbody>
          { orders.map((order,i) => {
            const time = new Date(order.created*1000);
            let metadata = [];
            for (let key in order.metadata) {
              if (key.indexOf("order") !== -1) {
                let m = JSON.parse(order.metadata[key])
                for (let mKey in m) {
                  metadata.push(`${mKey}: ${m[mKey]}`);
                }
              }
            }
            return (
              <tr key={`order${i}`}>
                <td>{getStatus(order.metadata.status)}</td>
                <td>
                  <div>{`${time.getMonth()}/${time.getDate()}/${time.getFullYear()}`}</div>
                  <div>${order.amount/100}</div>
                </td>
                <td style={{ fontSize: "14px" }}>
                  {order.items.map((o,i) => {
                    if (i < order.items.length - 2)
                      return <div key={`item${i}`}>{o.quantity} {o.description}</div>;
                    else return(null);
                  })}
                </td>
                <td style={{ fontSize: "14px" }}>
                  {metadata.map((m,i) => <div key={`m${i}`}>{m}</div>)}
                </td>
                <td style={{ fontSize: "12px" }}>
                  <div>{order.email}</div>
                  <div>{order.id}</div>
                </td>
                <td style={{ fontSize: "12px" }}>
                  <div>{order.shipping.name}</div>
                  <div>{order.shipping.address.line1}</div>
                  <div>{order.shipping.address.line2}</div>
                  <div>{order.shipping.address.city} {order.shipping.address.state} {order.shipping.address.postal_code}</div>
                </td>
                <td>
                  <select value={statuses[i]} 
                    onChange={(e) => props.updateStatus(i, e.target.value)}
                  >
                    <option>Ordered</option>
                    <option>Processed</option>
                    <option>Received</option>
                    <option>Shipped</option>
                  </select>
                </td>
                <td>
                  <div>Tracking:</div>
                  { order.shipping.tracking_number ?
                    <div>{order.shipping.tracking_number}</div>
                    :
                    <input type="text" value={shipping[i]}
                      onChange={(e) => props.updateShipping(i, e.target.value)}
                    />
                  }
                </td>
                <td>
                  <Button onClick={() => props.updateOrder(i)}
                    variant="contained" color="secondary"
                  >
                    Notify
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
export default AdminTable;