"use client";

import Link from "next/link";
import SocialButtons from "./SocialButtons";

const inputClass =
  "mt-2 h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-black outline-none transition-colors placeholder:text-gray-400 focus:border-[#0038ff] focus:bg-white";

export default function LoginForm() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.15)] md:p-10">
      <p className="text-xs text-[#0038ff]">Sign In</p>
      <h2 className="mt-1 text-4xl font-semibold tracking-tight text-black">
        Welcome Back
      </h2>

      <form
        onSubmit={(event) => event.preventDefault()}
        className="mt-8 flex flex-col gap-5"
      >
        <div>
          <label htmlFor="login-email" className="text-xs text-gray-900">
            Email
          </label>
          <input
            id="login-email"
            type="email"
            autoComplete="email"
            placeholder="designer@example.com"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="login-password" className="text-xs text-gray-900">
            Password
          </label>
          <input
            id="login-password"
            type="password"
            autoComplete="current-password"
            placeholder="********"
            className={inputClass}
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="h-10 rounded-full bg-[#D4FB20] px-8 text-sm font-medium text-black transition-colors hover:bg-[#c3ea1c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Sign In
          </button>
        </div>
      </form>

      <div className="my-8 flex items-center gap-4" role="separator">
        <span className="h-px flex-1 bg-gray-200" />
        <span className="text-xs text-gray-500">or</span>
        <span className="h-px flex-1 bg-gray-200" />
      </div>

      <SocialButtons />

      <p className="mt-10 text-center text-xs text-gray-500">
        New user?{" "}
        <Link href="/signup" className="text-[#0038ff] hover:underline">
          Create an account
        </Link>
      </p>
    </div>
  );
}
