# TericSoft Company Page

---

## Overview
**TericSoft Company Page** is a static website for TericSoft, a SAAS company. The website consists of four pages:
- **Home**: Introduction to TericSoft and its services.
- **About Us**: Information about the company's mission, vision, and team.
- **Projects**: Showcase of TericSoft's projects and client work.
- **Contact Us**: A form for users to submit queries, which are stored in **Supabase**.

The website is built using **HTML, CSS, and JavaScript** and is deployed to **Vercel**.

---

## Features
| Feature               | Description                                                                                     |
|-----------------------|------------------------------------------------------------------------------------------------|
| **Responsive Design** | Works on all device sizes (desktop, tablet, mobile).                                           |
| **Modern UI**         | Clean, professional, and intuitive design.                                                     |
| **Supabase Integration** | Contact form submissions are stored in Supabase.                                              |
| **Vercel Deployment** | Fast and reliable deployment using Vercel.                                                     |

---

## Technology Stack
| Layer           | Technology                                                                                     |
|-----------------|------------------------------------------------------------------------------------------------|
| **Frontend**    | HTML, CSS, JavaScript                                                                          |
| **Backend**     | Supabase (Database and API)                                                                    |
| **Deployment**  | Vercel                                                                                         |

---

## Setup Instructions
### 1. Clone the Repository
```bash
 git clone https://github.com/anirudhkotla/tericsoft-dummy-version.git
 cd tericsoft-dummy-version
```

### 2. Install Dependencies
- Install the **Vercel CLI** for deployment:
  ```bash
  npm install -g vercel
  ```

### 3. Set Up Supabase
1. Create a Supabase project at [https://supabase.com](https://supabase.com).
2. Create a table for contact form submissions:
   ```sql
   CREATE TABLE contact_form (
     id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
     name TEXT NOT NULL,
     email TEXT NOT NULL,
     subject TEXT NOT NULL,
     message TEXT NOT NULL,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   ```
3. Enable **Row-Level Security (RLS)** and create a policy to allow insertions:
   ```sql
   CREATE POLICY "Allow insertions" ON contact_form
   FOR INSERT TO public
   WITH CHECK (true);
   ```
4. Note the **Project URL** and **API Key** for integration.

### 4. Configure Environment Variables
- Create a `.env` file in the root directory:
  ```
  SUPABASE_URL=https://<project-ref>.supabase.co
  SUPABASE_KEY=<your-supabase-key>
  ```

---

## Deployment
### 1. Deploy to Vercel
1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Deploy the website:
   ```bash
   vercel
   ```
3. Follow the prompts to link the project to your Vercel account.
4. Add the environment variables (`SUPABASE_URL` and `SUPABASE_KEY`) in the Vercel dashboard.

### 2. Access the Website
- After deployment, Vercel will provide a URL to access the website.

---

## Testing
### 1. Unit Testing
- Test each page individually to ensure it loads and displays correctly.
- Test the contact form submission and Supabase integration.

### 2. Integration Testing
- Test the navigation between pages.
- Test the responsiveness of the website on different devices.

### 3. User Acceptance Testing
- Validate the website against the **acceptance criteria** outlined in the [SRS](SRS.md).

---

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

---

## License
This project is licensed under the **MIT License**.