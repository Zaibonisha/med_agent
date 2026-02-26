🏥 Healthcare Management Dashboard

A modern, responsive web application for clinics to manage patients, monitor clinic performance, and gain predictive insights on patient risk. Built with React (frontend) and prepared for Django REST Framework (backend integration), with analytics, AI risk scoring, and system alerts.

🚀 Features
Dashboard Overview

View total clinics, total patients, and high-risk reports at a glance.

Patients Management

Track patient details, including name, clinic, status, and risk level.

Status and risk are color-coded with badges for quick insights.

Clinics Management

Monitor clinic names, regions, and patient counts.

Recent Patient Activity

See the latest patient interactions and their risk levels.

AI Risk Analysis (Future-ready)

Predictive patient risk scoring with AI/ML integration.

System Alerts (Future-ready)

Automated monitoring and compliance notifications.

Responsive UI

Fixed sidebar for easy navigation while scrolling dashboard content.

Works well on both desktop and mobile screens.

🛠 Tech Stack
Layer	Technology Used
Frontend	React, JavaScript, CSS
Backend	Django REST Framework (future)
Analytics	Prepared for AI risk modules
Auth	JWT (planned for backend)
Hosting	Render / Any cloud deployment
Database	PostgreSQL or MySQL (planned)
📦 Setup Instructions
Frontend Setup (React)
# Clone the repository
git clone https://github.com/Zaibonisha/med_agent
cd med_agent

# Install dependencies
npm install

# Start the frontend
npm start

Open your browser and go to:

http://localhost:3000
Backend Setup (Optional / Future)
# Navigate to backend folder
cd backend
python -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Start backend server
python manage.py runserver
📈 Usage

Navigate between Dashboard, Patients, and Clinics using the sidebar.

Dashboard shows total clinics, total patients, and high-risk reports.

Patient and clinic tables display status and risk badges for easy insights.

Sidebar remains fixed while scrolling dashboard content.

🔮 Future Enhancements

Full backend integration with Django REST API.

Real-time notifications for high-risk patients and system alerts.

AI-driven predictive analytics for patient risk scoring.

Collapsible and responsive sidebar for mobile devices.

Role-based access control (Admin, Doctor, Nurse).

Cloud deployment using Docker and Kubernetes for scalability.

👩‍💻 Author

Zaibonisha Mohamed – Full-Stack Developer | React & Django | AI & Healthcare Applications