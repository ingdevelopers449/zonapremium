import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { Service, ServiceOption } from '../../types';
import ServiceCard from './ServiceCard';

interface ServiceGridProps {
  title: string;
  services: Service[];
  expandedService: string | null;
  toggleService: (id: string) => void;
  onPurchase: (s: Service, o: ServiceOption) => void;
  isLoading?: boolean;
}

const ServiceGrid: React.FC<ServiceGridProps> = ({
  title,
  services,
  expandedService,
  toggleService,
  onPurchase,
  isLoading
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredServices = (services || []).filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredServices.length / itemsPerPage);
  const currentServices = filteredServices.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Reset to page 1 when searching
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <section className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4 flex-1">
          <div className="h-px w-8 bg-gold/50"></div>
          <h3 className="text-3xl font-black tracking-tighter uppercase">{title}</h3>
          <div className="h-px flex-1 bg-gradient-to-r from-gold/50 to-transparent"></div>
        </div>

        {/* Search Bar */}
        <div className="relative group max-w-sm w-full">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400 group-focus-within:text-gold transition-colors" />
          </div>
          <input
            type="text"
            placeholder="Buscar servicio..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full pl-12 pr-6 py-3 rounded-2xl bg-white dark:bg-premium-gray border border-gray-200 dark:border-gold/20 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-silver-dark/30 text-sm shadow-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 overflow-hidden min-h-[400px]">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="skeleton"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 col-span-full w-full"
            >
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="bg-gray-100 dark:bg-premium-gray/50 rounded-[32px] h-[340px] border border-gray-200 dark:border-gold/5 animate-pulse flex flex-col p-6">
                  <div className="flex items-start gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-gray-200 dark:bg-premium-black/80"></div>
                    <div className="flex-1 pt-2">
                      <div className="h-5 w-3/4 bg-gray-200 dark:bg-premium-black/80 rounded-full mb-4"></div>
                      <div className="flex items-center justify-between mt-6">
                        <div className="h-3 w-1/3 bg-gray-200 dark:bg-premium-black/80 rounded-full"></div>
                        <div className="h-5 w-1/3 bg-gray-200 dark:bg-premium-black/80 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-auto h-12 w-full bg-gray-200 dark:bg-premium-black/80 rounded-xl"></div>
                </div>
              ))}
            </motion.div>
          ) : filteredServices.length > 0 ? (
            <motion.div
              key={`${title}-${currentPage}-${searchTerm}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 col-span-full w-full"
            >
              {currentServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  expandedService={expandedService}
                  toggleService={toggleService}
                  onPurchase={onPurchase}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full py-20 text-center"
            >
              <p className="text-gray-500 dark:text-silver-dark italic">No se encontraron servicios que coincidan con "{searchTerm}"</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Pagination Controls */}
      {!isLoading && totalPages > 1 && (
        <div className="flex justify-center items-center mt-12 gap-4">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-3 rounded-full bg-white dark:bg-premium-gray border border-gray-200 dark:border-gold/20 text-gray-400 dark:text-gold disabled:opacity-30 disabled:cursor-not-allowed hover:border-gold transition-colors shadow-lg"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="text-sm font-bold tracking-widest uppercase text-gray-500 dark:text-silver-dark flex items-center gap-2">
            Página <span className="text-gold bg-gold/10 px-3 py-1 rounded-full">{currentPage}</span> de {totalPages}
          </div>
          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="p-3 rounded-full bg-white dark:bg-premium-gray border border-gray-200 dark:border-gold/20 text-gray-400 dark:text-gold disabled:opacity-30 disabled:cursor-not-allowed hover:border-gold transition-colors shadow-lg"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </section>
  );
};

export default ServiceGrid;
