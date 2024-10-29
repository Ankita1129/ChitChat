const corsOptions = {
  origin: [
    // "http://localhost:5173",
    // "http://localhost:4173",
    "https://chit-chat-frontend-phi.vercel.app/",
    process.env.CLIENT_URL,
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const ChitChat_TOKEN = "ChitChat-token";

export {
  ChitChat_TOKEN,
  corsOptions
};
