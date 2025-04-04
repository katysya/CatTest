import { SectionBlock } from "@/features/Section";
import { CatCard } from "@/entities/Cat";

import "@app/styles/global.scss";

function App() {
  return (
    <>
      <SectionBlock>
        <CatCard />
      </SectionBlock>
    </>
  );
}

export default App;
