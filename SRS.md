# Software Requirements Specification (SRS)

---

# 1. Introduction
## 1.1 Purpose
This document outlines the software requirements for the **TericSoft Company Page**, a static website for a SAAS company. The website will consist of four pages:
- Home
- About Us
- Projects
- Contact Us

The Contact Us page will integrate with **Supabase** to store user queries.

## 1.2 Scope
The TericSoft Company Page is a static website built using **HTML, CSS, and JavaScript**. It will be deployed to **Vercel** and will use **Supabase** as the backend database for storing contact form submissions.

## 1.3 Definitions
| Term          | Definition                                                                                     |
|---------------|------------------------------------------------------------------------------------------------|
| SAAS          | Software as a Service, a cloud-based software delivery model.                                |
| Supabase      | An open-source Firebase alternative for backend services, including databases and authentication. |
| Vercel        | A cloud platform for static site deployment and serverless functions.                          |
| Responsive    | A design approach that ensures the website works on all device sizes.                          |

---

# 2. Overall Description
## 2.1 Product Perspective
The TericSoft Company Page is a standalone static website that will be deployed to Vercel. It will interact with Supabase to store contact form submissions.

## 2.2 Product Features
1. **Home Page**: Introduction to TericSoft, key offerings, and call-to-action buttons.
2. **About Us Page**: Information about the company, its mission, vision, and team.
3. **Projects Page**: Showcase of TericSoft's projects and client work.
4. **Contact Us Page**: A form for users to submit queries, which will be stored in Supabase.

## 2.3 User Classes
| User Class     | Description                                                                                     |
|----------------|------------------------------------------------------------------------------------------------|
| Visitors       | Potential clients or users who visit the website to learn about TericSoft.                    |
| Administrators | TericSoft team members who manage the website and view contact form submissions.               |

## 2.4 Operating Environment
- **Frontend**: HTML, CSS, JavaScript (Static Website)
- **Backend**: Supabase (Database and API)
- **Deployment**: Vercel
- **Browser Support**: Chrome, Firefox, Safari, Edge

## 2.5 Design and Implementation Constraints
1. The website must be **responsive** and work on all device sizes.
2. The website must be deployed to **Vercel**.
3. Contact form submissions must be stored in **Supabase**.
4. The website must be built using **static files** (HTML, CSS, JS).

---

# 3. System Features
## 3.1 Home Page
### 3.1.1 Description
The Home Page will introduce TericSoft, its services, and provide call-to-action buttons to navigate to other pages.

### 3.1.2 Functional Requirements
| Requirement ID | Description                                                                                     |
|----------------|------------------------------------------------------------------------------------------------|
| FR-01          | Display the company logo and navigation bar.                                                   |
| FR-02          | Include a hero section with a brief introduction to TericSoft.                                 |
| FR-03          | Showcase key services or offerings.                                                            |
| FR-04          | Provide call-to-action buttons to navigate to other pages.                                     |

## 3.2 About Us Page
### 3.2.1 Description
The About Us Page will provide information about TericSoft's mission, vision, and team.

### 3.2.2 Functional Requirements
| Requirement ID | Description                                                                                     |
|----------------|------------------------------------------------------------------------------------------------|
| FR-05          | Display the company's mission and vision.                                                      |
| FR-06          | Include a section about the company's history.                                                 |
| FR-07          | Showcase team members with their roles and photos.                                             |

## 3.3 Projects Page
### 3.3.1 Description
The Projects Page will showcase TericSoft's projects and client work.

### 3.3.2 Functional Requirements
| Requirement ID | Description                                                                                     |
|----------------|------------------------------------------------------------------------------------------------|
| FR-08          | Display a list of projects with descriptions and images.                                       |
| FR-09          | Include links to live demos or case studies for each project.                                  |

## 3.4 Contact Us Page
### 3.4.1 Description
The Contact Us Page will allow users to submit queries, which will be stored in Supabase.

### 3.4.2 Functional Requirements
| Requirement ID | Description                                                                                     |
|----------------|------------------------------------------------------------------------------------------------|
| FR-10          | Include a form with fields for name, email, subject, and message.                              |
| FR-11          | Validate form inputs before submission.                                                        |
| FR-12          | Store form submissions in Supabase.                                                            |
| FR-13          | Display a success message after submission.                                                    |

---

# 4. External Interface Requirements
## 4.1 User Interfaces
- The website must be **responsive** and work on all device sizes.
- The design must be **modern, clean, and professional**.

## 4.2 Hardware Interfaces
- No hardware interfaces are required.

## 4.3 Software Interfaces
| Interface       | Description                                                                                     |
|-----------------|------------------------------------------------------------------------------------------------|
| Supabase API    | Used to store and retrieve contact form submissions.                                           |
| Vercel          | Used to deploy the static website.                                                             |

## 4.4 Communications Interfaces
- The website will use **HTTPS** for secure communication.

---

# 5. Non-Functional Requirements
## 5.1 Performance Requirements
- The website must load in **under 2 seconds** on a standard broadband connection.
- The website must handle **at least 100 concurrent users** without performance degradation.

## 5.2 Security Requirements
- Form submissions must be stored securely in Supabase.
- The website must use **HTTPS** for all communications.

## 5.3 Availability Requirements
- The website must be available **99.9% of the time**.

## 5.4 Usability Requirements
- The website must be **easy to navigate** and **intuitive** for users.
- The website must be **accessible** to users with disabilities (WCAG 2.1 AA compliance).

---

# 6. Assumptions and Dependencies
## 6.1 Assumptions
1. Supabase will be available and accessible for storing contact form submissions.
2. Vercel will be used for deployment.
3. The website will be built using static files (HTML, CSS, JS).

## 6.2 Dependencies
| Dependency      | Description                                                                                     |
|-----------------|------------------------------------------------------------------------------------------------|
| Supabase        | Backend database for storing contact form submissions.                                         |
| Vercel          | Deployment platform for the static website.                                                     |

---

# 7. Risks and Mitigation Strategies
| Risk ID | Risk Description                                                                               | Mitigation Strategy                                                                             |
|--------|------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| R-01   | Supabase downtime may affect form submissions.                                                 | Implement client-side validation and retry logic for form submissions.                         |
| R-02   | Vercel deployment may fail due to configuration issues.                                        | Test deployment locally before pushing to Vercel.                                              |
| R-03   | Website may not be fully responsive on all devices.                                            | Use a responsive framework like Bootstrap and test on multiple devices.                        |

---

# 8. Acceptance Criteria
1. The website must be fully functional and deployed to Vercel.
2. All pages (Home, About Us, Projects, Contact Us) must be accessible and responsive.
3. Contact form submissions must be stored in Supabase.
4. The website must load in under 2 seconds on a standard broadband connection.
5. The website must be accessible (WCAG 2.1 AA compliance).

---

# 9. Glossary
| Term          | Definition                                                                                     |
|---------------|------------------------------------------------------------------------------------------------|
| SAAS          | Software as a Service.                                                                         |
| Supabase      | Open-source Firebase alternative for backend services.                                         |
| Vercel        | Cloud platform for static site deployment.                                                     |
| Responsive     | Design approach that ensures the website works on all device sizes.                            |