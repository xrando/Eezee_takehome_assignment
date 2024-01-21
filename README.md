# EEZEE Take Home Assignment

This is a take home assignment for an internship application for EEZEE PTE. LTD. It consists of 2 pages, a home page and a product page. The home page is a simple page with a header consisting of the company's logo and search bar and a main body displaying some sample brands and products.
The product page is a page that displays the details of a specific product, data is fetched from the json file provided based on the product id. The product page also has a add to cart function that adds the product to the cart and displays the updated total number of items in the cart on the header.

## Table of Contents

- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Routes](#routes)
- [Folder Structure](#folder-structure)
- [Components](#components)
- [Features](#features)
- [Data](#data)
- [Technologies](#technologies)
- [Author](#author)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/xrando/Eezee_takehome_assignment.git
   ```
2. Navigate to the project directory:
    ```bash
    cd Eezee_takehome_assignment
    ```
    
3. Install dependencies:
    ```bash
   npm install
   ```
4. Run the development server:

   ```bash
    npm run dev
    ```
5. Open [http://localhost:3000](http://localhost:3000) with your browser to view landing page.

### Routes

- `/` - Home page which lists all brands and products
- `/product/:id` - Product page which displays the details of a specific product

## Folder Structure

```
Eezee_takehome_assignment
├── public/
│   ├── icons/
│   ├── images/
├── src/
│   ├── components/
│   ├── data/
│   ├── pages/
│   │   ├── product/
│   ├── utils/
│   ├── next.env.d.ts
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   ├── tsconfig.json
```

## Components

- `Header` - Header component which contains the necessary components for the header
- `Layout` - Layout component which contains the header and the main body, it is a reusable layout that can be used for all pages
- `SearchBar` - Search bar component which contains the search bar
- `ShoppingCart` - Shopping cart component which is used in the product page for the add to cart function

## Features
The following features are implemented in this assignment:

- [x] User is able to add to cart with different quantities
- [x] User is able to persist cart quantity across pages
- [x] Brands are being filtered for duplication, missing brand image and missing product count

## Data

The following data files are used in this assignment:

- `src/data/brands.json` - JSON file containing data about the list of brands
- `src/data/products.json` - JSON file containing data about the list of products


## Technologies

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Ant Design](https://ant.design/)


## Author

Benjamin Loh Choon How, 21/1/2024