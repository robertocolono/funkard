export interface SupportTicket {
  id: string;
  userId: string;
  title: string;
  description: string;
  status: "OPEN" | "IN_PROGRESS" | "CLOSED";
  category?: string;
  createdAt: string;
  updatedAt: string;
  closedAt?: string;
  messages: SupportMessage[];
}

export interface SupportMessage {
  id: string;
  ticketId: string;
  userId: string;
  message: string;
  isAdmin: boolean;
  createdAt: string;
}

export interface CreateTicketRequest {
  title: string;
  description: string;
  category?: string;
}

export interface CreateMessageRequest {
  ticketId: string;
  message: string;
}

export interface SupportStats {
  openTickets: number;
  inProgressTickets: number;
  closedTickets: number;
  totalTickets: number;
}
