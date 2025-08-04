import React from "react";
import { Users, DollarSign, Clock, FileText, ArrowRight, Layers, Briefcase, Package, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const bookkeepingModels = [
  {
    name: "Monthly Fixed Fees",
    icon: <DollarSign className="w-6 h-6 text-cyan-400" />,
    how: "Monthly fees are charged at the start of each month. They are based on the number of transactions and reporting requirements that the business requires.",
    suitable: "Small businesses with limited number of Bank and Credit Card accounts having limited number of Transactions."
  },
  {
    name: "FTE - With Hourly Rate",
    icon: <Users className="w-6 h-6 text-purple-400" />,
    how: "A dedicated staff will be assigned for you, who will directly be working under your supervision if you are a CPA or Accounting Firm. A fixed hourly rate will be decided based on the staff qualification and experience level. You will be charged weekly, based on the Time Sheet the staff will prepare daily basis at the hourly rate agreed.",
    suitable: "Clients having fixed amount of daily work like CPAs and Accounting Firm having multiple accounting clients."
  },
  {
    name: "Team Approach - With Hourly Rate",
    icon: <Layers className="w-6 h-6 text-emerald-400" />,
    how: "A dedicated Team having experienced staff members will be assigned for your work, under the supervision of a Team Lead who will be communication with you. A fixed hourly rate will be decided with client post discussion. You will be charged weekly, based on the Time Sheet the team will prepare whenever you assign some work.",
    suitable: "Clients who are not sure of their work flow pattern and can estimate the number of hours they will be having work for, in a month. CPAs and Accounting Firm having few recurring accounting clients can go with this approach."
  },
  {
    name: "Block of Hours Package",
    icon: <Package className="w-6 h-6 text-pink-400" />,
    how: (
      <>
        Buy pre-paid block of Bookkeeping Services Hours for your contract period as below and get the lucrative discounts.<br/>
        <ul className="list-disc ml-6 mt-2 text-sm text-gray-300">
          <li>100-300 Hours for a contract period 3 months.</li>
          <li>301-600 Hours for a contract period of 6 months.</li>
          <li>601-1200 Hours for a contract period of 12 months.</li>
        </ul>
        <span className="block mt-2">The hours get reduced from Total available balance as and when you get the work done for your bookkeeping clients and any remaining hours at the end of contract period gets carried forward on contract renewal.</span>
        <span className="block mt-2">In this approach, you get billed in advance for the package you opt for and thereby having liberty of getting your cost pre-decided for a period.</span>
      </>
    ),
    suitable: "Small and medium sized accounting and CPA Firms having fixed number of monthly bookkeeping clients wherein the workload hours can be estimated for a specific period and work flow pattern in uneven because of clients' responsiveness."
  }
];

const taxModels = [
  {
    name: "Per Return Basis (Level Based Pricing Model)",
    icon: <FileText className="w-6 h-6 text-cyan-400" />,
    how: (
      <>
        CPA Firms and Enrolled Agents pay per Return basis in this model. The charges per returns depend on complexity involved and number of hours required per return. A Level Based Pricing Brochure will be provided to clients opting for this model.
      </>
    ),
    suitable: "Clients with similar sort of tax returns and having big number for tax returns to be prepared. Based on our Level based Pricing Brochure, CPAs and EA's can estimate their total cost before assigning tax returns to be prepared at Symbiosis in this approach."
  },
  {
    name: "FTE - With Hourly Rate",
    icon: <Users className="w-6 h-6 text-purple-400" />,
    how: "A dedicated staff will be assigned for you, who will directly be working under your supervision if you are a CPA Firm or EA. A fixed hourly rate will be decided based on the staff qualification and experience level. You will be charged weekly, based on the Time Sheet the staff will prepare daily basis at the hourly rate agreed.",
    suitable: "Clients having fixed amount of daily work like CPAs and EAs having multiple tax returns to be prepared and are sure of daily tax returns workload."
  },
  {
    name: "Team Approach - With Hourly Rate",
    icon: <Layers className="w-6 h-6 text-emerald-400" />,
    how: "A dedicated Team having experienced staff members will be assigned for your work, under the supervision of a Team Lead who will be communication with you. A fixed hourly rate will be decided with client post discussion. You will be charged weekly, based on the Time Sheet the team will prepare whenever you assign some work.",
    suitable: "Clients who are not sure of their work flow pattern and can estimate the number of tax return they will be having in a month or during tax season. CPA Firms and EAs having fixed number of tax returns should go with this Approach."
  },
  {
    name: "Block of Hours Package",
    icon: <Package className="w-6 h-6 text-pink-400" />,
    how: (
      <>
        Buy pre-paid block of Preparation for Number of Tax Returns for your contract period as below and get the lucrative discounts.<br/>
        <ul className="list-disc ml-6 mt-2 text-sm text-gray-300">
          <li>50-100 Tax Returns for Half (1st or 2nd) of the year.</li>
          <li>101 - 500 Tax Returns per annum.</li>
          <li>501 - 1000 Tax Returns per annum.</li>
        </ul>
        <span className="block mt-2">The Tax Returns get reduced from Total available balance as and when you get the your tax returns prepared and any remaining balance of tax returns gets carried forward on contract renewal.</span>
        <span className="block mt-2">In this approach, you get billed in advance for the package you opt for and thereby having liberty of getting your cost pre-decided for a period.</span>
      </>
    ),
    suitable: "Small and medium sized CPA and Tax Firms having fixed number of tax returns wherein the number of tax returns coming in, can be estimated for a specific period (tax season or extended tax season) and work flow pattern in uneven because of clients' responsiveness."
  }
];

const AnimatedTable = ({ title, models }) => (
  <div className="mb-16">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-fade-in">
      {title}
    </h2>
    <div className="overflow-x-auto animate-fade-in-up">
      <table className="min-w-full bg-gray-900/80 rounded-2xl shadow-2xl border border-white/10">
        <thead>
          <tr className="text-white text-lg">
            {models.map((model, idx) => (
              <th key={idx} className="px-6 py-4 font-semibold text-center border-b border-white/10">
                <div className="flex flex-col items-center gap-2">
                  {model.icon}
                  <span>{model.name}</span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-gray-300">
          <tr>
            {models.map((model, idx) => (
              <td key={idx} className="px-6 py-6 border-b border-white/10 text-sm md:text-base animate-fade-in-delay">
                {model.how}
              </td>
            ))}
          </tr>
          <tr>
            {models.map((model, idx) => (
              <td key={idx} className="px-6 py-6 text-xs md:text-base animate-fade-in-delay-2">
                <span className="font-semibold text-cyan-400 flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Suitable for:</span>
                <span className="block mt-2 text-gray-200">{model.suitable}</span>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const EngagementModel = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-cyan-600/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-r from-purple-500/15 to-blue-600/15 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-white">Engagement Models</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
            Flexible <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Engagement Models</span> for Every Need
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-delay">
            Choose the model that fits your business best. We offer a variety of engagement models for Bookkeeping, Accounting, and Tax Preparation services, designed for flexibility, transparency, and value.
          </p>
        </div>
        <AnimatedTable title="Bookkeeping & Accounting Services" models={bookkeepingModels} />
        <AnimatedTable title="Tax Preparation & Review Services" models={taxModels} />
        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-12 mb-16 shadow-2xl animate-fade-in-delay-2">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Ready to Build Your <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Virtual Team</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
            That’s Great! Our expert team is ready to help you build the perfect virtual workforce for your accounting and tax needs. Let's start your journey towards business success.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-delay-2">
            <Link to="/request-a-staff" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center">
              <span className="text-white">Request a Staff Now</span> <ArrowRight className="ml-2 w-5 h-5 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngagementModel; 