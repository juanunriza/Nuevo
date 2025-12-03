// File: api/expenses.js

let expenses = [];

export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json(expenses);
  }

  if (req.method === "POST") {
    const { description, amount } = req.body;

    if (!description || typeof amount !== "number") {
      return res.status(400).json({ error: "Invalid input" });
    }

    const newExpense = {
      id: Date.now(),
      description,
      amount
    };

    expenses.push(newExpense);
    return res.status(201).json(newExpense);
  }

  return res.status(405).json({ error: "Method not allowed" });
}
