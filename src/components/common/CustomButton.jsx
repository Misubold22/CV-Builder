import { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";

export function CustomButton({ className, label, onClick }) {
  return (
    <button className={className} type="button" onClick={onClick}>
      {label}
    </button>
  );
}

export function TransBtn() {
  const [show, setShow] = useState(true);
  const ref = useRef(null);
  return (
    <>
      <button
        type="button"
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "hide" : "show"}
      </button>
      <CSSTransition
        in={show}
        classNames="fade-out"
        nodeRef={ref}
        timeout={600}
        unmountOnExit
      >
        <div ref={ref} className="box">
          I want to be faded in and out
        </div>
      </CSSTransition>
    </>
  );
}
