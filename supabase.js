const SUPABASE_URL = 'https://xrksiqpmvqmxlvhvxpze.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhya3NpcXBtdnFteGx2aHZ4cHplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI2MTg0MjksImV4cCI6MjA5ODE5NDQyOX0.aQXd0qXFOp7OkLayjbCqnawDJZ5I_2NLhp5q7gLgG2g';

const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);