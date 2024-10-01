interface UserCardProps {
  name: string;
  lastName: string;
  email: string;
}

export const UserCard: React.FC<UserCardProps> = ({ name, lastName, email }) => {
  return (
    <div className="flex flex-col md:flex-row mx-auto items-center justify-center bg-white max-w-[342px] p-5">
      <div className="flex flex-col items-center mb-5">
        <img
          src="https://www.w3schools.com/w3images/avatar1.png"
          alt="Avatar"
          className="w-[104px] h-[104px] rounded-full"
        />
        <div className="absolute mt-20 ml-20 flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md">
          <span className="icon-[lucide--pencil-line]"></span>
        </div>
        <h1 className="text-xl font-bold mt-2">
          {name} {lastName}
        </h1>
        <p className="text-sm text-center">{email}</p>
      </div>
    </div>
  );
};
