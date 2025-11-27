import React from 'react';

const Gallery = () => {
  const gymImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
      alt: "Modern Gym Equipment",
      size: "large"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      alt: "Personal Training",
      size: "medium"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=500&fit=crop",
      alt: "Cardio Section",
      size: "tall"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=300&h=300&fit=crop",
      alt: "Weight Training",
      size: "small"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500&h=300&fit=crop",
      alt: "Group Classes",
      size: "wide"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=400&fit=crop",
      alt: "Yoga Studio",
      size: "medium"
    }
  ];

  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', backgroundColor: 'var(--dark-black)' }}>
      <div className="container">
        <div className="text-center mb-5" style={{ marginTop: '2rem' }}>
          <h2 className="section-title">Our Gym Gallery</h2>
          <p style={{ color: 'var(--text-gray)', fontSize: '1.1rem' }}>
            Take a look at our modern facilities and equipment
          </p>
        </div>

        <div className="gallery-grid">
          {gymImages.map((image) => (
            <div key={image.id} className={`gallery-item ${image.size}`}>
              <img
                src={image.url}
                alt={image.alt}
                className="gallery-image"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="gallery-text">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;