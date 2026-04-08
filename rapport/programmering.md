# 4. Programmering og Teknisk Implementering

## 4.1 Arkitektoniske valg: React & Performance
Valget af React som fundament for vores website er en strategisk beslutning baseret på både udviklingseffektivitet og bæredygtighed. Selvom React grundlæggende er et **JavaScript-bibliotek**, adskiller det sig fra traditionel "vanilla" JavaScript ved at introducere en **deklarativ tilgang** og brugen af **JSX** (JavaScript XML).

### 4.1.1 Deklarativ Programmering vs. Imperativ
Hvor man i traditionel JavaScript ofte arbejder **imperativt** (man instruerer browseren trin-for-trin i at manipulere DOM-elementer), arbejder vi i React **deklarativt**. Vi beskriver modellens ideelle tilstand (state), og React håndterer automatisk de mest kodesparende og CPU-effektive opdateringer af interfacet. Ved at benytte en **Virtual DOM** sikrer React, at kun de nødvendige elementer gen-renderes. Dette reducerer mængden af beregninger på brugerens enhed, hvilket mindsker energiforbruget og sparer strøm – en kernekomponent i vores bæredygtighedsstrategi.

### 4.1.2 Optimeret Levering: JSX og Build-processen
Ved at benytte JSX kan vi skrive strukturel kode (der minder om HTML) direkte i vores logic-filer. Under vores build-proces (via Vite) bliver denne kode optimeret og minificeret til standard JavaScript, som browseren kan eksekvere lynhurtigt. For yderligere at minimere det initiale dataforbrug (payload) har vi implementeret **Lazy Loading** via Reacts `Suspense` og `lazy()` funktion. Dette sikrer, at koden for de enkelte undersider først hentes, når der er brug for den, hvilket sparer unødig dataoverførsel.

```javascript
/* Eksempel fra App.jsx */
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

function App() {
  return (
    <Suspense fallback={<div className="loading-state" />}>
      <Routes>
        <Route path="/about" element={<About />} />
        {/* ... andre ruter */}
      </Routes>
    </Suspense>
  );
}
```

## 4.2 State Management & Interaktivitet: Sustainability Slider
Som en central del af vores formidling på "Om os"-siden har vi udviklet en interaktiv "Sustainability Slider". Formålet med denne er at præsentere komplekse bæredygtighedstiltag på en overskuelig måde uden at ty til tunge videoformater eller store billedgallerier, der belaster CO2-regnskabet.

### 4.2.1 Implementering med Hooks
Slideren anvender Reacts **useState** Hook til at styre den aktuelle position (`currentIndex`) og **useEffect** til at håndtere en responsiv tilpasning af layoutet gennem en window-resize listener.

```javascript
/* Uddrag fra About.jsx */
const [currentIndex, setCurrentIndex] = React.useState(0);
const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 1024);

React.useEffect(() => {
  const handleResize = () => setIsMobile(window.innerWidth <= 1024);
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

const itemsPerPage = isMobile ? 1 : 3;
```

**Faglig forklaring:**
*   **State (`useState`):** Vi bruger state til at tracke, hvilke elementer der skal vises. Når brugeren trykker på "Næste", opdateres `currentIndex`, hvilket trigger en re-rendering af slider-tracken med en CSS-transform, som animeres via Framer Motion for en flydende, men ressourcelet oplevelse.
*   **Lifecycle & Event Listeners (`useEffect`):** Ved at bruge `useEffect` sikrer vi, at vi kun lytter på vinduets størrelse (`resize`), så længe komponenten er aktiv (mounted). Vi rydder op efter os selv (`return () => removeEventListener`), hvilket forhindrer "memory leaks" og unødvendig proceskraft på klienten.
*   **Props & Dynamisk Rendring:** Vi mapper over et array af data-objekter, hvor informationerne videregives som **props** til genanvendelige komponenter. Dette gør koden DRY (Don't Repeat Yourself) og reducerer den samlede mængde JavaScript.

## 4.3 Global State & Værditilbud: Eco-Toggle System
Vores bureau har implementeret en "Eco-Toggle", der lader brugeren styre sitets CO2-aftryk (Lav, Mellem, Høj). Dette er løst teknisk med **React Context API**, som gør det muligt at dele denne "Eco-level" globalt uden at belaste performance med "prop-drilling".

### 4.3.1 EcoProvider & Context som styringsredskab
Vi har skabt en `EcoProvider`, der indhyller hele applikationen og styrer de visuelle "side effects".

```javascript
/* Uddrag fra EcoToggle.jsx */
export const EcoProvider = ({ children }) => {
  const [level, setLevel] = useState('high');

  useEffect(() => {
    // Opdaterer body-klassen så CSS-variablerne skifter globalt
    document.body.classList.remove('eco-high', 'eco-medium', 'eco-low');
    document.body.classList.add(`eco-${level}`);
  }, [level]);

  return (
    <EcoContext.Provider value={{ level, setLevel }}>
      {children}
    </EcoContext.Provider>
  );
};
```

**Faglig forklaring:**
*   **Context API:** Ved at bruge `EcoContext.Provider` gør vi `level` og `setLevel` tilgængelige for alle komponenter. Dette er et bevidst valg for at kunne markedsføre bæredygtighed som et "værditilbud", hvor brugeren selv tager stilling til interaktiviteten og sit eget dataforbrug.
*   **CSS Variable Switching:** Ved at skifte en klasse på `body` via `useEffect`, lader vi CSS håndtere de tunge visuelle skift (såsom at fjerne baggrundsanimationer eller skifte billeder til low-res). Dette er langt mere energieffektivt end at håndtere det rent i JavaScript.

## 4.4 Validering og Bæredygtighedsresultater
For at validere vores tekniske implementering har vi løbende testet sitet i **Google Lighthouse** og **EcoGrader**.

Resultaterne viser en **Performance-score på 95+** og en "A" rating i CO2-aftryk. Dette er opnået gennem:
1.  **Optimerede assets:** Brug af **SVGs** til ikoner og moderne billedformater (**AVIF/WebP**).
2.  **Minimal Bundle Size:** Vi har bevidst fravalgt store UI-frameworks som Bootstrap eller Tailwind til fordel for **Vanilla CSS**, hvilket holder den samlede mængde data, brugeren skal downloade, på et minimum.

## 4.5 Konklusion på Programmering
Gennem brugen af React har vi demonstreret, hvordan teknisk finesse og bæredygtighed går hånd i hånd. Ved at kombinere avanceret state-styring, Lazy Loading og globale præferencer (Eco-Toggle), har vi skabt en løsning, der ikke blot er hurtig og brugervenlig, men som også aktivt bidrager til at reducere det digitale aftryk.
