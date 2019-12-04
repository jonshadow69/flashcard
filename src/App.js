import React from 'react';
import Actors from "./actors";
import ActorForm from "./ActorForm";
import { Container, Header, Button, Icon, Segment, } from "semantic-ui-react"; 


class App extends React.Component {
  state = {actors: [
    { id: 1, firstName: "Jerry", phone: "801-121-5656", },
    { id: 2, firstName: "George", phone: "626-567-1872", },
    { id: 3, firstName: "Cosmo", phone: "802-134-9876", },
  ], showForm: true,};
  getId=()=> {
   // NOTE We are just using this as a helper function for id's since we aren't using a db yet
      return Math.floor((1 + Math.random()) *10000);
  };
  addActor = ({firstName, phone,}) => {
    let actor = {id: this.getId(), firstName, phone,};
    this.setState({actors: [ ...this.state.actors, actor], });
  };
  removeActor = (id) => {
    const actors = this.state.actors.filter( actor => {
      if (actor.id !== id)
      return actor
    });
    this.setState({ actors,});
  };
  toggleForm = () => ({showForm: !this.state.showForm, });
  render() {
    const { actors, } = this.state;
    return(
     <Container style={{paddingTop: "25px"}}>
       <Header as="h1">React actor List</Header>
       <br />
       {/* <actorForm add={this.addactor} /> */}
       <Segment basic>
          <Button icon color="blue" onClick={this.toggleForm}>
            <Icon name={this.state.showForm? 'angle double up' :'angle double down'} />
          </Button>
          { this.state.showForm ? <ActorForm addActor={this.addActor}/> : null}
       </Segment>
       <br />
       <Actors actors={this.state.actors} removeActor={this.removeActor} />
     </Container>
    );
  };
};
export default App;