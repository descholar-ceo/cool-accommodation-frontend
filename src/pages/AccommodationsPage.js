import allAccommodations from '../assets/samples/sample-accommodations';

const AccommodationPage = () => {
  const accommLength = allAccommodations.length;
  console.log({ accommLength });

  return (
    <div>
      <h2>Hey! Welcome to the new world!</h2>
    </div>
  );
};

export default AccommodationPage;
