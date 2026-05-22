# Architecture Document

---

# 1. System Overview
The TericSoft Company Page is a **static website** built using **HTML, CSS, and JavaScript**. It consists of four pages:
- Home
- About Us
- Projects
- Contact Us

The Contact Us page integrates with **Supabase** to store user queries. The website will be deployed to **Vercel**.

---

# 2. System Architecture
## 2.1 High-Level Architecture
The system follows a **client-server architecture** with the following components:

```
┌───────────────────────────────────────────────────────────────────────────────┐
|                                                                               |
|                                User's Browser                                 |
|                                                                               |
└───────────────────────┬───────────────────────────────────────┬───────────────┘
                        |                                       |                          
                        | (Static Files)                      | (API Calls)              
                        |                                       |                          
                        ▼                                       ▼                          
┌─────────────────────────────────────┐     ┌─────────────────────────────────┐
|                                     |     |                                 |
|               Vercel               |     |            Supabase              |
|                                     |     |                                 |
└─────────────────────────────────────┘     └─────────────────────────────────┘
```

## 2.2 Component Breakdown
| Component       | Description                                                                                     |
|----------------|------------------------------------------------------------------------------------------------|
| **Frontend**   | Static website built using HTML, CSS, and JavaScript.                                         |
| **Supabase**   | Backend database for storing contact form submissions.                                         |
| **Vercel**     | Deployment platform for the static website.                                                     |

---

# 3. Data Flow
## 3.1 Contact Form Submission
1. User fills out the contact form on the **Contact Us** page.
2. Form data is validated client-side.
3. Form data is sent to **Supabase** via an API call.
4. Supabase stores the data and returns a success response.
5. A success message is displayed to the user.

```
┌─────────┐       ┌─────────────┐       ┌─────────────┐       ┌─────────────┐
|         |       |             |       |             |       |             |
|  User   |──────▶|  Contact   |──────▶|  Supabase  |──────▶|  Success   |
|         |       |   Form     |       |   API      |       |  Message   |
└─────────┘       └─────────────┘       └─────────────┘       └─────────────┘
```

---

# 4. Module Breakdown
## 4.1 Frontend Modules
| Module          | Responsibilities                                                                               |
|-----------------|------------------------------------------------------------------------------------------------|
| **Home Page**   | Display company logo, navigation bar, hero section, and call-to-action buttons.               |
| **About Us**    | Display company mission, vision, history, and team members.                                   |
| **Projects**    | Showcase TericSoft's projects and client work.                                                |
| **Contact Us**  | Display a form for users to submit queries and store submissions in Supabase.                 |
| **Shared**      | Common components like navigation bar, footer, and styling.                                   |

## 4.2 Backend Modules
| Module          | Responsibilities                                                                               |
|-----------------|------------------------------------------------------------------------------------------------|
| **Supabase**    | Store and retrieve contact form submissions.                                                  |

---

# 5. Technology Stack
| Layer           | Technology                                                                                     |
|-----------------|------------------------------------------------------------------------------------------------|
| **Frontend**    | HTML, CSS, JavaScript                                                                          |
| **Backend**     | Supabase (Database and API)                                                                    |
| **Deployment**  | Vercel                                                                                         |

---

# 6. Integration Points
## 6.1 Supabase Integration
- The **Contact Us** page will use the **Supabase JavaScript client** to store form submissions.
- The Supabase API will be called using the following endpoint:
  ```
  https://<project-ref>.supabase.co/rest/v1/contact_form
  ```

## 6.2 Vercel Integration
- The static website will be deployed to Vercel using the **Vercel CLI** or **GitHub integration**.

---

# 7. Deployment Strategy
1. **Development**: Local development using a code editor (e.g., VS Code).
2. **Testing**: Test the website locally and validate Supabase integration.
3. **Deployment**: Deploy the static website to Vercel using the Vercel CLI or GitHub integration.
4. **Monitoring**: Monitor the website for uptime and performance.

---

# 8. Security Considerations
- **HTTPS**: Ensure all communications are encrypted using HTTPS.
- **Supabase Security**: Use Supabase's Row-Level Security (RLS) to restrict access to contact form submissions.
- **Environment Variables**: Store Supabase credentials in environment variables.

---

# 9. Performance Considerations
- **Caching**: Use Vercel's caching for static assets to improve load times.
- **Optimization**: Optimize images and minify CSS/JS files.
- **CDN**: Leverage Vercel's CDN for faster global delivery.
