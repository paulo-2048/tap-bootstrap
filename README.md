# tap-bootstrap

A minimal Bootstrap 5 webapp starter template with a clean structure and modern best practices.

## 📁 Project Structure

```
tap-bootstrap/
├── public/
│   └── index.html          # Main HTML file
├── src/
│   ├── css/
│   │   └── main.css        # Custom styles
│   └── js/
│       └── main.js         # Custom JavaScript
├── package.json            # Project dependencies and scripts
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Yarn package manager

### Installation

1. Clone or download this repository
2. Install dependencies:

```bash
yarn install
```

### Development

To start the development server:

```bash
yarn start
# or
yarn dev
```

This will start a local server at `http://localhost:8080` and automatically open your browser.

## 🎨 Features

- **Bootstrap 5.3.3** - Latest version via CDN
- **Responsive Design** - Mobile-first approach
- **Clean Structure** - Organized file structure
- **Custom Styles** - Easy to customize CSS
- **Modern JavaScript** - ES6+ ready
- **Smooth Scrolling** - Built-in smooth scroll functionality
- **Bootstrap Components** - Pre-configured tooltips and popovers

## 📦 What's Included

### HTML (`public/index.html`)

- Responsive navigation bar
- Hero section with CTA buttons
- Features section with cards
- Footer with links
- Bootstrap 5 integration via CDN

### CSS (`src/css/main.css`)

- Custom CSS variables
- Hero section styling
- Card hover effects
- Responsive design adjustments
- Utility classes

### JavaScript (`src/js/main.js`)

- DOM ready initialization
- Tooltip and popover setup
- Smooth scrolling functionality
- Button event handlers
- Utility functions

## 🛠 Customization

### Changing Colors

Edit the CSS variables in `src/css/main.css`:

```css
:root {
  --custom-primary: #0d6efd;
  --custom-secondary: #6c757d;
  /* Add your custom colors */
}
```

### Adding New Pages

1. Create a new HTML file in the `public/` directory
2. Link to Bootstrap and your custom CSS/JS files
3. Update navigation links in `index.html`

### Modifying Content

- **Navigation**: Edit the navbar in `public/index.html`
- **Hero Section**: Update the hero content and buttons
- **Features**: Add or remove feature cards
- **Footer**: Customize footer links and text

## 📚 Bootstrap Resources

- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [Bootstrap Examples](https://getbootstrap.com/docs/5.3/examples/)

## 📝 Scripts

- `yarn start` - Start development server
- `yarn dev` - Same as start
- `yarn lint` - Run linter (configure as needed)
- `yarn format` - Format code (configure as needed)

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 📄 License

MIT License - feel free to use this template for any project.

## 🎯 Next Steps

- [ ] Add more pages (about, contact, etc.)
- [ ] Integrate a CSS preprocessor (Sass/Less)
- [ ] Add a build process for production
- [ ] Implement form validation
- [ ] Add more interactive components
- [ ] Set up ESLint and Prettier
- [ ] Add unit tests

---

**Happy Coding! 🚀**
