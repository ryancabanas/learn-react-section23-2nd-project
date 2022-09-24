import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
    title: "A 1st Meetup",
    address: "123 Main St, City, State",
    description: "This is a 1st meetup.",
  },
  {
    id: "m2",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a4/Paris_Opera_full_frontal_architecture%2C_May_2009_%28cropped%29.jpg",
    title: "A 2nd Meetup",
    address: "456 Main St, City, State",
    description: "This is a 2nd meetup.",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export const getStaticProps = async () => {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    // revalidate: 60,
  };
};

export default HomePage;
