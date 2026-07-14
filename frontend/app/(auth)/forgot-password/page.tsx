import type { Metadata } from "next";
import Link from "next/link";
import AuthButton from "../../components/auth/AuthButton";
import AuthCard from "../../components/auth/AuthCard";
import AuthInput from "../../components/auth/AuthInput";

export const metadata: Metadata = { title: "Forgot Password | InterviewAI" };

export default function ForgotPasswordPage() {
  return (
    <AuthCard title="Forgot Password" subtitle="Enter your email and we'll send you a password reset link." footer={<Link href="/login" className="inline-flex items-center gap-2 font-semibold text-indigo-600 hover:text-indigo-700 hover:underline">← Back to Login</Link>}>
      <form action="/login" className="space-y-5">
        <AuthInput id="reset-email" name="email" type="email" label="Email" placeholder="you@example.com" autoComplete="email" required />
        <AuthButton type="submit">Send Reset Link</AuthButton>
      </form>
    </AuthCard>
  );
}
