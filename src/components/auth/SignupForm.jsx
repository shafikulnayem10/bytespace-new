import Link from "next/link";

const inputClass =
  "mt-2 h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-black outline-none placeholder:text-gray-400 focus:border-[#0038ff] focus:bg-white";

export default function SignupForm() {
  return (
    <div className="flex min-h-[560px] flex-col rounded-3xl bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.15)] md:p-10">

      <p className="text-xs text-[#0038ff]">
        Create an Account
      </p>

      <h2 className="mt-1 max-w-[320px] text-4xl font-semibold leading-tight tracking-tight text-black">
        Welcome to ByteSpace
      </h2>

      <form className="mt-8 flex flex-col gap-5">

        <div>
          <label
            htmlFor="signup-name"
            className="text-xs text-gray-900"
          >
            Full Name
          </label>

          <input
            id="signup-name"
            type="text"
            placeholder="Jamie Davis"
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="signup-email"
            className="text-xs text-gray-900"
          >
            Email
          </label>

          <input
            id="signup-email"
            type="email"
            placeholder="designer@example.com"
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="signup-password"
            className="text-xs text-gray-900"
          >
            Password
          </label>

          <input
            id="signup-password"
            type="password"
            placeholder="********"
            className={inputClass}
          />
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            className="h-10 rounded-full bg-[#D4FB20] px-8 text-sm font-medium text-black hover:bg-[#c3ea1c]"
          >
            Continue
          </button>
        </div>

      </form>

      <p className="mt-auto pt-12 text-center text-xs text-gray-500">
        Already have an account?{" "}

        <Link
          href="/login"
          className="text-[#0038ff] hover:underline"
        >
          Login
        </Link>
      </p>

    </div>
  );
}