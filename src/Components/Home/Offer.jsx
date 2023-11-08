import offer_image from "../../assets/images/special-offer-lettering-speech-bubble_1262-8009.avif";

const Offer = () => {
  return (
    <div className="pt-10 ">
      <div className="text-center font-mono bg-cyan-300 rounded-md">
        <h3 className="text-3xl p-4">Special Offer!</h3>
      </div>

      <div className="hero  bg-base-200 mb-5 ">
        <div className="hero-content flex-col lg:flex-row">
          <img src={offer_image} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="w-1/2">
            <h1 className="text-5xl font-bold">Get 50% OFF!</h1>
            <p className="py-2 font-sans font-medium">
              Indulge in our spacious Double Room, ideal for couples or friends
              traveling together. With our 50% discount offer, you can enjoy a
              comfortable and enjoyable stay at a fraction of the regular price.
              The room boasts a large bed, a cozy seating area, and a modern
              bathroom. It's the perfect accommodation for a relaxing visit with
              all the amenities you need. Book now to secure your stay and
              experience a delightful escape with this special discount.
            </p>
            <button className="bg-cyan-300 font-semibold w-30 rounded-md p-2">
              Explore Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
