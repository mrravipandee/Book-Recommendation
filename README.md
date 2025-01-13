
# Book Recommendation System 📚

This is a Book Recommendation System that leverages an ML model to suggest books to users based on their preferences. The project includes a sleek user interface built using **Tailwind CSS** and **Vite**, and features authentication via Google Auth.

## Features ✨

- **Book Recommendations**: Personalized book suggestions powered by an ML model.
- **Google Authentication**: Seamless sign-in and user account management.
- **Responsive UI**: Modern design created with Tailwind CSS for an exceptional user experience.
- **Fast Development**: Vite ensures a super-fast build process and development environment.

## Tech Stack 🛠️

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Authentication**: Google Auth
- **ML Model**: Integrated using API
- **Build Tool**: Vite

## Installation 🚀

Follow these steps to get the project running on your local machine:

### Prerequisites
- Node.js installed
- Git installed
- A Google API client ID for Google Auth

### Clone the Repository
```bash
git clone https://github.com/mrravipandee/Book-Recommendation.git
cd Book-Recommendation
```

### Install Dependencies
```bash
npm install
```

### Set Up Environment Variables
Create a `.env` file in the root directory and add the following:
```plaintext
REACT_APP_GOOGLE_CLIENT_ID=your-google-client-id
REACT_APP_API_ENDPOINT=your-ml-model-api-endpoint
```

### Start the Development Server
```bash
npm run dev
```

The application will be accessible at `http://localhost:5173`.

## Project Structure 📂

```plaintext
├── public/          # Static assets
├── src/
│   ├── components/  # Reusable UI components
│   ├── pages/       # Application pages
├── .env             # Environment variables
├── package.json     # Project metadata and scripts
├── vite.config.js   # Vite configuration
└── README.md        # Project documentation
```

## Screenshots 🌟

- **Homepage**: Book recommendations displayed with a clean UI.
![alt text](<Screenshot 2025-01-13 at 11.53.47 AM.png>)

- **Top 50 Books**: Best sellers & Popular top 50 books.
![alt text](<Screenshot 2025-01-13 at 11.54.05 AM.png>)
- **Dashboard**: Personalized book suggestions based on user input.
![alt text](<Screenshot 2025-01-13 at 11.57.34 AM.png>)

## Future Enhancements 🔮

- Add a user profile feature for managing book preferences.
- Enable user reviews and ratings for books.
- Optimize the ML model for faster predictions.

## Contributing 🤝

Contributions are welcome! If you'd like to improve the project:
1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Open a pull request.

## License 📄

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact 📧

Feel free to reach out for any queries:
- **Developer**: Ravi Pandey
- **Email**: imravipanday@gmail.com
- **GitHub**: [@mrravipandee](https://github.com/mrravipandee)
