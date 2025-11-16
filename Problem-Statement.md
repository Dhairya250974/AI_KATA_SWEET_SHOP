## Objective
Build a **full-stack Sweet Shop Management System** using **TDD**.  
Focus areas: API development, database integration, frontend UI, testing, and AI-assisted development.

---

## Requirements

### Backend (REST API)
- Use **Node.js/TypeScript, Python, Java, or Ruby** with a database (PostgreSQL/MongoDB/SQLite).  
- **Authentication:** JWT-based login/register.  
- **Endpoints:**
  - Auth → `POST /auth/register`, `POST /auth/login`
  - Sweets → CRUD operations (`/sweets`, `/sweets/:id`)
  - Inventory → Purchase & Restock sweets  

> Each sweet has: ID, name, category, price, quantity.

### Frontend
- Use React/Vue/Angular/Svelte.  
- Features: login, view sweets, search/filter, purchase button (disabled if out of stock).  
- Admins can add/update/delete sweets.  

---

## Guidelines
- **TDD:** Red → Green → Refactor with high coverage.  
- **Clean Code:** SOLID principles, meaningful commits.  
- **AI Usage:** Disclose in commits (`Co-authored-by`) + add *"My AI Usage"* section in README.

---

## Deliverables
1. Public Git repository link.  
2. README with:
   - Project setup/run instructions  
   - Screenshots  
   - "My AI Usage" section  
3. Test report  
4. (Optional) Deployed live app  

---
