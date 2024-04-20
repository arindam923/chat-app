import Image from "next/image";

type SocialButtonProps = {
  title: string;
  imagePath: string;
  onClick: () => void;
};

export const SocialButton: React.FC<SocialButtonProps> = ({
  imagePath,
  title,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="flex border transform hover:border-slate-100 items-center space-x-4 border-slate-600 rounded-md w-[70%] py-2 text-xs justify-center text-slate-300  my-4"
    >
      <Image src={imagePath} width={35} height={35} alt="Social Image path" />
      <span>{title}</span>
    </button>
  );
};
