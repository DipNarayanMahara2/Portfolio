"use client";

import { useEffect, useRef, useState } from "react";

export interface IExpense {
  id: number;
  expenseName: string;
  amount: number;
  date: Date;
  category: string;
}

function ExpenseTracking() {
  const [expenses, setExpenses] = useState<IExpense[]>([]);
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  // for saved data
  useEffect(() => {
    const savedData = localStorage.getItem("expenses");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      const expensesWithDateObjects = parsedData.map((expense: any) => ({
        ...expense,
        date: new Date(expense.date),
      }));
      setExpenses(expensesWithDateObjects);
    }
  }, []);

  // for storing data
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = () => {
    if (expenseName.trim() === "" || amount >=0 || category === "") return;
    const newExpense: IExpense = {
      id: Date.now(),
      expenseName: expenseName,
      amount: amount,
      date: new Date(),
      category: category,
    };
    setExpenses([...expenses, newExpense]);
    setExpenseName("");
    setAmount(0);
    setCategory("Select Category");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const deleteExpenses = (id: number) => {
    setExpenses(expenses.filter((expenses) => expenses.id !== id));
  };

  const totalAmount = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
      <div className="px-4 py-2 border-b-2 border-teal-500">
        <h1 className="text-gray-800 font-bold text-2xl uppercase text-center">
          Expenses Tracker
        </h1>
      </div>
      <form className="w-full max-w-sm mx-auto px-4 py-2">
        <div className="flex items-center  py-2n">
          <button
            onClick={addExpense}
            className="ml-auto mb-1.5 flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
          >
            Add Expenses
          </button>
        </div>
        <div className="flex items-center border-b-2 border-teal-500 py-2">
          <label htmlFor="text" className="">
            Expense Name :
          </label>
          <input
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
            name="text"
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="enter expenses name"
          />
        </div>
        <div className="flex items-center border-b-2 border-teal-500 py-2">
          <label htmlFor="amount" className="">
            Amount:
          </label>
          <input
            ref={inputRef}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            name="amount"
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Rs 1000"
          />
        </div>
        <div className="flex items-center border-b-2 border-teal-500 py-2">
          <h3 className="mr-3">Category:</h3>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            name="text"
            className="appearance-none bg-transparent border-1 border-teal-500 focus:border-teal-100 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none transition-all ease-in-out rounded-2xl"
          >
            <option value="Select Category">Select Category</option>
            <option value="Food">Food</option>
            <option value="Electricity Bill">Electricity Bill</option>
            <option value="Transportation Bill">Transportation Bill</option>
            <option value="House rent">House rent</option>
            <option value="Others">Others</option>
          </select>
        </div>
      </form>
      <ul className="divide-y divide-gray-200 px-4">
        {expenses.map((expense) => (
          <li key={expense.id} className="py-4">
            <div className=" items-center ">
              <div className="flex justify-between">
                <p>{expense.expenseName}</p>
                <p>{expense.category}</p>
                <p>Rs {expense.amount}</p>

                <button
                  onClick={() => deleteExpenses(expense.id)}
                  className="flex-shrink-0 bg-red-500 hover:bg-red-700 text-white text-sm py-1 px-2 rounded"
                >
                  delete Note
                </button>
              </div>
              <small className="text-gray-500 mr-2">
                {expense.date.toLocaleDateString()}
              </small>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex items-center border-b-2 border-teal-500 py-2">
        <p className="mr-2">Total Amount : </p>
        <p>Rs {totalAmount}</p>
      </div>
    </div>
  );
}

export default ExpenseTracking;
