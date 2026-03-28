export interface Service {
  id: string;
  name: string;
  category: 'streaming' | 'tools';
  options: ServiceOption[];
  description: string;
  warranty: string;
  icon?: string;
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
