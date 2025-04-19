
import React from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';

type ProductFiltersProps = {
  currentFilters: {
    category: string;
    priceRange: string;
    sortBy: string;
  };
  setFilters: React.Dispatch<React.SetStateAction<{
    category: string;
    priceRange: string;
    sortBy: string;
  }>>;
  type: 'clothing' | 'accessories';
};

const ProductFilters: React.FC<ProductFiltersProps> = ({ currentFilters, setFilters, type }) => {
  const handleCategoryChange = (category: string) => {
    setFilters(prev => ({ ...prev, category }));
  };

  const handlePriceRangeChange = (priceRange: string) => {
    setFilters(prev => ({ ...prev, priceRange }));
  };

  const handleSortChange = (sortBy: string) => {
    setFilters(prev => ({ ...prev, sortBy }));
  };

  const categories = type === 'clothing' 
    ? ['T-Shirts', 'Shirts', 'Jackets', 'Pants', 'Dresses'] 
    : ['Watches', 'Bags', 'Jewelry', 'Scarves', 'Hats'];

  return (
    <div className="space-y-6">
      <div className="md:hidden mb-4">
        <Collapsible>
          <CollapsibleTrigger className="flex items-center justify-between w-full p-4 border rounded-md">
            <span className="font-medium">Filters</span>
            <ChevronDown className="h-5 w-5" />
          </CollapsibleTrigger>
          <CollapsibleContent className="p-4 border-x border-b rounded-b-md mt-[-1px]">
            <div className="space-y-6">
              <FilterSection 
                title="Categories" 
                items={categories.map(cat => ({ id: cat.toLowerCase(), name: cat }))} 
                currentSelection={currentFilters.category}
                onSelect={handleCategoryChange}
              />
              
              <FilterSection 
                title="Price Range" 
                items={[
                  { id: 'all', name: 'All Prices' },
                  { id: 'under-50', name: 'Under $50' },
                  { id: '50-100', name: '$50 - $100' },
                  { id: '100-200', name: '$100 - $200' },
                  { id: 'over-200', name: 'Over $200' }
                ]} 
                currentSelection={currentFilters.priceRange}
                onSelect={handlePriceRangeChange}
              />
              
              <div>
                <h3 className="font-medium mb-3">Sort By</h3>
                <select
                  value={currentFilters.sortBy}
                  onChange={(e) => handleSortChange(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-ksdm-navy focus:border-ksdm-navy"
                >
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="best-selling">Best Selling</option>
                </select>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
      
      <div className="hidden md:block space-y-6">
        <FilterSection 
          title="Categories" 
          items={[
            { id: 'all', name: 'All' },
            ...categories.map(cat => ({ id: cat.toLowerCase(), name: cat }))
          ]} 
          currentSelection={currentFilters.category}
          onSelect={handleCategoryChange}
        />
        
        <FilterSection 
          title="Price Range" 
          items={[
            { id: 'all', name: 'All Prices' },
            { id: 'under-50', name: 'Under $50' },
            { id: '50-100', name: '$50 - $100' },
            { id: '100-200', name: '$100 - $200' },
            { id: 'over-200', name: 'Over $200' }
          ]} 
          currentSelection={currentFilters.priceRange}
          onSelect={handlePriceRangeChange}
        />
        
        <div>
          <h3 className="font-medium mb-3">Sort By</h3>
          <select
            value={currentFilters.sortBy}
            onChange={(e) => handleSortChange(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-ksdm-navy focus:border-ksdm-navy"
          >
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="best-selling">Best Selling</option>
          </select>
        </div>
      </div>
    </div>
  );
};

type FilterSectionProps = {
  title: string;
  items: Array<{ id: string; name: string }>;
  currentSelection: string;
  onSelect: (value: string) => void;
};

const FilterSection: React.FC<FilterSectionProps> = ({ title, items, currentSelection, onSelect }) => {
  return (
    <div>
      <h3 className="font-medium mb-3">{title}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name={title.toLowerCase()}
                value={item.id}
                checked={currentSelection === item.id}
                onChange={() => onSelect(item.id)}
                className="form-radio h-4 w-4 text-ksdm-navy focus:ring-ksdm-navy"
              />
              <span className="text-gray-700">{item.name}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductFilters;
