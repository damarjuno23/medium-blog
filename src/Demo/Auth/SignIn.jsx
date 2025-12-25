import { MdKeyboardArrowLeft } from "react-icons/md";
import Input from "../../utils/Input";
import { useState } from "react";

const SignIn = ({ setSignReq }) => {
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="size mt-[6rem] text-center">
      <h2 className="text-3xl">Sign in with email</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input form={form} setForm={setForm} type="email" title="email" />
        <Input form={form} setForm={setForm} type="password" title="password" />

        <button
          className={`px-4 py-1 text-sm rounded-full bg-green-700 text-white
          ${loading ? "opacity-50 pointer-events-none" : ""}`}>
          Sign In
        </button>
      </form>

      <button
        onClick={() => setSignReq("")}
        className="mt-5 text-sm text-green-600 flex items-center mx-auto">
        <MdKeyboardArrowLeft />
        All sign In Options
      </button>
    </div>
  );
};

export default SignIn;
