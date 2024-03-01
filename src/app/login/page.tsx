import { BlockTeaser, PrimaryButton, SecondaryButton } from "@/components";
import { TextInput } from "@/components";

export default function Login() {
  return (
    <div
      className="flex justify-center items-center"
      style={{ backgroundImage: "url(/viper-rover.jpg)" }}
    >
      <header></header>
      <main className="max-w-[70%] my-8">
        <BlockTeaser
          phrase="Welcome Back, Explorer!"
          header="Login"
          subheader="Enter your email and password to login to your dashboard. Don't have an account? Sign Up Now!"
        >
          {/* <TextInput label="Email" placeholderText="example@example.com" /> */}
          <div className="mb-2">
            <label htmlFor="text_input" className="text-subtitle text-white">
              Email
            </label>
          </div>
          <input
            type="text"
            name="text_input"
            placeholder="placeholder-text"
            className="border-gray-light-mid w-full px-4 py-3 border mt-2 focus:border-focus-blue focus:shadow-jpl"
          />
          <div className="mb-2">
            <label htmlFor="text_input" className="text-subtitle text-white">
              Password
            </label>
          </div>
          <input
            type="text"
            name="text_input"
            placeholder="placeholder-text"
            className="border-gray-light-mid w-full px-4 py-3 border mt-2 focus:border-focus-blue focus:shadow-jpl"
          />
          <PrimaryButton href="/signup">Sign Up</PrimaryButton>
          <SecondaryButton>Login</SecondaryButton>
        </BlockTeaser>
      </main>
    </div>
  );
}
