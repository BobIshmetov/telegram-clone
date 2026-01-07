import React, { useState } from "react";
import { IUser } from "../types/intex";

const useCurrentContact = () => {
  const [currentContact, setCurrentContact] = useState<IUser | null>(null);
  return { currentContact, setCurrentContact };
};

export default useCurrentContact;
