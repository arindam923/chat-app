
import Image from "next/image"



type FileIconProps = {
  fileName: string
}

const FileIcon: React.FC<FileIconProps> = ({ fileName }) => {

  const fileExtension = fileName.split(".").pop()?.toLowerCase()

  let icon: React.ReactNode;
  if (!fileExtension) return ""


  switch (fileExtension) {
    case "pdf":
      icon = <Image src="/pdf.svg" width={30} height={30} alt="" />
      break

    default:
      icon = <Image src="/unknown.svg" width={30} height={30} alt="" />
      break
  }

  return <div>{icon}</div>
}

export default FileIcon

