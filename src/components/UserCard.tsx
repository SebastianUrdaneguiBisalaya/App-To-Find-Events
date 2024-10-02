interface UserCardProps {
  name: string;
  lastName: string;
  email: string;
  avatar?: string;
}

export const UserCard: React.FC<UserCardProps> = ({ name, lastName, email, avatar }) => {
  return (
    <div className="flex flex-col md:flex-row mx-auto items-center justify-center bg-white max-w-[342px] p-5">
      <div className="flex flex-col items-center">
        <img
          src={avatar}
          alt="Avatar"
          className="w-[104px] h-[104px] rounded-full"
        />
        <div className="absolute mt-20 ml-20 flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#333538"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 20h9M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854zM15 5l3 3"
            />
          </svg>
        </div>
        <h1 className="text-xl font-bold mt-2">
          {name} {lastName}
        </h1>
        <p className="text-sm text-center">{email}</p>
      </div>
    </div>
  );
};
