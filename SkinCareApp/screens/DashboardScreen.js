import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
const DashboardScreen = () => {
  const navigation = useNavigation();
  const products = [
    {
      id: 1,
      name: 'Nykaa',
      description: 'nyx professional makeup.',
      image: 'https://i.imgur.com/STPoGi2.jpg',
      link: 'https://i.imgur.com/STPoGi2.jpg',
    },
    {
      id: 2,
      name: 'Nykaa',
      description: 'nyx professional makeup.',
      image: 'https://i.imgur.com/STPoGi2.jpg',
      link: 'https://i.imgur.com/STPoGi2.jpg',
    },
    {
      id: 3,
      name: 'Nykaa',
      description: 'nyx professional makeup.',
      image: 'https://i.imgur.com/STPoGi2.jpg',
      link: 'https://i.imgur.com/STPoGi2.jpg',
    },
    {
      id: 4,
      name: 'Nykaa',
      description: 'nyx professional makeup.',
      image: 'https://i.imgur.com/STPoGi2.jpg',
      link: 'https://i.imgur.com/STPoGi2.jpg',
    },
  ];
  const handleViewProduct = (productId) => {
    navigation.navigate('ProductDetails', { productId });
  };

  return (
    <div className="container mt-5" style={{ height: '80vh', overflow: 'auto' }}>
      <div className="row mb-4">
        <div className="col text-left">
          <p className="text-muted mb-2 h5">Hi, Yash!</p>
          <p className="text-dark mb-2 h4">Beauty starts here</p>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
          <button className="btn btn-outline-dark mb-2" onClick={() => console.log('Makeup button pressed')}>
            Makeup
          </button>
        </div>
        <div className="col">
          <button className="btn btn-outline-dark mb-2" onClick={() => console.log('Skincare button pressed')}>
            Skincare
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col text-left">
          <p className="text-dark mb-2 h4">Weekly top 4</p>
          <p className="text-muted mb-2 h5">perfect-for-you based on your goals!</p>
        </div>
      </div>
      <div className="row">
        {products.slice(0, 4).map((product) => (
          <div className="col-lg-6 col-md-6 col-sm-12" key={product.id}>
            <div className="card border-dark mb-4">
              <img
                src={product.image}
                className="card-img-top img-fluid"
                alt={product.name}
              />
              <hr className="m-0" />
              <div className="card-body">
                <p className="card-text">
                  <strong className="text-dark">{product.name}</strong>
                  <br />
                  <span className="text-muted">{product.description}</span>
                </p>
                <div className="d-flex align-items-center justify-content-between">
                <button className="btn btn-outline-dark" onClick={() => handleViewProduct(product.id)}>
                      View
                    </button>
                  <button className="btn btn-outline-danger mr-2">
                    <i className="bi bi-heart-fill"></i>
                  </button>
                  <button className="btn btn-outline-dark">
                    <i className="bi bi-three-dots"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardScreen;
