// ...existing code...
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useParams } from 'react-router-dom';
import type { Post, View } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BlogPostPage from './pages/BlogPostPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SearchResultsPage from './pages/SearchResultsPage';
import BlogPage from './pages/BlogPage';
import ScrollToTopButton from './components/ScrollToTopButton';
import DisclaimerPage from './pages/DisclaimerPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import NotFoundPage from './pages/NotFoundPage';
import { posts } from './data/posts';

function mapViewToPath(view: View, post?: Post) {
  switch (view) {
    case 'home':
      return '/';
    case 'blog':
      return '/blog';
    case 'post':
      return post?.slug ? `/blog/${post.slug}` : '/blog';
    case 'about':
      return '/about';
    case 'contact':
      return '/contact';
    case 'search':
      return '/search';
    case 'disclaimer':
      return '/disclaimer';
    case 'privacy':
      return '/privacy';
    case 'terms':
      return '/terms';
    case '404':
      return '/404';
    default:
      return '/';
  }
}

const AppRouter: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (newView: View, post?: Post) => {
    const path = mapViewToPath(newView, post);
    navigate(path);
    window.scrollTo(0, 0);
  };

  // navigate to /search?q=... so URL reflects the query
  const handleSearch = (query: string) => {
    const q = query.trim();
    if (!q) {
      navigate('/search');
    } else {
      navigate(`/search?q=${encodeURIComponent(q)}`);
    }
    window.scrollTo(0, 0);
  };

  // route wrapper for blog posts using slug param
  const PostRoute: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = posts.find((p) => p.slug === slug);
    if (!post) {
      return <Navigate to="/404" replace />;
    }
    return <BlogPostPage post={post} onNavigate={handleNavigate} />;
  };

  return (
    <>
      <Header onNavigate={handleNavigate} onSearch={handleSearch} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <Routes>
          <Route path="/" element={<HomePage onNavigate={handleNavigate} />} />
          {/* blog list (base) */}
          <Route path="/blog" element={<BlogPage onNavigate={handleNavigate} />} />
          {/* pagination path: /blog/page/:page (added so URL /blog/page/2 resolves to BlogPage) */}
          <Route path="/blog/page/:page" element={<BlogPage onNavigate={handleNavigate} />} />
          {/* post detail (slug) */}
          <Route path="/blog/:slug" element={<PostRoute />} />
          <Route path="/about" element={<AboutPage onNavigate={handleNavigate} />} />
          <Route path="/contact" element={<ContactPage onNavigate={handleNavigate} />} />
          <Route path="/search" element={<SearchResultsPage onNavigate={handleNavigate} />} />
          <Route path="/disclaimer" element={<DisclaimerPage onNavigate={handleNavigate} />} />
          <Route path="/privacy" element={<PrivacyPolicyPage onNavigate={handleNavigate} />} />
          <Route path="/terms" element={<TermsOfServicePage onNavigate={handleNavigate} />} />
          <Route path="/404" element={<NotFoundPage onNavigate={handleNavigate} />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </main>
      <Footer onNavigate={handleNavigate} />
      <ScrollToTopButton />
    </>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
// ...existing code...