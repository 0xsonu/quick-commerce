-- Initialize the ecommerce database
-- This script runs when the PostgreSQL container starts for the first time

-- Create extensions if needed
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create enum types
DO $$ BEGIN
    CREATE TYPE user_role_enum AS ENUM ('customer', 'seller', 'admin', 'warehouse_manager', 'support');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE order_status_enum AS ENUM ('pending', 'confirmed', 'packed', 'dispatched', 'out_for_delivery', 'delivered', 'cancelled', 'returned');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- Grant necessary permissions
GRANT ALL PRIVILEGES ON DATABASE ecommerce_db TO ecommerce_user;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO ecommerce_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO ecommerce_user;