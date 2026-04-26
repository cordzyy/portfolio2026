export const mockQmsStats = [
  { label: "Total Waiting", value: "42", trend: "up", change: "12%", icon: "users" },
  { label: "Avg Wait Time", value: "18m", trend: "down", change: "5%", icon: "clock" },
  { label: "Active Terminals", value: "6/8", trend: "neutral", change: "0%", icon: "monitor" },
  { label: "Served Today", value: "156", trend: "up", change: "24%", icon: "check" },
];

export const mockTickets = [
  { id: "A012", service: "Customer Support", status: "serving", waitTime: "5m", terminal: "Terminal 1", time: "10:15 AM" },
  { id: "B045", service: "Billing", status: "serving", waitTime: "12m", terminal: "Terminal 3", time: "10:08 AM" },
  { id: "A013", service: "Customer Support", status: "waiting", waitTime: "15m", terminal: null, time: "10:05 AM" },
  { id: "C008", service: "Technical Support", status: "waiting", waitTime: "22m", terminal: null, time: "9:58 AM" },
  { id: "A014", service: "Customer Support", status: "waiting", waitTime: "8m", terminal: null, time: "10:12 AM" },
  { id: "B046", service: "Billing", status: "waiting", waitTime: "4m", terminal: null, time: "10:16 AM" },
  { id: "A011", service: "Customer Support", status: "completed", waitTime: "10m", terminal: "Terminal 1", time: "10:10 AM" },
  { id: "C007", service: "Technical Support", status: "completed", waitTime: "25m", terminal: "Terminal 2", time: "9:50 AM" },
];

export const mockTerminals = [
  { id: "T1", name: "Terminal 1", staff: "Jane Doe", status: "online", currentTicket: "A012", service: "Customer Support" },
  { id: "T2", name: "Terminal 2", staff: "John Smith", status: "online", currentTicket: "C009", service: "Technical Support" },
  { id: "T3", name: "Terminal 3", staff: "Alice Johnson", status: "online", currentTicket: "B045", service: "Billing" },
  { id: "T4", name: "Terminal 4", staff: "Bob Williams", status: "offline", currentTicket: null, service: "All Services" },
  { id: "T5", name: "Terminal 5", staff: "Emma Brown", status: "online", currentTicket: null, service: "Customer Support" },
  { id: "T6", name: "Terminal 6", staff: "Michael Davis", status: "offline", currentTicket: null, service: "Billing" },
];

export const mockQmsUsers = [
  { id: 1, name: "Jane Doe", email: "jane@example.com", role: "Staff", status: "Active", department: "Customer Support" },
  { id: 2, name: "John Smith", email: "john@example.com", role: "Staff", status: "Active", department: "Technical Support" },
  { id: 3, name: "Admin User", email: "admin@example.com", role: "Admin", status: "Active", department: "Management" },
  { id: 4, name: "Alice Johnson", email: "alice@example.com", role: "Staff", status: "Active", department: "Billing" },
  { id: 5, name: "Bob Williams", email: "bob@example.com", role: "Staff", status: "Inactive", department: "All Services" },
];

export const mockQmsRecentActivity = [
  { id: 1, action: "Ticket A011 completed", user: "Jane Doe", time: "5 mins ago" },
  { id: 2, action: "Terminal 4 went offline", user: "Bob Williams", time: "15 mins ago" },
  { id: 3, action: "Ticket C007 completed", user: "John Smith", time: "25 mins ago" },
  { id: 4, action: "Terminal 3 came online", user: "Alice Johnson", time: "1 hour ago" },
];
