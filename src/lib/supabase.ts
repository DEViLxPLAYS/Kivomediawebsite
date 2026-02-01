import { createClient } from '@supabase/supabase-js'

// Supabase configuration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase environment variables are not configured. Backend features will be disabled.')
}

// Create Supabase client only if environment variables are configured
export const supabase = (supabaseUrl && supabaseAnonKey)
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null

// Types for database tables
export interface ContactSubmission {
    id?: string
    created_at?: string
    name: string
    email: string
    project_type: string
    message: string
    phone?: string
    status?: 'new' | 'contacted' | 'completed'
}

// Helper function to submit contact form
export async function submitContactForm(data: Omit<ContactSubmission, 'id' | 'created_at' | 'status'>) {
    try {
        if (!supabase) {
            console.warn('Supabase is not configured. Form submission skipped.')
            return { success: false, error: 'Backend is not configured' }
        }

        const { data: result, error } = await supabase
            .from('contact_submissions')
            .insert([{
                name: data.name,
                email: data.email,
                project_type: data.project_type,
                message: data.message,
                phone: data.phone,
                status: 'new'
            }])
            .select()

        if (error) {
            console.error('Supabase error:', error)
            throw new Error(error.message)
        }

        return { success: true, data: result }
    } catch (error) {
        console.error('Error submitting form:', error)
        return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
    }
}
