import React, { useState } from "react";

export default function useAuth() {
  const [authIsLogin, _authIsLogin] = useState(true);
  return {
    authIsLogin,
  };
}
