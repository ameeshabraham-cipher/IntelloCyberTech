# Creating a Static Website for Intello Cyber Technologies Using VS Code

This guide provides detailed instructions on how to convert the Intello Cyber Technologies React project into a static website using Visual Studio Code. The output will match the previously generated static site with assets, blog, and images folders.

## Prerequisites

- Visual Studio Code installed ([download here](https://code.visualstudio.com/))
- Node.js installed (version 14 or higher) ([download here](https://nodejs.org/))
- Basic knowledge of HTML, CSS, and JavaScript

## Step 1: Set Up the Project

1. **Clone or download the project**
   - Clone the repository or download it as a ZIP file
   - Extract the files if needed and open the folder in VS Code

2. **Prepare the project environment**
   - Open the integrated terminal in VS Code (Terminal → New Terminal)
   - Install dependencies by running:
     ```bash
     npm install
     ```

## Step 2: Create a Static Build Script

1. **Create a new JavaScript file**
   - Right-click in the Explorer panel
   - Select "New File"
   - Name it `build-static-site.js`

2. **Copy the provided static site generator code**
   - Copy the entire contents of the provided script
   - The script is already included in this project as `build-static-site.js`

## Step 3: Run the Static Site Generator

1. **Execute the script**
   - In the VS Code terminal, run:
     ```bash
     node build-static-site.js
     ```
   - This will generate a complete static website in the `dist` directory with the following structure:
     ```
     dist/
     ├── assets/
     │   ├── main.js
     │   └── styles.css
     ├── blog/
     │   └── understanding-uae-pdpl.html
     ├── images/
     │   └── (all image files)
     ├── index.html
     ├── about.html
     ├── services.html
     ├── solutions.html
     ├── insights.html
     ├── contact.html
     ├── 404.html
     ├── .htaccess
     ├── _redirects
     ├── robots.txt
     ├── sitemap.xml
     └── vercel.json
     ```

2. **Verify the output**
   - Check the `dist` directory to make sure all files were created correctly
   - The console output will list all files that were created

## Step 4: Preview the Static Website

1. **Install a local server extension** (optional)
   - In VS Code, install an extension like "Live Server"
   - This allows you to preview the static site locally

2. **Preview the site**
   - Right-click on `dist/index.html`
   - Select "Open with Live Server"
   - The website should open in your default browser

## Step 5: Customize the Static Website (Optional)

1. **Edit HTML files**
   - Open any HTML file in the `dist` directory
   - Modify content as needed

2. **Update CSS styles**
   - Edit `dist/assets/styles.css` to change the appearance

3. **Add or replace images**
   - Add new images to the `dist/images` directory
   - Update image references in HTML files

## Step 6: Deploy the Static Website

The generated static site can be deployed to various hosting platforms. Detailed deployment guides are included in the generated files:

1. **Review deployment guides**
   - `dist/DEPLOYMENT.md` - General deployment instructions
   - `dist/GODADDY_DEPLOYMENT_GUIDE.md` - Specific instructions for GoDaddy hosting

2. **Follow platform-specific steps**
   - For traditional hosting (cPanel, GoDaddy):
     - Upload all files from the `dist` directory via FTP
   - For Netlify:
     - Drag and drop the `dist` folder to Netlify's upload area
   - For Vercel:
     - Use the Vercel CLI to deploy from the `dist` directory
   - For GitHub Pages:
     - Push the `dist` contents to a GitHub repository and enable GitHub Pages

## Additional Notes

1. **SPA Routing Configuration**
   - The generated site includes configuration files for proper SPA routing on different platforms:
     - `.htaccess` for Apache servers
     - `_redirects` for Netlify
     - `vercel.json` for Vercel

2. **SEO Files**
   - `robots.txt` and `sitemap.xml` are included for search engine optimization
   - Remember to update the domain name in these files before deployment

3. **Form Handling**
   - The contact form is configured to work with Formspree.io (ID: mwpokerg)
   - No backend is required for the form to function

## Troubleshooting

1. **Missing dependencies**
   - If you encounter errors about missing modules, run `npm install` in the project root

2. **Permission errors**
   - If you get permission errors when creating files, try running the terminal as administrator

3. **ZIP creation failure**
   - If the automatic ZIP creation fails, you can manually compress the `dist` directory

4. **Path issues on Windows**
   - If running on Windows and encountering path issues, update the path separators in the script from `/` to `\\`

---

For any additional assistance, please contact the Intello Cyber Technologies development team.
