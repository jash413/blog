import network from "../config/network";



// Function to get SEO data
export async function getSeoData(page) {
  const res = await fetch(`${network.baseURL}/salons/seo/${page}/`);
  const data = await res.json();
  console.log(data);
  return {
    meta_title: data.meta_title,
    meta_description: data.meta_description,
    meta_keywords: data.meta_keywords,
  };
}

// Function to get blog categories
export async function getBlogCategories() {
  const blogcategoryResponse = await fetch(
    `${network.baseURL}/salons/blogcategory/`
  );
  const blogcategoryData = await blogcategoryResponse.json();
  // console.log(blogcategoryData);
  return {
    blogcategory: blogcategoryData.results,
  };
}

// Function to get blogs
export async function getBlogs() {
  const blogResponse = await fetch(`${network.baseURL}/salons/blogs/`);
  const blogData = await blogResponse.json();
  // console.log(blogData);
  return {
    blogs: blogData.payload,
  };
}

// Function to get blog by slug
export async function getBlogBySlug(slug) {
  const blogResponse = await fetch(`${network.baseURL}/salons/blogs/?slug=${slug}`);
  const blogData = await blogResponse.json();
  console.log(blogData.payload[0]);
  return {
    blog: blogData.payload[0],
  };
}

// Function to get blog by category
export async function getBlogByCategory(category) {
  const blogResponse = await fetch(
    `${network.baseURL}/salons/blog/?category=${category}`
  );
  const blogData = await blogResponse.json();
  // console.log(blogData);
  return {
    blogs: blogData.results,
  };
}

// Function to get blog by category and city
export async function getBlogByCategoryAndCity(category, city) {
  const blogResponse = await fetch(
    `${network.baseURL}/salons/blog/?category=${category}&city=${city}`
  );
  const blogData = await blogResponse.json();
  // console.log(blogData);
  return {
    blogs: blogData.results,
  };
}

