import type { Metadata } from "next";
import Link from "next/link";
import AuthButton from "../../components/auth/AuthButton";
import AuthCard from "../../components/auth/AuthCard";
import AuthDivider from "../../components/auth/AuthDivider";
import AuthInput from "../../components/auth/AuthInput";
import GoogleButton from "../../components/auth/GoogleButton";

export const metadata: Metadata = { title: "Create Account | InterviewAI" };

export default function SignupPage() {
  return (
    <AuthCard title="Create Your Account" subtitle="Start preparing for interviews with AI." footer={<>Already have an account? <Link href="/login" className="font-semibold text-indigo-600 hover:text-indigo-700 hover:underline">Login</Link></>}>
      <form action="/" className="space-y-5">
        <AuthInput id="signup-name" name="name" type="text" label="Full Name" placeholder="Your full name" autoComplete="name" required />
        <AuthInput id="signup-email" name="email" type="email" label="Email" placeholder="you@example.com" autoComplete="email" required />
        <div className="grid gap-5 sm:grid-cols-2">
          <AuthInput id="signup-password" name="password" type="password" label="Password" placeholder="Create password" autoComplete="new-password" minLength={8} required />
          <AuthInput id="signup-confirm-password" name="confirmPassword" type="password" label="Confirm Password" placeholder="Repeat password" autoComplete="new-password" minLength={8} required />
        </div>
        <AuthButton type="submit">Create Account</AuthButton>
      </form>
      <div className="my-6"><AuthDivider /></div>
      <GoogleButton />
    </AuthCard>
  );
}
