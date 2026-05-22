# TericSoft Company Website

A static website for TericSoft, a SAAS company, featuring:
- Home
- About Us
- Projects
- Contact Us (with Supabase integration)

## Deployment
### GitHub Pages
This site is automatically deployed to GitHub Pages via GitHub Actions.

### Vercel
1. Import this repository into Vercel.
2. Add the following environment variables:
   - `SUPABASE_URL`: Your Supabase project URL.
   - `SUPABASE_ANON_KEY`: Your Supabase anonymous key.
3. Deploy.

## Supabase Setup
1. Create a `contacts` table with the following schema:
   - `id` (UUID, primary key)
   - `name` (Text)
   - `email` (Text)
   - `message` (Text)
   - `created_at` (Timestamp with time zone, default: `now()`)

2. Enable Row Level Security (RLS) and create a policy to allow inserts.