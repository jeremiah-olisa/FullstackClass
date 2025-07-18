# Beginner-Friendly Guide: Anatomy of HTML

HTML (HyperText Markup Language) is the standard language used to create web pages. Understanding its structure is the first step to building your own websites!

---

## Basic Structure of an HTML Document

Every HTML document follows a basic structure:

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Metadata, title, links to styles/scripts -->
    <title>Page Title</title>
  </head>
  <body>
    <!-- Visible content goes here -->
    <h1>Hello, World!</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

- `<html>`: The root element that wraps the entire page.
- `<head>`: Contains meta-information about the page (not visible to users).
- `<body>`: Contains all the content that is visible to users (text, images, links, etc).

---

## Anatomy of HTML Tags

HTML is made up of **tags**. Tags tell the browser how to display content.

### 1. Tags with Content
These tags wrap around content and usually come in pairs: an opening tag and a closing tag.

**Examples:**
```html
<p>This is a paragraph.</p>
<b>Bold text</b>
<h1>Main Heading</h1>
<h2>Subheading</h2>
```

- `<p> ... </p>`: Paragraph
- `<b> ... </b>`: Bold
- `<h1> ... </h1>`: Main heading
- `<h2> ... </h2>`: Subheading

### 2. Tags with No Content (Self-Closing Tags)
Some tags do not wrap around content. They are self-closing and do not need a closing tag.

**Examples:**
```html
<br />   <!-- Line break -->
<hr />   <!-- Horizontal rule -->
<img src="bmw-m5.jpg" width="300" /> <!-- Image -->
```

- `<br />`: Inserts a line break
- `<hr />`: Inserts a horizontal line
- `<img />`: Displays an image

### 3. Tags with Attributes
Attributes provide extra information about an element. They are always included in the opening tag.

**Examples:**
```html
<img src="bmw-m5.jpg" width="300" alt="BMW M5" />
<a href="https://www.example.com">Visit Example</a>
```

- `src`: Source of the image
- `width`: Width of the image
- `alt`: Alternative text for the image
- `href`: Link destination

**General Syntax:**
```html
<tagName attribute="value">Content</tagName>
```
Or for self-closing tags:
```html
<tagName attribute="value" />
```

---

## Summary Table

| Tag Type           | Example                                 | Description                  |
|--------------------|-----------------------------------------|------------------------------|
| With Content       | `<p>Hello</p>`                          | Wraps around content         |
| No Content         | `<br />`                                | Self-closing, no content     |
| With Attributes    | `<img src="bmw-m5.jpg" width="300" />` | Has extra info (attributes)  |

---

Now you know the basics of HTML anatomy! Practice by creating your own HTML files and experimenting with different tags and attributes.
