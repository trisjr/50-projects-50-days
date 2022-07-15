import { Link } from "react-router-dom";

function ErrorPage({
  title = "Page Not Found!",
  content = "Please check the URL in the address bar and try again.",
}: {
  title?: string;
  content?: string;
}) {
  return (
    <div
      className={
        "h-screen pt-[66px] w-screen bg-gray-100 flex items-center justify-center"
      }
    >
      <div>
        <div className={"sm:flex items-center text-center"}>
          <div
            className={"font-bold text-8xl px-7 sm:border-r-2 sm:border-black"}
          >
            404
          </div>
          <div className={"ml-4"}>
            <div className={"font-bold text-6xl"}>{title}</div>
            <div className={"mt-3 text-gray-400 text-left italic"}>
              {content}
            </div>
          </div>
        </div>
        <div className={"text-center mt-8 flex justify-center"}>
          <Link
            to="/"
            className="w-52 mx-2 flex items-center justify-center px-7 py-2 border border-transparent rounded-md shadow-sm text-base text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Go back home
          </Link>
          <Link
            to="#"
            className="w-52 mx-2 flex items-center justify-center px-7 py-2 border border-transparent rounded-md shadow-sm text-base text-white bg-gray-400 hover:bg-gray-500"
          >
            Contact support
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
