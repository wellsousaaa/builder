import { Avatar } from "@chakra-ui/react";
import { IconContext } from "react-icons";
import { IoMdHeartEmpty } from "react-icons/io";

export default function BuildCard() {
  return (
    <div className="build-card">
      <div className="build-info-card">
        <div className="flex g-2">
          <Avatar size="lg" src="https://bit.ly/code-beast" name="John Doe" />
          <h1>Nome de Teste </h1>
        </div>
        <div style={{ minHeight: 80 }}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa eos,
            laboriosam sed dolorem.
          </p>
        </div>
        <div className="tags">
          <span>#tag1</span>
          <span>#tag1</span>
          <span>#tag1</span>
        </div>
      </div>
      <div className="flex g-2" style={{ width: "50%", height: "100%" }}>
        <div className="build-card-image" />
        <div className="actions">
          <IconContext.Provider value={{ size: 35 }}>
            <div>
              <IoMdHeartEmpty />
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}
