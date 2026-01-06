import FeedbackForm from "./components/FeedbackForm";
import ImageSlideshow from "./components/ImageSlideshow";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <FeedbackForm />
      <ImageSlideshow />
      <TodoApp/>
    </div>
  );
}

export default App;
