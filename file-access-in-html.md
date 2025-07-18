# Accessing Files and Folders in HTML (Beginner Friendly Guide)

When you build a website, you often need to use images, videos, stylesheets, or other files. To use these files in your HTML, you need to tell the browser where to find them. This is called setting the file path.

## What is a File Path?
A file path is like an address that tells your browser where to look for a file or folder in your project.

There are two main types of file paths:
- **Relative Paths**
- **Absolute Paths**

---

## 1. Relative Paths
A relative path starts from the location of your current file (usually your HTML file).

### Examples:

- `./image.png` — The file is in the same folder as your HTML file.
- `./assets/image.png` — The file is inside a folder called `assets` in the same folder as your HTML file.
- `../image.png` — The file is one folder up from your current folder.

### Visual Example:
```
project-folder/
  index.html
  assets/
    image.png
```

**In `index.html`:**
```html
<img src="./assets/image.png" alt="My Image">
```

---

## 2. Absolute Paths
An absolute path starts from the root of your project (the main folder).

- `/assets/image.png` — This means: start from the main folder, go into `assets`, then use `image.png`.

**In `index.html`:**
```html
<img src="/assets/image.png" alt="My Image">
```

---

## 3. Special Path Symbols
- `./` — Means "current folder"
- `../` — Means "go up one folder"
- `/` — Means "start from the root (main folder)"

---

## 4. Tips for Beginners
- Always check your folder and file names. They must match exactly (including upper/lowercase letters).
- If your image or file is not showing, double-check the path.
- Use relative paths for files in your project. Use absolute paths for files on the internet (like `https://...`).

---

## 5. More Examples

**File in the same folder:**
```html
<img src="./photo.jpg" alt="Photo">
```

**File in a subfolder:**
```html
<img src="./images/photo.jpg" alt="Photo">
```

**Going up one folder:**
```html
<img src="../photo.jpg" alt="Photo">
```

---

## 6. Summary Table
| Path                | What it means                        |
|---------------------|--------------------------------------|
| `./file.txt`        | In the same folder                   |
| `./folder/file.txt` | In a subfolder                       |
| `../file.txt`       | One folder up                        |
| `/folder/file.txt`  | From the root (main folder)          |

---

If you follow these rules, you'll be able to organize and access your files easily in any HTML project! 