// Get top risks (for Reports page)
export const getTopRisks = async () => {
  return {
    data: {
      data: [
        {
          id: 1,
          date: "2025-11-24",
          clinic_name: "Sunrise Clinic",
          region: "North",
          num_patients: 120,
          num_female: 70,
          num_male: 50,
          avg_age: 34.5,
          top_symptoms: "Fever, Cough",
          stock_shortage: false,
          notes: "No major issues"
        },
        {
          id: 2,
          date: "2025-11-23",
          clinic_name: "Greenfield Clinic",
          region: "South",
          num_patients: 90,
          num_female: 50,
          num_male: 40,
          avg_age: 29.2,
          top_symptoms: "Headache, Nausea",
          stock_shortage: true,
          notes: "Shortage of painkillers"
        }
      ]
    }
  };
};

// Upload CSV (mock demo)
export const uploadCSV = async (formData) => {
  console.log("CSV uploaded:", formData.get("file"));
  return { data: { message: "CSV uploaded successfully (demo)" } };
};

// Chat with bot (mock demo)
export const chatWithBot = async ({ message }) => {
  let reply = "Sorry, I don't understand.";
  if (message.toLowerCase().includes("top risks")) {
    reply = "Here are the top risks: Sunrise Clinic, Greenfield Clinic";
  } else if (message.toLowerCase().includes("hello")) {
    reply = "Hello! How can I help you today?";
  }
  return { data: { reply } };
};
