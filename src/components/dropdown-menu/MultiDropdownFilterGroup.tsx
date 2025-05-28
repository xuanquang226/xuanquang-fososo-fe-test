'use client';
import { useState } from "react";
import { filterGroups } from '@/constants/GroupOptions';

export default function MultiDropdownFilterGroup() {
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});
  const [selectedValues, setSelectedValues] = useState<Record<string, string[]>>({
    brand: [],
    year: [],
    origin: [],
  });

  const toggleGroup = (key: string) => {
    setOpenGroups((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleSelection = (groupKey: string, value: string) => {
    setSelectedValues((prev) => {
      const current = prev[groupKey] || [];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [groupKey]: updated };
    });
  };

  return (
    <div className="">
      {filterGroups?.map((group) => {
        const isOpen = openGroups[group.key] ?? true;
        const selected = selectedValues[group.key] || [];

        return (
          <div key={group.key} className={`p-4 border-b-2 border-b-gray-300 w-full`}>
            <div
              className={`flex justify-between items-center cursor-pointer`}
              onClick={() => toggleGroup(group.key)}>
              <h3 className={`font-bold`}>{group.title}</h3>
              <img src="/images/arrow-top.png" alt="" className={`${isOpen ? '' : 'rotate-180'} transition-transform`} />
            </div>
            {isOpen && (
              <ul className={`mt-2 space-y-2`}>
                {group.options.map((item) => (
                  <li key={item.value} className={`flex items-center space-x-2`}>
                    <input
                      type="checkbox"
                      checked={selected.includes(item.value)}
                      onChange={() => toggleSelection(group.key, item.value)}
                      className={`accent-blue-600 w-4 h-4`}
                    />
                    <span>{item.label}</span>
                    <span className={`ml-auto text-gray-400`}>({item.count})</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}
