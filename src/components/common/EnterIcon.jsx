import { IoEnter } from "react-icons/io5";
import { IconContext } from "react-icons";

export function EnterIcon() {
  return (
    <>
      <IconContext.Provider value={{ size: "25px" }}>
        <div className="enter-icon-wrapper">
          <IoEnter />
        </div>
      </IconContext.Provider>
    </>
  );
}
