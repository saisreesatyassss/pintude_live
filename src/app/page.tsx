 

"use client";

// import { useEffect, useState } from "react";
// import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
// import axios from "axios";
// import { motion } from "framer-motion";
// import { Card, CardContent } from "@/app/components/card";

// interface Address {
//   blockNumber: string;
//   streetName: string;
//   landmark: string;
//   city: string;
//   district: string;
//   state: string;
//   pincode: string;
// }

// interface BusinessDetails {
//   address: Address;
//   name: string;
// }

// interface ContactDetails {
//   contactName: string;
//   contactNumber: string;
//   whatsappNumber: string;
//   email: string;
// }

// interface Category {
//   description: string;
//   businessSubCategory: string;
//   businessCategory: string;
//   tags: string[];
// }

// interface Location {
//   latitude: string;
//   longitude: string;
// }

// interface BusinessLocation {
//   location: Location;
//   placeName: string;
// }

// interface Business {
//   _id: string;
//   details: BusinessDetails;
//   contactDetails: ContactDetails;
//   category: Category;
//   businessLocation: BusinessLocation;
//   formattedAddress?: string;
// }

// const mapContainerStyle = {
//   width: "100%",
//   height: "90vh",
// };

// const center = {
//   lat: 20.5937,
//   lng: 78.9629,
// };

// const LiveMap = () => {
//   const [businesses, setBusinesses] = useState<Business[]>([]);
//   const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(null);
//   const [mapRef, setMapRef] = useState<google.maps.Map | null>(null);
//   const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchBusinesses = async () => {
//       try {
//         const response = await axios.get("https://api.pintude.com/api/business/findbiz");
//         setBusinesses(response.data);
//       } catch (error) {
//         console.error("Error fetching businesses:", error);
//       }
//     };

//     fetchBusinesses();
//   }, []);

//   const customMarkerIcon: google.maps.Symbol = {
//     path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z",
//     fillColor: "#FF5A5F",
//     fillOpacity: 0.9,
//     strokeWeight: 1,
//     strokeColor: "#FFFFFF",
//     scale: 2,
//   };

//   const handleMarkerClick = async (business: Business) => {
//     try {
//       const { latitude, longitude } = business.businessLocation.location;
//       const response = await axios.get(
//         `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_GOOGLE_MAPS_API_KEY`
//       );

//       setSelectedBusiness({
//         ...business,
//         formattedAddress: response.data.results[0]?.formatted_address,
//       });

//       if (mapRef) {
//         mapRef.panTo({
//           lat: parseFloat(latitude),
//           lng: parseFloat(longitude),
//         });
//       }
//     } catch (error) {
//       console.error("Error fetching address:", error);
//       setSelectedBusiness(business);
//     }
//   };

//   const handleLoad = (map: google.maps.Map) => {
//     setMapRef(map);
//   };

//   return (
//     <div className="relative w-full h-screen bg-gradient-to-r from-blue-900 to-purple-900">
//       <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//         <h1 className="text-4xl font-bold text-white mb-4 text-center">
//           Live Business Map
//         </h1>
//         <LoadScript googleMapsApiKey="AIzaSyAuJVY2dBastphvtK3lrIfNV2SdLawvZQ8">
//           <GoogleMap
//             mapContainerStyle={mapContainerStyle}
//             center={center}
//             zoom={5}
//             onLoad={handleLoad}
//             options={{
//               styles: [
//                 {
//                   featureType: "all",
//                   elementType: "geometry",
//                   stylers: [{ color: "#242f3e" }],
//                 },
//                 {
//                   featureType: "water",
//                   elementType: "geometry",
//                   stylers: [{ color: "#17263c" }],
//                 },
//               ],
//               mapTypeControl: false,
//             }}
//           >
//             {businesses.map((business) => {
//               const { latitude, longitude } = business.businessLocation.location;
//               const position = {
//                 lat: parseFloat(latitude),
//                 lng: parseFloat(longitude),
//               };

