import React, {Component} from 'react';
import TodoCard from '../card/Card';
import Wrapper from '../wrapper/Wrapper';
// import todos from '../footer/footer';  this is where we will need to import different API's
import projects from '../add.json';


class Hiking extends Component {
    state= {
  projects
    };
  
    render() {
      return (
        <Wrapper>
          {this.state.projects.map(project => (
            <TodoCard
              link={project.link}
              title={project.title}
              image={project.image}
              author={project.author}
            />
          ))}

        <div id="hiking">this is the hiking page</div>
        </Wrapper> 
      );
    }
  }

export default Hiking;