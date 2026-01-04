function HoverImage() {
  return (
    <div className="w-64">
      <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
        className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        alt="office workspace"
      />
    </div>
  );
}

export default HoverImage;
