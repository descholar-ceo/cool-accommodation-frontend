import { accommodations } from '../assets/samples/sample-accommodations';
import AccommodationCard from '../components/AccommodationCard';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const AccommodationPage = () => {
  const accommodationsList = accommodations.map(accomm => (
    <AccommodationCard key={accomm.id} accommodationObject={accomm} />));

  return (
    <div className="">
      <Navbar bg="has-background-primary-dark" />
      <div className="m-2">
        { accommodationsList }
      </div>
      <Footer />
    </div>
  );
};

export default AccommodationPage;
