import Image from "next/image";
import workIcon from "@assets/images/work.svg";

const WorkIcon = () => (
  <div className="d-flex position-relative justify-content-center align-items-center h-100">
    <Image draggable={false} alt="" src={workIcon} height={30} width={30} />
  </div>
);

export default WorkIcon;
