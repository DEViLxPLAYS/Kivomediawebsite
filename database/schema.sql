-- ============================================
-- Database Schema for Kivo Media Website
-- ============================================
-- Created: 2026-01-31
-- Description: SQL file for creating database tables
-- ============================================

-- Drop existing tables if needed (uncomment to use)
-- DROP TABLE IF EXISTS table_name;

-- ============================================
-- TABLES
-- ============================================

-- Example table structure (replace with your actual queries)
-- CREATE TABLE example_table (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(255) NOT NULL,
--     email VARCHAR(255) UNIQUE NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- ============================================
-- YOUR TABLES - Paste your CREATE TABLE queries below
-- ============================================



-- ============================================
-- INDEXES (Optional - Add after creating tables)
-- ============================================

-- CREATE INDEX idx_example ON table_name(column_name);



-- ============================================
-- TRIGGERS (Optional)
-- ============================================

-- Example: Auto-update timestamp
-- CREATE OR REPLACE FUNCTION update_updated_at_column()
-- RETURNS TRIGGER AS $$
-- BEGIN
--     NEW.updated_at = CURRENT_TIMESTAMP;
--     RETURN NEW;
-- END;
-- $$ language 'plpgsql';

-- CREATE TRIGGER update_table_updated_at BEFORE UPDATE ON table_name
-- FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();



-- ============================================
-- INITIAL DATA (Optional)
-- ============================================

-- INSERT INTO table_name (column1, column2) VALUES
--     ('value1', 'value2'),
--     ('value3', 'value4');
