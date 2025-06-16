'use client'

import { useEffect } from "react"

export default function DirectionProvider() {
  useEffect(() => {
    const lang = localStorage.getItem("lang") || "en"
    const isRtl = lang === "fa" || lang === "ar"
    document.documentElement.setAttribute("dir", isRtl ? "rtl" : "ltr")
    document.documentElement.classList.toggle("rtl-enabled", isRtl)
  }, [])

  return null
}
