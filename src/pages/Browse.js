import React, { useState, useEffect } from 'react';
import ScholarshipCard from '../components/ScholarshipCard';
import Modal from '../components/Modal';

function Browse() {
  const [scholarships, setScholarships] = useState([]);
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');
  const [selectedScholarship, setSelectedScholarship] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/scholarships')
      .then(res => res.json())
      .then(data => setScholarships(data));
  }, []);

  const types = ['All', ...new Set(scholarships.map(s => s.type))];

  const filtered = scholarships.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase()) ||
                         s.institution.toLowerCase().includes(search.toLowerCase());
    const matchesType = typeFilter === 'All' || s.type === typeFilter;
    return matchesSearch && matchesType;
  });

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Browse Scholarships</h1>

      <div className="mb-6 flex gap-4">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border border-blue-500 p-2 rounded bg-white text-black placeholder-gray-500"
        />
        <select 
          value={typeFilter} 
          onChange={(e) => setTypeFilter(e.target.value)}
          className="border border-blue-500 p-2 rounded bg-white text-black"
        >
          {types.map(type => <option key={type}>{type}</option>)}
        </select>
      </div>

      <div className="grid gap-4">
        {filtered.map(scholarship => (
          <ScholarshipCard 
            key={scholarship.id}
            scholarship={scholarship}
            onClick={() => setSelectedScholarship(scholarship)}
          />
        ))}
      </div>

      <Modal 
        scholarship={selectedScholarship} 
        onClose={() => setSelectedScholarship(null)} 
      />
    </div>
  );
}

export default Browse;