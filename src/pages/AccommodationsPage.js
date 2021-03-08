import allAccommodations from '../assets/samples/sample-accommodations';

const AccommodationPage = () => {
  console.log({ accomm: allAccommodations() });
  return (
    <div>
      <h2>Hey! Welcome to the new world!</h2>
    </div>
  );
};

export default AccommodationPage;
