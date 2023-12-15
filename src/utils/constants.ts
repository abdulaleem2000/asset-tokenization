import { createGlobalState } from "react-hooks-global-state";
import { TokenData } from "@/types/constants/token-data.interface";

interface GlobalState {
  userData: TokenData;
  isLogged: boolean;
  signer: string;
  chainId: string;
  balance: number;
}

const { useGlobalState } = createGlobalState<GlobalState>({
  userData: {
    id: "",
    username: "",
    email: "",
  },
  isLogged: false,
  signer: "",
  chainId: "",
  balance: 0,
});

export { createGlobalState, useGlobalState };
