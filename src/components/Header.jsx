import React, { useEffect, useState } from "react";
import { Link, useNavigate , useParams} from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

export default function Header() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const haldleSubmit = (e) => {
    e.preventDefault(); 
    navigate(`/videos/${text}`)
  };
  useEffect(() => setText(keyword || ''), [keyword])

  return (
    <header className="w-full h-16 flex items-center px-8 text-base mb-4">
      <Link to='/videos' className="flex items-center">
        <FaYoutube className="text-3xl text-brand"/>
        <h1 className="font-bold ml-1 text-2xl">YouTube</h1>
      </Link>
      <form className="w-full flex justify-center"  onSubmit={haldleSubmit}>
        <input
          className="w-5/12 p-2 px-6 outline-none bg-bg border border-border rounded-full rounded-e-none"
          type="text"
          placeholder="검색"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="w-16 flex items-center justify-center bg-ugray px-4 border border-l-0 border-border rounded-full rounded-s-none">
          <IoIosSearch className="text-2xl"/>
        </button>
      </form>
    </header>
  );
}