export interface Service {
  id: string;
  name: string;
  category: 'streaming' | 'tools';
  options: ServiceOption[];
  description: string;
  warranty: string;
  icon?: string;
  icons?: string[];
  invertInDarkMode?: boolean;
  savings?: {
    amount: number;
    percentage: number;
  };
}

export interface ServiceOption {
  label: string;
  price: number;
  days: number;
}

export interface PurchaseData {
  serviceName: string;
  optionLabel: string;
  price: number;
  customerName: string;
  customerPhone: string;
}
