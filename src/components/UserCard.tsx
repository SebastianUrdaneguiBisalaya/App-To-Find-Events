interface UserCardProps {
  name: string;
  lastName: string;
  email: string;
}

export const UserCard: React.FC<UserCardProps> = ({ name, lastName, email }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="flex flex-col items-center">
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
      <div className="ml-10 mt-4 w-full text-left pl-10 ">
        <div className="font-[600]">Configurations</div>

        <div className="ml-3">
          <p className="bg-[#FBFBFB] font-[500]">
            Name: <span className="font-[400]">{name}</span>
          </p>
          <p className="bg-[#FBFBFB] font-[500]">
            Last Name: <span className="font-[400]">{lastName}</span>
          </p>
          <p className="bg-[#FBFBFB] font-[500]">
            Email: <span className="font-[400]">{email}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
