// Email validation
export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

// Phone validation (basic)
export function isValidPhone(phone: string): boolean {
    // Allow various phone formats
    const phoneRegex = /^[\d\s\-\+\(\)]+$/
    return phone.length >= 10 && phoneRegex.test(phone)
}

// Sanitize text input (prevent XSS)
export function sanitizeText(text: string): string {
    return text
        .trim()
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;')
}

// Validate contact form data
export interface ContactFormData {
    name: string
    email: string
    projectType: string
    message: string
    phone?: string
}

export interface ValidationResult {
    isValid: boolean
    errors: Record<string, string>
}

export function validateContactForm(data: ContactFormData): ValidationResult {
    const errors: Record<string, string> = {}

    // Name validation
    if (!data.name || data.name.trim().length < 2) {
        errors.name = 'Name must be at least 2 characters'
    }
    if (data.name && data.name.length > 100) {
        errors.name = 'Name is too long'
    }

    // Email validation
    if (!data.email || !isValidEmail(data.email)) {
        errors.email = 'Please enter a valid email address'
    }

    // Project type validation
    if (!data.projectType) {
        errors.projectType = 'Please select a project type'
    }

    // Message validation
    if (!data.message || data.message.trim().length < 10) {
        errors.message = 'Message must be at least 10 characters'
    }
    if (data.message && data.message.length > 2000) {
        errors.message = 'Message is too long (max 2000 characters)'
    }

    // Phone validation (optional field)
    if (data.phone && data.phone.trim().length > 0 && !isValidPhone(data.phone)) {
        errors.phone = 'Please enter a valid phone number'
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    }
}
