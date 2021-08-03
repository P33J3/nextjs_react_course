import { useRouter } from 'next/router';

import Card from '../ui/Card';
import classes from './MeetupItem.module.css';


function MeetupItem(props) {
  /*react hooks has to be used in the topmost level of a function, so define it here and then use it in showDetailsHandler.
  */
  const router = useRouter();


  //how to do programmatic (imperative) Navigation
  function showDetailsHandler() {
    //pushes a new page unto the stack of pages; works similar to a link.
      router.push('/' + props.id)
  }



  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
