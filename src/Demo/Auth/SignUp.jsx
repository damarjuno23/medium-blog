import { MdKeyboardArrowLeft } from "react-icons/md";
import Input from "../../utils/Input";
import { useState } from "react";

const SignUp = ({ setSignReq }) => {
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="size mt-[6rem] text-center">
      <h2 className="text-3xl">Sign up with email</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input form={form} setForm={setForm} type="text" title="username" />
        <Input form={form} setForm={setForm} type="email" title="email" />
        <Input form={form} setForm={setForm} type="password" title="password" />
        <Input form={form} setForm={setForm} type="password" title="rePassword" />

        <button
          className={`px-4 py-1 text-sm rounded-full bg-green-700 text-white
          ${loading ? "opacity-50 pointer-events-none" : ""}`}>
          Sign Up
        </button>
      </form>

      <button
        onClick={() => setSignReq("")}
        className="mt-5 text-sm text-green-600 flex items-center mx-auto">
        <MdKeyboardArrowLeft />
        All sign Up Options
      </button>
    </div>
  );
};

export default SignUp;
