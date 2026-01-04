function Form() {
  return (
    <form className="bg-white p-6 rounded shadow max-w-md">
      <input
        className="w-full p-2 mb-4 border rounded focus:ring-2 focus:ring-blue-400"
        placeholder="Name"
      />
      <input
        className="w-full p-2 mb-4 border rounded focus:ring-2 focus:ring-blue-400"
        placeholder="Email"
      />
      <input
        type="password"
        className="w-full p-2 mb-4 border rounded focus:ring-2 focus:ring-blue-400"
        placeholder="Password"
      />
      <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
}

export default Form;
