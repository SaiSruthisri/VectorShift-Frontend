<img width="959" height="439" alt="image" src="https://github.com/user-attachments/assets/2577d569-8ae8-46c7-8e98-fef7c6129497" />


# Running the Project

## Frontend

```bash
cd frontend
npm install
npm start
```

Runs at:

```
http://localhost:3000
```

---

## Backend

Install the required packages (if not already installed):

```bash
pip install fastapi uvicorn pydantic
```

Run the backend:

```bash
cd backend
python -m uvicorn main:app --reload
```

Runs at:

```
http://127.0.0.1:8000
```

## Features Implemented

- Reusable BaseNode abstraction for creating pipeline nodes
- Five additional node types demonstrating the abstraction
- Modern, consistent UI styling across the application
- Dynamic Text Node enhancements
- Frontend integration with FastAPI backend
- Pipeline analysis displaying:
  - Number of Nodes
  - Number of Edges
  - Directed Acyclic Graph (DAG) validation

---

