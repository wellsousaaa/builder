import { Button } from "@chakra-ui/react";
import BuildCard from "components/common/BuildCard";
import "styles/pages/feed.scss";

export default function Feed() {
  return (
    <main className="build-page">
      <header className="build-header">
        <div>
          <Button colorScheme="blue" size="md">
            Voltar
          </Button>
          <h1>
            <span className="build-title">Builds</span>
          </h1>
          <Button colorScheme="blue" size="md">
            Adicionar
          </Button>
        </div>
      </header>

      <div className="builds-page-container">
        <div className="builds-filter">
          <div></div>
        </div>
        <div className="builds-container">
          <BuildCard />
          <BuildCard />
          <BuildCard />
        </div>
        <div className="builds-filter">
          <div></div>
        </div>
      </div>
    </main>
  );
}
