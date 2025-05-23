import { useContext } from "react";
import { FactsContext } from "../contexts/FactsContext";

const useFacts = () => useContext(FactsContext);

export { useFacts };
