// Simple client-side rate limiting
// Prevents spam submissions

const RATE_LIMIT_KEY = 'zivo_contact_submissions'
const MAX_SUBMISSIONS = 3
const TIME_WINDOW = 10 * 60 * 1000 // 10 minutes in milliseconds

interface SubmissionRecord {
    timestamp: number
}

export function checkRateLimit(): { allowed: boolean; remainingSubmissions: number; resetTime?: Date } {
    const now = Date.now()

    // Get existing submissions from localStorage
    const stored = localStorage.getItem(RATE_LIMIT_KEY)
    let submissions: SubmissionRecord[] = stored ? JSON.parse(stored) : []

    // Filter out old submissions (outside time window)
    submissions = submissions.filter(sub => now - sub.timestamp < TIME_WINDOW)

    // Check if limit exceeded
    if (submissions.length >= MAX_SUBMISSIONS) {
        const oldestSubmission = submissions[0]
        const resetTime = new Date(oldestSubmission.timestamp + TIME_WINDOW)

        return {
            allowed: false,
            remainingSubmissions: 0,
            resetTime
        }
    }

    return {
        allowed: true,
        remainingSubmissions: MAX_SUBMISSIONS - submissions.length
    }
}

export function recordSubmission(): void {
    const now = Date.now()

    // Get existing submissions
    const stored = localStorage.getItem(RATE_LIMIT_KEY)
    let submissions: SubmissionRecord[] = stored ? JSON.parse(stored) : []

    // Filter out old submissions
    submissions = submissions.filter(sub => now - sub.timestamp < TIME_WINDOW)

    // Add new submission
    submissions.push({ timestamp: now })

    // Save back to localStorage
    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(submissions))
}

export function getRateLimitMessage(resetTime: Date): string {
    const minutes = Math.ceil((resetTime.getTime() - Date.now()) / 60000)
    return `You've reached the maximum number of submissions. Please try again in ${minutes} minute${minutes > 1 ? 's' : ''}.`
}
