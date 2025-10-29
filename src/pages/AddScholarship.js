import React, { useState } from 'react';

function AddScholarship() {
  const [form, setForm] = useState({
    name: '', institution: '', type: '', category: '', 
    amount: '', deadline: '', eligibility: '', notes: '', source_url: ''
  });
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/scholarships', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(() => {
        setMessage('Scholarship added successfully!');
        setForm({
          name: '', institution: '', type: '', category: '', 
          amount: '', deadline: '', eligibility: '', notes: '', source_url: ''
        });
      });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Add New Scholarship</h1>
      
      {message && <div className="bg-green-500 text-white p-4 rounded mb-4">{message}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Scholarship Name" value={form.name} onChange={handleChange} required className="w-full border border-blue-500 p-2 rounded bg-white text-black placeholder-gray-500" />
        <input name="institution" placeholder="Institution" value={form.institution} onChange={handleChange} required className="w-full border border-blue-500 p-2 rounded bg-white text-black placeholder-gray-500" />
        <input name="type" placeholder="Type" value={form.type} onChange={handleChange} required className="w-full border border-blue-500 p-2 rounded bg-white text-black placeholder-gray-500" />
        <input name="category" placeholder="Category" value={form.category} onChange={handleChange} required className="w-full border border-blue-500 p-2 rounded bg-white text-black placeholder-gray-500" />
        <input name="amount" placeholder="Amount" value={form.amount} onChange={handleChange} required className="w-full border border-blue-500 p-2 rounded bg-white text-black placeholder-gray-500" />
        <input name="deadline" type="date" value={form.deadline} onChange={handleChange} required className="w-full border border-blue-500 p-2 rounded bg-white text-black" />
        <input name="eligibility" placeholder="Eligibility" value={form.eligibility} onChange={handleChange} required className="w-full border border-blue-500 p-2 rounded bg-white text-black placeholder-gray-500" />
        <textarea name="notes" placeholder="Description" value={form.notes} onChange={handleChange} required rows="4" className="w-full border border-blue-500 p-2 rounded bg-white text-black placeholder-gray-500" />
        <input name="source_url" placeholder="Application URL" value={form.source_url} onChange={handleChange} required className="w-full border border-blue-500 p-2 rounded bg-white text-black placeholder-gray-500" />
        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Add Scholarship</button>
      </form>
    </div>
  );
}

export default AddScholarship;