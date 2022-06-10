import { useEffect, useState } from "react";
// import { useTheme } from "next-themes";
import userData from "../constants/userData";
import Link from "next/link";

export default function buttonSvg() {
  return (
    <button className="cta">
      <span>More info</span>
      <svg viewBox="0 0 13 10" height="10px" width="15px">
        <path d="M1,5 L11,5"></path>
        <polyline points="8 1 12 5 8 9"></polyline>
      </svg>
    </button>
  );
}
