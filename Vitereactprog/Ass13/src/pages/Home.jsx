import Navbar from "../components/Navbar";
import Button from "../components/Button";
import HoverImage from "../components/HoverImage";
import Card from "../components/Card";
import Table from "../components/Table";
import Form from "../components/Form";

function Home() {
  return (
    <div className="p-6 space-y-10">

      <Navbar />

      {/* Responsive Gradient Text */}
      <h2 className="text-xl md:text-3xl lg:text-5xl font-bold
                     bg-gradient-to-r from-blue-500 to-purple-500
                     text-transparent bg-clip-text">
        Tailwind CSS Basics Exploration
      </h2>

      <Button />

      <HoverImage />

      {/* List Styling */}
      <ul className="list-disc list-inside pl-5">
        <li className="hover:text-blue-600">Utility Classes</li>
        <li className="hover:text-blue-600">Hover Effects</li>
        <li className="hover:text-blue-600">Responsive Design</li>
      </ul>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card />
        <Card />
        <Card />
      </div>

      <Table />

      <Form />

    </div>
  );
}

export default Home;
