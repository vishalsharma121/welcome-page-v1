import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-purple-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-purple-700">Register</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
