import Image from "next/image";
import { imgBase64 } from "utils/imgBase64";

const WorkIcon = () => (
  <div className="d-flex position-relative justify-content-center align-items-center h-100">
    <Image alt="" src="/images/work.svg" height={30} width={30} />
  </div>
);

export default WorkIcon;
