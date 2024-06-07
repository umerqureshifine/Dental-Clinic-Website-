const routesConfig = [
  { path: "/", title: "Universal Login" },
  { path: "/admin-dashboard", title: "Admin Dashboard" },
  { path: "/admin-clinic-setting", title: "Admin Clinic Setting" },
  { path: "/admin-profile", title: "Admin Profile" },
  { path: "/admin-notification", title: "Admin Notification" },
  { path: "/admin-appointment", title: "Admin Appointment" },
  { path: "/admin-bill_section", title: "Admin Bill Section" },
  // { path: "/admin-inventory", title: "Admin Inventory" },
  // { path: "/admin-add-invetory", title: "Admin Add Inventory" },
  // { path: "/admin-edit-invetory/:pid", title: "Admin Edit Inventory" },
  { path: "/admin-doctor_section", title: "Admin Doctor Section" },
  { path: "/admin-doctor-profile", title: "Admin Doctor Profile" },
  { path: "/manage-staff", title: "Manage Staff" },
  { path: "/employee-profile/:eid", title: "Employee Profile" },
  { path: "/admin-lab-setting", title: "Admin Lab Setting" },
  { path: "/admin-reports-dashboard", title: "Admin Reports Dashboard" },
  { path: "/admin-finance-reports", title: "Admin Finance Reports" },
  { path: "/admin-appointment-report", title: "Admin Appointment Report" },
  { path: "/admin-Billing-report", title: "Admin Billing Report" },
  // { path: "/admin-inventory-report", title: "Admin Inventory Report" },
  {
    path: "/admin-employee-attendance-report",
    title: "Admin Employee Attendance Report",
  },
  {
    path: "/admin-employee-details-report",
    title: "Admin Employee Details Report",
  },
  { path: "/admin-lab-details-report", title: "Admin Lab Details Report" },
  { path: "/admin-lab-test-report", title: "Admin Lab Test Report" },
  { path: "/admin-lab-task-report", title: "Admin Lab Task Report" },
  { path: "/admin-calender-setting", title: "Admin Calendar Setting" },
  { path: "/admin-drug-setting", title: "Admin Drug Setting" },
  {
    path: "/admin-communication-setting",
    title: "Admin Communication Setting",
  },
  {
    path: "/admin-prescription-templates",
    title: "Admin Prescription Templates",
  },
  { path: "/admin-treatment-setting", title: "Admin Treatment Setting" },
  { path: "/admin-complaint-page", title: "Admin Complaint Page" },
  { path: "/password-reset", title: "Password Reset" },
  { path: "/patient-list", title: "Patient List" },
  { path: "/patient-profile/:pid", title: "Patient Profile" },
  { path: "*", title: "Error Page" },
];

export default routesConfig;
