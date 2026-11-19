import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex items-center gap-3">
        <SignInButton mode="modal">
          <Button variant="primary" size="lg">
            Login
          </Button>
        </SignInButton>

        <SignUpButton mode="modal">
          <Button variant="outline" size="lg">
            Register
          </Button>
        </SignUpButton>
      </div>
    </main>
  );
}
