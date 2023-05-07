import { createBrowserRouter } from "react-router-dom"
import { AboutPage } from "../features/About/AboutPage"
import { ArticlePage } from "../features/Blog/ArticlePage"
import { BlogPage } from "../features/Blog/BlogPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AboutPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/blog/articles",
    element: <ArticlePage />,
  },
])
