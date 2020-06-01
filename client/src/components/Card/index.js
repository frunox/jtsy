import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import './cardStyle.css'

const ProjectCard = props => {
  let deploymentLink;
  if (props.repo.deploymentLink) {
    deploymentLink = (
      <Card.Link href={props.repo.deploymentLink} target={"_blank"}>
        Deployment Link
      </Card.Link>
    );
  } else {
    deploymentLink = "";
  }
  return (
    <Card.Group className="repoCard" fluid stackable centered>
      <Card raised>
        <Image src={props.repo.imageLink} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{props.repo.repoName}</Card.Header>
          <Card.Description>{props.repo.repoDesc}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green' target={"_blank"} href={props.repo.html_url}>
              Code
            </Button>
            <Button basic color='green' target={"_blank"} href={deploymentLink}>
              Link
          </Button>
          </div>
        </Card.Content>
      </Card>
    </Card.Group>
  )
}

export default ProjectCard;

// export default Card

// function Card({ icon, title, children }) {
//   return (
//     <div className="card mt-4">
//       <div className="card-header">
//         <h3>
//           <strong>
//             <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
//           </strong>
//         </h3>
//       </div>
//       <div className="card-body">{children}</div>
//     </div>
//   );
// }

// export default Card;
