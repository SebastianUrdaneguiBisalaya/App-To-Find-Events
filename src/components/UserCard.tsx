import React, { useState } from "react";

interface UserCardProps {
  name: string;
  lastName: string;
  email: string;
  avatar?: string;
  userId: string | null;
}

export const UserCard: React.FC<UserCardProps> = ({ name, lastName, email, avatar, userId }) => {
  const [currentAvatar, setCurrentAvatar] = useState(
    avatar || "https://cdn-icons-png.flaticon.com/512/10813/10813372.png",
  );

  const changeProfileImage = async () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/jpeg, image/png";

    fileInput.onchange = async (event) => {
      const files = (event.target as HTMLInputElement).files;
      if (files && files.length > 0) {
        const file = files[0];
        const formData = new FormData();
        formData.append("file", file);
        if (userId) {
          formData.append("userId", userId);
        }

        try {
          const response = await fetch(`${import.meta.env.VITE_API_UPLOAD_IMAGE}`, {
            method: "POST",
            body: formData,
          });

          if (!response.ok) {
            throw new Error("Failed to upload image");
          }

          const result = await response.json();
          setCurrentAvatar(result.result.secure_url);
        } catch (err) {
          console.error(err instanceof Error ? err.message : "An error occurred");
        }
      }
    };

    fileInput.click();
  };

  return (
    <div className="flex flex-col md:flex-row mx-auto items-center justify-center bg-white max-w-[342px] p-5">
      <div className="flex flex-col items-center">
        <img
          src={currentAvatar}
          alt="Avatar"
          className="w-[104px] h-[104px] rounded-full"
        />
        <button
          className="absolute mt-20 ml-20 flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md cursor-pointer"
          onClick={changeProfileImage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#333538"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 20h9M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854zM15 5l3 3"
            />
          </svg>
        </button>

        <h1 className="text-xl font-bold mt-2 font-poppins">
          {name} {lastName}
        </h1>
        <p className="text-sm text-center font-poppins">{email}</p>
      </div>
    </div>
  );
};
