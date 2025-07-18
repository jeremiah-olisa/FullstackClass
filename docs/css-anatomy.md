# Beginner-Friendly Guide: Anatomy of CSS

CSS (Cascading Style Sheets) is the language used to style and layout web pages. It controls the look and feel of HTML elements.

---

## What is CSS?

CSS describes **how** HTML elements should be displayed. It can control colors, fonts, spacing, layout, and much more.

You can add CSS to your HTML in three main ways:
- **Inline**: Directly on an HTML element using the `style` attribute
- **Internal**: Inside a `<style>` tag in the HTML `<head>`
- **External**: In a separate `.css` file linked to your HTML

---

## Anatomy of a CSS Rule

A CSS rule is made up of a **selector** and a **declaration block**.

```css
selector {
  property: value;
  property2: value2;
}
```

**Example:**
```css
p {
  color: blue;
  font-size: 16px;
}
```

- `p` is the **selector** (targets all `<p>` elements)
- `color` and `font-size` are **properties**
- `blue` and `16px` are **values**

---

## Selectors

Selectors specify **which** HTML elements the styles apply to.

- `p` — All `<p>` tags
- `.classname` — All elements with class="classname"
- `#idname` — The element with id="idname"
- `h1, h2` — All `<h1>` and `<h2>` tags

**Examples:**
```css
#main-title {
  color: red;
}

.button {
  background-color: green;
}
```

---

## Properties and Values

- **Property**: What you want to change (e.g., `color`, `font-size`, `margin`)
- **Value**: The setting for the property (e.g., `blue`, `16px`, `10px`)

**Example:**
```css
body {
  background-color: #f0f0f0;
  margin: 20px;
}
```

---

## Comments in CSS

You can add comments to explain your code. Comments are ignored by browsers.

```css
/* This is a comment */
h1 {
  font-weight: bold; /* This makes the heading bold */
}
```

---

## Summary Table

| Part         | Example                | Description                        |
|--------------|------------------------|------------------------------------|
| Selector     | `p`, `.class`, `#id`   | Targets HTML elements              |
| Property     | `color`, `margin`      | What you want to style             |
| Value        | `blue`, `10px`         | The setting for the property       |
| Comment      | `/* comment */`        | Notes for humans, ignored by CSS   |

---

Now you know the basics of CSS anatomy! Try writing your own CSS rules and see how they change your web pages. 