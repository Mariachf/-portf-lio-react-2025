import styles from "./Projects.module.scss";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { CiLink } from "react-icons/ci";
import { FaSquareGithub } from "react-icons/fa6";
import Jazz from "../../assets/jazz.png";
import CV from "../../assets/CV.png";
import Iphone from "../../assets/iphone.png";
import Rick from "../../assets/rick.png";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FF6D00",
    },

    background: {
      default: "#9ea2bb",
      paper: "#03071E",
    },
    text: {
      primary: "#FF6D00",
      secondary: "#ffffff",
    },
  },
});

export default function MediaCard() {
  const cards = [
    {
      id: 1,
      title: "Projeto Jazz",
      content: "HTML/CSS/JS",
      image: Jazz,
      shareLink: "https://github.com/Mariachf/projeto_sax",
      moreLink: "https://pjk4sh.csb.app/",
    },
    {
      id: 2,
      title: "Rick e Morty",
      content: "REACT/API",
      image: Rick,
      shareLink: "https://github.com/Mariachf/Rick_and_morty",
      moreLink: "https://rick-and-morty-gamma-three.vercel.app/",
    },
    {
      id: 3,
      title: "Página Iphone",
      content: "HTML/CSS/JS",
      image: Iphone,
      shareLink: "https://github.com/Mariachf/pageiPhone",
      moreLink: "https://mariachf.github.io/pageiPhone/",
    },
    {
      id: 4,
      title: "Currículo",
      content: "VITE/REACT",
      image: CV,
      shareLink: "https://github.com/Mariachf/cv",
      moreLink: "https://lighthearted-buttercream-2303cf.netlify.app/",
    },
  ];

  return (
    <section id="Projects" className={styles.projects}>
      <h2>
        Projetos<span>.</span>
      </h2>

      <ThemeProvider theme={darkTheme}>
        <Grid
          container
          rowSpacing={5}
          columnSpacing={0}
          justifyContent="center"
        >
          {cards.map((card) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              key={card.id}
              sx={{ width: "80%" }}
            >
              <Card sx={{ maxWidth: 345, width: "100%", mx: "auto" }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={card.image}
                  title={card.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.content}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    component="a"
                    href={card.shareLink}
                    target="_blank"
                    rel="noopener"
                  >
                    <FaSquareGithub color="FF6D00" size={27} />
                  </Button>
                  <Button
                    size="small"
                    component="a"
                    href={card.moreLink}
                    target="_blank"
                    rel="noopener"
                  >
                    <CiLink color="FF6D00" size={27} />
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </ThemeProvider>
    </section>
  );
}
