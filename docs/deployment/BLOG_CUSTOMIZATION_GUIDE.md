# Blog Customization Guide for Intello Cyber Technologies Website

This guide will help you customize the blog section of your website by adding your own images and content.

## Adding Your Own Blog Images

### Step 1: Prepare Your Blog Images
1. Create or select images for your blog posts (recommended size: 800x450 pixels, 16:9 aspect ratio)
2. Make sure your images are in PNG, JPG, or WebP format
3. Name your files clearly, for example: `securing-cloud-infrastructure.png`

### Step 2: Upload Images to Your Website
1. Place your blog images in this directory: `client/public/blog/`
2. You can do this through your code editor or hosting platform file manager

### Step 3: Update Blog Posts with Your Images
Edit the file `client/src/pages/Insights.tsx` to update the blog post data:

```javascript
// Example of updating an existing blog post
{
  id: '1',
  title: 'Your Custom Blog Title',
  excerpt: 'Your blog excerpt or summary goes here...',
  content: 'Full content of your blog post...',
  date: 'April 18, 2025',
  author: 'Your Name',
  category: 'Category Name',
  tags: ['Tag1', 'Tag2', 'Tag3'],
  image: 'your-image-filename.png', // Just the filename, not the full path
  slug: 'your-custom-url-slug'
}
```

## Writing Your Own Blog Content

### Step 1: Plan Your Blog Content
1. Choose topics relevant to your expertise areas (Cybersecurity, GRC, Compliance, etc.)
2. Decide on categories and tags to organize your content
3. Outline the structure of each blog post

### Step 2: Write Blog Posts
For each blog post, update or add a new entry in the `blogPosts` array in `client/src/pages/Insights.tsx`:

```javascript
// Example of adding a new blog post
{
  id: '21', // Use the next available ID number
  title: 'Your New Blog Post Title',
  excerpt: 'A compelling summary of your blog post (about 2-3 sentences)',
  content: `
    <h2>Introduction</h2>
    <p>Your detailed blog content goes here...</p>
    
    <h2>Main Point 1</h2>
    <p>Content for first main point...</p>
    
    <h2>Main Point 2</h2>
    <p>Content for second main point...</p>
    
    <h3>Sub-point</h3>
    <p>Content for sub-point...</p>
    
    <h2>Conclusion</h2>
    <p>Wrap-up of your blog post...</p>
  `,
  date: 'April 18, 2025', // Current or future date
  author: 'Your Name',
  category: 'Category Name',
  tags: ['Tag1', 'Tag2', 'Tag3'],
  image: 'your-image-filename.png',
  slug: 'your-new-blog-post-url-slug' // URL-friendly version of title (no spaces, lowercase)
}
```

### HTML Formatting in Blog Content
You can use HTML tags in the content field to format your blog posts:

- Headers: `<h2>`, `<h3>`, `<h4>`
- Paragraphs: `<p>...</p>`
- Lists: `<ul><li>Item 1</li><li>Item 2</li></ul>`
- Emphasis: `<strong>Bold text</strong>`, `<em>Italic text</em>`
- Links: `<a href="https://example.com">Link text</a>`
- Images: `<img src="/blog/another-image.png" alt="Description" />`

### Step 3: Test Your Changes
After making your changes, test the website to ensure:
1. Your blog posts appear in the Insights page
2. Images load correctly
3. Content is formatted as expected
4. Individual blog posts can be opened

## Tips for Effective Blog Content

1. **Use clear, descriptive titles** that include keywords relevant to your industry
2. **Keep paragraphs relatively short** (3-5 sentences) for better readability
3. **Include practical examples** relevant to your target industries
4. **Add helpful visuals** like diagrams or infographics to explain complex concepts
5. **End with a call-to-action** directing readers to your services or contact page

Remember, high-quality blog content establishes your expertise, improves SEO, and helps convert visitors into clients.