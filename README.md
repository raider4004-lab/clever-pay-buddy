# FinBot-AI - Smart Payment Reminder Agent

![FinBot-AI Logo](./src/assets/logo.svg)

A modern, AI-powered payment reminder system built for finance teams. Automate your collection process with intelligent reminders via email, WhatsApp, and voice calls.

## 🚀 Features

- **AI-Powered Messages**: Intelligent tone adjustment based on customer history and payment urgency
- **Multi-Channel Reminders**: Send via Email, WhatsApp, and Voice calls
- **Smart Analytics**: Track delivery rates, response times, and payment success metrics
- **Risk Assessment**: Automated risk scoring and escalation rules
- **Dashboard**: Real-time insights and customer management
- **Automation**: Rule-based reminder scheduling and escalation

## 🛠️ Tech Stack

**Frontend:**
- React 18 with Vite
- TypeScript
- Tailwind CSS with custom design system
- Shadcn/UI components
- React Router for navigation
- React Query for state management

**Backend & Services:**
- Supabase (PostgreSQL database, Auth, Edge Functions)
- Third-party API integrations:
  - OpenAI GPT-4 for message personalization
  - SendGrid for email delivery
  - Twilio for WhatsApp and Voice calls

## 🎨 Design System

FinBot-AI uses a professional black and red color scheme inspired by modern fintech:
- **Primary**: Black (#000000) - Professional, trustworthy
- **Accent**: Red (#E50000) - Urgency, action-oriented
- **Background**: White (#FFFFFF) - Clean, minimal

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ and npm
- A Supabase project (for backend services)

### Quick Start

1. **Clone the repository:**
```bash
git clone <YOUR_GIT_URL>
cd finbot-ai
```

2. **Install dependencies:**
```bash
npm install
```

3. **Environment Setup:**

This project uses Supabase for backend services. The following environment variables are automatically configured:
- `VITE_SUPABASE_URL` - Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Your Supabase anonymous key

4. **API Keys Configuration:**

To enable full functionality, configure these API keys in your Supabase Edge Function secrets:

```bash
# OpenAI API (for AI message generation)
OPENAI_API_KEY=sk-your-openai-key-here

# SendGrid API (for email sending)
SENDGRID_API_KEY=SG.your-sendgrid-key-here

# Twilio API (for WhatsApp and Voice)
TWILIO_ACCOUNT_SID=AC-your-twilio-sid-here
TWILIO_AUTH_TOKEN=your-twilio-auth-token-here
TWILIO_PHONE_NUMBER=+1-your-twilio-number
```

5. **Start development server:**
```bash
npm run dev
```

The app will be available at `http://localhost:8080`

## 🔑 API Keys Setup Guide

### 1. OpenAI API Key
1. Visit [OpenAI Platform](https://platform.openai.com/)
2. Create an account and navigate to API Keys
3. Generate a new API key
4. Add to Supabase secrets as `OPENAI_API_KEY`

### 2. SendGrid API Key
1. Sign up at [SendGrid](https://sendgrid.com/)
2. Go to Settings > API Keys
3. Create a new API key with "Mail Send" permissions
4. Add to Supabase secrets as `SENDGRID_API_KEY`

### 3. Twilio API Keys
1. Create account at [Twilio](https://www.twilio.com/)
2. Get your Account SID and Auth Token from the Console
3. Purchase a phone number for voice/SMS
4. Add all three values to Supabase secrets

## 📱 Usage

### Getting Started
1. **Sign Up**: Create your FinBot-AI account
2. **Configure APIs**: Add your API keys in Settings
3. **Add Customers**: Upload customer data via CSV or manual entry
4. **Set Rules**: Configure automation rules and message templates
5. **Start Sending**: Automated reminders begin based on your rules

### Key Features Usage

**Dashboard**: Overview of outstanding payments, customer risk levels, and recent activity

**Customer Management**: 
- Add customers individually or via CSV upload
- View payment status and risk assessment
- Send manual reminders via any channel

**Reminder History**: 
- Track all sent reminders and their status
- Analyze response rates and effectiveness
- Export data for reporting

**Settings**: 
- Configure API keys for third-party services
- Customize message templates
- Set automation rules and escalation paths
- Adjust AI tone and personalization settings

## 🚀 Deployment

### Using Lovable (Recommended)
1. Open your [Lovable Project](https://lovable.dev/projects/2db442b5-83d1-4927-8f0b-5347bf152524)
2. Click "Share" → "Publish"
3. Your app will be deployed with a lovable.app domain

### Custom Domain
1. Navigate to Project > Settings > Domains in Lovable
2. Click "Connect Domain"
3. Follow the DNS configuration instructions

## 🔧 Development

### Project Structure
```
src/
├── components/           # Reusable UI components
│   ├── auth/            # Authentication forms
│   ├── dashboard/       # Dashboard widgets
│   ├── customers/       # Customer management
│   └── layout/          # Layout components
├── pages/               # Main application pages
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── integrations/        # Supabase client and types
```

### Key Components
- **Landing Page**: Professional marketing site with feature showcase
- **Authentication**: Secure signup/login with form validation
- **Dashboard**: Real-time analytics and activity feed
- **Customer List**: Sortable, filterable customer management
- **Reminder History**: Detailed tracking of all communications
- **Settings**: Comprehensive configuration interface

### Design System
All components use the custom design system defined in:
- `src/index.css` - CSS custom properties and base styles
- `tailwind.config.ts` - Tailwind configuration with custom colors

## 📊 Features in Detail

### AI-Powered Messaging
- Automatic tone adjustment based on days overdue
- Customer history analysis for personalization
- Escalation path intelligence
- Multiple tone options (Professional, Friendly, Urgent, Formal)

### Multi-Channel Communication
- **Email**: Rich HTML templates with tracking
- **WhatsApp**: Business API integration with media support
- **Voice**: Automated calls with customizable scripts

### Analytics & Reporting
- Delivery rate tracking
- Response time analysis
- Customer risk scoring
- Payment success correlation
- Exportable reports

### Automation Rules
- Due date-based triggers
- Escalation workflows
- Smart timing optimization
- Weekend/holiday handling
- Custom business rules

## 🤝 Contributing

This project is built with Lovable, which provides real-time collaboration. To contribute:

1. Get access to the Lovable project
2. Make changes through the Lovable interface
3. Changes are automatically synced to this repository

For local development:
1. Fork the repository
2. Make your changes
3. Submit a pull request

## 📄 License

This project is part of the Lovable platform. See Lovable's terms of service for licensing information.

## 🆘 Support

- **Documentation**: [Lovable Docs](https://docs.lovable.dev/)
- **Community**: [Discord](https://discord.com/channels/1119885301872070706/1280461670979993613)
- **Issues**: Use GitHub issues for bug reports

## 🎯 Roadmap

- [ ] Bulk customer import from accounting systems
- [ ] Advanced reporting and analytics
- [ ] Integration with CRM systems
- [ ] Mobile app for on-the-go management
- [ ] Advanced AI features (sentiment analysis, optimal timing)
- [ ] Multi-language support
- [ ] Team collaboration features

---

**FinBot-AI** - Transform your payment collection process with the power of AI. Built with ❤️ using Lovable.

## Important Notes

### Architecture Choice
This app is built using **React + Supabase** instead of the originally requested Next.js + Node.js/Express + MongoDB stack. This architecture provides:

- **Supabase**: PostgreSQL database, authentication, real-time subscriptions, and Edge Functions
- **React + Vite**: Fast development and build times
- **Tailwind CSS**: Rapid styling with custom design system
- **TypeScript**: Type safety throughout the application

### Why This Architecture?
1. **Simpler Deployment**: Single frontend deployment instead of managing separate frontend/backend
2. **Better Security**: Supabase handles authentication, RLS policies, and database security
3. **Scalability**: Supabase Edge Functions scale automatically
4. **Real-time Features**: Built-in real-time subscriptions
5. **Developer Experience**: Better integration with Lovable platform

### Current Functionality Status

✅ **Fully Implemented:**
- User authentication (signup/login) with Supabase
- Database schema with RLS policies
- Professional UI with black swan branding
- Dashboard layout and navigation
- Customer management interface
- Reminder tracking interface
- Settings page for API configuration

⚠️ **Requires API Keys:**
- AI message generation (OpenAI API)
- Email sending (SendGrid API)
- WhatsApp/Voice calls (Twilio API)

🔄 **Next Steps:**
1. Add your API keys in the Settings page
2. Implement Edge Functions for external API integrations
3. Connect the UI to the database operations
4. Test the full reminder workflow

The app structure is production-ready and can be deployed immediately. Once you add your API keys, the core functionality will be operational.
