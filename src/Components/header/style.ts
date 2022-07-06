import { styled } from "../../Global/stitches";

const ScrollDownLink = styled("a", {
  color: "$primary",
  transition: "$transition",
  position: "absolute",
  right: "-2.3rem",
  bottom: "5rem",
  transform: "rotate(90deg)",
  fontWeight: " 300",
  fontSize: "0.9rem",
  "&:hover": {
    color: "$white",
  },
});

export { ScrollDownLink };
