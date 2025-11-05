# ByteWealth Content Management Guide

This guide explains how to manage blog posts and format your content for the ByteWealth blog. All content is stored statically within the project, making it easy to manage with basic code edits.

## Where Posts are Stored

All blog posts are stored in a single file: `data/posts.ts`.

This file contains an array of `Post` objects. Each object represents one blog post.

---

## Managing Blog Posts

### How to Add a New Post

1.  Open the `data/posts.ts` file.
2.  Inside the `allPosts` array, add a new JavaScript object for your post.
3.  The `id` must be unique. The simplest way is to increment the ID of the last post.
4.  Fill in all the required fields. The `readTimeInMinutes` is calculated automatically, so you can leave it as `0`.

Here is a template for a new post object:

```typescript
{
  id: 9, // <-- Use a new, unique ID
  title: 'Your Awesome New Post Title',
  excerpt: 'A short, compelling summary of your article that will appear on list pages.',
  content: `
    <p>Start writing your content here. You can use HTML tags.</p>
    <h2>This is a Subheading</h2>
    <p>You can also use the custom styling classes documented below.</p>
  `,
  authorName: 'Nkuna Mpho Brian',
  authorAvatar: 'https://i.pravatar.cc/150?u=nkunamphobrian', // Keep this consistent
  publishedDate: 'November 1, 2023', // e.g., 'Month Day, Year'
  tags: ['New Tag', 'Another Tag'], // Choose from existing tags or add new ones
  imageUrl: 'https://picsum.photos/seed/your-unique-seed/1200/800', // Use a unique seed for a unique image
  featured: false, // Set to `true` only if this should be the main featured post on the homepage
  readTimeInMinutes: 0, // This is calculated automatically
}
```

### How to Edit a Post

1.  Open `data/posts.ts`.
2.  Find the post object you want to edit by its `id` or `title`.
3.  Modify any of the fields (e.g., `title`, `content`, `tags`).
4.  Save the file. Your changes will be reflected on the site.

### How to Delete a Post

1.  Open `data/posts.ts`.
2.  Find the post object you want to delete.
3.  Delete the entire object from the `allPosts` array, including the curly braces `{...}` and the comma after it (if there is one).
4.  Save the file.

---

## Styling Your Content

You can use standard HTML tags (`<p>`, `<h2>`, `<ul>`, `<blockquote>`, etc.) inside the `content` string. The site has built-in styles for these. Additionally, you can use these custom CSS classes for richer formatting.

### Buttons

To create a styled call-to-action button, use an `<a>` tag with the class `btn`.

**Example:**
```html
<a href="https://your-link.com" class="btn">Click Here for More</a>
```

### Images with Captions

To add an image with a styled caption, wrap your `<img>` tag in a `<figure>` and add a `<figcaption>` with the class `img-caption`.

**Example:**
```html
<figure>
  <img src="https://picsum.photos/seed/example/800/400" alt="An example image" class="rounded-xl shadow-lg w-full">
  <figcaption class="img-caption">This is a caption for the image above.</figcaption>
</figure>
```
**Note:** It's recommended to add `rounded-xl shadow-lg w-full` classes to the `<img>` tag for a consistent look.