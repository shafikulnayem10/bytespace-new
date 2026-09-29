function FacebookIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07c0 5.03 3.66 9.2 8.44 9.93v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34V22c4.78-.73 8.43-4.9 8.43-9.93Z" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M21.35 11.1H12v2.98h5.35c-.23 1.4-1.63 4.1-5.35 4.1-3.22 0-5.85-2.67-5.85-5.96S8.78 6.26 12 6.26c1.83 0 3.06.78 3.76 1.45l2.56-2.47C16.68 3.7 14.55 2.7 12 2.7 6.9 2.7 2.8 6.85 2.8 12.22S6.9 21.74 12 21.74c5.27 0 8.76-3.7 8.76-8.92 0-.6-.07-1.06-.16-1.72Z"
      />
    </svg>
  );
}

const providers = [
  { name: "Facebook", Icon: FacebookIcon },
  { name: "Google", Icon: GoogleIcon },
];

export default function SocialButtons() {
  return (
    <div className="flex items-center justify-center gap-4">
      {providers.map(({ name, Icon }) => (
        <button
          key={name}
          type="button"
          aria-label={`Continue with ${name}`}
          className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gray-200 bg-white text-black transition-colors hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          <Icon />
        </button>
      ))}
    </div>
  );
}
