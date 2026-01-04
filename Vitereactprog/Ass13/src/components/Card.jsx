function Card() {
  return (
    <div className="bg-white rounded shadow-md overflow-hidden">
      
      {/* CARD IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
        alt="restaurant"
        className="w-full h-48 object-cover"
      />

      {/* CARD CONTENT */}
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">Card Title</h3>
        <p className="text-gray-600 mb-4">
          This is a Tailwind CSS card component with a real image.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Read More
        </button>
      </div>

    </div>
  );
}

export default Card;
