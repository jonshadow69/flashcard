
import React from "react";
import { Button, Table, } from "semantic-ui-react";
const Actor = ({id, firstName, phone, remove})=>(
  <Table.Row>
    <Table.Cell>{firstName}</Table.Cell>
    <Table.Cell>{phone}</Table.Cell>
    <Table.Cell>
      <Button color="red" onClick={() => remove(id)}>
          Delete
      </Button>
    </Table.Cell>
  </Table.Row>
);
export default Actor;
