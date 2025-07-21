import styles from "./Navbar.module.scss";
import Logo from "/src/assets/FONSECA.ico";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import useMediaQuery from "@mui/material/useMediaQuery";

// Switch customizado
const MaterialUISwitch = styled(Switch)(() => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#FFDBC0",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' height='20' width='20' viewBox='0 0 20 20'><path fill='%23fff' d='M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z'/></svg>")`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#FFDBC0",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "#FF6D00",
    width: 32,
    height: 32,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' height='20' width='20' viewBox='0 0 20 20'><path fill='%23fff' d='M9.305 1.667V3.75h1.389V1.667h-1.39zM5.09 3.617l-.982.982 1.473 1.473.982-.982L5.09 3.617zM14.91 3.617l-1.473 1.473.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 100 9.722 4.872 4.872 0 000-9.722zM1.665 9.305v1.39h2.083v-1.39H1.666zM16.248 9.305v1.39h2.084v-1.39h-2.084zM5.09 13.928l-1.474 1.472.982.982 1.473-1.473-.982-.981zM14.91 13.928l-.982.981 1.473 1.473.982-.982-1.473-1.472zM9.305 16.25v2.083h1.389V16.25h-1.39z'/></svg>")`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: "#FFDBC0",
    borderRadius: 20 / 2,
  },
}));

export default function nav() {
  const [darkMode, setDarkMode] = useState(false);
  const [active, setMode] = useState(false);
  const isMobileOrTablet = useMediaQuery("(max-width:768px)");

  const ToggleMode = () => {
    setMode(!active);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <section className={styles.NavBarSection}>
      {/* Ícone hamburguer (mobile) */}
      <div
        className={`${styles.icon} ${active ? styles.iconActive : ""}`}
        onClick={ToggleMode}
      >
        <div className={styles.hamburguer}></div>
      </div>

      {/* Nav tradicional (desktop) */}
      <nav className={styles.NavBar}>
        <div className={styles.navWrapper}>
          <img src={Logo} className={styles.logo} alt="Logo" />

          <ul>
            <li><a href="#Sobre" className={styles.aNav}>Sobre mim</a></li>
            <li><a href="#Skills" className={styles.aNav}>Minhas Skills</a></li>
            <li><a href="#Projects" className={styles.aNav}>Projetos</a></li>
            <li><a href="#Contact" className={styles.aNav}>Contato</a></li>
          </ul>

          {!isMobileOrTablet && (
            <FormGroup className={styles.switchMobile}
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                },
              }}
            >
              <FormControlLabel
                sx={{ position: "absolute", top: 35, right: 30 }}
                control={
                  <MaterialUISwitch
                    sx={{ m: 1 }}
                    checked={darkMode}
                    onChange={() => setDarkMode((prev) => !prev)}
                  />
                }
                label=""
              />
            </FormGroup>
          )}
        </div>
      </nav>

      

      {/* Menu lateral (mobile) */}
      <div className={active ? styles.menuOpen : styles.menuClose}>
        <ul>
          <li><a href="#Sobre" className={styles.aNav} onClick={() => setMode(false)}>Sobre mim</a></li>
          <li><a href="#Skills" className={styles.aNav} onClick={() => setMode(false)}>Minhas Skills</a></li>
          <li><a href="#Projects" className={styles.aNav} onClick={() => setMode(false)}>Projetos</a></li>
          <li><a href="#Contact" className={styles.aNav} onClick={() => setMode(false)}>Contato</a></li>
        </ul>
      </div>

      {/* ✅ Overlay escuro ao abrir menu */}
      {active && <div className={styles.menuOverlay}></div>}
    </section>
  );
}