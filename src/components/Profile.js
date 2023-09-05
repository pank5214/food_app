import React, { useEffect, useState } from "react";
import ProfileUser from "./ProfileUser";

const Profile = () => {
  const [gitData, setGitData] = useState("");
  useEffect(() => {
    gitHubAccountData();
  }, []);

  const gitHubAccountData = async () => {
    const data = await fetch("https://api.github.com/users/pank5214");
    const json = await data.json();
    console.log("json", json);
    setGitData(json);
  };

  return (
    <div className="flex flex-col m-2 p-3 md:m-4 md:p-4 w-[350px] h-[460px] md:h-[500px] rounded-lg shadow-2xl">
      <h1 className="font-bold text-3xl self-center">About Me</h1>
      <img
        className="inline-block rounded-full h-35 w-8/12 mt-2 p-4 hover:cursor-pointer self-center"
        src={gitData.avatar_url}
        alt="git-avatar"
      />
      <h1 className="font-bold text-2xl self-center py-2">{gitData.name}</h1>
      <p className="text-sm md:text-lg text-center">{gitData.bio}</p>
      <ProfileUser gitData={gitData} />
    </div>
  );
};

export default Profile;
