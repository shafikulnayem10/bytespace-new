const variants = {
  primary: "bg-secondary-500 text-neutral-950 hover:bg-secondary-400",
  outline: "border border-white text-white hover:bg-white/10",
  ghost: "text-white hover:text-secondary-500",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-body-s font-medium transition-colors cursor-pointer ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}