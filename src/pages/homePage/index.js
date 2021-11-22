import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { SocketContext } from "../../context";

export default function HomePage() {
  const { websocket, userId } = useContext(SocketContext);
  const { pathname } = useLocation();

  useEffect(() => {
    if (!!websocket?.connected) {
      websocket.emit("message", {
        end_user_id: userId,
        web_page_url: pathname,
      });
    }
  });
  return (
    <div>
      <h1>Welcome to our application</h1>
    </div>
  );
}
