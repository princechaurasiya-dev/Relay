# Relay Frontend Pages — Development Checklist

> Status: Planning  
> Progress: Nothing implemented yet. All items are unchecked.

Use this document to track frontend page implementation. A page should be checked only after its UI, route, responsive behavior, and required interactions are implemented and tested.

## 1. Public Pages

- [ ] `/` — Landing page
- [ ] `/features` — Features
- [ ] `/pricing` — Pricing
- [ ] `/about` — About
- [ ] `/contact` — Contact form
- [ ] `/docs` — Documentation
- [ ] `/terms` — Terms of service
- [ ] `/privacy` — Privacy policy
- [ ] `not-found` — 404 page

## 2. Authentication Pages

- [ ] `/login` — Login
- [ ] `/signup` — Create account
- [ ] `/verify-email` — Email verification
- [ ] `/verify-otp` — OTP verification
- [ ] `/forgot-password` — Request password reset
- [ ] `/reset-password` — Set a new password
- [ ] `/check-email` — Confirmation after requesting a reset
- [ ] `/resend-verification` — Resend verification email
- [ ] `/logout` — Sign out
- [ ] `/auth/callback` — Authentication callback / redirect handling

### Authentication Flows to Verify

- [ ] Signup → email OTP/code verification → dashboard
- [ ] Login with email and password
- [ ] Forgot password → receive OTP/code → verify → set new password
- [ ] Resend verification email/code
- [ ] Logout → signed-out state
- [ ] Protected routes redirect unauthenticated users to login
- [ ] Authenticated users are redirected away from guest-only pages where appropriate

> OTP screens and flows must match the authentication provider's supported flow. Avoid implementing duplicate authentication logic if Clerk handles the flow.

## 3. Dashboard and VPS Pages

- [ ] `/dashboard` — Dashboard overview
- [ ] `/dashboard/vps` — VPS list
- [ ] `/dashboard/vps/create` — Create/deploy VPS
- [ ] `/dashboard/vps/[id]` — VPS details
- [ ] `/dashboard/vps/[id]/console` — Web terminal
- [ ] `/dashboard/vps/[id]/monitoring` — CPU, RAM, disk, and network monitoring
- [ ] `/dashboard/vps/[id]/backups` — Backup management
- [ ] `/dashboard/activity` — Recent account activity
- [ ] `/dashboard/notifications` — Notifications

## 4. Account and Settings Pages

- [ ] `/dashboard/settings/profile` — Personal information
- [ ] `/dashboard/settings/security` — Password and security settings
- [ ] `/dashboard/settings/sessions` — Active sessions
- [ ] `/dashboard/settings/preferences` — User preferences
- [ ] `/dashboard/settings/api-keys` — API key management
- [ ] `/dashboard/settings/delete-account` — Account deletion

## 5. Billing and Support Pages

- [ ] `/dashboard/billing` — Billing overview
- [ ] `/dashboard/billing/plans` — Plans
- [ ] `/dashboard/billing/payment-methods` — Payment methods
- [ ] `/dashboard/billing/invoices` — Invoice history
- [ ] `/dashboard/billing/usage` — Resource usage
- [ ] `/dashboard/support` — Support center
- [ ] `/dashboard/support/new` — Create support ticket
- [ ] `/dashboard/support/[id]` — Ticket details and conversation

## 6. Error and System Pages

- [ ] `/forbidden` — 403 access denied
- [ ] `/error` — Unexpected error
- [ ] `/maintenance` — Maintenance page
- [ ] `/unavailable` — Service unavailable

## 7. Optional / Future Pages

- [ ] `/status` — Service status
- [ ] `/changelog` — Product updates
- [ ] `/roadmap` — Product roadmap
- [ ] `/community` — Community links

## 8. Shared UI and Cross-Page Requirements

- [ ] Shared page background component with route-aware ambient styling
- [ ] Shared public-site navigation
- [ ] Shared dashboard layout and sidebar
- [ ] Shared dashboard header
- [ ] Responsive layouts for mobile, tablet, and desktop
- [ ] Loading states
- [ ] Empty states
- [ ] Error states
- [ ] Form validation and useful error messages
- [ ] Consistent typography, colors, spacing, and components
- [ ] Keyboard accessibility and visible focus states
- [ ] Page titles and metadata
- [ ] Route protection and role/permission checks where required

## 9. Suggested Build Order

### Phase 1 — Core experience
- [ ] Landing page
- [ ] Login
- [ ] Signup
- [ ] OTP / email verification
- [ ] Forgot password
- [ ] Reset password
- [ ] Dashboard overview
- [ ] VPS list
- [ ] Create VPS
- [ ] VPS details
- [ ] Monitoring
- [ ] Profile
- [ ] Security and settings

### Phase 2 — Product completeness
- [ ] Billing overview
- [ ] Plans
- [ ] Usage
- [ ] Invoices
- [ ] Notifications
- [ ] Activity
- [ ] Support pages
- [ ] API keys
- [ ] Sessions
- [ ] Backups
- [ ] Web terminal

### Phase 3 — Public pages and polish
- [ ] Features
- [ ] Pricing
- [ ] About
- [ ] Contact
- [ ] Documentation
- [ ] Terms and privacy
- [ ] Error and system pages
- [ ] Status and changelog

---

## Progress Notes

- **Initial status:** No pages from this checklist have been implemented yet.
- Update this file as pages are completed; do not mark a page complete merely because its route or placeholder exists.
