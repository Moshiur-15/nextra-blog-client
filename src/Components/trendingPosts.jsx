import React from 'react';

const TrendingPosts = () => {
  const trendingPosts = [
    {
      title: 'The Best Practices for Web Accessibility',
      image: 'https://via.placeholder.com/400x250',
      description: 'Ensure that your websites are accessible to everyone, regardless of their abilities.',
      link: '#',
    },
    {
      title: 'What’s New in React 18: Features and Updates',
      image: 'https://via.placeholder.com/400x250',
      description: 'An overview of the exciting new features in React 18 that every developer should know about.',
      link: '#',
    },
    {
      title: 'Building Scalable Web Applications with Node.js',
      image: 'https://via.placeholder.com/400x250',
      description: 'A guide to creating scalable, high-performance web applications using Node.js.',
      link: '#',
    },
    {
      title: 'Understanding Web Performance Optimization',
      image: 'https://via.placeholder.com/400x250',
      description: 'Learn essential techniques for optimizing web performance and improving user experience.',
      link: '#',
    },
    {
      title: 'How to Implement Dark Mode in Your Website',
      image: 'https://via.placeholder.com/400x250',
      description: 'A step-by-step guide to implementing dark mode in your website using CSS and JavaScript.',
      link: '#',
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Trending Posts</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {trendingPosts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 hover:text-blue-600 transition duration-300 ease-in-out">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <a href={post.link} className="text-blue-600 hover:underline">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingPosts;
