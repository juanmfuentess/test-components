import { Container } from "../../ui/Container";
import { Grid } from "../../ui/Grid";
import { Card } from "../../ui/Card";
import { Box } from "../../ui/Box";

const SpeedIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    ></path>
  </svg>
);
const ResponsiveIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    ></path>
  </svg>
);
const AnimationIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 10V3L4 14h7v7l9-11h-7z"
    ></path>
  </svg>
);

const FeatureCard = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <Card className="p-6 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-500/20">
    <Box className="flex items-center justify-center h-12 w-12 rounded-md bg-sky-500 text-white mb-4">
      {icon}
    </Box>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="opacity-80">{children}</p>
  </Card>
);

export function Features() {
  return (
    <section id="features" className="py-20 bg-[var(--secondary)]">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Una Experiencia de Usuario que Enamora
          </h2>
          <p className="opacity-80 max-w-2xl mx-auto">
            Cada detalle está pensado para guiar, deleitar y convertir a tus
            visitantes.
          </p>
        </div>
        <Grid
          templateColumns="repeat(1, 1fr)"
          className="md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <FeatureCard icon={<SpeedIcon />} title="Carga Ultra Rápida">
            Optimizamos cada recurso para que tu página cargue en un parpadeo,
            mejorando el SEO y la retención de usuarios.
          </FeatureCard>
          <FeatureCard icon={<ResponsiveIcon />} title="Diseño 100% Responsivo">
            Tu landing page se verá y funcionará a la perfección en cualquier
            dispositivo: móvil, tableta o computadora.
          </FeatureCard>
          <FeatureCard
            icon={<AnimationIcon />}
            title="Animaciones Interactivas"
          >
            Desde sutiles efectos hover hasta animaciones que aparecen al
            navegar, creamos una experiencia dinámica y memorable.
          </FeatureCard>
        </Grid>
      </Container>
    </section>
  );
}
