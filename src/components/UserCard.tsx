import React, { useRef, useState, useEffect } from "react";
import { useAuthStore } from "../store/AuthStore"

interface UserCardProps {
  name?: string;
  lastName?: string;
  email?: string;
  avatar?: string;
}

export const UserCard: React.FC<UserCardProps> = ({ avatar }) => {

  const {user, getRememberedEmail } = useAuthStore((state) => state); 
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [imageURL, setImageURL] = useState<string | undefined>(avatar);
  const [email, setEmail] = useState<string | undefined>(user?.email);

  useEffect(() => {
    const rememberedEmail = getRememberedEmail();
    if (rememberedEmail) {
      setEmail(rememberedEmail); 
    }

    // Cargar la URL del avatar del usuario cuando el componente cargue
    if (user?.user_avatar) {
      setImageURL(user.user_avatar);
    }
  }, [getRememberedEmail, user?.user_avatar]);

  const changeProfileImage = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const uploadImageToCloudinary = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "apptofindevents");
    formData.append("cloud_name", "dyg2tq33j");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dyg2tq33j/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Error en la respuesta de Cloudinary");
      }

      const data = await response.json();
      const imageUrl = data.secure_url;
      setImageURL(imageUrl);
      console.log("Imagen subida exitosamente:", imageUrl);

      await updateUserWithImage(imageUrl);
    } catch (error) {
      console.error("Error subiendo la imagen a Cloudinary:", error);
    }
  };

  const updateUserWithImage = async (imageUrl: string) => {
    const userData = {
      user_id: user?.id,
      user_avatar: imageUrl,
    };

    try {
      const response = await fetch(
        `http://127.0.0.1:3000/users/${userData.user_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(userData),
        }
      );

      if (!response.ok) {
        throw new Error("Error al actualizar los datos del usuario");
      }

      const data = await response.json();
      console.log("Datos del usuario actualizados:", data);
    } catch (error) {
      console.error("Error al actualizar los datos del usuario:", error);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      uploadImageToCloudinary(file);
    }
  };

  return (
    <div className="flex flex-col md:flex-row mx-auto items-center justify-center bg-white max-w-[342px] p-5">
      <div className="flex flex-col items-center">
        <img
          src={user?.avatar || imageURL}
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
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <h1 className="text-xl font-bold mt-2 font-poppins">
          {user?.name || "Nombre"} {user?.lastName || "Apellido"}
        </h1>
        <p className="text-sm text-center font-poppins">
          {email || "Correo no disponible"}
        </p>
      </div>
    </div>
  );
};