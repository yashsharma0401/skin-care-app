import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import 'bootstrap/dist/css/bootstrap.min.css';
import Icon from 'react-native-vector-icons/FontAwesome';
const ProductDetailsScreen = () => {
  const route = useRoute();
  const { productId } = route.params;
  const products = [
    {
      id: 1,
      name: 'Nykaa',
      description: 'nyx professional makeup.',
      image: 'https://i.imgur.com/STPoGi2.jpg',
      link: 'https://i.imgur.com/STPoGi2.jpg',
      benefits: [
      { icon: 'umbrella', text: 'Benefit 1' },
      { icon: 'flask', text: 'Benefit 2' },
      { icon: 'sort-numeric-asc', text: 'Benefit 3' }
    ],
    },
    {
      id: 2,
      name: 'Nykaa',
      description: 'nyx professional makeup.',
      image: 'https://i.imgur.com/STPoGi2.jpg',
      link: 'https://i.imgur.com/STPoGi2.jpg',
      benefits: [
      { icon: 'umbrella', text: 'Benefit 1' },
      { icon: 'flask', text: 'Benefit 2' },
      { icon: 'sort-numeric-asc', text: 'Benefit 3' }
    ],
    },
    {
      id: 3,
      name: 'Nykaa',
      description: 'nyx professional makeup.',
      image: 'https://i.imgur.com/STPoGi2.jpg',
      link: 'https://i.imgur.com/STPoGi2.jpg',
      benefits: [{ icon: 'umbrella', text: 'Benefit 1' },
      { icon: 'flask', text: 'Benefit 2' },
      { icon: 'sort-numeric-asc', text: 'Benefit 3' }],
    },
    {
      id: 4,
      name: 'Nykaa',
      description: 'nyx professional makeup.',
      image: 'https://i.imgur.com/STPoGi2.jpg',
      link: 'https://i.imgur.com/STPoGi2.jpg',
      benefits: [{ icon: 'umbrella', text: 'Benefit 1' },
      { icon: 'flask', text: 'Benefit 2' },
      { icon: 'sort-numeric-asc', text: 'Benefit 3' }],
    },
  ];
  const product = products.find((product) => product.id === productId);

  const handleViewProduct = (productId) => {
    navigation.navigate('ProductDetails', { productId });
  };

  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
            </p>
          </div>
        </div>
      </div>

      <View style={{ marginBottom: 10, marginTop: 10 }}>
        {/* Spacing */}
      </View>

      <div className="d-flex">
        <button
          className="btn btn-outline-dark"
          onClick={() => {
            // Handle "View Brand" button click
          }}
        >
          View Brand
        </button>

        <View style={{ width: 10 }}></View>

        <button
          className="btn btn-outline-dark"
          onClick={() => {
            // Handle "Add to Cart" button click
          }}
        >
          Add to Cart
        </button>
      </div>

      <div className="card my-4" style={{ width: '50%' }}>
        <div className="card-body" style={{ padding: 16 }}>
          <h5 className="card-title">Key Benefits</h5>
          <ul style={{ listStyleType: 'none' }}>
            {product.benefits.map((benefit, index) => (
              <li key={index} style={{ marginBottom: '0.5rem', flexDirection: 'row', alignItems: 'center' }}>
                <Icon name={benefit.icon} size={24} style={{ marginRight: 12 }} />
                <Text>{benefit.text}</Text>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Expert Review</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ width: 250, marginRight: 10 }}>
            <View style={{ backgroundColor: '#ccc', height: 150 }}></View>
            <Text>Video 1</Text>
          </View>
          <View style={{ width: 250, marginRight: 10 }}>
            <View style={{ backgroundColor: '#ccc', height: 150 }}></View>
            <Text>Video 2</Text>
          </View>
          {/* Add more video cards here */}
        </ScrollView>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Rate the Product</Text>
        <View style={{ marginTop: 10 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            {[1, 2, 3, 4, 5].map((value) => (
              <TouchableOpacity
                key={value}
                onPress={() => handleRating(value)}
                style={{ marginHorizontal: 5 }}
              >
                <Text style={{ fontSize: 24, color: value <= rating ? 'gold' : 'gray' }}>★</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductDetailsScreen;