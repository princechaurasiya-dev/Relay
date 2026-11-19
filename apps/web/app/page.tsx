import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="flex items-center gap-4">
        <SignInButton mode="modal">
          <Button>Login</Button>
        </SignInButton>

        <SignUpButton mode="modal">
          <Button>Register</Button>
        </SignUpButton>
      </div>
    </main>
  );
}
