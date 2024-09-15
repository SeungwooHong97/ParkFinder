import React from "react";
import { Link } from "react-router-dom";
import PlaceList from "../../components/PlaceList";

const BookmarkTestHome = ({ user }) => {
  return (
    <div className="flex flex-col items-center gap-[20px]">
      <Link to="/bookmarkmypage">
        <button className="w-[150px]">마이페이지</button>
      </Link>
      <PlaceList isMyPage={false} user={user} />
    </div>
  );
};

export default BookmarkTestHome;
