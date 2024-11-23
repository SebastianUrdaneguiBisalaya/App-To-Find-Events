import { Button, UserCard, UserConfigurations } from "../components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthStore } from "../store/AuthStore";
import { fetchUserById } from "../services";

interface User {
  user_name: string;
  user_lastname: string;
  user_email: string;
  user_avatar: string;
}

export const UserInfo = () => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const [userData, setUserData] = useState<User | null>(null);
  const [updatedUser, setUpdatedUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getUserData = async () => {
      if (user?.id) {
        const data = await fetchUserById(user?.id);
        setUserData(data);
        setUpdatedUser(data);
      } else {
        console.error("User ID is null");
      }
      setLoading(false);
    };

    getUserData();
  }, [user?.id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUpdatedUser((prevUser) => (prevUser ? { ...prevUser, [id]: value } : null));
  };

  const handleSaveChanges = async () => {
    if (updatedUser && user?.id) {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_GET_INFO_USER}/${user?.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
          credentials: "include",
        });
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          console.error("Failed to update user");
        }
      } catch (error) {
        console.error("Error updating user:", error);
      }
    }
  };

  const handleLogout = async () => {
    setIsLoading(true);
    await logout();
    window.location.reload();
    setIsLoading(false);
  };

  const handleDeleteUser = async () => {
    if (user?.id) {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_GET_INFO_USER}/${user?.id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        if (response.ok) {
          logout();
        } else {
          console.error("Failed to delete user");
        }
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <>
      <div className="md:h-screen flex items-center justify-center">
        <div className="flex flex-col items-center justify-center bg-white md:flex-row md:w-[906px] mx-auto my-auto px-10 py-10 md:shadow-md rounded-[20px]">
          <div className=" flex items-center justify-center md:p-10 ">
            {user && userData ? (
              <UserCard
                name={userData.user_name}
                lastName={userData.user_lastname}
                email={userData.user_email}
                avatar={userData.user_avatar}
                userId={user.id}
              />
            ) : (
              <p className="text-3xl text-red-400 font-bold">User not found</p>
            )}
          </div>
          <div>
            <UserConfigurations
              user_name={updatedUser?.user_name ?? ""}
              user_lastName={updatedUser?.user_lastname ?? ""}
              email={updatedUser?.user_email ?? ""}
              onInputChange={handleInputChange}
            />
            <div className="flex flex-col items-center justify-center space-y-6">
              <button
                onClick={handleSaveChanges}
                className="font-medium hover:text-primary font-poppins text-sm"
              >
                Guardar Cambios
              </button>
              <Link
                className="font-medium hover:text-primary font-poppins text-sm"
                to={"/trendingEvents"}
              >
                Ir al Home
              </Link>
              <Button
                text={isLoading ? "Cargando..." : "Salir"}
                className="w-[15.625rem] h-[3.75rem]"
                onClick={handleLogout}
              />
              <button
                className="text-[#F00606] font-medium font-poppins text-sm"
                onClick={() => setShowDeleteModal(true)}
              >
                Eliminar cuenta
              </button>
            </div>
          </div>
        </div>
      </div>

      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-semibold text-center mb-4">Eliminar cuenta</h2>
            <p className="text-center mb-6">¿Estás seguro de querer eliminar tu cuenta?</p>
            <div className="flex justify-around">
              <button
                onClick={handleDeleteUser}
                className="px-4 py-2 text-primary rounded-[10px] border-2 font-poppins border-primary hover:bg-primary hover:text-white"
              >
                Eliminar
              </button>
              <Button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2"
                text="Cancelar"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
