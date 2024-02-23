import Link from "next/link";

const Home = () => {
  return (
      <div className="main-content">
        <h1 className="main-text">
          Citizen Scientists Needed. Sign up to identify moon rocks for Viper rover expeditions.
        </h1>

        <Link href = "/api/auth/signin">
          <button className="startbutton">Start</button>
        </Link>

      </div>
  );
};

export default Home;