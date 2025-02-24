# Real Estate Searcher  

This is an Angular tutorial project that demonstrates key functionalities, including:  

- 🔍 **Search by Location** – Users can filter results based on location.  
- 🗄 **JSON Database Connection** – The project is connected to a JSON-based database for dynamic data handling.  
- 📝 **Form Integration** – A functional form is included for user interaction.  

## 🚀 Features  

✅ Search functionality with location-based filtering.  
✅ Data persistence using a JSON database.  
✅ A form to collect user input and process submissions.  
✅ Clean, modular Angular code with best practices.  

## 🛠 Installation  

1. Clone this repository:  
   `git clone https://github.com/AntonioDA2004/real-estate-searcher.git`  
   `cd real-estate-searcher`

2. Check that your computer has Node.js and npm installed. If not, visit  `https://nodejs.org` to download them.

3. Install dependencies:  
   `npm install`

4. Run the development server:  
   `ng serve`  

5. Open in browser:  
   `http://localhost:4200`  

## 🏗 Tech Stack  

- **Angular** (Latest Version)  
- **TypeScript**  
- **JSON Server** for mock database
  
## 📂 Project Structure  

```
real-estate-searcher/
│-- src/
│   │-- app/
│   │   │-- details/               # Details component
│   │   │-- home/                  # Home component
│   │   │-- housing-location/      # Housing location component
│   │   │-- app.component.css      # Component styles
│   │   │-- app.component.ts       # Root component logic
│   │   │-- app.config.ts          # App configuration
│   │   │-- housing.service.ts     # Service for housing data
│   │   │-- housinglocation.ts     # Model for housing locations
│   │   │-- routes.ts              # Application routes
│   │-- assets/                    # Static assets
│   │-- favicon.ico                # Favicon icon
│   │-- index.html                 # Main HTML file
│   │-- main.ts                    # Entry point of the app
│   │-- styles.css                 # Global styles
│-- angular.json                   # Angular configuration
│-- db.json                        # JSON database file
│-- package-lock.json              # Lock file for dependencies
│-- package.json                   # Dependencies & scripts
│-- tsconfig.app.json              # TypeScript configuration
│-- tsconfig.json                  # TypeScript base configuration
```

## 📌 Usage  

- Use the **search bar** to filter results by location.  
- The **form** allows users to submit data, which is processed dynamically.  
- The app fetches data from a **JSON database**, simulating a real backend.  

## 🔗 JSON API Example  

To run the JSON server, use:  
`json-server --watch db.json --port 3000`

Example `db.json` structure:  

```
{  
  "locations": [
        {
            "id": 0,
            "name": "Acme Fresh Start Housing",
            "city": "Chicago",
            "state": "IL",
            "photo": "https://angular.dev/assets/images/tutorials/common/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
            "availableUnits": 4,
            "wifi": true,
            "laundry": true
        }
  ]
}  
```

## 🤝 Contributing  

Feel free to submit issues, pull requests, or suggestions!  

## 📜 License  

This project is licensed under the MIT License.  
