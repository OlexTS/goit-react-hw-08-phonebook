import { RingLoader } from "react-spinners"
import { Spinner } from "./Loader.styled"

export const Loader = () => {
    return <Spinner><RingLoader
  color="#9a645a"
  size={90}
  speedMultiplier={1}
/></Spinner>
   
}