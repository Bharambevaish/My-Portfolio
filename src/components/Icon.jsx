import {
  SiPython, SiPandas, SiNumpy, SiScikitlearn, SiJupyter, SiHuggingface, SiStreamlit,
  SiSupabase, SiGithub, SiPowerbi, SiMicrosoftexcel, SiPowerautomate, SiMicrosoftsharepoint,
  SiC, SiSiemens, SiLinkedin,
} from 'react-icons/si'
import {
  LuBrainCircuit, LuBarChartBig, LuScale, LuShieldCheck, LuSparkles, LuDatabase,
  LuGraduationCap, LuBookOpen, LuAward, LuBriefcase,
} from 'react-icons/lu'

const map = {
  python: SiPython, pandas: SiPandas, numpy: SiNumpy, sklearn: SiScikitlearn, jupyter: SiJupyter,
  huggingface: SiHuggingface, streamlit: SiStreamlit, supabase: SiSupabase, github: SiGithub,
  powerbi: SiPowerbi, excel: SiMicrosoftexcel, powerautomate: SiPowerautomate,
  sharepoint: SiMicrosoftsharepoint, c: SiC, siemens: SiSiemens, linkedin: SiLinkedin,
  brain: LuBrainCircuit, chart: LuBarChartBig, scale: LuScale, shield: LuShieldCheck,
  sparkles: LuSparkles, sql: LuDatabase, grad: LuGraduationCap, book: LuBookOpen,
  award: LuAward, briefcase: LuBriefcase,
}

export default function Icon({ name, className = '' }) {
  const C = map[name] || LuSparkles
  return <C className={className} aria-hidden="true" />
}
