import { useHistory } from "react-router";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
function NewMeetupsPage() {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    fetch(process.env.REACT_APP_DB_URL, {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-type": "Application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupsPage;
