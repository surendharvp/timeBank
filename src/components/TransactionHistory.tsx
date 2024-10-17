import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';

const TransactionHistory: React.FC = () => {
  const mockTransactions = [
    { id: 1, type: 'earned', amount: 2, skill: 'Web Development', date: '2024-03-15' },
    { id: 2, type: 'spent', amount: 1.5, skill: 'Graphic Design', date: '2024-03-14' },
    { id: 3, type: 'earned', amount: 3, skill: 'Language Tutoring', date: '2024-03-12' },
    { id: 4, type: 'spent', amount: 2, skill: 'Cooking Lesson', date: '2024-03-10' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Transaction History</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Date</th>
                <th className="text-left p-2">Type</th>
                <th className="text-left p-2">Amount</th>
                <th className="text-left p-2">Skill</th>
              </tr>
            </thead>
            <tbody>
              {mockTransactions.map((transaction) => (
                <motion.tr
                  key={transaction.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-2">{transaction.date}</td>
                  <td className="p-2">
                    <span className={`flex items-center ${transaction.type === 'earned' ? 'text-green-600' : 'text-red-600'}`}>
                      {transaction.type === 'earned' ? <ArrowUpRight className="mr-1" /> : <ArrowDownLeft className="mr-1" />}
                      {transaction.type}
                    </span>
                  </td>
                  <td className="p-2">{transaction.amount} hours</td>
                  <td className="p-2">{transaction.skill}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;