//               return (
//                 <Marker
//                   key={business._id}
//                   position={position}
//                   icon={customMarkerIcon}
//                   onClick={() => handleMarkerClick(business)}
//                   onMouseOver={() => setHoveredMarker(business._id)}
//                   onMouseOut={() => setHoveredMarker(null)}
//                   animation={
//                     hoveredMarker === business._id ? google.maps.Animation.BOUNCE : undefined
//                   }
//                 />
//               );
//             })}

//             {selectedBusiness && (
//               <InfoWindow
//                 position={{
//                   lat: parseFloat(selectedBusiness.businessLocation.location.latitude),
//                   lng: parseFloat(selectedBusiness.businessLocation.location.longitude),
//                 }}
//                 onCloseClick={() => setSelectedBusiness(null)}
//               >
//                 <Card className="max-w-sm">
//                   <CardContent className="p-4">
//                     <h2 className="text-xl font-bold mb-2">{selectedBusiness.details.name}</h2>
//                     <p className="text-sm mb-2">{selectedBusiness.category.description}</p>
//                     <p className="text-sm mb-2">
//                       <strong>Contact:</strong> {selectedBusiness.contactDetails.contactName}
//                     </p>
//                     <p className="text-sm mb-2">
//                       <strong>Phone:</strong> {selectedBusiness.contactDetails.contactNumber}
//                     </p>
//                     {selectedBusiness.formattedAddress && (
//                       <p className="text-sm">
//                         <strong>Address:</strong> {selectedBusiness.formattedAddress}
//                       </p>
//                     )}
//                   </CardContent>
//                 </Card>
//               </InfoWindow>
//             )}
//           </GoogleMap>
//         </LoadScript>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.5 }}
//       >
//         <p className="text-white text-sm text-center">
//           Total Businesses Shown: {businesses.length}
//         </p>
//       </motion.div>
//     </div>
//   );
// };

// export default LiveMap;

import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import axios from "axios";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/app/components/card";
import Badge from "@/app/components/Badge";
import { MapPin, Phone, Mail, Tag } from "lucide-react";

interface Address {
  blockNumber: string;
  streetName: string;
  landmark: string;
  city: string;
  district: string;
  state: string;
  pincode: string;
}

interface BusinessDetails {
  address: Address;
  name: string;
}

interface ContactDetails {
  contactName: string;
  contactNumber: string;
  whatsappNumber: string;
  email: string;
}

interface Category {
  description: string;
  businessSubCategory: string;
  businessCategory: string;
  tags: string[];
}

interface Location {
  latitude: string;
  longitude: string;
}

interface BusinessLocation {
  location: Location;
  placeName: string;
}

interface Business {
  _id: string;
  details: BusinessDetails;
  contactDetails: ContactDetails;
  category: Category;
  businessLocation: BusinessLocation;
  formattedAddress?: string;
}

const mapContainerStyle = {
  width: "100%",
  height: "85vh",
  borderRadius: "1rem",
};

const center = {
  lat: 20.5937,
  lng: 78.9629,
};

