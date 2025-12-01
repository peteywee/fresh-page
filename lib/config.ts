// Role configuration and color mapping
export const ROLES = ["Server", "Bartender", "Line Cook", "Host", "Manager", "Dishwasher"] as const

export type Role = (typeof ROLES)[number]

export const ROLE_COLORS: Record<Role, { bg: string; border: string; text: string; indicator: string }> = {
  Server: { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-400", indicator: "bg-blue-500" },
  Bartender: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    text: "text-purple-400",
    indicator: "bg-purple-500",
  },
  "Line Cook": {
    bg: "bg-orange-500/10",
    border: "border-orange-500/30",
    text: "text-orange-400",
    indicator: "bg-orange-500",
  },
  Host: { bg: "bg-pink-500/10", border: "border-pink-500/30", text: "text-pink-400", indicator: "bg-pink-500" },
  Manager: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    text: "text-emerald-400",
    indicator: "bg-emerald-500",
  },
  Dishwasher: {
    bg: "bg-slate-500/10",
    border: "border-slate-500/30",
    text: "text-slate-400",
    indicator: "bg-slate-500",
  },
}

export type Employee = {
  id: number
  name: string
  role: Role
  email: string
  avatar: string
}

export type Shift = {
  id: number
  empId: number
  day: string
  start: string
  end: string
  role: string
}

export type DayInfo = {
  day: string
  date: number
  fullDate: string
  month: string
}

// Initial mock employees
export const INITIAL_EMPLOYEES: Employee[] = [
  { id: 1, name: "Marcus Cole", role: "Server", email: "marcus@example.com", avatar: "MC" },
  { id: 2, name: "Syd Adamu", role: "Bartender", email: "syd@example.com", avatar: "SA" },
  { id: 3, name: "Tina Marrero", role: "Manager", email: "tina@example.com", avatar: "TM" },
  { id: 4, name: "Richie Jerimovich", role: "Line Cook", email: "richie@example.com", avatar: "RJ" },
  { id: 5, name: "Fak", role: "Host", email: "fak@example.com", avatar: "FK" },
]

// Helper to get week days
export const getWeekDays = (offsetWeeks = 0): DayInfo[] => {
  const days: DayInfo[] = []
  const today = new Date()
  const dayOfWeek = today.getDay()
  const diff = today.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1) + offsetWeeks * 7
  const monday = new Date(today.setDate(diff))
  const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

  for (let i = 0; i < 7; i++) {
    const d = new Date(monday)
    d.setDate(monday.getDate() + i)
    days.push({
      day: dayNames[i],
      date: d.getDate(),
      fullDate: d.toISOString().split("T")[0],
      month: d.toLocaleString("default", { month: "short" }),
    })
  }
  return days
}

// Generate mock shifts for a given week
export const generateShiftsForDays = (days: DayInfo[]): Shift[] => {
  return [
    { id: 101, empId: 1, day: days[0].fullDate, start: "10:00", end: "16:00", role: "Server" },
    { id: 102, empId: 1, day: days[1].fullDate, start: "10:00", end: "16:00", role: "Server" },
    { id: 103, empId: 1, day: days[2].fullDate, start: "16:00", end: "22:00", role: "Server" },
    { id: 104, empId: 1, day: days[4].fullDate, start: "16:00", end: "23:00", role: "Server" },
    { id: 105, empId: 2, day: days[1].fullDate, start: "18:00", end: "02:00", role: "Bartender" },
    { id: 106, empId: 2, day: days[2].fullDate, start: "18:00", end: "02:00", role: "Bartender" },
    { id: 109, empId: 4, day: days[0].fullDate, start: "14:00", end: "22:00", role: "Line Cook" },
    { id: 110, empId: 4, day: days[1].fullDate, start: "14:00", end: "22:00", role: "Line Cook" },
    { id: 112, empId: 3, day: days[0].fullDate, start: "09:00", end: "17:00", role: "Manager" },
    { id: 115, empId: 5, day: days[4].fullDate, start: "17:00", end: "23:00", role: "Host" },
  ]
}
