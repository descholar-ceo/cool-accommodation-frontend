import allAccommodations from '../assets/samples/sample-accommodations';
import AccommodationCard from '../components/AccommodationCard';
import Footer from '../components/Footer';

const AccommodationPage = () => {
  const accommodationsList = allAccommodations.map(accomm => (
    <AccommodationCard key={accomm.id} accommodationObject={accomm} />));

  return (
    <div>
      { accommodationsList }
      <Footer />
    </div>
  );
};

export default AccommodationPage;