const LiveMap = () => {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(null);
  const [mapRef, setMapRef] = useState<google.maps.Map | null>(null);
  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const response = await axios.get("https://api.pintude.com/api/business/findbiz");
        setBusinesses(response.data);
      } catch (error) {
        console.error("Error fetching businesses:", error);
      }
    };

    fetchBusinesses();
  }, []);

  const customMarkerIcon: google.maps.Symbol = {
    path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z",
    fillColor: "#4F46E5",
    fillOpacity: 0.9,
    strokeWeight: 1.5,
    strokeColor: "#FFFFFF",
    scale: 1.8,
  };

  const handleMarkerClick = async (business: Business) => {
    try {
      const { latitude, longitude } = business.businessLocation.location;
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_GOOGLE_MAPS_API_KEY`
      );

      setSelectedBusiness({
        ...business,
        formattedAddress: response.data.results[0]?.formatted_address,
      });

      if (mapRef) {
        mapRef.panTo({
          lat: parseFloat(latitude),
          lng: parseFloat(longitude),
        });
      }
    } catch (error) {
      console.error("Error fetching address:", error);
      setSelectedBusiness(business);
    }
  };

  const handleLoad = (map: google.maps.Map) => {
    setMapRef(map);
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <motion.div 
        // className="max-w-7xl mx-auto space-y-6"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-5xl font-bold text-white tracking-tight">
            Live Business Map
          </h1>
          <p className="text-lg text-gray-300">
            Exploring {businesses.length} businesses across India
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg p-4 rounded-2xl shadow-2xl">
          <LoadScript googleMapsApiKey="AIzaSyAuJVY2dBastphvtK3lrIfNV2SdLawvZQ8">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={5}
              onLoad={handleLoad}
              options={{
                styles: [
                  {
                    featureType: "all",
                    elementType: "geometry",
                    stylers: [{ color: "#1a1b1f" }],
                  },
                  {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [{ color: "#2d3748" }],
                  },
                  {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [{ color: "#4a5568" }],
                  },
                  {
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [{ visibility: "off" }],
                  },
                ],
                mapTypeControl: false,
                fullscreenControl: false,
                streetViewControl: false,
              }}
            >
              {businesses.map((business) => {
                const { latitude, longitude } = business.businessLocation.location;
                const position = {
                  lat: parseFloat(latitude),
                  lng: parseFloat(longitude),
                };

                return (
                  <Marker
                    key={business._id}
                    position={position}
                    icon={customMarkerIcon}
                    onClick={() => handleMarkerClick(business)}
                    onMouseOver={() => setHoveredMarker(business._id)}
                    onMouseOut={() => setHoveredMarker(null)}
                    animation={
                      hoveredMarker === business._id ? google.maps.Animation.BOUNCE : undefined
                    }
                  />
                );
              })}

              {selectedBusiness && (
                <InfoWindow
                  position={{
                    lat: parseFloat(selectedBusiness.businessLocation.location.latitude),
                    lng: parseFloat(selectedBusiness.businessLocation.location.longitude),
                  }}
                  onCloseClick={() => setSelectedBusiness(null)}
                >
                  <Card className="max-w-sm border-0 shadow-xl">
                    <CardContent className="p-6 space-y-4">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                          {selectedBusiness.details.name}
                        </h2>
                        <p className="text-gray-600">
                          {selectedBusiness.category.description}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-gray-700">
                          <MapPin className="w-4 h-4" />
                          <p className="text-sm">
                            {selectedBusiness.formattedAddress || 
                             `${selectedBusiness.details.address.streetName}, 
                              ${selectedBusiness.details.address.city}`}
                          </p>
                        </div>
                        
                        <div className="flex items-center gap-2 text-gray-700">
                          <Phone className="w-4 h-4" />
                          <p className="text-sm">
                            {selectedBusiness.contactDetails.contactNumber}
                          </p>
                        </div>

                        {selectedBusiness.contactDetails.email && (
                          <div className="flex items-center gap-2 text-gray-700">
                            <Mail className="w-4 h-4" />
                            <p className="text-sm">
                              {selectedBusiness.contactDetails.email}
                            </p>
                          </div>
                        )}
                      </div>

                      {selectedBusiness.category.tags && 
                       selectedBusiness.category.tags.length > 0 && (
                        <div className="flex items-center gap-2 flex-wrap">
                          <Tag className="w-4 h-4 text-gray-600" />
                          {selectedBusiness.category.tags.map((tag, index) => (
                            <Badge 
                              key={index}
                              variant="secondary"
                              className="bg-gray-100 text-gray-700"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </InfoWindow>
              )}
            </GoogleMap>
          </LoadScript>
        </div>
      </motion.div>
    </div>
  );
};

export default LiveMap;