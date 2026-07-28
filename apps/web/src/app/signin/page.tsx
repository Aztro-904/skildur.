import DarkVeil from "@/components/ui/DarkVeil";
import AccountCard from "@/components/account/AccountCard";
import AccountHeader from "@/components/account/AccountHeader";
import AccountInput from "@/components/account/AccountInput";
import SocialLogin from "@/components/account/SocialLogin";
import SpecularButton from "@/components/ui/SpecularButton";
import Link from "next/link";

export default function SigninPage() {
  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#050816]
      "
    >
      {/* DarkVeil background layer */}
      <div
        className="
          absolute
          inset-0
          z-0
        "
      >
        <DarkVeil />
      </div>


      {/* Sign in content layer */}
      <div
        className="
          relative
          z-10
          flex
          min-h-screen
          items-center
          justify-center
          px-6
        "
      >
        
        <Link
  href="/"
  className="
    absolute
    top-8
    left-8
    z-20
    text-sm
    text-zinc-400
    transition
    hover:text-white
  "
>
  ← Back to website
</Link>
        
        
        
        
        <AccountCard>

          <AccountHeader
            title="Welcome back"
            description="Continue to your Skildur workspace."
          />


          <div className="mt-8 space-y-4">

            <SocialLogin />


            <AccountInput
              placeholder="Email address"
            />


            <AccountInput
              placeholder="Password"
              type="password"
            />


            <SpecularButton
              size="md"
              radius={999}
              tint="#6366F1"
              tintOpacity={0.35}
              blur={8}
              textColor="#ffffff"
              lineColor="#C4B5FD"
              baseColor="#4338CA"
              intensity={2}
              shineSize={18}
              shineFade={60}
              thickness={2}
              speed={0.35}
              followMouse
              proximity={300}
              autoAnimate={false}
            >
              Sign In
            </SpecularButton>

          </div>


          <p
            className="
              mt-6
              text-center
              text-sm
              text-zinc-500
            "
          >
            Don't have an account? Create one
          </p>

        </AccountCard>

      </div>

    </main>
  );
}