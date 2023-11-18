import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CreateUser from "../features/user/CreateUser";
function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="my-10 px-4 text-center">
      <h1 className="mb-8 text-xl font-semibold text-stone-700 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-700">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <Link
          to="/menu"
          className="inline-block rounded-full bg-yellow-400  px-4 py-3  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none sm:px-6 sm:py-4"
        >
          Start ordering {username}
        </Link>
      )}
    </div>
  );
}

export default Home;
