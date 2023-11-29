import { useContext } from "react";
import { ChatContext } from "../../../contexts/ChatContext";

const PotentialChats = () => {
  const { potentialChats } = useContext(ChatContext)
  return ( <>Start Chats</> );
}
 
export default PotentialChats;