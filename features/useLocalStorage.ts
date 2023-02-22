import { useState } from "react";
export default function useLocalStorage(initialValue: any) {
  const [value, setValue] = useState(initialValue);
}
