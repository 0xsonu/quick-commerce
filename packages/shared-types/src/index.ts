// Shared types and interfaces for the ecommerce platform

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export enum UserRole {
  CUSTOMER = 'customer',
  SELLER = 'seller',
  ADMIN = 'admin',
  WAREHOUSE_MANAGER = 'warehouse_manager',
  SUPPORT = 'support',
}

export interface Product {
  id: string;
  sku: string;
  name: string;
  description: string;
  category: ProductCategory;
  brand: string;
  price: ProductPrice;
  images: string[];
  specifications: Record<string, any>;
  variants: ProductVariant[];
  ratings: ProductRatings;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductCategory {
  main: string;
  sub: string;
  subSub: string;
}

export interface ProductPrice {
  mrp: number;
  selling: number;
  discount: number;
}

export interface ProductVariant {
  type: string;
  options: string[];
}

export interface ProductRatings {
  average: number;
  count: number;
}

export interface Order {
  id: string;
  userId: string;
  orderNumber: string;
  status: OrderStatus;
  totalAmount: number;
  taxAmount: number;
  deliveryFee: number;
  discountAmount: number;
  paymentMethod: string;
  deliveryAddress: Address;
  estimatedDelivery: Date;
  createdAt: Date;
}

export enum OrderStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  PACKED = 'packed',
  DISPATCHED = 'dispatched',
  OUT_FOR_DELIVERY = 'out_for_delivery',
  DELIVERED = 'delivered',
  CANCELLED = 'cancelled',
  RETURNED = 'returned',
}

export interface Address {
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pincode: string;
  isDefault: boolean;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
