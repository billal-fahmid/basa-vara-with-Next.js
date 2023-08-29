

const PropertyCard = ({ flatImage, area, division, district }) => {
    return (
      <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 hover:scale-105">
        <img src={flatImage} alt="Property" className="w-full h-auto" />
        <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
          <div className="text-xl font-semibold">{area}</div>
          <div className="text-sm">
            {division}, {district}
          </div>
        </div>
      </div>
    );
  };

  export default PropertyCard;