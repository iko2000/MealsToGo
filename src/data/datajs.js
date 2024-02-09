import image from "../../assets/resto1.jpg";

const restaurantsData = [
    {
      name: "Restaurant A",
      address: "123 Main St, City, Country",
      rating: 4.2,
      open: true,
      imagePath: require("../../assets/resto1.jpg"),
    },
    {
      name: "Cafe B",
      address: "456 Elm St, City, Country",
      rating: 3.8,
      open: false,
      imagePath: require("../../assets/resto2.jpg"),
    },
    {
      name: "Pizzeria C",
      address: "789 Oak St, City, Country",
      rating: 4.5,
      open: true,
      imagePath: require("../../assets/resto3.jpg"),

    },
    {
      name: "Diner D",
      address: "321 Maple St, City, Country",
      rating: 4.0,
      open: false,
      imagePath: require("../../assets/resto4.jpg"),

    }
  ];
  
  export default restaurantsData;