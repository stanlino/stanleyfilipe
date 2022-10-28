import { useTranslation } from "react-i18next"

interface TranslateProps {
  text: string
}

export function Translate({ text }: TranslateProps) {
  
  const { t } = useTranslation()

  return (
    <>
      {t(text)}
    </>
  )
}