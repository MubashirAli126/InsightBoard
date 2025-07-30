type Feature = {
  title: string;
  description: string;
  status: "C" | "X" | "P";
};

type Package = {
  name: "Business" | "Enterprise";
  price: string;
  features: string[] | Feature[];
};

export const packageData: {
  monthly: {
    basic: Package[];
    pro: Package[];
  };
  yearly: {
    basic: Package[];
    pro: Package[];
  };
} = {
  monthly: {
    basic: [
      {
        name: "Business",
        price: "35,000",
                features: [
            {
              title: "Email support",
              description: "Email-based assistance for general queries and technical issues.",
              status: "C"
            },
            {
              title: "AI Chat",
              description: "Smart chatbot for automated customer support and FAQs.",
              status: "X"
            },
            {
              title: "Auto uploader",
              description: "Upload products in bulk using CSV or integrated tools.",
              status: "X"
            },
            {
              title: "Online store builder with themes",
              description: "Build your store with customizable e-commerce templates.",
              status: "X"
            },
            {
              title: "Order & inventory management",
              description: "Manage stock, track orders, and sync inventory in real time.",
              status: "X"
            },
            {
              title: "Custom workflow automation",
              description: "Automate repetitive tasks with custom rules and triggers.",
              status: "X"
            },
            {
              title: "Basic email campaign templates",
              description: "Ready-to-use email designs for marketing and engagement.",
              status: "P"
            },
            {
              title: "Social media scheduler",
              description: "Plan and publish posts across all major social platforms.",
              status: "P"
            },
            {
              title: "Advanced segmentation",
              description: "Create targeted lists using customer behavior and data.",
              status: "P"
            },
            {
              title: "Customer lifetime value tracking",
              description: "Analyze how much revenue each customer brings over time.",
              status: "P"
            },
            {
              title: "Weekly performance reports",
              description: "Get automated weekly insights on store performance.",
              status: "P"
            }
          ],
      },
      {
        name: "Enterprise",
        price: "38,000",
                features: [
            {
              title: "Email support",
              description: "Email-based assistance for general queries and technical issues.",
              status: "C"
            },
            {
              title: "AI Chat",
              description: "Smart chatbot for automated customer support and FAQs.",
              status: "X"
            },
            {
              title: "Auto uploader",
              description: "Upload products in bulk using CSV or integrated tools.",
              status: "X"
            },
            {
              title: "Online store builder with themes",
              description: "Build your store with customizable e-commerce templates.",
              status: "X"
            },
            {
              title: "Order & inventory management",
              description: "Manage stock, track orders, and sync inventory in real time.",
              status: "X"
            },
            {
              title: "Custom workflow automation",
              description: "Automate repetitive tasks with custom rules and triggers.",
              status: "X"
            },
            {
              title: "Basic email campaign templates",
              description: "Ready-to-use email designs for marketing and engagement.",
              status: "P"
            },
            {
              title: "Social media scheduler",
              description: "Plan and publish posts across all major social platforms.",
              status: "P"
            },
            {
              title: "Advanced segmentation",
              description: "Create targeted lists using customer behavior and data.",
              status: "P"
            },
            {
              title: "Customer lifetime value tracking",
              description: "Analyze how much revenue each customer brings over time.",
              status: "P"
            },
            {
              title: "Weekly performance reports",
              description: "Get automated weekly insights on store performance.",
              status: "P"
            }
          ],
      },
    ],
    pro: [
      {
        name: "Business",
        price: "55,000",
               features: [
            {
              title: "Email support",
              description: "Email-based assistance for general queries and technical issues.",
              status: "C"
            },
            {
              title: "AI Chat",
              description: "Smart chatbot for automated customer support and FAQs.",
              status: "C"
            },
            {
              title: "Auto uploader",
              description: "Upload products in bulk using CSV or integrated tools.",
              status: "X"
            },
            {
              title: "Online store builder with themes",
              description: "Build your store with customizable e-commerce templates.",
              status: "X"
            },
            {
              title: "Order & inventory management",
              description: "Manage stock, track orders, and sync inventory in real time.",
              status: "X"
            },
            {
              title: "Custom workflow automation",
              description: "Automate repetitive tasks with custom rules and triggers.",
              status: "X"
            },
            {
              title: "Basic email campaign templates",
              description: "Ready-to-use email designs for marketing and engagement.",
              status: "P"
            },
            {
              title: "Social media scheduler",
              description: "Plan and publish posts across all major social platforms.",
              status: "P"
            },
            {
              title: "Advanced segmentation",
              description: "Create targeted lists using customer behavior and data.",
              status: "P"
            },
            {
              title: "Customer lifetime value tracking",
              description: "Analyze how much revenue each customer brings over time.",
              status: "P"
            },
            {
              title: "Weekly performance reports",
              description: "Get automated weekly insights on store performance.",
              status: "P"
            }
          ],
      },
      {
        name: "Enterprise",
        price: "60,000",
                features: [
            {
              title: "Email support",
              description: "Email-based assistance for general queries and technical issues.",
              status: "C"
            },
            {
              title: "AI Chat",
              description: "Smart chatbot for automated customer support and FAQs.",
              status: "C"
            },
            {
              title: "Auto uploader",
              description: "Upload products in bulk using CSV or integrated tools.",
              status: "X"
            },
            {
              title: "Online store builder with themes",
              description: "Build your store with customizable e-commerce templates.",
              status: "C"
            },
            {
              title: "Order & inventory management",
              description: "Manage stock, track orders, and sync inventory in real time.",
              status: "X"
            },
            {
              title: "Custom workflow automation",
              description: "Automate repetitive tasks with custom rules and triggers.",
              status: "X"
            },
            {
              title: "Basic email campaign templates",
              description: "Ready-to-use email designs for marketing and engagement.",
              status: "P"
            },
            {
              title: "Social media scheduler",
              description: "Plan and publish posts across all major social platforms.",
              status: "P"
            },
            {
              title: "Advanced segmentation",
              description: "Create targeted lists using customer behavior and data.",
              status: "P"
            },
            {
              title: "Customer lifetime value tracking",
              description: "Analyze how much revenue each customer brings over time.",
              status: "P"
            },
            {
              title: "Weekly performance reports",
              description: "Get automated weekly insights on store performance.",
              status: "P"
            }
          ],
      },
    ],
  },
  yearly: {
    basic: [
      {
        name: "Business",
        price: "44,400",
        features: [
            {
              title: "Email support",
              description: "Email-based assistance for general queries and technical issues.",
              status: "C"
            },
            {
              title: "AI Chat",
              description: "Smart chatbot for automated customer support and FAQs.",
              status: "X"
            },
            {
              title: "Auto uploader",
              description: "Upload products in bulk using CSV or integrated tools.",
              status: "X"
            },
            {
              title: "Online store builder with themes",
              description: "Build your store with customizable e-commerce templates.",
              status: "C"
            },
            {
              title: "Order & inventory management",
              description: "Manage stock, track orders, and sync inventory in real time.",
              status: "X"
            },
            {
              title: "Custom workflow automation",
              description: "Automate repetitive tasks with custom rules and triggers.",
              status: "X"
            },
            {
              title: "Basic email campaign templates",
              description: "Ready-to-use email designs for marketing and engagement.",
              status: "P"
            },
            {
              title: "Social media scheduler",
              description: "Plan and publish posts across all major social platforms.",
              status: "P"
            },
            {
              title: "Advanced segmentation",
              description: "Create targeted lists using customer behavior and data.",
              status: "P"
            },
            {
              title: "Customer lifetime value tracking",
              description: "Analyze how much revenue each customer brings over time.",
              status: "P"
            },
            {
              title: "Weekly performance reports",
              description: "Get automated weekly insights on store performance.",
              status: "P"
            }
          ],
      },
      {
        name: "Enterprise",
        price: "49,444",
                features: [
            {
              title: "Email support",
              description: "Email-based assistance for general queries and technical issues.",
              status: "C"
            },
            {
              title: "AI Chat",
              description: "Smart chatbot for automated customer support and FAQs.",
              status: "C"
            },
            {
              title: "Auto uploader",
              description: "Upload products in bulk using CSV or integrated tools.",
              status: "X"
            },
            {
              title: "Online store builder with themes",
              description: "Build your store with customizable e-commerce templates.",
              status: "C"
            },
            {
              title: "Order & inventory management",
              description: "Manage stock, track orders, and sync inventory in real time.",
              status: "C"
            },
            {
              title: "Custom workflow automation",
              description: "Automate repetitive tasks with custom rules and triggers.",
              status: "X"
            },
            {
              title: "Basic email campaign templates",
              description: "Ready-to-use email designs for marketing and engagement.",
              status: "P"
            },
            {
              title: "Social media scheduler",
              description: "Plan and publish posts across all major social platforms.",
              status: "P"
            },
            {
              title: "Advanced segmentation",
              description: "Create targeted lists using customer behavior and data.",
              status: "P"
            },
            {
              title: "Customer lifetime value tracking",
              description: "Analyze how much revenue each customer brings over time.",
              status: "P"
            },
            {
              title: "Weekly performance reports",
              description: "Get automated weekly insights on store performance.",
              status: "P"
            }
          ],
      },
    ],
    pro: [
      {
        name: "Business",
        price: "74,444",
                features: [
            {
              title: "Email support",
              description: "Email-based assistance for general queries and technical issues.",
              status: "C"
            },
            {
              title: "AI Chat",
              description: "Smart chatbot for automated customer support and FAQs.",
              status: "C"
            },
            {
              title: "Auto uploader",
              description: "Upload products in bulk using CSV or integrated tools.",
              status: "X"
            },
            {
              title: "Online store builder with themes",
              description: "Build your store with customizable e-commerce templates.",
              status: "C"
            },
            {
              title: "Order & inventory management",
              description: "Manage stock, track orders, and sync inventory in real time.",
              status: "C"
            },
            {
              title: "Custom workflow automation",
              description: "Automate repetitive tasks with custom rules and triggers.",
              status: "X"
            },
            {
              title: "Basic email campaign templates",
              description: "Ready-to-use email designs for marketing and engagement.",
              status: "P"
            },
            {
              title: "Social media scheduler",
              description: "Plan and publish posts across all major social platforms.",
              status: "P"
            },
            {
              title: "Advanced segmentation",
              description: "Create targeted lists using customer behavior and data.",
              status: "P"
            },
            {
              title: "Customer lifetime value tracking",
              description: "Analyze how much revenue each customer brings over time.",
              status: "P"
            },
            {
              title: "Weekly performance reports",
              description: "Get automated weekly insights on store performance.",
              status: "P"
            }
          ],
      },
      {
        name: "Enterprise",
        price: "89,000",
                features: [
            {
              title: "Email support",
              description: "Email-based assistance for general queries and technical issues.",
              status: "C"
            },
            {
              title: "AI Chat",
              description: "Smart chatbot for automated customer support and FAQs.",
              status: "C"
            },
            {
              title: "Auto uploader",
              description: "Upload products in bulk using CSV or integrated tools.",
              status: "C"
            },
            {
              title: "Online store builder with themes",
              description: "Build your store with customizable e-commerce templates.",
              status: "C"
            },
            {
              title: "Order & inventory management",
              description: "Manage stock, track orders, and sync inventory in real time.",
              status: "C"
            },
            {
              title: "Custom workflow automation",
              description: "Automate repetitive tasks with custom rules and triggers.",
              status: "C"
            },
            {
              title: "Basic email campaign templates",
              description: "Ready-to-use email designs for marketing and engagement.",
              status: "P"
            },
            {
              title: "Social media scheduler",
              description: "Plan and publish posts across all major social platforms.",
              status: "P"
            },
            {
              title: "Advanced segmentation",
              description: "Create targeted lists using customer behavior and data.",
              status: "P"
            },
            {
              title: "Customer lifetime value tracking",
              description: "Analyze how much revenue each customer brings over time.",
              status: "P"
            },
            {
              title: "Weekly performance reports",
              description: "Get automated weekly insights on store performance.",
              status: "P"
            }
          ],
      },
    ],
  },
};
