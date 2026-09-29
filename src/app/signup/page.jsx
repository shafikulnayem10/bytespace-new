import AuthLayout from "@/components/auth/AuthLayout";
import SignupForm from "@/components/auth/SignupForm";

export const metadata = {
  title: "Create an Account | ByteSpace",
};

export default function SignupPage() {
  return (
    <AuthLayout
      heading="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <SignupForm />
    </AuthLayout>
  );
}