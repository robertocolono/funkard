// Helper per le chiamate API admin con autenticazione
export class AdminApiClient {
  private baseUrl: string;
  private token: string | null;

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL || "";
    this.token = typeof window !== "undefined" ? localStorage.getItem("funkard_admin_token") : null;
  }

  private getHeaders() {
    return {
      "Content-Type": "application/json",
      "X-Admin-Token": this.token || ""
    };
  }

  // Dashboard
  async getDashboard() {
    const res = await fetch(`${this.baseUrl}/api/admin/dashboard`, {
      headers: this.getHeaders()
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  }

  // Market Pending
  async getPendingItems() {
    const res = await fetch(`${this.baseUrl}/api/admin/valuation/pending`, {
      headers: this.getHeaders()
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  }

  async getProductDetails(itemName: string) {
    const res = await fetch(`${this.baseUrl}/api/admin/valuation/product/${encodeURIComponent(itemName)}`, {
      headers: this.getHeaders()
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  }

  async approveProduct(itemName: string) {
    const res = await fetch(`${this.baseUrl}/api/admin/valuation/approve`, {
      method: "POST",
      headers: this.getHeaders(),
      body: JSON.stringify({ itemName })
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  }

  async rejectProduct(itemName: string) {
    const res = await fetch(`${this.baseUrl}/api/admin/valuation/reject`, {
      method: "POST",
      headers: this.getHeaders(),
      body: JSON.stringify({ itemName })
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  }

  async markForReview(itemName: string) {
    const res = await fetch(`${this.baseUrl}/api/admin/valuation/mark-review`, {
      method: "POST",
      headers: this.getHeaders(),
      body: JSON.stringify({ itemName })
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  }

  // Support Tickets
  async getTickets() {
    const res = await fetch(`${this.baseUrl}/api/admin/support/tickets`, {
      headers: this.getHeaders()
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  }

  async replyToTicket(ticketId: string, reply: string) {
    const res = await fetch(`${this.baseUrl}/api/admin/support/reply/${ticketId}`, {
      method: "POST",
      headers: this.getHeaders(),
      body: JSON.stringify({ reply })
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  }

  async closeTicket(ticketId: string) {
    const res = await fetch(`${this.baseUrl}/api/admin/support/close/${ticketId}`, {
      method: "POST",
      headers: this.getHeaders()
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  }

  // Users
  async getUsers() {
    const res = await fetch(`${this.baseUrl}/api/admin/users`, {
      headers: this.getHeaders()
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  }

  async toggleUserVerification(userId: string, verified: boolean) {
    const res = await fetch(`${this.baseUrl}/api/admin/users/${userId}/verify`, {
      method: "POST",
      headers: this.getHeaders(),
      body: JSON.stringify({ verified })
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  }

  // Check admin access
  async checkAdminAccess() {
    const res = await fetch(`${this.baseUrl}/api/admin/check`, {
      headers: this.getHeaders()
    });
    return res.ok;
  }
}

// Singleton instance
export const adminApi = new AdminApiClient();
