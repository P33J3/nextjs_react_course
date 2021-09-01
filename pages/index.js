import { Fragment } from 'react';
import Head from 'next/head';
import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';


//Using Hard Coded Dummy Data
// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "A First Meetup",
//     image:
//       "https://img.emg-services.net/HtmlPages/HtmlPage13951/large-spain-hola.png",
//     address: "Some address 5, 12345 Some City",
//     description: "This is a first meetup!",
//   },
//   {
//     id: "m2",
//     title: "A Second Meetup",
//     image:
//       "https://img.emg-services.net/HtmlPages/HtmlPage13951/large-spain-hola.png",
//     address: "Some address 9, 125657 Some City",
//     description: "This is a second meetup!",
//   },
// ];

// function HomePage() {

  
//     return <MeetupList meetups={DUMMY_MEETUPS} />;
     
// }

function HomePage(props) {

  
      return(
      <Fragment>
        <Head>
          {/*Insert All the tags you would put in the head section of HTML */}
          <title>React Meetups</title>
          <meta name='description' content="Browse a huge list of highly active React meetups!" />
        </Head>
        <MeetupList meetups={props.meetups} />;
      </Fragment>
      )
       
  }


// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }

export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    ""
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage; 
