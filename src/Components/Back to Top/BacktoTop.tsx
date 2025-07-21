import ScrollToTop from "react-scroll-to-top";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function CoolPage() {
   const showScrollToTop = useMediaQuery("(min-width:768px)");
  return (
    <div>
  
      <div style={{ marginTop: "10vh" }} />
      {showScrollToTop && (
        <ScrollToTop
          smooth
          color="#03071E"
          width="18px"
          height="18px"
          style={{ backgroundColor: "#FF6D00", width: "27px", height: "27px" }}
        />
      )}
    </div>
  );
}