import { Container } from "../../ui/Container";
import { Grid } from "../../ui/Grid";
import { PricingCard } from "./PricingCard";
import { PricingListItem } from "./PricingListItem";

export function Pricing() {
  return (
    <section id="servicios" className="py-20">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Paquetes Pensados para tu Éxito
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Desde un lanzamiento rápido hasta la optimización total. Encuentra
            el plan perfecto para tus objetivos.
          </p>
        </div>

        <Grid className="grid-cols-1 lg:grid-cols-3 gap-8">
          <PricingCard
            planName="Arranque Digital"
            description="Ideal para validar ideas y lanzar campañas rápidas."
            price="5,000"
            discountText="OFERTA"
            features={[
              "Diseño con Plantilla Pro",
              "100% Responsive",
              "Formulario de Contacto",
              "Animaciones en Botones",
              "1 Ronda de Revisiones",
            ]}
          />
          <PricingCard
            planName="Crecimiento y Conversión"
            description="La solución completa para capturar leads y medir resultados."
            price="10,000"
            isRecommended
            discountText="-20% dto"
            features={[
              "Todo lo de Arranque, y:",
              "Diseño 100% Personalizado",
              "Integración Analytics y Píxel",
              "Animaciones al Hacer Scroll",
              "Popup con Intención de Salida",
              "2 Rondas de Revisiones",
            ]}
          />
          <PricingCard
            planName="Optimización Total"
            description="Para campañas de alto rendimiento que buscan maximizar el ROI."
            price="20,000"
            newFeatureText="NUEVO"
            features={[
              "Todo lo de Crecimiento, y:",
              "Pruebas A/B",
              "Mapas de Calor (Hotjar)",
              "Animaciones Lottie / Parallax",
              "Copywriting Persuasivo",
              "3 Rondas + Soporte 15 días",
            ]}
          />
        </Grid>
      </Container>
    </section>
  );
}
