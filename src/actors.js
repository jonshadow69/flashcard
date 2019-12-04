
import React from "react";
import Actor from "./Actor";
import { Table, } from "semantic-ui-react";
const Actors = ({actors, removeActor})=> (
//RENDER DATA HERE
<Table celled padded>
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>First Name</Table.HeaderCell>
      <Table.HeaderCell>Phone</Table.HeaderCell>
      <Table.HeaderCell>Options</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    {
      actors.map(actor =>(
        <Actor key={actor.id} {...actor} remove={removeActor}/>
        
      ))
    }
  </Table.Body>
</Table>
);
export default Actors;