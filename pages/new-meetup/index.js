//our-domain.com/new-meetup

import { useRouter } from 'next/router';
import { Fragment } from 'react';

import Head from 'next/head';

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {

    const router = useRouter();

    async function addMeetUpHandler(enteredMeetupData) {
        //sends request to new-meetup.js  file
       const response = await fetch('/api/new-meetup', {
           method: 'POST',
           body: JSON.stringify(enteredMeetupData),
           headers: {
               'Content-Type': 'application/json'
           }
       });

       const data = await response.json();

       console.log(data);

       //programmatic navigation
       router.push('/')
    }

    return (
      <Fragment>
        <Head>
          {/*Insert All the tags you would put in the head section of HTML */}
          <title>add a New Meetup</title>
          <meta
            name="description"
            content="Add your own meetups and create amazing networking oppurtunities."
          />
        </Head>
        <NewMeetupForm onAddMeetup={addMeetUpHandler} />
      </Fragment>
    );
}

export default NewMeetupPage;