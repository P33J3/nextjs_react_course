//meetupId is in [] as it is a placeholder name for the ID which changes dynamically depending on the page.

import { MongoClient, ObjectId } from 'mongodb';
import { Fragment } from 'react';
import Head from 'next/head';

import MeetupDetail from '../../components/meetups/MeetUpDetail';




function MeetupDetails(props) {
    return (
      <Fragment>
      <Head>
        {/*Insert All the tags you would put in the head section of HTML */}
        <title>{props.meetupData.title}</title>
        <meta
          name="description"
          content={props.meetupData.description}
        />
      </Head>
     
      <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
      />
       </Fragment>
    );
};

// needed if you run getStaticProps
//describe all the dynamic adresses
// export async function getStaticPaths() {
//   return {
//     //fallbaack:false implies that all pages are covered below; if user inputs another page they get a 404 error page. 
//     fallback: false,
//     paths: [
//       {
//         params: {
//           meetupId: "m1",
//         },
//       },

//       {
//         params: {
//           meetupId: "m2",
//         },
//       },
//     ],
//   };
// };

export async function getStaticPaths() {
  const client = await MongoClient.connect('mongodb+srv://PJAdmin:9QkEwf687hNyctz@cluster0.ybiuc.mongodb.net/Projectnextjs?retryWrites=true&w=majority'); 
  const db = client.db();

  const meetupsCollection = db.collection('meetups');
//empty object below means find all objects, second criteria searches fields
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
 

  client.close();
  
  return {
    //fallbaack:false implies that all pages are covered below; if user inputs another page they get a 404 error page.
    // when set to blocking or true, it will tell nextjs not to answer with a 404 page if url cannot be found || necessary for pages created after build time.
    fallback: 'blocking',
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
};

export async function getStaticProps(context) {
  
  
  //fetch data for a single meetup
  const meetupId = context.params.meetupId;
// console.log(meetupId);

const client = await MongoClient.connect('mongodb+srv://PJAdmin:9QkEwf687hNyctz@cluster0.ybiuc.mongodb.net/Projectnextjs?retryWrites=true&w=majority'); 
  const db = client.db();

  const meetupsCollection = db.collection('meetups');


// ObjectId converts variable to MongoDB object
  const selectedMeetup = await meetupsCollection.findOne({}, { _id: ObjectId(meetupId), });

  console.log(selectedMeetup);

  client.close();
  
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}


//   return {
//     props: {
//       meetupData: {
//         image:"https://img.emg-services.net/HtmlPages/HtmlPage13951/large-spain-hola.png",
//         id: 'm1',
//         title:'First Meetup',
//         address: "Some Street 5, Some City",
//         description: "This is a first meetup!",
//       }
//     }
//   }
// }

export default MeetupDetails;