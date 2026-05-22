# Implementation Plan

---

# 1. Introduction
This document outlines the step-by-step implementation procedure for the **TericSoft Company Page**. The implementation will be divided into modules, and each module will be developed, tested, and deployed sequentially.

---

# 2. Prerequisites
## 2.1 Tools and Technologies
| Tool/Technology | Purpose                                                                                       |
|-----------------|------------------------------------------------------------------------------------------------|
| **Git**         | Version control for the project.                                                              |
| **GitHub**      | Hosting the project repository.                                                               |
| **VS Code**     | Code editor for development.                                                                  |
| **Node.js**     | JavaScript runtime for local testing (optional).                                              |
| **Vercel CLI**  | Command-line tool for deploying to Vercel.                                                    |
| **Supabase**    | Backend database for storing contact form submissions.                                         |

## 2.2 Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/anirudhkotla/tericsoft-dummy-version.git
   cd tericsoft-dummy-version
   ```

2. **Install Vercel CLI** (for deployment):
   ```bash
   npm install -g vercel
   ```

3. **Set Up Supabase**:
   - Create a Supabase project at [https://supabase.com](https://supabase.com).
   - Note the **Project URL** and **API Key** for integration.

---

# 3. Module Breakdown and Implementation Steps
## 3.1 Shared Components
### 3.1.1 Responsibilities
- Navigation bar
- Footer
- Styling (CSS)

### 3.1.2 Implementation Steps
1. Create a `styles` directory and add a `styles.css` file for global styling.
2. Create a `shared` directory and add the following files:
   - `navbar.html`: Navigation bar for all pages.
   - `footer.html`: Footer for all pages.
3. Link the CSS file in all HTML pages.

### 3.1.3 Files
| File Path               | Description                                                                                     |
|-------------------------|------------------------------------------------------------------------------------------------|
| `styles/styles.css`     | Global styling for the website.                                                               |
| `shared/navbar.html`    | Navigation bar for all pages.                                                                  |
| `shared/footer.html`    | Footer for all pages.                                                                          |

---

## 3.2 Home Page
### 3.2.1 Responsibilities
- Display company logo and navigation bar.
- Include a hero section with a brief introduction to TericSoft.
- Showcase key services or offerings.
- Provide call-to-action buttons to navigate to other pages.

### 3.2.2 Implementation Steps
1. Create an `index.html` file in the root directory.
2. Add the following sections:
   - Navigation bar (include `navbar.html`).
   - Hero section with a brief introduction.
   - Services/offerings section.
   - Call-to-action buttons.
   - Footer (include `footer.html`).
3. Link the `styles.css` file for styling.

### 3.2.3 Files
| File Path               | Description                                                                                     |
|-------------------------|------------------------------------------------------------------------------------------------|
| `index.html`            | Home page of the website.                                                                      |

---

## 3.3 About Us Page
### 3.3.1 Responsibilities
- Display company mission, vision, and history.
- Showcase team members with their roles and photos.

### 3.3.2 Implementation Steps
1. Create an `about.html` file in the root directory.
2. Add the following sections:
   - Navigation bar (include `navbar.html`).
   - Mission and vision section.
   - Company history section.
   - Team members section.
   - Footer (include `footer.html`).
3. Link the `styles.css` file for styling.

### 3.3.3 Files
| File Path               | Description                                                                                     |
|-------------------------|------------------------------------------------------------------------------------------------|
| `about.html`            | About Us page of the website.                                                                  |

---

## 3.4 Projects Page
### 3.4.1 Responsibilities
- Display a list of projects with descriptions and images.
- Include links to live demos or case studies for each project.

### 3.4.2 Implementation Steps
1. Create a `projects.html` file in the root directory.
2. Add the following sections:
   - Navigation bar (include `navbar.html`).
   - Projects showcase section.
   - Footer (include `footer.html`).
3. Link the `styles.css` file for styling.

### 3.4.3 Files
| File Path               | Description                                                                                     |
|-------------------------|------------------------------------------------------------------------------------------------|
| `projects.html`         | Projects page of the website.                                                                  |

---

## 3.5 Contact Us Page
### 3.5.1 Responsibilities
- Display a form for users to submit queries.
- Validate form inputs before submission.
- Store form submissions in Supabase.
- Display a success message after submission.

### 3.5.2 Implementation Steps
1. Create a `contact.html` file in the root directory.
2. Add the following sections:
   - Navigation bar (include `navbar.html`).
   - Contact form with fields for name, email, subject, and message.
   - Footer (include `footer.html`).
3. Link the `styles.css` file for styling.
4. Create a `scripts` directory and add a `contact.js` file to handle form submission.
5. Use the **Supabase JavaScript client** to store form submissions.

### 3.5.3 Files
| File Path               | Description                                                                                     |
|-------------------------|------------------------------------------------------------------------------------------------|
| `contact.html`          | Contact Us page of the website.                                                               |
| `scripts/contact.js`    | JavaScript file to handle form submission and Supabase integration.                            |

---

## 3.6 Supabase Integration
### 3.6.1 Responsibilities
- Store contact form submissions in Supabase.

### 3.6.2 Implementation Steps
1. Create a table in Supabase for contact form submissions:
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
2. Enable **Row-Level Security (RLS)** for the table.
3. Create a policy to allow insertions:
   ```sql
   CREATE POLICY "Allow insertions" ON contact_form
   FOR INSERT TO public
   WITH CHECK (true);
   ```
4. Integrate the Supabase JavaScript client in `contact.js`:
   ```javascript
   import { createClient } from '@supabase/supabase-js';
   
   const supabaseUrl = 'https://<project-ref>.supabase.co';
   const supabaseKey = '<your-supabase-key>';
   const supabase = createClient(supabaseUrl, supabaseKey);
   
   async function submitForm() {
     const { data, error } = await supabase
       .from('contact_form')
       .insert([
         { name: 'John Doe', email: 'john@example.com', subject: 'Hello', message: 'Test message' }
       ]);
     
     if (error) {
       console.error('Error submitting form:', error);
     } else {
       console.log('Form submitted successfully:', data);
     }
   }
   ```

### 3.6.3 Files
| File Path               | Description                                                                                     |
|-------------------------|------------------------------------------------------------------------------------------------|
| `scripts/contact.js`    | JavaScript file to handle Supabase integration.                                                |

---

# 4. Testing
## 4.1 Unit Testing
- Test each page individually to ensure it loads and displays correctly.
- Test the contact form submission and Supabase integration.

## 4.2 Integration Testing
- Test the navigation between pages.
- Test the responsiveness of the website on different devices.

## 4.3 User Acceptance Testing
- Validate the website against the **acceptance criteria** outlined in the SRS.

---

# 5. Deployment
## 5.1 Vercel Deployment
1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Deploy the website:
   ```bash
   vercel
   ```
3. Follow the prompts to link the project to your Vercel account.

## 5.2 Environment Variables
- Add the following environment variables to Vercel:
  ```
  SUPABASE_URL=https://<project-ref>.supabase.co
  SUPABASE_KEY=<your-supabase-key>
  ```

---

# 6. Post-Deployment
## 6.1 Monitoring
- Monitor the website for uptime and performance using Vercel's dashboard.

## 6.2 Feedback
- Collect feedback from users and stakeholders to improve the website.

---

# 7. Timeline
| Task                     | Estimated Time |
|--------------------------|----------------|
| Shared Components        | 1 day          |
| Home Page                | 1 day          |
| About Us Page            | 1 day          |
| Projects Page            | 1 day          |
| Contact Us Page          | 1 day          |
| Supabase Integration     | 1 day          |
| Testing                  | 2 days         |
| Deployment               | 1 day          |
| **Total**                | **9 days**     |