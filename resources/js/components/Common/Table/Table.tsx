import React from 'react';

interface TableProps {
    headers: string[];
    children: React.ReactNode;
}

export default function Table({ children, headers }: TableProps) {
    return (
        <div className="px-4 py-6 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-lg bg-slate-800/30 shadow-lg backdrop-blur-sm">
                <table className="min-w-full divide-y divide-slate-700">
                    <thead className="bg-slate-800/50">
                        <tr>
                            {headers.map((header, index) => (
                                <th key={index} className="px-4 py-3 text-left text-xs font-medium tracking-wider text-slate-300 uppercase md:px-6">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-700 bg-slate-800/20">{children}</tbody>
                </table>
            </div>
        </div>
    );
}
