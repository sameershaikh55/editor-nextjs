import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      Home Page
      <div>
        <Link href="/login">
          <a>Go to Login Page</a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
