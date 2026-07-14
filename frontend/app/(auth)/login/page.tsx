import type { Metadata } from "next";
import Link from "next/link";
import AuthButton from "../../components/auth/AuthButton";
import AuthCard from "../../components/auth/AuthCard";
import AuthDivider from "../../components/auth/AuthDivider";
import AuthInput from "../../components/auth/AuthInput";
import GoogleButton from "../../components/auth/GoogleButton";

export const metadata: Metadata = { title: "Login | InterviewAI" };

export default function LoginPage() {
  return (
    <AuthCard title="Welcome Back" subtitle="Continue your interview preparation journey." footer={<>Don&apos;t have an account? <Link href="/signup" className="font-semibold text-indigo-600 hover:text-indigo-700 hover:underline">Create Account</Link></>}>
      <form action="/" className="space-y-5">
        <AuthInput id="login-email" name="email" type="email" label="Email" placeholder="you@example.com" autoComplete="email" required />
        <AuthInput id="login-password" name="password" type="password" label="Password" placeholder="Enter your password" autoComplete="current-password" required />
        <div className="flex items-center justify-between gap-4 text-sm">
          <label className="flex cursor-pointer items-center gap-2 text-slate-600"><input name="remember" type="checkbox" className="size-4 rounded border-slate-300 accent-indigo-600" />Remember me</label>
          <Link href="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-700 hover:underline">Forgot Password?</Link>
        </div>
        <AuthButton type="submit">Login</AuthButton>
      </form>
      <div className="my-6"><AuthDivider /></div>
      <GoogleButton />
    </AuthCard>
  );
}
